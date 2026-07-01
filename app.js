import { lesson1Cards } from "./data/lesson1-cards.js";
import { lesson1Grammar, lesson1Texts } from "./data/lesson1-content.js";
import { lesson2Cards, lesson2Grammar, lesson2Texts } from "./data/lesson2-content.js";

const STORAGE_KEY = "pavc5-vietnamese-mobile-app";
const CONTENT_VERSION = "lesson2-card-nav-handwriting-20260701";
const SPEECH_ELLIPSIS_PAUSE_MS = 5;
const SPEECH_ELLIPSIS_PATTERN = /[.\uFF0E\u00B7\u2027\u2026\u22EF]+/g;
const SPEECH_MAX_UNIT_CHARS = 8;
const SPEECH_ESTIMATED_CHARS_PER_SECOND = 4.5;
const SPEECH_SYMBOL_PATTERN = /[\s\uFF0C,\u3002\uFF1B;\uFF1A:\u3001\uFF01!\uFF1F?\u300C\u300D\u300E\u300F\uFF08\uFF09()\u3010\u3011\uFF3B\uFF3D\u300A\u300B\u3008\u3009\u2014\u2013\-\u2026\u22EF\uFF0E.\u00B7\u2027/\\|]/;
const IDIOM_TYPES = new Set(["成語", "俗語", "四字詞"]);
const PROPER_TYPES = new Set(["專有名詞"]);
const adminMode = new URLSearchParams(window.location.search).get("admin") === "1";

const thirdEditionLessons = [
  ["第 1 課", "第三版第五冊內容整理區"],
  ["第 2 課", "第三版第五冊內容整理區"],
  ["第 3 課", "第三版第五冊內容整理區"],
  ["第 4 課", "第三版第五冊內容整理區"],
  ["第 5 課", "第三版第五冊內容整理區"],
  ["第 6 課", "第三版第五冊內容整理區"],
  ["第 7 課", "第三版第五冊內容整理區"],
  ["第 8 課", "第三版第五冊內容整理區"],
  ["第 9 課", "第三版第五冊內容整理區"],
  ["第 10 課", "第三版第五冊內容整理區"],
  ["第 11 課", "第三版第五冊內容整理區"],
  ["第 12 課", "第三版第五冊內容整理區"],
  ["第 13 課", "第三版第五冊內容整理區"],
  ["第 14 課", "第三版第五冊內容整理區"],
];

const legacyDemoCards = [
  {
    id: "demo-idiom-001",
    lesson: 1,
    type: "成語",
    term: "因小失大",
    pinyin: "yin1 xiao3 shi1 da4",
    meaningZh: "為了小利益或小事情，反而失去更重要的東西。",
    meaningPinyin: "wei4 le xiao3 li4 yi4 huo4 xiao3 shi4 qing2, fan3 er2 shi1 qu4 geng4 zhong4 yao4 de dong1 xi.",
    meaningVi: "Vì chuyện nhỏ hoặc lợi ích nhỏ mà đánh mất điều quan trọng hơn.",
    example: "學語言不要因小失大，只背單字卻不練表達。",
    examplePinyin: "xue2 yu3 yan2 bu2 yao4 yin1 xiao3 shi1 da4, zhi3 bei4 dan1 zi4 que4 bu2 lian4 biao3 da2.",
    exampleVi: "Học ngôn ngữ đừng vì chuyện nhỏ mà mất điều lớn: chỉ học từ vựng mà không luyện diễn đạt.",
  },
  {
    id: "demo-idiom-002",
    lesson: 3,
    type: "俗語",
    term: "活到老，學到老",
    pinyin: "huo2 dao4 lao3, xue2 dao4 lao3",
    meaningZh: "人一輩子都應該不斷學習。",
    meaningPinyin: "ren2 yi2 bei4 zi dou1 ying1 gai1 bu2 duan4 xue2 xi2.",
    meaningVi: "Con người nên học tập không ngừng suốt đời.",
    example: "老師常說，活到老，學到老是一種態度。",
    examplePinyin: "lao3 shi1 chang2 shuo1, huo2 dao4 lao3, xue2 dao4 lao3 shi4 yi4 zhong3 tai4 du4.",
    exampleVi: "Thầy cô thường nói học suốt đời là một thái độ sống.",
  },
  {
    id: "demo-word-001",
    lesson: 5,
    type: "詞語",
    term: "世界運動會",
    pinyin: "shi4 jie4 yun4 dong4 hui4",
    meaningZh: "由不同國家或地區參與的大型運動賽事。",
    meaningPinyin: "you2 bu4 tong2 guo2 jia1 huo4 di4 qu1 can1 yu4 de da4 xing2 yun4 dong4 sai4 shi4.",
    meaningVi: "Sự kiện thể thao lớn có nhiều quốc gia hoặc khu vực tham gia.",
    example: "世界運動會能讓不同國家的選手互相交流。",
    examplePinyin: "shi4 jie4 yun4 dong4 hui4 neng2 rang4 bu4 tong2 guo2 jia1 de xuan3 shou3 hu4 xiang1 jiao1 liu2.",
    exampleVi: "Đại hội thể thao thế giới giúp vận động viên từ nhiều nước giao lưu với nhau.",
  },
  {
    id: "demo-four-001",
    lesson: 13,
    type: "四字詞",
    term: "組段成篇",
    pinyin: "zu3 duan4 cheng2 pian1",
    meaningZh: "把句子組織成段落，再形成完整文章。",
    meaningPinyin: "ba3 ju4 zi zu3 zhi1 cheng2 duan4 luo4, zai4 xing2 cheng2 wan2 zheng3 wen2 zhang1.",
    meaningVi: "Sắp xếp câu thành đoạn rồi phát triển thành bài văn hoàn chỉnh.",
    example: "第五冊的學習目標之一，是能把句子組段成篇。",
    examplePinyin: "di4 wu3 ce4 de xue2 xi2 mu4 biao1 zhi1 yi1, shi4 neng2 ba3 ju4 zi zu3 duan4 cheng2 pian1.",
    exampleVi: "Một mục tiêu của quyển 5 là có thể sắp xếp câu thành đoạn và bài hoàn chỉnh.",
  },
  {
    id: "demo-word-002",
    lesson: 14,
    type: "詞語",
    term: "論點",
    pinyin: "lun4 dian3",
    meaningZh: "說話或寫作時提出的主要看法。",
    meaningPinyin: "shuo1 hua4 huo4 xie3 zuo4 shi2 ti2 chu1 de zhu3 yao4 kan4 fa3.",
    meaningVi: "Luận điểm hoặc ý kiến chính được nêu ra khi nói hay viết.",
    example: "發表意見時，要先說明自己的論點。",
    examplePinyin: "fa1 biao3 yi4 jian4 shi2, yao4 xian1 shuo1 ming2 zi4 ji3 de lun4 dian3.",
    exampleVi: "Khi phát biểu ý kiến, trước hết cần nói rõ luận điểm của mình.",
  },
];

const defaultCards = [...lesson1Cards, ...lesson2Cards];
const defaultTexts = [...lesson1Texts, ...lesson2Texts];

const fallbackGrammar = [
  {
    id: "demo-grammar-001",
    lesson: 1,
    pattern: "不但...而且...",
    patternPinyin: "bu2 dan4... er2 qie3...",
    explanationZh: "用來連接兩個情況，後面的情況通常更進一步或更重要。",
    explanationPinyin: "yong4 lai2 lian2 jie1 liang3 ge qing2 kuang4, hou4 mian4 de qing2 kuang4 tong1 chang2 geng4 jin4 yi2 bu4 huo4 geng4 zhong4 yao4.",
    explanationVi: "Dùng để nối hai tình huống; vế sau thường tiến thêm một bước hoặc quan trọng hơn.",
    example: "他不但會說中文，而且會用中文寫報告。",
    examplePinyin: "ta1 bu2 dan4 hui4 shuo1 zhong1 wen2, er2 qie3 hui4 yong4 zhong1 wen2 xie3 bao4 gao4.",
    exampleVi: "Anh ấy không những biết nói tiếng Trung mà còn biết viết báo cáo bằng tiếng Trung.",
  },
  {
    id: "demo-grammar-001b",
    lesson: 1,
    pattern: "為了...而...",
    patternPinyin: "wei4 le... er2...",
    explanationZh: "用來說明做某件事的目的，以及因此採取的行動或造成的結果。",
    explanationPinyin: "yong4 lai2 shuo1 ming2 zuo4 mou3 jian4 shi4 de mu4 di4, yi3 ji2 yin1 ci3 cai3 qu3 de xing2 dong4 huo4 zao4 cheng2 de jie2 guo3.",
    explanationVi: "Dùng để nói mục đích của một việc và hành động hoặc kết quả phát sinh từ mục đích đó.",
    example: "他為了省錢而買了便宜的仿冒品。",
    examplePinyin: "ta1 wei4 le sheng3 qian2 er2 mai3 le pian2 yi2 de fang3 mao4 pin3.",
    exampleVi: "Anh ấy vì tiết kiệm tiền mà mua hàng nhái rẻ tiền.",
  },
  {
    id: "demo-grammar-001c",
    lesson: 1,
    pattern: "如果...就...",
    patternPinyin: "ru2 guo3... jiu4...",
    explanationZh: "提出一個條件，再說明在這個條件下會發生的結果。",
    explanationPinyin: "ti2 chu1 yi2 ge4 tiao2 jian4, zai4 shuo1 ming2 zai4 zhe4 ge4 tiao2 jian4 xia4 hui4 fa1 sheng1 de jie2 guo3.",
    explanationVi: "Nêu một điều kiện, sau đó nói kết quả xảy ra trong điều kiện đó.",
    example: "如果商品有瑕疵，就可以拿保證書去退換。",
    examplePinyin: "ru2 guo3 shang1 pin3 you3 xia2 ci1, jiu4 ke3 yi3 na2 bao3 zheng4 shu1 qu4 tui4 huan4.",
    exampleVi: "Nếu sản phẩm có lỗi, có thể mang giấy bảo hành đi đổi trả.",
  },
  {
    id: "demo-grammar-001d",
    lesson: 1,
    pattern: "即使...也...",
    patternPinyin: "ji2 shi3... ye3...",
    explanationZh: "表示讓步；前面的情況成立，後面的結果仍然不改變。",
    explanationPinyin: "biao3 shi4 rang4 bu4; qian2 mian4 de qing2 kuang4 cheng2 li4, hou4 mian4 de jie2 guo3 reng2 ran2 bu4 gai3 bian4.",
    explanationVi: "Biểu thị nhượng bộ; dù tình huống phía trước xảy ra, kết quả phía sau vẫn không thay đổi.",
    example: "即使快遞比較貴，我也希望文件能準時送到。",
    examplePinyin: "ji2 shi3 kuai4 di4 bi3 jiao4 gui4, wo3 ye3 xi1 wang4 wen2 jian4 neng2 zhun3 shi2 song4 dao4.",
    exampleVi: "Dù chuyển phát nhanh đắt hơn, tôi vẫn mong tài liệu được giao đúng giờ.",
  },
  {
    id: "demo-grammar-001e",
    lesson: 1,
    pattern: "因為...所以...",
    patternPinyin: "yin1 wei4... suo3 yi3...",
    explanationZh: "說明原因和結果，是最常用的因果句型之一。",
    explanationPinyin: "shuo1 ming2 yuan2 yin1 he2 jie2 guo3, shi4 zui4 chang2 yong4 de yin1 guo3 ju4 xing2 zhi1 yi1.",
    explanationVi: "Dùng để nói nguyên nhân và kết quả, là một trong những mẫu câu nhân quả thường dùng nhất.",
    example: "因為這條巷子太窄，所以卡車開不進來。",
    examplePinyin: "yin1 wei4 zhe4 tiao2 xiang4 zi5 tai4 zhai3, suo3 yi3 ka3 che1 kai1 bu4 jin4 lai2.",
    exampleVi: "Vì con hẻm này quá hẹp nên xe tải không vào được.",
  },
  {
    id: "demo-grammar-002",
    lesson: 2,
    pattern: "既然...就...",
    patternPinyin: "ji4 ran2... jiu4...",
    explanationZh: "先提出已經成立的事實，再說出自然的結果、決定或建議。",
    explanationPinyin: "xian1 ti2 chu1 yi3 jing1 cheng2 li4 de shi4 shi2, zai4 shuo1 chu1 zi4 ran2 de jie2 guo3, jue2 ding4 huo4 jian4 yi4.",
    explanationVi: "Nêu một sự thật đã có trước, rồi đưa ra kết quả, quyết định hoặc đề nghị hợp lý.",
    example: "既然你已經準備好了，就上台報告吧。",
    examplePinyin: "ji4 ran2 ni3 yi3 jing1 zhun3 bei4 hao3 le, jiu4 shang4 tai2 bao4 gao4 ba.",
    exampleVi: "Vì bạn đã chuẩn bị xong rồi, vậy hãy lên trình bày đi.",
  },
];

const defaultGrammar = [
  ...lesson1Grammar,
  ...lesson2Grammar,
  ...fallbackGrammar.filter((item) => ![1, 2].includes(Number(item.lesson))),
];

const defaultExercises = Array.from({ length: 14 }, (_, index) => {
  const lesson = index + 1;
  return [
    {
      id: `demo-${lesson}-choice-1`,
      lesson,
      type: "choice",
      prompt: `第 ${lesson} 課：哪一個句子最適合正式報告的語氣？`,
      options: [
        "我想先說明本文的主要論點。",
        "這個東西真的超好玩。",
        "你們應該都知道吧。",
        "反正大概就是這樣。",
      ],
      answer: "我想先說明本文的主要論點。",
      explanation: "正式報告通常要清楚、客觀，避免太口語或太隨便的說法。",
    },
    {
      id: `demo-${lesson}-text-1`,
      lesson,
      type: "text",
      prompt: `第 ${lesson} 課：請填入最合適的詞語：寫作時，要先提出清楚的____，再舉例說明。`,
      answer: "論點",
      acceptedAnswers: ["論點"],
      explanation: "這題練習篇章表達常用詞。學生輸入答案後，系統才會顯示正解。",
    },
    {
      id: `demo-${lesson}-sentence-1`,
      lesson,
      type: "sentence",
      prompt: `第 ${lesson} 課：請用「論點」和「不但...而且...」造一個完整句子。`,
      requiredTerms: ["論點", "不但", "而且"],
      answer: "這篇文章的論點不但清楚，而且很有說服力。",
      explanation: "造句題會檢查是否使用指定生詞與語法關鍵詞；作答前不顯示參考答案。",
    },
  ];
}).flat();

let state = loadState();
if (state.contentVersion !== CONTENT_VERSION && !state.customContent) {
  state.cards = [];
  state.grammar = [];
  state.texts = [];
  state.learnedCards = [];
  state.contentVersion = CONTENT_VERSION;
  saveState();
}
let cards = state.cards?.length ? state.cards : defaultCards;
let grammar = state.grammar?.length ? state.grammar : defaultGrammar;
let texts = state.texts?.length ? state.texts : defaultTexts;
let exercises = state.exercises?.length ? state.exercises : defaultExercises;
let currentCardIndex = 0;
let currentCardLesson = Number(state.currentCardLesson || 1);
let currentCardCategory = state.currentCardCategory || "vocab";
let currentCardSearch = state.currentCardSearch || "";
let currentTextLesson = Number(state.currentTextLesson || 1);
let currentGrammarLesson = Number(state.currentGrammarLesson || 1);
let currentPracticeLesson = Number(state.currentPracticeLesson || 1);
let currentPracticeMode = state.currentPracticeMode || "sentenceQuiz";
let currentPracticeIndex = Number(state.currentPracticeIndex || 0);
let currentQuizLesson = Number(state.currentQuizLesson || 1);
let deferredInstallPrompt = null;
let activeSpeech = null;
let activeTextPlayback = null;
let quiz = {
  total: 0,
  correct: 0,
};

const views = {
  lessons: document.querySelector("#lessonsView"),
  text: document.querySelector("#textView"),
  cards: document.querySelector("#cardsView"),
  grammar: document.querySelector("#grammarView"),
  practice: document.querySelector("#practiceView"),
  quiz: document.querySelector("#quizView"),
  import: document.querySelector("#importView"),
};

const lessonList = document.querySelector("#lessonList");
const progressPercent = document.querySelector("#progressPercent");
const installButton = document.querySelector("#installButton");
const importNotice = document.querySelector("#importNotice");
const grammarList = document.querySelector("#grammarList");
const grammarCount = document.querySelector("#grammarCount");
const textLessonSelect = document.querySelector("#textLessonSelect");
const textList = document.querySelector("#textList");
const cardLessonSelect = document.querySelector("#cardLessonSelect");
const cardCategorySelect = document.querySelector("#cardCategorySelect");
const cardSearchInput = document.querySelector("#cardSearchInput");
const grammarLessonSelect = document.querySelector("#grammarLessonSelect");
const practiceList = document.querySelector("#practiceList");
const practiceLessonSelect = document.querySelector("#practiceLessonSelect");
const practiceModeSelect = document.querySelector("#practiceModeSelect");
const practicePrev = document.querySelector("#practicePrev");
const practiceNext = document.querySelector("#practiceNext");
const quizLessonSelect = document.querySelector("#quizLessonSelect");
const speakCardButton = document.querySelector("#speakCard");

document.querySelectorAll(".admin-only").forEach((element) => {
  element.hidden = !adminMode;
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

document.querySelector("#knowCard").addEventListener("click", () => gradeCard(true));
document.querySelector("#prevCard").addEventListener("click", () => moveCard(-1));
document.querySelector("#nextCard").addEventListener("click", () => moveCard(1));
speakCardButton.addEventListener("click", () => speakCurrentCard(speakCardButton));
document.querySelector("#resetProgress").addEventListener("click", resetProgress);
document.querySelector("#loadJson").addEventListener("click", importFromTextarea);
document.querySelector("#contentFile").addEventListener("change", importFromFile);
document.querySelector("#flashcard").addEventListener("click", () => speakCurrentCard(speakCardButton));
cardLessonSelect.addEventListener("change", () => {
  currentCardLesson = Number(cardLessonSelect.value);
  currentCardIndex = 0;
  currentCardSearch = "";
  cardSearchInput.value = "";
  state.currentCardLesson = currentCardLesson;
  state.currentCardSearch = currentCardSearch;
  saveState();
  renderCard();
});
cardCategorySelect.addEventListener("change", () => {
  currentCardCategory = cardCategorySelect.value;
  currentCardIndex = 0;
  state.currentCardCategory = currentCardCategory;
  saveState();
  renderCard();
});
cardSearchInput.addEventListener("input", () => {
  currentCardSearch = cardSearchInput.value.trim();
  currentCardIndex = 0;
  state.currentCardSearch = currentCardSearch;
  saveState();
  renderCard();
});
textLessonSelect.addEventListener("change", () => {
  currentTextLesson = Number(textLessonSelect.value);
  state.currentTextLesson = currentTextLesson;
  saveState();
  renderText();
});
grammarLessonSelect.addEventListener("change", () => {
  currentGrammarLesson = Number(grammarLessonSelect.value);
  state.currentGrammarLesson = currentGrammarLesson;
  saveState();
  renderGrammar();
});
practiceLessonSelect.addEventListener("change", () => {
  currentPracticeLesson = Number(practiceLessonSelect.value);
  currentPracticeIndex = 0;
  state.currentPracticeLesson = currentPracticeLesson;
  state.currentPracticeIndex = currentPracticeIndex;
  saveState();
  renderPractice();
});
practiceModeSelect.addEventListener("change", () => {
  currentPracticeMode = practiceModeSelect.value;
  currentPracticeIndex = 0;
  state.currentPracticeMode = currentPracticeMode;
  state.currentPracticeIndex = currentPracticeIndex;
  saveState();
  renderPractice();
});
practicePrev.addEventListener("click", () => movePractice(-1));
practiceNext.addEventListener("click", () => movePractice(1));
quizLessonSelect.addEventListener("change", () => {
  currentQuizLesson = Number(quizLessonSelect.value);
  state.currentQuizLesson = currentQuizLesson;
  quiz = { total: 0, correct: 0 };
  document.querySelector("#quizScore").textContent = "0/0";
  saveState();
  renderQuiz();
});
installButton.addEventListener("click", installApp);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js?v=20260701-card-nav-handwriting").then((registration) => {
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdateNotice();
      });
    });
  }).catch(() => {});

  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data?.type === "CACHE_UPDATED") showUpdateNotice();
  });
}

renderLessons();
renderLessonSelectOptions();
renderText();
renderCard();
renderGrammar();
renderPractice();
renderQuiz();
setupHandwritingPanels(document);
updateProgress();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setView(viewName) {
  if (viewName === "import" && !adminMode) viewName = "lessons";

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  Object.entries(views).forEach(([name, view]) => {
    view.classList.toggle("active", name === viewName);
  });

  if (viewName === "text") renderText();
  if (viewName === "quiz") renderQuiz();
}

function renderLessons() {
  lessonList.innerHTML = "";
  thirdEditionLessons.forEach(([title, description], index) => {
    const number = index + 1;
    const learned = state.learnedCards?.filter((cardId) => cardId.startsWith(`${number}:`)).length || 0;
    const vocabCount = cards.filter((item) => Number(item.lesson) === number && !isIdiomCard(item) && !isProperCard(item)).length;
    const properCount = cards.filter((item) => Number(item.lesson) === number && isProperCard(item)).length;
    const idiomCount = cards.filter((item) => Number(item.lesson) === number && isIdiomCard(item)).length;
    const textItems = texts.filter((item) => Number(item.lesson) === number).length;
    const grammarItems = grammar.filter((item) => Number(item.lesson) === number).length;
    const exerciseItems = getPracticeItemsForLesson(number).length;
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.innerHTML = `
      <div class="lesson-number">${number}</div>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}・課文 ${textItems}・生詞 ${vocabCount}・專名 ${properCount}・成語 ${idiomCount}・${grammarItems} 則語法・${exerciseItems} 題練習</p>
      </div>
      <div class="lesson-status">${learned} 張</div>
    `;
    card.addEventListener("click", () => {
      currentCardLesson = number;
      currentCardCategory = "vocab";
      currentTextLesson = number;
      currentGrammarLesson = number;
      currentPracticeLesson = number;
      currentPracticeIndex = 0;
      currentQuizLesson = number;
      currentCardIndex = 0;
      currentCardSearch = "";
      cardLessonSelect.value = String(number);
      cardCategorySelect.value = currentCardCategory;
      cardSearchInput.value = currentCardSearch;
      textLessonSelect.value = String(number);
      grammarLessonSelect.value = String(number);
      practiceLessonSelect.value = String(number);
      quizLessonSelect.value = String(number);
      state.currentCardLesson = currentCardLesson;
      state.currentCardCategory = currentCardCategory;
      state.currentCardSearch = currentCardSearch;
      state.currentTextLesson = currentTextLesson;
      state.currentGrammarLesson = currentGrammarLesson;
      state.currentPracticeLesson = currentPracticeLesson;
      state.currentPracticeIndex = currentPracticeIndex;
      state.currentQuizLesson = currentQuizLesson;
      saveState();
      renderText();
      renderCard();
      setView("text");
    });
    lessonList.appendChild(card);
  });
}

function getCardsForCurrentLesson() {
  return cards.filter((item) => {
    const sameLesson = Number(item.lesson) === currentCardLesson;
    if (!sameLesson) return false;
    if (currentCardCategory === "idioms" && !isIdiomCard(item)) return false;
    if (currentCardCategory === "proper" && !isProperCard(item)) return false;
    if (currentCardCategory === "vocab" && (isIdiomCard(item) || isProperCard(item))) return false;
    return cardMatchesSearch(item);
  });
}

function cardMatchesSearch(card) {
  const query = normalizeSearch(currentCardSearch);
  if (!query) return true;
  return [
    card.term,
    card.pinyin,
    card.type,
    card.meaningZh,
    card.meaningPinyin,
    card.meaningVi,
    card.example,
    card.examplePinyin,
    card.exampleVi,
  ].some((value) => normalizeSearch(value).includes(query));
}

function renderText() {
  const lessonTexts = texts.filter((item) => Number(item.lesson) === currentTextLesson);
  textList.innerHTML = "";
  if (!lessonTexts.length) {
    textList.innerHTML = "<p class=\"empty-state\">這一課還沒有課文內容。請提供課文照片或從匯入頁加入 texts。</p>";
    return;
  }

  lessonTexts.forEach((text) => {
    const article = document.createElement("article");
    article.className = "text-card";
    article.innerHTML = `
      <div class="text-card-head">
        <div>
          <span class="tag">第 ${escapeHtml(text.lesson || 1)} 課課文</span>
          <h3>${escapeHtml(text.title || "課文")}</h3>
          <p class="pinyin-line">${escapeHtml(formatTermPinyin(text.titlePinyin) || "")}</p>
          <strong>${escapeHtml(text.titleVi || "")}</strong>
        </div>
      </div>
      ${renderTextNote(text.note)}
      <div class="text-audio-actions" role="group" aria-label="課文播放控制">
        <button class="mini-button text-play-toggle" type="button" aria-label="播放或暫停課文">播放</button>
        <button class="mini-button text-restart" type="button" aria-label="從頭播放課文">重頭播放</button>
      </div>
      <div class="text-legend">
        ${(text.legend || []).map(([type, label]) => `<span class="mark mark-${escapeHtml(type)}">${escapeHtml(label)}</span>`).join("")}
      </div>
      <div class="dialogue-list">
        ${(text.lines || []).map((line, index) => renderTextLine(line, index)).join("")}
      </div>
      ${renderTextExtras(text.extras || [])}
    `;
    article.querySelector(".text-play-toggle").addEventListener("click", (event) => toggleTextPlayback(text, article, event.currentTarget));
    article.querySelector(".text-restart").addEventListener("click", () => startTextPlayback(text, article, 0));
    article.querySelectorAll(".mark-link").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        navigateToMarkedTerm(button.dataset.markType, button.dataset.term, Number(text.lesson || currentTextLesson));
      });
    });
    textList.appendChild(article);
  });
}

function renderTextExtras(extras) {
  if (!Array.isArray(extras) || !extras.length) return "";
  return `
    <div class="text-extra-list">
      ${extras.map((section) => `
        <section class="text-extra-section">
          <h4>${escapeHtml(section.title || "補充")}</h4>
          <div class="text-extra-items">
            ${renderTextExtraItems(section.items || [])}
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

function renderTextNote(note) {
  const safeNote = String(note || "").trim();
  if (!safeNote || safeNote.includes("依你提供")) return "";
  return `<p class="text-note">${escapeHtml(safeNote)}</p>`;
}

function renderTextExtraItems(items) {
  if (!Array.isArray(items) || !items.length) return "<p>尚未填入內容。</p>";
  return items.map((item, index) => {
    if (typeof item === "string") return `<p>${index + 1}. ${escapeHtml(item)}</p>`;
    return `
      <article class="text-extra-item">
        <strong>${escapeHtml(item.term || item.prompt || item.title || `第 ${index + 1} 題`)}</strong>
        ${item.explanation ? `<p>${escapeHtml(item.explanation)}</p>` : ""}
        ${item.pinyin ? `<small>${escapeHtml(formatSentencePinyin(item.pinyin))}</small>` : ""}
        ${item.vi ? `<p>${escapeHtml(item.vi)}</p>` : ""}
      </article>
    `;
  }).join("");
}

function renderTextLine(line, index = 0) {
  return `
    <section class="dialogue-line" data-line-index="${index}">
      <span class="speaker">${escapeHtml(line.speaker || "")}</span>
      <div>
        <p class="dialogue-zh">${renderMarkedText(line.zh || "", line.marks || [])}</p>
        <p class="dialogue-pinyin">${escapeHtml(formatSentencePinyin(line.pinyin) || "")}</p>
        <p class="dialogue-vi">${escapeHtml(line.vi || "")}</p>
      </div>
    </section>
  `;
}

function renderMarkedText(text, marks) {
  const normalizedMarks = [...marks]
    .map(([type, term]) => ({ type, term: String(term || "") }))
    .filter((mark) => mark.term && text.includes(mark.term))
    .sort((a, b) => b.term.length - a.term.length);

  let cursor = 0;
  let output = "";
  while (cursor < text.length) {
    const match = normalizedMarks.find((mark) => text.startsWith(mark.term, cursor));
    if (!match) {
      output += escapeHtml(text[cursor]);
      cursor += 1;
      continue;
    }
    output += `<button class="mark mark-link mark-${escapeHtml(match.type)}" type="button" data-mark-type="${escapeHtml(match.type)}" data-term="${escapeHtml(match.term)}">${escapeHtml(match.term)}</button>`;
    cursor += match.term.length;
  }
  return output;
}

function isIdiomCard(card) {
  return IDIOM_TYPES.has(card.type);
}

function isProperCard(card) {
  return PROPER_TYPES.has(card.type);
}

function getCardCategoryLabel() {
  if (currentCardCategory === "idioms") return "成語/俗語/四字詞";
  if (currentCardCategory === "proper") return "專有名詞";
  return "生詞";
}

function renderCard() {
  document.querySelector("#cardSectionTitle").textContent = getCardCategoryLabel();
  const lessonCards = getCardsForCurrentLesson();
  if (!lessonCards.length) {
    document.querySelector("#cardLesson").textContent = `第 ${currentCardLesson} 課`;
    updateCardProgress(0, 0);
    document.querySelector("#cardTerm").textContent = "尚未匯入";
    document.querySelector("#cardPinyin").textContent = "";
    document.querySelector("#cardMeaning").textContent = currentCardSearch
      ? `找不到符合「${currentCardSearch}」的${getCardCategoryLabel()}。`
      : `這一課還沒有${getCardCategoryLabel()}。`;
    document.querySelector("#cardExample").textContent = "請換一個搜尋字，或切換課別與分類。";
    document.querySelector("#cardHandwritingTitle").textContent = "手寫練習板";
    return;
  }
  const normalizedIndex = currentCardIndex % lessonCards.length;
  const card = lessonCards[normalizedIndex];
  document.querySelector("#cardLesson").textContent = `第 ${card.lesson || 1} 課・${card.type || "詞語"}`;
  updateCardProgress(normalizedIndex + 1, lessonCards.length);
  document.querySelector("#cardTerm").textContent = card.term;
  document.querySelector("#cardHandwritingTitle").textContent = `手寫練習：${card.term}`;
  document.querySelector("#cardPinyin").textContent = formatTermPinyin(card.pinyin) || "尚未填入拼音";
  document.querySelector("#cardMeaning").innerHTML = `
    <span>${escapeHtml(card.meaningZh || "尚未填入中文說明")}</span>
    <small>${escapeHtml(formatSentencePinyin(card.meaningPinyin) || "尚未填入說明拼音")}</small>
    <strong>${escapeHtml(card.meaningVi || "尚未填入越南語說明")}</strong>
  `;
  document.querySelector("#cardExample").innerHTML = `
    <span>${escapeHtml(card.example || "請匯入中文例句。")}</span>
    <small>${escapeHtml(formatSentencePinyin(card.examplePinyin) || "請匯入例句拼音。")}</small>
    <strong>${escapeHtml(card.exampleVi || "請匯入越南語例句翻譯。")}</strong>
  `;
}

function updateCardProgress(current, total) {
  const label = document.querySelector("#cardProgressLabel");
  const text = document.querySelector("#cardProgressText");
  const fill = document.querySelector("#cardProgressFill");
  label.textContent = `${getCardCategoryLabel()}進度`;
  text.textContent = `${current}/${total}`;
  fill.style.width = total ? `${Math.round((current / total) * 100)}%` : "0%";
}

function renderGrammar() {
  const lessonGrammar = grammar.filter((item) => Number(item.lesson) === currentGrammarLesson);
  grammarCount.textContent = `${lessonGrammar.length} 則`;
  grammarList.innerHTML = "";
  if (!lessonGrammar.length) {
    grammarList.innerHTML = "<p class=\"empty-state\">這一課還沒有語法內容。請從匯入頁加入 grammar。</p>";
    return;
  }

  lessonGrammar.forEach((item) => {
    const card = document.createElement("article");
    card.className = "grammar-card collapsed";
    card.dataset.grammarId = item.id;
    card.innerHTML = `
      <button class="grammar-toggle" type="button" aria-expanded="false">
        <span>${escapeHtml(item.pattern)}</span>
        <small>展開</small>
      </button>
      <div class="grammar-body" hidden>
        <div class="grammar-head">
          <span class="tag">第 ${escapeHtml(item.lesson || 1)} 課</span>
          <button class="mini-button grammar-speak" type="button" aria-label="播放語法例句">播放</button>
        </div>
        <p class="pinyin-line">${escapeHtml(formatTermPinyin(item.patternPinyin) || "尚未填入語法拼音")}</p>
        <div class="explain-block">
          <p>${escapeHtml(item.explanationZh || "尚未填入中文說明")}</p>
          <small>${escapeHtml(formatSentencePinyin(item.explanationPinyin) || "尚未填入說明拼音")}</small>
          <strong>${escapeHtml(item.explanationVi || "尚未填入越南語說明")}</strong>
        </div>
        <div class="example-block">
          <p>${escapeHtml(item.example || "尚未填入中文例句")}</p>
          <small>${escapeHtml(formatSentencePinyin(item.examplePinyin) || "尚未填入例句拼音")}</small>
          <strong>${escapeHtml(item.exampleVi || "尚未填入越南語例句翻譯")}</strong>
        </div>
        ${renderGrammarPractice(item)}
      </div>
    `;
    const toggle = card.querySelector(".grammar-toggle");
    const body = card.querySelector(".grammar-body");
    const toggleLabel = toggle.querySelector("small");
    toggle.addEventListener("click", () => {
      const isCollapsed = body.hidden;
      body.hidden = !isCollapsed;
      card.classList.toggle("collapsed", !isCollapsed);
      toggle.setAttribute("aria-expanded", String(isCollapsed));
      toggleLabel.textContent = isCollapsed ? "收起" : "展開";
    });
    card.querySelector(".grammar-speak").addEventListener("click", (event) => speakText(`${item.pattern}。${item.example || ""}`, event.currentTarget));
    card.querySelectorAll(".grammar-practice-item").forEach((practiceCard) => {
      const input = practiceCard.querySelector(".grammar-practice-input");
      const checkButton = practiceCard.querySelector(".grammar-check");
      const toggleButton = practiceCard.querySelector(".grammar-answer-toggle");
      const answer = practiceCard.querySelector(".grammar-answer");
      const feedback = practiceCard.querySelector(".grammar-feedback");
      const practice = item.practice?.[Number(practiceCard.dataset.index)] || {};
      checkButton.addEventListener("click", () => {
        const result = checkGrammarPracticeAnswer(input.value, practice);
        answer.hidden = false;
        toggleButton.textContent = "隱藏答案";
        feedback.className = `grammar-feedback ${result.isCorrect ? "correct" : "wrong"}`;
        feedback.innerHTML = `
          <strong>${result.isCorrect ? "格式符合" : "再對照一次"}</strong>
          ${result.missingTerms?.length ? `<span>缺少：${result.missingTerms.map(escapeHtml).join("、")}</span>` : "<span>請再比較語氣、詞序與標點。</span>"}
        `;
      });
      toggleButton.addEventListener("click", () => {
        const isHidden = answer.hidden;
        answer.hidden = !isHidden;
        toggleButton.textContent = isHidden ? "隱藏答案" : "顯示答案";
      });
    });
    setupHandwritingPanels(card);
    grammarList.appendChild(card);
  });
}

function renderGrammarPractice(item) {
  if (!Array.isArray(item.practice) || !item.practice.length) return "";
  return `
    <div class="grammar-practice">
      <h4>語法練習</h4>
      ${item.practice.map((practice, index) => `
        <div class="grammar-practice-item" data-index="${index}">
          <p>${index + 1}. ${escapeHtml(practice.prompt || "")}</p>
          <textarea class="grammar-practice-input" rows="3" placeholder="請在這裡輸入你的答案"></textarea>
          <div class="grammar-practice-actions">
            <button class="mini-button grammar-check" type="button">對照答案</button>
            <button class="mini-button grammar-answer-toggle" type="button">顯示答案</button>
          </div>
          <p class="grammar-answer" hidden>${escapeHtml(practice.answer || "")}</p>
          <p class="grammar-feedback" aria-live="polite"></p>
          ${renderHandwritingPanel(`語法手寫練習 ${index + 1}`)}
        </div>
      `).join("")}
    </div>
  `;
}

function renderHandwritingPanel(title = "手寫練習板") {
  return `
    <section class="handwriting-panel">
      <button class="handwriting-toggle" type="button" aria-expanded="false">
        <span>${escapeHtml(title)}</span>
        <small>展開</small>
      </button>
      <div class="handwriting-body" hidden>
        <canvas class="handwriting-canvas" aria-label="手寫練習區"></canvas>
        <div class="handwriting-actions">
          <button class="mini-button handwriting-undo" type="button">復原</button>
          <button class="mini-button handwriting-clear" type="button">清除</button>
        </div>
      </div>
    </section>
  `;
}

function renderLessonSelectOptions() {
  const options = thirdEditionLessons
    .map((_, index) => `<option value="${index + 1}">第 ${index + 1} 課</option>`)
    .join("");
  cardLessonSelect.innerHTML = options;
  textLessonSelect.innerHTML = options;
  grammarLessonSelect.innerHTML = options;
  practiceLessonSelect.innerHTML = options;
  quizLessonSelect.innerHTML = options;
  cardLessonSelect.value = String(currentCardLesson);
  cardCategorySelect.value = currentCardCategory;
  cardSearchInput.value = currentCardSearch;
  textLessonSelect.value = String(currentTextLesson);
  grammarLessonSelect.value = String(currentGrammarLesson);
  practiceLessonSelect.value = String(currentPracticeLesson);
  practiceModeSelect.value = currentPracticeMode;
  quizLessonSelect.value = String(currentQuizLesson);
}

function renderPractice() {
  const lessonExercises = getPracticeItemsForCurrentLesson();
  practiceList.innerHTML = "";
  if (!lessonExercises.length) {
    updatePracticeProgress(0, 0);
    practicePrev.disabled = true;
    practiceNext.disabled = true;
    practiceList.innerHTML = "<p class=\"empty-state\">這一課還沒有足夠的生詞或語法可產生此題型。</p>";
    return;
  }

  currentPracticeIndex = Math.min(currentPracticeIndex, lessonExercises.length - 1);
  const exercise = lessonExercises[currentPracticeIndex];
  updatePracticeProgress(currentPracticeIndex + 1, lessonExercises.length);
  practicePrev.disabled = currentPracticeIndex === 0;
  practiceNext.disabled = currentPracticeIndex === lessonExercises.length - 1;

  const card = document.createElement("article");
  card.className = "practice-card";
  card.innerHTML = `
    <div class="practice-head">
      <span class="tag">第 ${escapeHtml(exercise.lesson)} 課・第 ${currentPracticeIndex + 1} 題</span>
      <span class="answer-mask">答案已遮蔽</span>
    </div>
    <h3>${escapeHtml(exercise.prompt)}</h3>
    ${renderExerciseControl(exercise)}
    <div class="feedback" aria-live="polite"></div>
  `;
  wireExercise(card, exercise);
  practiceList.appendChild(card);
}

function getPracticeItemsForCurrentLesson() {
  return getPracticeItemsForLesson(currentPracticeLesson);
}

function getPracticeItemsForLesson(lesson) {
  const lessonCards = cards.filter((card) => Number(card.lesson) === Number(lesson) && card.example);
  const lessonVocab = lessonCards.filter((card) => !isIdiomCard(card));
  const lessonGrammar = grammar.filter((item) => Number(item.lesson) === Number(lesson));

  if (currentPracticeMode === "vocabFill") {
    return buildVocabFillExercises(lessonVocab, lesson).slice(0, 10);
  }
  if (currentPracticeMode === "sentenceMaking") {
    return buildSentenceMakingExercises(lessonVocab, lessonGrammar, lesson).slice(0, 3);
  }
  return buildSentenceQuizExercises(lessonCards, lesson).slice(0, 5);
}

function buildSentenceQuizExercises(lessonCards, lesson) {
  return lessonCards.slice(0, 5).map((card, index) => {
    const options = shuffle([
      card.example,
      ...lessonCards.filter((item) => item.id !== card.id).slice(0, 3).map((item) => item.example),
    ]).filter(Boolean);
    return {
      id: `auto-${lesson}-sentenceQuiz-${index + 1}`,
      lesson,
      type: "choice",
      prompt: `哪一個句子正確使用「${card.term}」？`,
      options,
      answer: card.example,
      explanation: `正確句子中有使用「${card.term}」。`,
    };
  });
}

function buildVocabFillExercises(lessonVocab, lesson) {
  return lessonVocab.slice(0, 10).map((card, index) => {
    const promptSentence = card.example.includes(card.term)
      ? card.example.replace(card.term, "____")
      : `請填入最合適的生詞：${card.meaningZh}：____`;
    return {
      id: `auto-${lesson}-vocabFill-${index + 1}`,
      lesson,
      type: "text",
      prompt: `請完成句子：${promptSentence}`,
      answer: card.term,
      acceptedAnswers: [card.term],
      explanation: `本題答案是「${card.term}」。`,
    };
  });
}

function buildSentenceMakingExercises(lessonVocab, lessonGrammar, lesson) {
  return lessonVocab.slice(0, 3).map((card, index) => {
    const grammarItem = lessonGrammar[index % Math.max(lessonGrammar.length, 1)];
    if (!grammarItem) {
      return {
        id: `auto-${lesson}-sentenceMaking-${index + 1}`,
        lesson,
        type: "sentence",
        prompt: `請用「${card.term}」造一個完整句子。`,
        requiredTerms: [card.term],
        answer: card.example,
        explanation: `造句至少要包含「${card.term}」，並且語意完整。`,
      };
    }

    const requiredGrammarTerms = extractGrammarRequiredTerms(grammarItem.pattern);
    return {
      id: `auto-${lesson}-sentenceMaking-${index + 1}`,
      lesson,
      type: "sentence",
      prompt: `請用「${card.term}」和語法「${grammarItem.pattern}」造一個完整句子。`,
      requiredTerms: [card.term, ...requiredGrammarTerms],
      answer: makeReferenceSentence(card.term, grammarItem.pattern),
      explanation: `句子需包含生詞「${card.term}」與語法關鍵詞「${requiredGrammarTerms.join("、")}」。`,
    };
  });
}

function extractGrammarRequiredTerms(pattern) {
  if (pattern.includes("只不過") && pattern.includes("而已")) return ["只不過", "而已"];
  if (pattern.includes("不用") && pattern.includes("只要") && pattern.includes("就")) return ["不用", "只要", "就"];
  if (pattern.includes("就算了") && pattern.includes("何必")) return ["就算了", "何必"];
  if (pattern.includes("不光是") && pattern.includes("也是")) return ["不光是", "也是"];
  if (pattern.includes("何況")) return ["何況"];
  const terms = String(pattern).split("...").map((item) => item.trim()).filter(Boolean);
  return terms.length ? terms : [String(pattern).trim()].filter(Boolean);
}

function makeReferenceSentence(term, pattern) {
  if (pattern.includes("只不過") && pattern.includes("而已")) {
    return `我只不過忘了帶${term}而已，馬上回家拿。`;
  }
  if (pattern.includes("不用") && pattern.includes("只要") && pattern.includes("就")) {
    return `這件事不用太擔心，只要先處理${term}，就會順利多了。`;
  }
  if (pattern.includes("就算了") && pattern.includes("何必")) {
    return `你不喜歡這個${term}就算了，何必還一直批評。`;
  }
  if (pattern.includes("不光是") && pattern.includes("也是")) {
    return `不光是${term}要注意品質，其他東西也是一樣。`;
  }
  if (pattern.includes("何況")) {
    return `這個${term}本來就不便宜，何況沒有保證書，更不能隨便買。`;
  }
  if (pattern.includes("不但") && pattern.includes("而且")) {
    return `這件事不但和${term}有關，而且值得大家討論。`;
  }
  if (pattern.includes("為了") && pattern.includes("而")) {
    return `他為了處理${term}的問題而請朋友幫忙。`;
  }
  if (pattern.includes("如果") && pattern.includes("就")) {
    return `如果遇到${term}的問題，就要先冷靜處理。`;
  }
  if (pattern.includes("即使") && pattern.includes("也")) {
    return `即使碰到${term}的問題，也不要急著生氣。`;
  }
  if (pattern.includes("因為") && pattern.includes("所以")) {
    return `因為${term}的問題還沒解決，所以大家都很擔心。`;
  }
  return `我想用${term}造一個完整的句子。`;
}

function movePractice(step) {
  const items = getPracticeItemsForCurrentLesson();
  if (!items.length) return;
  currentPracticeIndex = Math.max(0, Math.min(items.length - 1, currentPracticeIndex + step));
  state.currentPracticeIndex = currentPracticeIndex;
  saveState();
  renderPractice();
}

function updatePracticeProgress(current, total) {
  const labels = {
    sentenceQuiz: "測驗句子",
    vocabFill: "生詞填充",
    sentenceMaking: "造句",
  };
  document.querySelector("#practiceProgressLabel").textContent = labels[currentPracticeMode] || "練習";
  document.querySelector("#practiceProgressText").textContent = `${current}/${total}`;
  document.querySelector("#practiceProgressFill").style.width = total ? `${Math.round((current / total) * 100)}%` : "0%";
}

function renderExerciseControl(exercise) {
  if (exercise.type === "sentence") {
    return `
      <div class="sentence-answer-row">
        <textarea class="sentence-answer" spellcheck="false" placeholder="請輸入中文句子"></textarea>
        <button class="primary check-answer" type="button">訂正</button>
      </div>
    `;
  }

  if (exercise.type === "text") {
    return `
      <div class="text-answer-row">
        <input type="text" autocomplete="off" placeholder="請輸入中文答案" />
        <button class="primary check-answer" type="button">訂正</button>
      </div>
    `;
  }

  return `
    <div class="option-grid practice-options">
      ${(exercise.options || []).map((option) => `<button type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
    </div>
  `;
}

function wireExercise(card, exercise) {
  const feedback = card.querySelector(".feedback");
  const answerMask = card.querySelector(".answer-mask");
  if (exercise.type === "text" || exercise.type === "sentence") {
    const input = exercise.type === "sentence" ? card.querySelector("textarea") : card.querySelector("input");
    const button = card.querySelector(".check-answer");
    button.addEventListener("click", () => {
      const result = exercise.type === "sentence"
        ? checkSentenceAnswer(input.value, exercise)
        : { isCorrect: isAcceptedTextAnswer(input.value, exercise), missingTerms: [] };
      showExerciseFeedback(feedback, answerMask, exercise, result);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        button.click();
      }
    });
    return;
  }

  card.querySelectorAll(".practice-options button").forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = normalizeAnswer(button.dataset.answer) === normalizeAnswer(exercise.answer);
      card.querySelectorAll(".practice-options button").forEach((item) => {
        item.disabled = true;
        if (normalizeAnswer(item.dataset.answer) === normalizeAnswer(exercise.answer)) item.classList.add("correct");
      });
      if (!isCorrect) button.classList.add("wrong");
      showExerciseFeedback(feedback, answerMask, exercise, { isCorrect, missingTerms: [] });
    });
  });
}

function isAcceptedTextAnswer(value, exercise) {
  const accepted = exercise.acceptedAnswers?.length ? exercise.acceptedAnswers : [exercise.answer];
  return accepted.some((answer) => normalizeAnswer(value) === normalizeAnswer(answer));
}

function checkSentenceAnswer(value, exercise) {
  const answer = normalizeAnswer(value);
  const requiredTerms = exercise.requiredTerms?.length ? exercise.requiredTerms : [];
  const missingTerms = requiredTerms.filter((term) => !answer.includes(normalizeAnswer(term)));
  return {
    isCorrect: Boolean(answer) && missingTerms.length === 0,
    missingTerms,
  };
}

function checkGrammarPracticeAnswer(value, practice) {
  const answer = normalizeAnswer(value);
  const requiredTerms = practice.requiredTerms?.length ? practice.requiredTerms : [practice.pattern].filter(Boolean);
  const missingTerms = requiredTerms.filter((term) => !answer.includes(normalizeAnswer(term)));
  const exactMatch = answer && normalizeAnswer(practice.answer) === answer;
  return {
    isCorrect: Boolean(answer) && (exactMatch || missingTerms.length === 0),
    missingTerms,
  };
}

function showExerciseFeedback(feedback, answerMask, exercise, result) {
  const isCorrect = result.isCorrect;
  answerMask.textContent = isCorrect ? "答對了" : "已顯示正解";
  answerMask.classList.toggle("correct", isCorrect);
  answerMask.classList.toggle("wrong", !isCorrect);
  feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
  const answerLabel = exercise.type === "sentence" ? "參考答案" : "正解";
  const missingMessage = result.missingTerms?.length
    ? `<p>缺少：${result.missingTerms.map(escapeHtml).join("、")}</p>`
    : "";
  feedback.innerHTML = `
    <strong>${isCorrect ? "正確" : "再想想"}</strong>
    <span>${answerLabel}：${escapeHtml(exercise.answer)}</span>
    ${missingMessage}
    ${exercise.explanation ? `<p>${escapeHtml(exercise.explanation)}</p>` : ""}
  `;
}

function gradeCard(known) {
  const lessonCards = getCardsForCurrentLesson();
  if (!lessonCards.length) return;
  const card = lessonCards[currentCardIndex % lessonCards.length];
  state.learnedCards ||= [];
  const id = getCardId(card);
  if (known && !state.learnedCards.includes(id)) {
    state.learnedCards.push(id);
  }
  if (!known) {
    state.learnedCards = state.learnedCards.filter((item) => item !== id);
  }
  currentCardIndex = (currentCardIndex + 1) % lessonCards.length;
  saveState();
  renderCard();
  renderLessons();
  updateProgress();
}

function moveCard(direction) {
  const lessonCards = getCardsForCurrentLesson();
  if (!lessonCards.length) return;
  stopSpeech();
  currentCardIndex = (currentCardIndex + direction + lessonCards.length) % lessonCards.length;
  renderCard();
}

function speakCurrentCard(button = null) {
  const lessonCards = getCardsForCurrentLesson();
  if (!lessonCards.length) return;
  const card = lessonCards[currentCardIndex % lessonCards.length];
  speakText(`${card.term}。${card.meaningZh || ""}。${card.example || ""}`, button);
}

function toggleTextPlayback(text, article, button) {
  if (activeTextPlayback?.article === article) {
    if (activeTextPlayback.paused) {
      activeTextPlayback.paused = false;
      playCurrentTextLine(activeTextPlayback.lineOffset || 0);
      return;
    }
    activeTextPlayback.paused = true;
    pauseActiveSpeech(button);
    button.textContent = "播放";
    return;
  }
  startTextPlayback(text, article, 0);
}

function startTextPlayback(text, article, startIndex = 0) {
  if (!("speechSynthesis" in window)) return;
  stopSpeech();
  clearTextPlaybackHighlight();
  const lines = (text.lines || []).map((line) => String(line.zh || "").trim()).filter(Boolean);
  if (!lines.length) return;
  activeTextPlayback = {
    article,
    lines,
    index: startIndex,
    playButton: article.querySelector(".text-play-toggle"),
    lineOffset: 0,
    paused: false,
  };
  playCurrentTextLine();
}

function playCurrentTextLine(resumeOffset = 0) {
  if (!activeTextPlayback) return;
  const playback = activeTextPlayback;
  playback.paused = false;
  if (playback.index >= playback.lines.length) {
    finishTextPlayback();
    return;
  }
  const text = playback.lines[playback.index];
  highlightTextLine(playback.article, playback.index);
  playback.playButton.textContent = "暫停";
  startSpeechSequence(text, playback.playButton, "text", resumeOffset, {
    onFinish: () => {
      if (!activeTextPlayback || activeTextPlayback.paused) return;
      activeTextPlayback.lineOffset = 0;
      activeTextPlayback.index += 1;
      playCurrentTextLine();
    },
    onError: finishTextPlayback,
  });
}

function pauseActiveSpeech(button = null) {
  if (!("speechSynthesis" in window)) return;
  if (!activeSpeech) return;
  if (activeSpeech.pauseTimer) {
    window.clearTimeout(activeSpeech.pauseTimer);
    activeSpeech.pauseTimer = null;
  }
  updateSpeechResumeOffsetFromTime(activeSpeech);
  if (activeTextPlayback && activeSpeech.mode === "text") {
    activeTextPlayback.lineOffset = activeSpeech.resumeOffset || 0;
  }
  activeSpeech.paused = true;
  activeSpeech.cancelled = true;
  window.speechSynthesis.cancel();
  if (button || activeSpeech.button) (button || activeSpeech.button).textContent = "播放";
}

function highlightTextLine(article, index) {
  article.querySelectorAll(".dialogue-line").forEach((line) => {
    const active = Number(line.dataset.lineIndex) === index;
    line.classList.toggle("playing", active);
    if (active) line.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function clearTextPlaybackHighlight() {
  document.querySelectorAll(".dialogue-line.playing").forEach((line) => line.classList.remove("playing"));
}

function finishTextPlayback() {
  if (activeTextPlayback?.playButton) activeTextPlayback.playButton.textContent = "播放";
  clearTextPlaybackHighlight();
  activeTextPlayback = null;
  resetSpeechButton();
}

function speakText(text, button = null) {
  if (!("speechSynthesis" in window)) return;
  const normalizedText = String(text || "").trim();
  if (!normalizedText) return;
  if (activeSpeech && activeSpeech.text === normalizedText) {
    if (activeSpeech.paused) {
      startSingleSpeech(normalizedText, button, false, activeSpeech.resumeOffset || 0);
      return;
    }
    pauseActiveSpeech(button);
    return;
  }
  startSingleSpeech(normalizedText, button);
}

function startSingleSpeech(normalizedText, button = null, resetCurrent = true, resumeOffset = 0) {
  if (resetCurrent) stopSpeech();
  if (button) button.textContent = "暫停";
  startSpeechSequence(normalizedText, button, "single", resumeOffset, {
    onFinish: resetSpeechButton,
    onError: resetSpeechButton,
  });
}

function startSpeechSequence(rawText, button, mode, resumeOffset = 0, handlers = {}) {
  const text = String(rawText || "").trim();
  const parts = buildSpeechParts(text);
  activeSpeech = {
    text,
    button,
    mode,
    parts,
    partIndex: findSpeechPartIndex(parts, resumeOffset),
    resumeOffset,
    paused: false,
    cancelled: false,
    utterance: null,
    pauseTimer: null,
    handlers,
  };
  playSpeechPart(activeSpeech);
}

function buildSpeechParts(text) {
  const parts = [];
  const ellipsisPattern = new RegExp(SPEECH_ELLIPSIS_PATTERN);
  let cursor = 0;
  let match;
  while ((match = ellipsisPattern.exec(text)) !== null) {
    addSpeechPart(parts, text, cursor, match.index);
    parts.push({
      type: "pause",
      start: match.index,
      end: match.index + match[0].length,
      duration: SPEECH_ELLIPSIS_PAUSE_MS,
    });
    cursor = match.index + match[0].length;
  }
  addSpeechPart(parts, text, cursor, text.length);
  return parts;
}

function addSpeechPart(parts, source, start, end) {
  if (end <= start) return;
  const text = source.slice(start, end);
  if (!text.trim()) return;
  splitSpeechTextIntoUnits(text, start).forEach((part) => parts.push(part));
}

function sanitizeSpeechText(text) {
  return String(text || "")
    .replace(SPEECH_ELLIPSIS_PATTERN, "")
    .replace(/\s+/g, " ");
}

function splitSpeechTextIntoUnits(text, start) {
  const units = [];
  let buffer = "";
  let bufferStart = start;
  let cursor = 0;
  while (cursor < text.length) {
    const char = text[cursor];
    if (isSpeechSymbol(char)) {
      pushSpeechUnit(units, buffer, bufferStart, start + cursor);
      buffer = "";
      bufferStart = start + cursor + 1;
      cursor += 1;
      continue;
    }
    if (!buffer) bufferStart = start + cursor;
    buffer += char;
    if (buffer.length >= SPEECH_MAX_UNIT_CHARS) {
      pushSpeechUnit(units, buffer, bufferStart, start + cursor + 1);
      buffer = "";
      bufferStart = start + cursor + 1;
    }
    cursor += 1;
  }
  pushSpeechUnit(units, buffer, bufferStart, start + text.length);
  return units;
}

function pushSpeechUnit(units, text, start, end) {
  const spokenText = sanitizeSpeechText(text).trim();
  if (!spokenText) return;
  units.push({ type: "speech", text: spokenText, start, end });
}

function isSpeechSymbol(char) {
  return SPEECH_SYMBOL_PATTERN.test(char);
}

function findSpeechPartIndex(parts, resumeOffset) {
  const offset = skipSpeechSymbols(parts, Math.max(0, Number(resumeOffset || 0)));
  const index = parts.findIndex((part) => part.end > offset);
  return index >= 0 ? index : parts.length;
}

function skipSpeechSymbols(parts, offset) {
  const speechPart = parts.find((part) => part.type === "speech" && part.end > offset);
  if (!speechPart) return offset;
  return Math.max(offset, speechPart.start);
}

function playSpeechPart(speech) {
  if (!speech || activeSpeech !== speech || speech.cancelled || speech.paused) return;
  if (speech.partIndex >= speech.parts.length) {
    activeSpeech = null;
    speech.handlers.onFinish?.();
    return;
  }

  const part = speech.parts[speech.partIndex];
  if (part.type === "pause") {
    speech.resumeOffset = part.end;
    speech.pauseTimer = window.setTimeout(() => {
      speech.pauseTimer = null;
      if (activeSpeech !== speech || speech.cancelled || speech.paused) return;
      speech.partIndex += 1;
      playSpeechPart(speech);
    }, part.duration);
    return;
  }

  if (speech.resumeOffset <= part.start) speech.resumeOffset = part.start;
  const offsetInPart = Math.max(0, Math.min(part.text.length, speech.resumeOffset - part.start));
  const textToSpeak = part.text.slice(offsetInPart);
  if (!textToSpeak.trim()) {
    speech.resumeOffset = part.end;
    speech.partIndex += 1;
    playSpeechPart(speech);
    return;
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  speech.utterance = utterance;
  speech.currentPart = part;
  speech.offsetInPart = offsetInPart;
  speech.partStartTime = 0;
  speech.boundarySeen = false;
  utterance.addEventListener("start", () => {
    if (activeSpeech !== speech || speech.cancelled) return;
    speech.partStartTime = Date.now();
  });
  utterance.addEventListener("boundary", (event) => {
    if (activeSpeech !== speech || speech.cancelled) return;
    if (typeof event.charIndex === "number") {
      speech.boundarySeen = true;
      speech.resumeOffset = part.start + offsetInPart + event.charIndex;
    }
  });
  utterance.addEventListener("end", () => {
    if (activeSpeech !== speech || speech.cancelled || speech.paused) return;
    speech.resumeOffset = part.end;
    speech.partIndex += 1;
    playSpeechPart(speech);
  });
  utterance.addEventListener("error", () => {
    if (activeSpeech !== speech || speech.cancelled) return;
    activeSpeech = null;
    speech.handlers.onError?.();
  });
  utterance.lang = "zh-TW";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
}

function updateSpeechResumeOffsetFromTime(speech) {
  if (!speech?.currentPart || speech.boundarySeen || !speech.partStartTime) return;
  const elapsedSeconds = Math.max(0, (Date.now() - speech.partStartTime) / 1000);
  const estimatedChars = elapsedSeconds < 0.15
    ? 0
    : Math.floor(elapsedSeconds * SPEECH_ESTIMATED_CHARS_PER_SECOND * 0.78);
  const offset = Math.min(
    speech.currentPart.end,
    speech.currentPart.start + speech.offsetInPart + estimatedChars,
  );
  speech.resumeOffset = Math.max(speech.resumeOffset || 0, offset);
}

function stopSpeech() {
  if (!("speechSynthesis" in window)) return;
  if (activeSpeech?.pauseTimer) {
    window.clearTimeout(activeSpeech.pauseTimer);
    activeSpeech.pauseTimer = null;
  }
  if (activeSpeech) activeSpeech.cancelled = true;
  window.speechSynthesis.cancel();
  if (activeTextPlayback?.playButton) activeTextPlayback.playButton.textContent = "播放";
  activeTextPlayback = null;
  clearTextPlaybackHighlight();
  resetSpeechButton();
}

function resetSpeechButton() {
  if (activeSpeech?.button) activeSpeech.button.textContent = "播放";
  activeSpeech = null;
}

function navigateToMarkedTerm(type, term, lesson) {
  if (!term) return;
  stopSpeech();
  if (type === "grammar") {
    navigateToGrammarTerm(term, lesson);
    return;
  }
  navigateToCardTerm(type, term, lesson);
}

function navigateToCardTerm(type, term, lesson) {
  const category = type === "proper" ? "proper" : type === "idiom" ? "idioms" : "vocab";
  currentCardLesson = lesson;
  currentCardCategory = category;
  currentCardSearch = "";
  currentCardIndex = 0;
  state.currentCardLesson = currentCardLesson;
  state.currentCardCategory = currentCardCategory;
  state.currentCardSearch = currentCardSearch;
  const lessonCards = getCardsForCurrentLesson();
  const index = lessonCards.findIndex((card) => card.term === term || card.term.includes(term) || term.includes(card.term));
  if (index >= 0) currentCardIndex = index;
  renderLessonSelectOptions();
  renderCard();
  saveState();
  setView("cards");
  requestAnimationFrame(() => document.querySelector("#flashcard")?.scrollIntoView({ behavior: "smooth", block: "center" }));
}

function navigateToGrammarTerm(term, lesson) {
  currentGrammarLesson = lesson;
  state.currentGrammarLesson = currentGrammarLesson;
  renderLessonSelectOptions();
  renderGrammar();
  saveState();
  setView("grammar");
  const target = grammar
    .filter((item) => Number(item.lesson) === lesson)
    .find((item) => item.pattern?.includes(term) || item.example?.includes(term) || item.explanationZh?.includes(term));
  if (target) requestAnimationFrame(() => expandGrammarCard(target.id));
}

function expandGrammarCard(grammarId) {
  const card = [...document.querySelectorAll(".grammar-card")].find((item) => item.dataset.grammarId === grammarId);
  if (!card) return;
  const body = card.querySelector(".grammar-body");
  const toggle = card.querySelector(".grammar-toggle");
  const label = toggle.querySelector("small");
  body.hidden = false;
  card.classList.remove("collapsed");
  toggle.setAttribute("aria-expanded", "true");
  label.textContent = "收起";
  card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupHandwritingPanels(root = document) {
  root.querySelectorAll(".handwriting-panel").forEach((panel) => {
    if (panel.dataset.ready === "true") return;
    panel.dataset.ready = "true";
    const toggle = panel.querySelector(".handwriting-toggle");
    const body = panel.querySelector(".handwriting-body");
    const label = toggle.querySelector("small");
    const canvas = panel.querySelector(".handwriting-canvas");
    const undoButton = panel.querySelector(".handwriting-undo");
    const clearButton = panel.querySelector(".handwriting-clear");
    const board = createHandwritingBoard(canvas);

    toggle.addEventListener("click", () => {
      const isClosed = body.hidden;
      body.hidden = !isClosed;
      toggle.setAttribute("aria-expanded", String(isClosed));
      label.textContent = isClosed ? "收起" : "展開";
      if (isClosed) requestAnimationFrame(board.resize);
    });
    undoButton?.addEventListener("click", board.undo);
    clearButton.addEventListener("click", board.clear);
  });
}

function createHandwritingBoard(canvas) {
  const context = canvas.getContext("2d");
  let drawing = false;
  let lastPoint = null;
  let currentStroke = null;
  let strokes = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 5;
    context.strokeStyle = "#20161a";
    redraw();
  }

  function redraw() {
    const rect = canvas.getBoundingClientRect();
    context.clearRect(0, 0, rect.width, rect.height);
    strokes.forEach(drawStroke);
  }

  function drawStroke(points) {
    if (!points.length) return;
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    if (points.length === 1) {
      context.lineTo(points[0].x + 0.1, points[0].y + 0.1);
    } else {
      points.slice(1).forEach((point) => context.lineTo(point.x, point.y));
    }
    context.stroke();
  }

  function clear() {
    strokes = [];
    currentStroke = null;
    redraw();
  }

  function undo() {
    strokes.pop();
    redraw();
  }

  function getPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function start(event) {
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    drawing = true;
    lastPoint = getPoint(event);
    currentStroke = [lastPoint];
  }

  function draw(event) {
    if (!drawing || !lastPoint) return;
    event.preventDefault();
    const point = getPoint(event);
    context.beginPath();
    context.moveTo(lastPoint.x, lastPoint.y);
    context.lineTo(point.x, point.y);
    context.stroke();
    currentStroke.push(point);
    lastPoint = point;
  }

  function stop(event) {
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (currentStroke?.length) strokes.push(currentStroke);
    drawing = false;
    lastPoint = null;
    currentStroke = null;
  }

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
  window.addEventListener("resize", () => {
    if (!canvas.closest(".handwriting-body")?.hidden) resize();
  });

  return { resize, clear, undo };
}

function resetProgress() {
  state.learnedCards = [];
  saveState();
  renderLessons();
  updateProgress();
}

function updateProgress() {
  const learned = state.learnedCards?.length || 0;
  const percent = cards.length ? Math.round((learned / cards.length) * 100) : 0;
  progressPercent.textContent = `${Math.min(percent, 100)}%`;
}

function renderQuiz() {
  const lessonCards = cards.filter((card) => Number(card.lesson) === currentQuizLesson);
  if (lessonCards.length < 3) {
    document.querySelector("#quizBox").innerHTML = `<p>第 ${currentQuizLesson} 課至少需要 3 張生詞、成語、俗語或四字詞卡才能快測。</p>`;
    return;
  }
  const question = lessonCards[Math.floor(Math.random() * lessonCards.length)];
  const options = shuffle([
    question.meaningVi,
    ...shuffle(lessonCards.filter((card) => card.term !== question.term)).slice(0, 3).map((card) => card.meaningVi),
  ]).filter(Boolean);

  document.querySelector("#quizBox").innerHTML = `
    <h3>「${escapeHtml(question.term)}」的越南語說明是什麼？</h3>
    <p class="pinyin-line">${escapeHtml(formatTermPinyin(question.pinyin) || "")}</p>
    <div class="option-grid">
      ${options.map((option) => `<button type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
    </div>
  `;

  document.querySelectorAll(".option-grid button").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button, question.meaningVi));
  });
}

function answerQuiz(button, correctAnswer) {
  const buttons = document.querySelectorAll(".option-grid button");
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.dataset.answer === correctAnswer) item.classList.add("correct");
  });

  quiz.total += 1;
  if (button.dataset.answer === correctAnswer) {
    quiz.correct += 1;
  } else {
    button.classList.add("wrong");
  }

  document.querySelector("#quizScore").textContent = `${quiz.correct}/${quiz.total}`;
  setTimeout(renderQuiz, 1000);
}

async function importFromFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  document.querySelector("#jsonInput").value = text;
  importContent(text);
}

function importFromTextarea() {
  importContent(document.querySelector("#jsonInput").value);
}

function importContent(text) {
  try {
    const data = JSON.parse(text);
    if (!Array.isArray(data.cards)) {
      throw new Error("JSON 需要包含 cards 陣列。");
    }
    const importedCards = data.cards.map(normalizeCard).filter((card) => card.term);
    const importedTexts = Array.isArray(data.texts) ? data.texts.map(normalizeText).filter((item) => item.title) : defaultTexts;
    const importedGrammar = Array.isArray(data.grammar) ? data.grammar.map(normalizeGrammar).filter((item) => item.pattern) : [];
    const importedExercises = Array.isArray(data.exercises) ? data.exercises.map(normalizeExercise).filter((item) => item.prompt) : defaultExercises;
    const cardErrors = importedCards.flatMap(validateExpressionCard);
    const grammarErrors = importedGrammar.flatMap(validateGrammarItem);
    const exerciseErrors = importedExercises.flatMap(validateExerciseItem);

    if (!importedCards.length) {
      throw new Error("cards 至少需要 1 筆資料。");
    }
    if (cardErrors.length || grammarErrors.length || exerciseErrors.length) {
      throw new Error([...cardErrors, ...grammarErrors, ...exerciseErrors].slice(0, 4).join("；"));
    }

    cards = importedCards;
    texts = importedTexts;
    grammar = importedGrammar;
    exercises = importedExercises;
    state.cards = cards;
    state.texts = texts;
    state.grammar = grammar;
    state.exercises = exercises;
    state.learnedCards = [];
    state.customContent = true;
    state.contentVersion = CONTENT_VERSION;
    currentCardIndex = 0;
    currentCardLesson = 1;
    currentCardCategory = "vocab";
    currentCardSearch = "";
    currentTextLesson = 1;
    currentGrammarLesson = 1;
    currentPracticeLesson = 1;
    currentPracticeMode = "sentenceQuiz";
    currentPracticeIndex = 0;
    currentQuizLesson = 1;
    state.currentCardLesson = currentCardLesson;
    state.currentCardCategory = currentCardCategory;
    state.currentCardSearch = currentCardSearch;
    state.currentTextLesson = currentTextLesson;
    state.currentGrammarLesson = currentGrammarLesson;
    state.currentPracticeLesson = currentPracticeLesson;
    state.currentPracticeMode = currentPracticeMode;
    state.currentPracticeIndex = currentPracticeIndex;
    state.currentQuizLesson = currentQuizLesson;
    saveState();
    renderLessonSelectOptions();
    renderLessons();
    renderText();
    renderCard();
    renderGrammar();
    renderPractice();
    updateProgress();
    importNotice.textContent = `已載入 ${texts.length} 篇課文、${cards.length} 張表達卡、${grammar.length} 則語法與 ${exercises.length} 題練習。`;
  } catch (error) {
    importNotice.textContent = `匯入失敗：${error.message}`;
  }
}

function normalizeExercise(exercise, index) {
  const allowedTypes = ["choice", "text", "sentence"];
  const type = allowedTypes.includes(exercise.type) ? exercise.type : "choice";
  return {
    lesson: Number(exercise.lesson || 1),
    type,
    prompt: String(exercise.prompt || "").trim(),
    options: Array.isArray(exercise.options) ? exercise.options.map((option) => String(option).trim()).filter(Boolean) : [],
    answer: String(exercise.answer || "").trim(),
    acceptedAnswers: Array.isArray(exercise.acceptedAnswers)
      ? exercise.acceptedAnswers.map((answer) => String(answer).trim()).filter(Boolean)
      : [],
    requiredTerms: Array.isArray(exercise.requiredTerms)
      ? exercise.requiredTerms.map((term) => String(term).trim()).filter(Boolean)
      : [],
    explanation: String(exercise.explanation || "").trim(),
    id: String(exercise.id || index + 1),
  };
}

function normalizeText(text, index) {
  return {
    lesson: Number(text.lesson || 1),
    title: String(text.title || "").trim(),
    titlePinyin: String(text.titlePinyin || "").trim(),
    titleVi: String(text.titleVi || "").trim(),
    note: String(text.note || "").trim(),
    legend: Array.isArray(text.legend) ? text.legend : [],
    lines: Array.isArray(text.lines)
      ? text.lines.map((line) => ({
          speaker: String(line.speaker || "").trim(),
          zh: String(line.zh || "").trim(),
          pinyin: String(line.pinyin || "").trim(),
          vi: String(line.vi || "").trim(),
          marks: Array.isArray(line.marks) ? line.marks : [],
        })).filter((line) => line.zh)
      : [],
    extras: Array.isArray(text.extras)
      ? text.extras.map((section) => ({
          title: String(section.title || "").trim(),
          items: Array.isArray(section.items) ? section.items : [],
        })).filter((section) => section.title || section.items.length)
      : [],
    id: String(text.id || index + 1),
  };
}

function normalizeCard(card, index) {
  return {
    lesson: Number(card.lesson || 1),
    type: String(card.type || "詞語").trim(),
    term: String(card.term || "").trim(),
    pinyin: String(card.pinyin || "").trim(),
    meaningZh: String(card.meaningZh || "").trim(),
    meaningPinyin: String(card.meaningPinyin || "").trim(),
    meaningVi: String(card.meaningVi || card.vietnamese || "").trim(),
    example: String(card.example || "").trim(),
    examplePinyin: String(card.examplePinyin || "").trim(),
    exampleVi: String(card.exampleVi || "").trim(),
    audioUrl: String(card.audioUrl || "").trim(),
    id: String(card.id || index + 1),
  };
}

function normalizeGrammar(item, index) {
  return {
    lesson: Number(item.lesson || 1),
    pattern: String(item.pattern || "").trim(),
    patternPinyin: String(item.patternPinyin || "").trim(),
    explanationZh: String(item.explanationZh || "").trim(),
    explanationPinyin: String(item.explanationPinyin || "").trim(),
    explanationVi: String(item.explanationVi || "").trim(),
    example: String(item.example || "").trim(),
    examplePinyin: String(item.examplePinyin || "").trim(),
    exampleVi: String(item.exampleVi || "").trim(),
    practice: Array.isArray(item.practice)
      ? item.practice.map((practice) => ({
          prompt: String(practice.prompt || "").trim(),
          answer: String(practice.answer || "").trim(),
          requiredTerms: Array.isArray(practice.requiredTerms)
            ? practice.requiredTerms.map((term) => String(term).trim()).filter(Boolean)
            : [],
        })).filter((practice) => practice.prompt)
      : [],
    id: String(item.id || index + 1),
  };
}

function validateExpressionCard(card) {
  const requiredFields = [
    ["pinyin", "詞條拼音"],
    ["meaningZh", "中文說明"],
    ["meaningPinyin", "說明拼音"],
    ["meaningVi", "越文說明"],
    ["example", "中文例句"],
    ["examplePinyin", "例句拼音"],
    ["exampleVi", "例句越文翻譯"],
  ];
  return requiredFields
    .filter(([field]) => !card[field])
    .map(([, label]) => `「${card.term || "未命名卡片"}」缺少${label}`);
}

function validateGrammarItem(item) {
  const requiredFields = [
    ["patternPinyin", "語法拼音"],
    ["explanationZh", "中文說明"],
    ["explanationPinyin", "說明拼音"],
    ["explanationVi", "越文說明"],
    ["example", "中文例句"],
    ["examplePinyin", "例句拼音"],
    ["exampleVi", "例句越文翻譯"],
  ];
  return requiredFields
    .filter(([field]) => !item[field])
    .map(([, label]) => `「${item.pattern || "未命名語法"}」缺少${label}`);
}

function validateExerciseItem(exercise) {
  const errors = [];
  if (!exercise.answer) errors.push(`「${exercise.prompt || "未命名練習題"}」缺少答案`);
  if (exercise.type === "choice") {
    if (exercise.options.length < 2) errors.push(`「${exercise.prompt || "未命名練習題"}」至少需要 2 個選項`);
    if (exercise.answer && !exercise.options.some((option) => normalizeAnswer(option) === normalizeAnswer(exercise.answer))) {
      errors.push(`「${exercise.prompt || "未命名練習題"}」的答案必須出現在選項中`);
    }
  }
  if (exercise.type === "sentence" && !exercise.requiredTerms.length) {
    errors.push(`「${exercise.prompt || "未命名造句題"}」需要 requiredTerms 才能自動訂正`);
  }
  return errors;
}

async function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
}

function showUpdateNotice() {
  if (document.querySelector(".update-notice")) return;
  const notice = document.createElement("div");
  notice.className = "update-notice";
  notice.setAttribute("role", "status");
  notice.innerHTML = `
    <p>已偵測到新版內容，重新整理後即可使用最新課文與練習。</p>
    <button class="primary" type="button">重新整理</button>
  `;
  notice.querySelector("button").addEventListener("click", () => location.reload());
  document.body.appendChild(notice);
}

function getCardId(card) {
  return `${card.lesson}:${card.id || card.term}`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalizeAnswer(value) {
  return String(value).replace(/\s+/g, "").replace(/[，。！？、,.!?]/g, "").trim();
}

function normalizeSearch(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "").trim();
}

function formatTermPinyin(value) {
  const formatted = formatPinyin(value, { compact: true });
  return formatted ? `(${formatted})` : "";
}

function formatSentencePinyin(value) {
  return formatPinyin(value, { compact: false });
}

function formatPinyin(value, options = {}) {
  if (!value) return "";
  const converted = String(value)
    .replace(/[A-Za-züÜvV:]+[1-5]/g, (syllable) => convertPinyinSyllable(syllable))
    .replace(/\s+([,.;!?，。；！？、])/g, "$1")
    .replace(/([,.;!?，。；！？、])\s*/g, "$1 ")
    .replace(/\s+/g, " ")
    .trim();

  return options.compact
    ? converted.replace(/\s+/g, "").replace(/\s*\/\s*/g, "/")
    : converted;
}

function convertPinyinSyllable(syllable) {
  const tone = Number(syllable.at(-1));
  let base = syllable.slice(0, -1).replace(/u:/gi, (match) => (match[0] === "U" ? "Ü" : "ü"));
  base = base.replace(/v/g, "ü").replace(/V/g, "Ü");
  if (!tone || tone === 5) return base;

  const markIndex = getPinyinToneMarkIndex(base);
  if (markIndex < 0) return base;

  const marked = applyToneMark(base[markIndex], tone);
  return `${base.slice(0, markIndex)}${marked}${base.slice(markIndex + 1)}`;
}

function getPinyinToneMarkIndex(syllable) {
  const preferred = ["a", "A", "e", "E", "o", "O"];
  for (const vowel of preferred) {
    const index = syllable.indexOf(vowel);
    if (index >= 0) return index;
  }

  const vowels = [...syllable.matchAll(/[iIuUüÜ]/g)];
  return vowels.length ? vowels.at(-1).index : -1;
}

function applyToneMark(vowel, tone) {
  const toneMarks = {
    a: ["ā", "á", "ǎ", "à"],
    e: ["ē", "é", "ě", "è"],
    i: ["ī", "í", "ǐ", "ì"],
    o: ["ō", "ó", "ǒ", "ò"],
    u: ["ū", "ú", "ǔ", "ù"],
    ü: ["ǖ", "ǘ", "ǚ", "ǜ"],
    A: ["Ā", "Á", "Ǎ", "À"],
    E: ["Ē", "É", "Ě", "È"],
    I: ["Ī", "Í", "Ǐ", "Ì"],
    O: ["Ō", "Ó", "Ǒ", "Ò"],
    U: ["Ū", "Ú", "Ǔ", "Ù"],
    Ü: ["Ǖ", "Ǘ", "Ǚ", "Ǜ"],
  };
  return toneMarks[vowel]?.[tone - 1] || vowel;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
