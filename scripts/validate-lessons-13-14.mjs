import { readFile } from "node:fs/promises";
import { lesson1314Cards, lesson1314Grammar, lesson1314Texts } from "../data/lesson13-14-content.js";

const lessons = [13, 14];
const expectedTitles = new Map([
  [13, "第 13 課 正體字與簡體字"],
  [14, "第 14 課 掌中戲大師李天祿的茶藝"],
]);
const expectedPatterns = new Map([
  [13, ["自……（以）後，……即成為……", "隨著", "如……一般（SV）", "被……視為……", "除此以外，尚有……"]],
  [14, ["V遍", "一旦", "……沒有……，有的只是……（而已）", "……依然……，（但）……反而……", "介於……（與）……之間"]],
]);
const expectedCounts = new Map([
  [13, { vocab: 40, proper: 13, idiom: 5 }],
  [14, { vocab: 40, proper: 8, idiom: 6 }],
]);
const expectedTerms = new Map([
  [13, {
    vocab: ["演變", "銅器", "字體", "墨", "硯", "工整", "通行", "演化", "形體", "筆畫", "書寫", "富有", "典雅", "美感", "深具", "磨滅", "經歷", "識字", "文盲", "新生代", "暢遊", "碑銘", "匾額", "題字", "古籍", "經典", "旁", "商榷", "譬如", "干擾", "樹幹", "衝動", "困惑", "推敲", "錯誤", "保留", "會意", "刪除", "輪廓", "初次"],
    proper: ["正體字", "簡體字", "殷商", "甲骨文", "金文", "大篆", "秦始皇", "小篆", "漢朝", "隸書", "楷書", "行書", "草書"],
    idiom: ["龍飛鳳舞", "行雲流水", "發人深省", "茫然不解", "貽笑大方"],
  }],
  [14, {
    vocab: ["茶藝", "結緣", "執著", "民俗", "技藝", "戲團", "贏得", "掌聲", "巡迴", "演出", "愛好", "迷戀", "高雅", "品茶", "時髦", "燙壺", "溫杯", "注水", "禮數", "尊重", "謙遜", "不鏽鋼", "水壺", "滑溜", "茶齡", "平均", "平時", "仰慕", "一同", "編寫", "齣", "木偶", "願望", "人世", "傳神", "生前", "獻身", "結合", "世人", "記憶"],
    proper: ["掌中戲", "李天祿", "亦宛然", "宜興", "鶯歌", "陸羽", "茶經", "戲夢人生"],
    idiom: ["雕樑畫棟", "入口即化", "回味無窮", "栩栩如生", "悲歡離合", "人情世事"],
  }],
]);
const expectedWorksheetTitleParts = new Map([
  [13, ["問題討論", "漢字", "中國文字的構造"]],
  [14, ["問題討論", "茶文化", "奉茶"]],
]);
const requiredCardFields = ["term", "pinyin", "meaningZh", "meaningPinyin", "meaningVi", "example", "examplePinyin", "exampleVi"];
const requiredGrammarFields = ["pattern", "patternPinyin", "explanationZh", "explanationPinyin", "explanationVi", "example", "examplePinyin", "exampleVi"];
const requiredMarkTypes = ["vocab", "grammar", "proper", "idiom"];
const recognizedCardTypes = new Set(["生詞", "詞語", "專有名詞", "成語", "俗語", "四字詞", "語法", "句型"]);
const placeholderPattern = /TODO|待校對|待補|placeholder/i;
const errors = [];
const fail = (message) => errors.push(message);
const hasText = (value) => typeof value === "string" && value.trim().length > 0;
const lessonOf = (item) => Number(item?.lesson);

for (const lesson of lessons) {
  const cards = lesson1314Cards.filter((item) => lessonOf(item) === lesson);
  const texts = lesson1314Texts.filter((item) => lessonOf(item) === lesson);
  const grammar = lesson1314Grammar.filter((item) => lessonOf(item) === lesson);
  const count = (types) => cards.filter((card) => types.includes(card.type)).length;
  const expected = expectedCounts.get(lesson);

  if (count(["生詞", "詞語"]) !== expected.vocab) fail(`第 ${lesson} 課編號生詞應為 ${expected.vocab} 張`);
  if (count(["專有名詞"]) !== expected.proper) fail(`第 ${lesson} 課專有名詞應為 ${expected.proper} 張`);
  if (count(["成語", "俗語", "四字詞"]) !== expected.idiom) fail(`第 ${lesson} 課成語／俗語／四字詞應為 ${expected.idiom} 張`);
  const actualTerms = {
    vocab: cards.filter((card) => ["生詞", "詞語"].includes(card.type)).map((card) => card.term),
    proper: cards.filter((card) => card.type === "專有名詞").map((card) => card.term),
    idiom: cards.filter((card) => ["成語", "俗語", "四字詞"].includes(card.type)).map((card) => card.term),
  };
  for (const category of ["vocab", "proper", "idiom"]) {
    if (JSON.stringify(actualTerms[category]) !== JSON.stringify(expectedTerms.get(lesson)[category])) {
      fail(`第 ${lesson} 課 ${category} 詞目或順序不符原教材：${actualTerms[category].join("、")}`);
    }
  }
  if (texts.length !== 1) fail(`第 ${lesson} 課應有 1 篇課文，實際為 ${texts.length}`);
  if (grammar.length !== 5) fail(`第 ${lesson} 課應有 5 則語法，實際為 ${grammar.length}`);

  const cardTerms = new Set(cards.map((card) => card.term));
  const grammarTargets = new Set(grammar.map((item) => item.pattern));
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

  const text = texts[0];
  const markTypes = new Set();
  if (text) {
    if (text.title !== expectedTitles.get(lesson) || !hasText(text.titlePinyin) || !hasText(text.titleVi)) {
      fail(`第 ${lesson} 課標題或三語欄位不正確`);
    }
    if (!Array.isArray(text.lines) || !text.lines.length) fail(`第 ${lesson} 課沒有課文段落`);
    for (const [index, line] of (text.lines || []).entries()) {
      for (const field of ["zh", "pinyin", "vi"]) {
        if (!hasText(line[field])) fail(`第 ${lesson} 課第 ${index + 1} 段缺少 ${field}`);
      }
      for (const mark of line.marks || []) {
        markTypes.add(mark.type);
        if (!requiredMarkTypes.includes(mark.type)) fail(`第 ${lesson} 課第 ${index + 1} 段使用未支援標記：${mark.type}`);
        if (!hasText(mark.term) || !line.zh.includes(mark.term)) fail(`第 ${lesson} 課第 ${index + 1} 段標記不在課文內：${mark.term || "(空白)"}`);
        const target = mark.target || mark.term;
        if (mark.type === "grammar") {
          if (!grammarTargets.has(target)) fail(`第 ${lesson} 課標記找不到語法：${target}`);
        } else if (!cardTerms.has(target)) {
          fail(`第 ${lesson} 課標記找不到完整詞卡：${target}`);
        }
      }
    }
    for (const type of requiredMarkTypes) {
      if (!markTypes.has(type)) fail(`第 ${lesson} 課課文缺少 ${type} 標記`);
    }
    const worksheetSections = (text.extras || []).filter((section) => section.type === "worksheet");
    const titleParts = expectedWorksheetTitleParts.get(lesson);
    if (worksheetSections.length !== titleParts.length || !titleParts.every((part, index) => worksheetSections[index]?.title?.includes(part))) {
      fail(`第 ${lesson} 課三個課後區塊的標題或順序不符原教材`);
    }
    for (const section of worksheetSections) {
      if (!Array.isArray(section.items) || !section.items.length) fail(`第 ${lesson} 課「${section.title}」沒有題目`);
      for (const [index, item] of (section.items || []).entries()) {
        for (const field of ["prompt", "answer", "pinyin", "vi"]) {
          if (!hasText(item[field])) fail(`第 ${lesson} 課「${section.title}」第 ${index + 1} 題缺少 ${field}`);
        }
      }
    }
    if (placeholderPattern.test(JSON.stringify(text))) fail(`第 ${lesson} 課課文含預留文字`);
  }

  const actualPatterns = grammar.map((item) => item.pattern);
  if (JSON.stringify(actualPatterns) !== JSON.stringify(expectedPatterns.get(lesson))) {
    fail(`第 ${lesson} 課語法順序或文字不符原教材：${actualPatterns.join("｜")}`);
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
      if (!hasText(practice.prompt) || !hasText(practice.answer)) fail(`第 ${lesson} 課語法 ${item.pattern} 第 ${index + 1} 題不完整`);
      if (!Array.isArray(practice.requiredTerms) || !practice.requiredTerms.length) {
        fail(`第 ${lesson} 課語法 ${item.pattern} 第 ${index + 1} 題沒有 requiredTerms`);
      } else if (!practice.requiredTerms.every((term) => practice.answer.includes(term))) {
        fail(`第 ${lesson} 課語法 ${item.pattern} 第 ${index + 1} 題答案缺少 requiredTerms`);
      }
    }
    if (placeholderPattern.test(JSON.stringify(item))) fail(`第 ${lesson} 課語法 ${item.pattern} 含預留文字`);
  }

  console.log(`第 ${lesson} 課：${cards.length} 張詞卡、${text?.lines?.length || 0} 段課文、${grammar.length} 則語法、${text?.extras?.length || 0} 個課後區塊`);
}

for (const [name, items] of [["詞卡", lesson1314Cards], ["課文", lesson1314Texts], ["語法", lesson1314Grammar]]) {
  if (items.some((item) => !lessons.includes(lessonOf(item)))) fail(`${name} 含第 13、14 課以外的資料`);
}

const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
const migrationStart = appSource.indexOf("if (state.contentVersion !== CONTENT_VERSION");
const migrationEnd = appSource.indexOf("let cards =", migrationStart);
const migrationSource = appSource.slice(migrationStart, migrationEnd);
const learnedFilter = migrationSource.match(/filter\(\(cardId\) => !\/([^/]+)\/\.test\(cardId\)\)/);
if (migrationStart < 0 || migrationEnd < 0 || !learnedFilter) {
  fail("找不到第 13、14 課學習進度遷移規則");
} else {
  const replacedLessonPattern = new RegExp(learnedFilter[1]);
  const migratedIds = ["3:舊詞", "4:舊詞", "5:舊詞", "12:舊詞", "13:舊詞", "14:舊詞"].filter((cardId) => !replacedLessonPattern.test(cardId));
  if (JSON.stringify(migratedIds) !== JSON.stringify(["3:舊詞", "4:舊詞", "5:舊詞", "12:舊詞"])) {
    fail("內容升級未保留第 1–12 課學習進度，或未清除第 13、14 課舊骨架進度");
  }
}

const serviceWorkerSource = await readFile(new URL("../sw.js", import.meta.url), "utf8");
for (const asset of ["lesson13-14-content.js", "lesson13-content.js", "lesson14-content.js"]) {
  if (!serviceWorkerSource.includes(asset)) fail(`Service Worker 離線清單缺少 ${asset}`);
}

if (errors.length) {
  console.error(`\n驗證失敗（${errors.length} 項）：`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("\n第 13、14 課資料合約驗證通過。");
