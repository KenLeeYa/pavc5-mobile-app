import { lesson1Cards } from "./data/lesson1-cards.js";

const STORAGE_KEY = "pavc5-vietnamese-mobile-app";
const CONTENT_VERSION = "lesson1-vocab-20260630";

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

const defaultCards = lesson1Cards;

const defaultGrammar = [
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
  state.learnedCards = [];
  state.contentVersion = CONTENT_VERSION;
  saveState();
}
let cards = state.cards?.length ? state.cards : defaultCards;
let grammar = state.grammar?.length ? state.grammar : defaultGrammar;
let exercises = state.exercises?.length ? state.exercises : defaultExercises;
let currentCardIndex = 0;
let currentPracticeLesson = Number(state.currentPracticeLesson || 1);
let deferredInstallPrompt = null;
let quiz = {
  total: 0,
  correct: 0,
};

const views = {
  lessons: document.querySelector("#lessonsView"),
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
const practiceList = document.querySelector("#practiceList");
const practiceLessonSelect = document.querySelector("#practiceLessonSelect");

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

document.querySelector("#knowCard").addEventListener("click", () => gradeCard(true));
document.querySelector("#againCard").addEventListener("click", () => gradeCard(false));
document.querySelector("#speakCard").addEventListener("click", speakCurrentCard);
document.querySelector("#resetProgress").addEventListener("click", resetProgress);
document.querySelector("#loadJson").addEventListener("click", importFromTextarea);
document.querySelector("#contentFile").addEventListener("change", importFromFile);
document.querySelector("#flashcard").addEventListener("click", speakCurrentCard);
practiceLessonSelect.addEventListener("change", () => {
  currentPracticeLesson = Number(practiceLessonSelect.value);
  state.currentPracticeLesson = currentPracticeLesson;
  saveState();
  renderPractice();
});
installButton.addEventListener("click", installApp);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

renderLessons();
renderCard();
renderGrammar();
renderPracticeLessonOptions();
renderPractice();
renderQuiz();
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
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  Object.entries(views).forEach(([name, view]) => {
    view.classList.toggle("active", name === viewName);
  });

  if (viewName === "quiz") renderQuiz();
}

function renderLessons() {
  lessonList.innerHTML = "";
  thirdEditionLessons.forEach(([title, description], index) => {
    const number = index + 1;
    const learned = state.learnedCards?.filter((cardId) => cardId.startsWith(`${number}:`)).length || 0;
    const lessonCards = cards.filter((item) => Number(item.lesson) === number).length;
    const grammarItems = grammar.filter((item) => Number(item.lesson) === number).length;
    const exerciseItems = exercises.filter((item) => Number(item.lesson) === number).length;
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.innerHTML = `
      <div class="lesson-number">${number}</div>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}・${lessonCards} 張表達卡・${grammarItems} 則語法・${exerciseItems} 題練習</p>
      </div>
      <div class="lesson-status">${learned} 張</div>
    `;
    card.addEventListener("click", () => {
      const found = cards.findIndex((item) => Number(item.lesson) === number);
      currentCardIndex = found >= 0 ? found : 0;
      currentPracticeLesson = number;
      practiceLessonSelect.value = String(number);
      renderCard();
      setView("cards");
    });
    lessonList.appendChild(card);
  });
}

function renderCard() {
  if (!cards.length) return;
  const card = cards[currentCardIndex % cards.length];
  document.querySelector("#cardLesson").textContent = `第 ${card.lesson || 1} 課・${card.type || "詞語"}`;
  document.querySelector("#cardTerm").textContent = card.term;
  document.querySelector("#cardPinyin").textContent = card.pinyin || "尚未填入拼音";
  document.querySelector("#cardMeaning").innerHTML = `
    <span>${escapeHtml(card.meaningZh || "尚未填入中文說明")}</span>
    <small>${escapeHtml(card.meaningPinyin || "尚未填入說明拼音")}</small>
    <strong>${escapeHtml(card.meaningVi || "尚未填入越南語說明")}</strong>
  `;
  document.querySelector("#cardExample").innerHTML = `
    <span>${escapeHtml(card.example || "請匯入中文例句。")}</span>
    <small>${escapeHtml(card.examplePinyin || "請匯入例句拼音。")}</small>
    <strong>${escapeHtml(card.exampleVi || "請匯入越南語例句翻譯。")}</strong>
  `;
}

function renderGrammar() {
  grammarCount.textContent = `${grammar.length} 則`;
  grammarList.innerHTML = "";
  if (!grammar.length) {
    grammarList.innerHTML = "<p class=\"empty-state\">請先匯入語法內容。</p>";
    return;
  }

  grammar.forEach((item) => {
    const card = document.createElement("article");
    card.className = "grammar-card";
    card.innerHTML = `
      <div class="grammar-head">
        <span class="tag">第 ${escapeHtml(item.lesson || 1)} 課</span>
        <button class="mini-button" type="button" aria-label="播放語法例句">播放</button>
      </div>
      <h3>${escapeHtml(item.pattern)}</h3>
      <p class="pinyin-line">${escapeHtml(item.patternPinyin || "尚未填入語法拼音")}</p>
      <div class="explain-block">
        <p>${escapeHtml(item.explanationZh || "尚未填入中文說明")}</p>
        <small>${escapeHtml(item.explanationPinyin || "尚未填入說明拼音")}</small>
        <strong>${escapeHtml(item.explanationVi || "尚未填入越南語說明")}</strong>
      </div>
      <div class="example-block">
        <p>${escapeHtml(item.example || "尚未填入中文例句")}</p>
        <small>${escapeHtml(item.examplePinyin || "尚未填入例句拼音")}</small>
        <strong>${escapeHtml(item.exampleVi || "尚未填入越南語例句翻譯")}</strong>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => speakText(`${item.pattern}。${item.example || ""}`));
    grammarList.appendChild(card);
  });
}

function renderPracticeLessonOptions() {
  practiceLessonSelect.innerHTML = thirdEditionLessons
    .map((_, index) => `<option value="${index + 1}">第 ${index + 1} 課</option>`)
    .join("");
  practiceLessonSelect.value = String(currentPracticeLesson);
}

function renderPractice() {
  const lessonExercises = exercises.filter((item) => Number(item.lesson) === currentPracticeLesson);
  practiceList.innerHTML = "";
  if (!lessonExercises.length) {
    practiceList.innerHTML = "<p class=\"empty-state\">這一課還沒有練習題。請從匯入頁加入 exercises。</p>";
    return;
  }

  lessonExercises.forEach((exercise, index) => {
    const card = document.createElement("article");
    card.className = "practice-card";
    card.innerHTML = `
      <div class="practice-head">
        <span class="tag">第 ${escapeHtml(exercise.lesson)} 課・第 ${index + 1} 題</span>
        <span class="answer-mask">答案已遮蔽</span>
      </div>
      <h3>${escapeHtml(exercise.prompt)}</h3>
      ${renderExerciseControl(exercise)}
      <div class="feedback" aria-live="polite"></div>
    `;
    wireExercise(card, exercise);
    practiceList.appendChild(card);
  });
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
  const card = cards[currentCardIndex % cards.length];
  state.learnedCards ||= [];
  const id = getCardId(card);
  if (known && !state.learnedCards.includes(id)) {
    state.learnedCards.push(id);
  }
  if (!known) {
    state.learnedCards = state.learnedCards.filter((item) => item !== id);
  }
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  saveState();
  renderCard();
  renderLessons();
  updateProgress();
}

function speakCurrentCard() {
  const card = cards[currentCardIndex % cards.length];
  speakText(`${card.term}。${card.meaningZh || ""}。${card.example || ""}`);
}

function speakText(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
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
  if (cards.length < 3) {
    document.querySelector("#quizBox").innerHTML = "<p>請先匯入至少 3 張字詞、成語、俗語或四字詞卡。</p>";
    return;
  }
  const question = cards[Math.floor(Math.random() * cards.length)];
  const options = shuffle([
    question.meaningVi,
    ...shuffle(cards.filter((card) => card.term !== question.term)).slice(0, 3).map((card) => card.meaningVi),
  ]).filter(Boolean);

  document.querySelector("#quizBox").innerHTML = `
    <h3>「${escapeHtml(question.term)}」的越南語說明是什麼？</h3>
    <p class="pinyin-line">${escapeHtml(question.pinyin || "")}</p>
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
    grammar = importedGrammar;
    exercises = importedExercises;
    state.cards = cards;
    state.grammar = grammar;
    state.exercises = exercises;
    state.learnedCards = [];
    state.customContent = true;
    state.contentVersion = CONTENT_VERSION;
    currentCardIndex = 0;
    saveState();
    renderLessons();
    renderCard();
    renderGrammar();
    renderPractice();
    updateProgress();
    importNotice.textContent = `已載入 ${cards.length} 張表達卡、${grammar.length} 則語法與 ${exercises.length} 題練習。`;
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

function getCardId(card) {
  return `${card.lesson}:${card.id || card.term}`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalizeAnswer(value) {
  return String(value).replace(/\s+/g, "").replace(/[，。！？、,.!?]/g, "").trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
