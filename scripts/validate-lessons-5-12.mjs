import { readFile } from "node:fs/promises";
import { lesson512Cards, lesson512Grammar, lesson512Texts } from "../data/lesson5-12-content.js";

const lessons = [5, 6, 7, 8, 9, 10, 11, 12];
const requiredCardFields = [
  "term",
  "pinyin",
  "meaningZh",
  "meaningPinyin",
  "meaningVi",
  "example",
  "examplePinyin",
  "exampleVi",
];
const requiredGrammarFields = [
  "pattern",
  "patternPinyin",
  "explanationZh",
  "explanationPinyin",
  "explanationVi",
  "example",
  "examplePinyin",
  "exampleVi",
];
const requiredMarkTypes = ["vocab", "grammar", "proper", "idiom"];
const recognizedCardTypes = new Set(["生詞", "詞語", "專有名詞", "成語", "俗語", "四字詞", "語法", "句型"]);
const placeholderPattern = /TODO|待校對|待補|placeholder/i;
const expectedPatterns = new Map([
  [5, ["無不……", "V入", "……以……（來）……", "經過一番……，終於……", "使"]],
  [6, ["在……之餘，……", "藉此", "是否", "在……的前提下，……", "……不只……，……更……"]],
  [7, ["……，說是……；……說是……真的……嗎？", "把……掛在嘴上", "……既……，也……，更……", "……，豈不是……（嗎）？", "只要……，就……／只有……，才……"]],
  [8, ["……由……所組成", "則", "（不）等於", "儘管……，仍然……", "這樣／如此一來"]],
  [9, ["……因（為）……（而）變得 SV／（而）變成 N", "……到……（的）地步", "怎不令……SV？", "如何", "……也好，……也好，……都……"]],
  [10, ["……反映出……", "以……而言／來說，……", "……固然……，但是……", "為了……著想", "俗話說得好，……"]],
  [11, ["即", "不僅……，更 SV 的是……", "為了因應……", "V／SV 於", "首先……。其次……"]],
  [12, ["除了……（之外），最 SV／VP 的……是……", "有助於……／有利於……", "並不只是……，……也……", "以……為……", "……也不例外"]],
]);

const errors = [];
const fail = (message) => errors.push(message);
const hasText = (value) => typeof value === "string" && value.trim().length > 0;
const lessonOf = (item) => Number(item?.lesson);

for (const lesson of lessons) {
  const cards = lesson512Cards.filter((item) => lessonOf(item) === lesson);
  const texts = lesson512Texts.filter((item) => lessonOf(item) === lesson);
  const grammar = lesson512Grammar.filter((item) => lessonOf(item) === lesson);

  if (!cards.length) fail(`第 ${lesson} 課沒有詞卡`);
  if (texts.length !== 1) fail(`第 ${lesson} 課應有 1 篇課文，實際為 ${texts.length}`);
  if (grammar.length !== 5) fail(`第 ${lesson} 課應有 5 則語法，實際為 ${grammar.length}`);

  const cardTerms = new Set(cards.map((card) => card.term));
  const cardIds = new Set();
  for (const card of cards) {
    if (!hasText(card.id) || cardIds.has(card.id)) fail(`第 ${lesson} 課詞卡 id 缺漏或重複：${card.id || "(空白)"}`);
    cardIds.add(card.id);
    for (const field of requiredCardFields) {
      if (!hasText(card[field])) fail(`第 ${lesson} 課詞卡 ${card.id || card.term} 缺少 ${field}`);
    }
    if (!recognizedCardTypes.has(card.type)) fail(`第 ${lesson} 課詞卡 ${card.id || card.term} 使用未支援的分類：${card.type}`);
    if (placeholderPattern.test(JSON.stringify(card))) fail(`第 ${lesson} 課詞卡 ${card.id || card.term} 含預留文字`);
  }

  const markTypes = new Set();
  for (const text of texts) {
    if (!hasText(text.title) || !hasText(text.titlePinyin) || !hasText(text.titleVi)) {
      fail(`第 ${lesson} 課標題三語欄位不完整`);
    }
    if (!Array.isArray(text.lines) || !text.lines.length) fail(`第 ${lesson} 課沒有課文段落`);
    for (const [index, line] of (text.lines || []).entries()) {
      for (const field of ["zh", "pinyin", "vi"]) {
        if (!hasText(line[field])) fail(`第 ${lesson} 課第 ${index + 1} 段缺少 ${field}`);
      }
      for (const mark of line.marks || []) {
        markTypes.add(mark.type);
        if (!requiredMarkTypes.includes(mark.type)) {
          fail(`第 ${lesson} 課課文第 ${index + 1} 段使用未支援的標記類型：${mark.type}`);
        }
        if (!hasText(mark.term) || !line.zh.includes(mark.term)) {
          fail(`第 ${lesson} 課第 ${index + 1} 段標記不在課文內：${mark.term || "(空白)"}`);
        }
        if (!cardTerms.has(mark.target || mark.term)) {
          fail(`第 ${lesson} 課標記找不到完整詞卡：${mark.target || mark.term}`);
        }
      }
    }
    const worksheetSections = (text.extras || []).filter((section) => section.type === "worksheet");
    if (!worksheetSections.length) fail(`第 ${lesson} 課沒有課後討論、課室活動或閱讀練習`);
    for (const section of worksheetSections) {
      if (!hasText(section.title) || !Array.isArray(section.items) || !section.items.length) {
        fail(`第 ${lesson} 課有空白練習區塊`);
      }
      for (const [index, item] of (section.items || []).entries()) {
        for (const field of ["prompt", "answer", "pinyin", "vi"]) {
          if (!hasText(item[field])) fail(`第 ${lesson} 課「${section.title}」第 ${index + 1} 題缺少 ${field}`);
        }
      }
    }
    if (placeholderPattern.test(JSON.stringify(text))) fail(`第 ${lesson} 課課文含預留文字`);
  }
  for (const type of requiredMarkTypes) {
    if (!markTypes.has(type)) fail(`第 ${lesson} 課課文缺少 ${type} 標記`);
  }

  const actualPatterns = grammar.map((item) => item.pattern);
  if (JSON.stringify(actualPatterns) !== JSON.stringify(expectedPatterns.get(lesson))) {
    fail(`第 ${lesson} 課語法順序或文字與課程表不一致：${actualPatterns.join("｜")}`);
  }
  const grammarIds = new Set();
  for (const item of grammar) {
    if (!hasText(item.id) || grammarIds.has(item.id)) fail(`第 ${lesson} 課語法 id 缺漏或重複：${item.id || "(空白)"}`);
    grammarIds.add(item.id);
    for (const field of requiredGrammarFields) {
      if (!hasText(item[field])) fail(`第 ${lesson} 課語法 ${item.id || item.pattern} 缺少 ${field}`);
    }
    if (!Array.isArray(item.practice) || !item.practice.length) fail(`第 ${lesson} 課語法 ${item.pattern} 沒有練習`);
    for (const [index, practice] of (item.practice || []).entries()) {
      if (!hasText(practice.prompt) || !hasText(practice.answer)) {
        fail(`第 ${lesson} 課語法 ${item.pattern} 第 ${index + 1} 題不完整`);
      }
      if (!Array.isArray(practice.requiredTerms) || !practice.requiredTerms.length) {
        fail(`第 ${lesson} 課語法 ${item.pattern} 第 ${index + 1} 題沒有 requiredTerms`);
      } else if (!practice.requiredTerms.every((term) => practice.answer.includes(term))) {
        fail(`第 ${lesson} 課語法 ${item.pattern} 第 ${index + 1} 題答案缺少 requiredTerms`);
      }
    }
    if (placeholderPattern.test(JSON.stringify(item))) fail(`第 ${lesson} 課語法 ${item.pattern} 含預留文字`);
  }

  const sentenceCards = cards.filter((card) => !["成語", "俗語", "四字詞"].includes(card.type)).slice(0, 3);
  for (const [index, card] of sentenceCards.entries()) {
    const grammarItem = grammar[index % grammar.length];
    const grammarPractice = grammarItem?.practice?.[index % grammarItem.practice.length];
    const generatedReference = `${card.example} ${grammarPractice?.answer || ""}`;
    const requiredTerms = [card.term, ...(grammarPractice?.requiredTerms || [])];
    if (!requiredTerms.every((term) => generatedReference.includes(term))) {
      fail(`第 ${lesson} 課造句第 ${index + 1} 題的參考答案缺少指定生詞或語法關鍵詞`);
    }
  }

  console.log(`第 ${lesson} 課：${cards.length} 張詞卡、${texts[0]?.lines?.length || 0} 段課文、${grammar.length} 則語法`);
}

for (const [name, items] of [["詞卡", lesson512Cards], ["課文", lesson512Texts], ["語法", lesson512Grammar]]) {
  const unexpected = items.filter((item) => !lessons.includes(lessonOf(item)));
  if (unexpected.length) fail(`${name} 含第 5–12 課以外的資料`);
}

const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
const migrationStart = appSource.indexOf("if (state.contentVersion !== CONTENT_VERSION");
const migrationEnd = appSource.indexOf("let cards =", migrationStart);
const migrationSource = appSource.slice(migrationStart, migrationEnd);
const learnedFilter = migrationSource.match(/filter\(\(cardId\) => !\/([^/]+)\/\.test\(cardId\)\)/);

if (migrationStart < 0 || migrationEnd < 0 || !learnedFilter) {
  fail("找不到第 5–12 課學習進度遷移規則");
} else {
  const replacedLessonPattern = new RegExp(learnedFilter[1]);
  const migratedIds = ["3:舊詞", "4:舊詞", "5:舊詞", "12:舊詞"].filter(
    (cardId) => !replacedLessonPattern.test(cardId),
  );
  if (JSON.stringify(migratedIds) !== JSON.stringify(["3:舊詞", "4:舊詞"])) {
    fail("內容升級未正確保留第 3、4 課學習進度，或未清除第 5–12 課舊進度");
  }
}

if (errors.length) {
  console.error(`\n驗證失敗（${errors.length} 項）：`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("\n第 5–12 課資料合約驗證通過。");
