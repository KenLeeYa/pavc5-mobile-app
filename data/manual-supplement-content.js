const lessonTitles = {
  1: "因小失大",
  2: "歡樂過春節",
  3: "終身學習",
  4: "不經一事，不長一智",
  5: "世界運動會",
  6: "服務性的休閒活動",
  7: "你戒菸，我拒吸二手菸",
  8: "單親家庭也幸福",
  9: "人人都是環保尖兵",
  10: "吃得健康又安全",
  11: "高齡化與少子化的社會",
  12: "十二生肖",
  13: "正體字與簡體字",
  14: "掌中戲大師李天祿的茶藝",
};

const outlineRows = [
  {
    lesson: 3,
    topic: "介紹華人春節的活動、習俗與由來。",
    objective: "能用中文描述家庭教育、社會教育以及終身學習的概念。",
    grammar: ["所謂(的)...是指...", "往往", "由此可見", "...以為...其實...", "(雖然)...然而..."],
    culture: ["認識不同教育制度、方法與學習態度。", "了解終身學習和社會教育的重要性。"],
  },
  {
    lesson: 4,
    topic: "敘述旅遊的行程、意外事件及處理過程。",
    objective: "能描述旅遊安排、過程、經驗，以及討論問題突發狀況的解決方法。",
    grammar: ["歷經...(的)...好不容易(才)...", "等到...(之後)...", "把...連同...", "先...接著(再)...然後...", "(如果)等到...就...了"],
    culture: ["認識旅遊安排、突發狀況與心情變化。", "比較不同國家、文化的旅遊觀念。"],
  },
  {
    lesson: 5,
    topic: "介紹奧運會的起源、目的與意義，以及運動選手的比賽精神。",
    objective: "能說明奧運精神、比賽特色與運動家精神。",
    grammar: ["無不...", "V 入", "連...也...", "經過一番...終於...", "使"],
    culture: ["認識奧運會的文化與由來。", "了解「志在參加，不在得獎」的運動精神。"],
  },
  {
    lesson: 6,
    topic: "說明一般休閒活動與服務性休閒活動，並解釋義工工作的意義、種類、好處以及參加方式。",
    objective: "能以中文討論服務性休閒活動的意義、種類與感受。",
    grammar: ["在...之餘...", "藉此", "是否", "在...的前提下...", "...不只...更..."],
    culture: ["認識一般休閒活動與服務性休閒活動。", "了解服務性休閒活動的內容、意義與義工精神。"],
  },
  {
    lesson: 7,
    topic: "說明吸菸的原因、壞處與影響，並介紹戒菸的方法以及拒吸二手菸的觀念。",
    objective: "能用中文討論吸菸、戒菸與二手菸相關議題，並說明相關法律規定。",
    grammar: ["...說是...說是...真的...嗎？", "把...堆在嘴上", "...既...也...更...", "...豈不是...(嗎)？", "只要...就...／只有...才..."],
    culture: ["認識吸菸與二手菸的害處。", "了解公共場合禁菸與健康觀念。"],
  },
  {
    lesson: 8,
    topic: "說明單親家庭的定義和現象，單親父母和子女可能遇到的問題，以及面對單親的方法。",
    objective: "能以中文討論單親家庭的社會現象，並能描述現代人對於單親家庭的想法。",
    grammar: ["...由...所組成", "則", "(不)等於", "儘管...仍然...", "這樣／如此一來"],
    culture: ["認識單親家庭的成因與受到的社會壓力。", "討論親子關係與家庭觀念的改變。"],
  },
  {
    lesson: 9,
    topic: "說明地球受到污染的原因、程度，以及世界各國為了保護環境、提高環保意識所制定的制度。",
    objective: "能以中文討論各國面臨的環保問題，並提出合理的解決方式。",
    grammar: ["...因(為)...(而)變得 SV／(而)變成 N", "...到...(的)地步", "怎不令...SV?", "如何", "...也好，...也好，...都..."],
    culture: ["認識環境污染的原因與解決方法。", "了解環保制度和現代人的環保意識。"],
  },
  {
    lesson: 10,
    topic: "說明飲食習慣與健康之間的關係，並介紹現代人的疾病現象，以及食品安全的觀念。",
    objective: "能以中文討論現代人的飲食習慣與健康，以及現代食品營養、健康與安全的問題。",
    grammar: ["...反映出...", "以...而言／來說，...", "...固然...但是...", "為了...著想", "俗話說得好，..."],
    culture: ["認識現代人的飲食文化、習慣與對「吃」的重視。", "討論食品安全、年齡與飲食觀念。"],
  },
  {
    lesson: 11,
    topic: "說明高齡化與少子化社會現象的原因與問題，以及兩種現象之間的關係。",
    objective: "能用中文討論高齡人口結構與高齡化、少子化現象，並能評論政府的相關政策。",
    grammar: ["即", "不僅...更 SV 的是...", "為了因應...", "V/SV 於", "首先...其次..."],
    culture: ["認識人口老化的原因與少子化的原因。", "了解高齡化、少子化之間的關係與政策。"],
  },
  {
    lesson: 12,
    topic: "介紹華人十二生肖的由來及古代計時傳說，並討論生肖文化反映個性的觀念。",
    objective: "能討論不同文化中生肖相關觀念，也能談論動物與人的關係。",
    grammar: ["除了(之外)，最 SV／VP 的...是...", "有助於...／有利於...", "並不只是...，...也...", "以...為...", "...也不例外"],
    culture: ["認識十二生肖的由來。", "了解生肖文化與個人性格、命運看法。"],
  },
  {
    lesson: 13,
    topic: "說明中華文字的演變，以及不同年代所發展出的字體與特色，並談簡體字的造字方式與使用上的問題。",
    objective: "能敘述中文文字的發展，並討論正體字與簡體字在使用上的差異。",
    grammar: ["自...(以)後，...即成為...", "隨著", "如...一般(SV)", "被...視為...", "除此之外，尚有..."],
    culture: ["認識中文字的演變過程及各種字體特色。", "從語言文字與文化角度認識正體字和簡體字。"],
  },
  {
    lesson: 14,
    topic: "簡介掌中戲大師李天祿的傳奇一生，以及所熱愛的掌中戲與茶藝兩項興趣。",
    objective: "能談論藝術家的人生經歷，並能敘述戲劇文化與飲品文化。",
    grammar: ["V 過", "一旦", "...沒有...，有的只是...", "...依然...，(但)...反而...", "介於...(與)...之間"],
    culture: ["透過李天祿的事蹟認識台灣掌中戲文化。", "了解茶藝與傳統藝術的文化特色。"],
  },
];

function line(speaker, zh, pinyin = "", vi = "") {
  return { speaker, zh, pinyin, vi };
}

function extra(title, items, type = "note") {
  return { title, type, items: items.map((item) => (typeof item === "string" ? { explanation: item } : item)) };
}

export const manualSupplementTexts = [
  {
    id: "lesson1-notes-discussion-reading",
    lesson: 1,
    title: "補充：注釋、問題討論與閱讀",
    titlePinyin: "bu3 chong1: zhu4 shi4, wen4 ti2 tao3 lun4 yu3 yue4 du2",
    titleVi: "Bổ sung: chú thích, thảo luận và đọc hiểu",
    note: "依照補充圖片人工整理，供學生複習第一課的文化、討論與閱讀內容。",
    lines: [
      line("閱讀", "塞翁失馬，焉知非福是一則提醒人們從不同角度看待得失的故事。故事中的老人失去一匹馬時不急著悲傷，得到好馬時也不過度高興，後來事情的發展證明禍福常常會互相轉變。", "sai4 weng1 shi1 ma3, yan1 zhi1 fei1 fu2.", "Tái ông mất ngựa là câu chuyện nhắc ta nhìn được mất từ nhiều góc độ; điều xấu và điều tốt có thể chuyển hóa lẫn nhau."),
      line("閱讀", "這個故事可以連結第一課的主題：不要只看眼前的小利，也要思考後面的影響。", "zhe4 ge5 gu4 shi4 ke3 yi3 lian2 jie1 di4 yi1 ke4 de5 zhu3 ti2.", "Câu chuyện liên hệ với chủ đề bài 1: đừng chỉ nhìn lợi nhỏ trước mắt, mà cần nghĩ đến ảnh hưởng phía sau."),
    ],
    extras: [
      extra("注釋", [
        "「今天又不上班」中的「又」表示事情再次發生，語氣上常有抱怨或無奈。",
        "「糗了我一頓」表示讓人覺得很丟臉、很難堪。",
        "「正版商品」是合法授權製造或販售的商品；相對地，「盜版商品」是未經授權的商品。",
        "「統一發票」是台灣商店開給消費者的購買證明，也可以用來對獎。",
        "「對獎」是拿發票號碼和公布的中獎號碼比對，看看是否中獎。",
      ]),
      extra("問題討論", [
        "方正浩認為在地攤上買名牌包有什麼好處？",
        "王美英對購物的觀念和方正浩有什麼不同？",
        "你購物時，喜歡買便宜的商品嗎？為什麼便宜的商品對很多人有吸引力？",
        "你拿取過統一發票嗎？中過獎嗎？請說說你對獎或中獎的經驗。",
        "你同意「因小失大」這個觀念嗎？為什麼？請談談你有過什麼因小失大的經驗。",
        "你認為「上一次當，學一次乖」有道理嗎？為什麼？上過當的人都會學乖嗎？請舉例說明。",
      ], "discussion"),
      extra("課室活動：辯論比賽", [
        "為了省方便而在網路上買衣服、食品和用品。",
        "為了省錢而買一張廉價航空的機票去歐洲旅遊。",
        "市長為了發展都市的經濟，增加工作機會，同意一些公司在都市附近的郊區建工廠。",
      ], "activity"),
      extra("閱讀問答", [
        "你覺得文中的老人是一個怎麼樣的人？",
        "老人的兒子騎回來的馬以後，發生了什麼事？",
        "你有過像這個故事說的「因禍得福」的經驗嗎？請你說一說。",
      ], "discussion"),
    ],
  },
  {
    id: "lesson2-reading-discussion",
    lesson: 2,
    title: "補充：閱讀與討論",
    titlePinyin: "bu3 chong1: yue4 du2 yu3 tao3 lun4",
    titleVi: "Bổ sung: đọc hiểu và thảo luận",
    note: "依照補充圖片人工整理，加入第二課元宵節閱讀與討論。",
    lines: [
      line("閱讀", "台灣民間重要的節慶包括除夕、春節、元宵節、清明節、端午節、中秋節和重陽節等等。元宵節是一月十五日的節日，常被看作過年的最後高潮。", "tai2 wan1 min2 jian1 zhong4 yao4 de5 jie2 qing4 bao1 kuo4 chu2 xi4, chun1 jie2, yuan2 xiao1 jie2.", "Các lễ hội dân gian quan trọng ở Đài Loan gồm đêm giao thừa, Tết, Tết Nguyên tiêu, Thanh minh, Đoan ngọ, Trung thu và Trùng dương."),
      line("閱讀", "元宵節時，不同地區有不同活動。有的地方看花燈、猜燈謎、吃湯圓；台南鹽水則以蜂炮聞名，平溪則以放天燈吸引許多觀光客。", "yuan2 xiao1 jie2 shi2, bu4 tong2 di4 qu1 you3 bu4 tong2 huo2 dong4.", "Vào Tết Nguyên tiêu, các nơi có hoạt động khác nhau như xem đèn, đoán câu đố, ăn chè trôi nước; Diêm Thủy nổi tiếng với pháo ong, Bình Khê nổi tiếng với thả thiên đăng."),
    ],
    extras: [
      extra("問答", [
        "台灣民間重要的節慶包括哪些？",
        "台南市鹽水區的居民用什麼樣的方式來慶祝元宵節？",
        "有人認為放天燈或放蜂炮不環保，應該取消；也有人認為這是民間特色，應該保留。你認為哪種想法有道理？為什麼？",
      ], "discussion"),
    ],
  },
  {
    id: "lesson3-main-manual",
    lesson: 3,
    title: "終身學習",
    titlePinyin: "zhong1 shen1 xue2 xi2",
    titleVi: "Học tập suốt đời",
    note: "依照第三課圖片人工整理。若之後提供更清楚頁面，可再逐句校對成完整版。",
    lines: [
      line("課文", "人的一生，都應該學不同的知識。在學前、幼兒、小學、中學、大學和研究所等階段，我們接受正規的學校教育，由老師有步驟地教學生相關知識。", "ren2 de5 yi4 sheng1, dou1 ying1 gai1 xue2 bu4 tong2 de5 zhi1 shi4.", "Trong suốt cuộc đời, con người nên học nhiều loại tri thức khác nhau. Ở các giai đoạn học tập chính quy, giáo viên hướng dẫn học sinh từng bước."),
      line("課文", "所謂「終身學習」是指一個人從學前到高等階段，持續不斷地學習，並藉由學習提高生活品質。", "suo3 wei4 zhong1 shen1 xue2 xi2 shi4 zhi3 yi2 ge4 ren2 chi2 xu4 bu4 duan4 de5 xue2 xi2.", "Cái gọi là học tập suốt đời là việc một người tiếp tục học không ngừng, từ đó nâng cao chất lượng cuộc sống."),
      line("課文", "為了達成這個目標，除了學校教育外，家庭教育與社會教育也很重要。家庭是孩子最早學習與他人相處的地方。", "wei4 le5 da2 cheng2 zhe4 ge5 mu4 biao1, jia1 ting2 jiao4 yu4 yu3 she4 hui4 jiao4 yu4 ye3 hen3 zhong4 yao4.", "Để đạt mục tiêu này, ngoài giáo dục nhà trường, giáo dục gia đình và xã hội cũng rất quan trọng."),
      line("課文", "父母的教養態度，以及家人之間的關係，都會對孩子的身體與心理發展造成深遠的影響。", "fu4 mu3 de5 jiao4 yang3 tai4 du4 yi3 ji2 jia1 ren2 zhi1 jian1 de5 guan1 xi4, dou1 hui4 zao4 cheng2 shen1 yuan3 de5 ying3 xiang3.", "Thái độ nuôi dạy của cha mẹ và quan hệ trong gia đình đều ảnh hưởng sâu sắc đến sự phát triển thể chất và tâm lý của trẻ."),
      line("課文", "社會教育則來自生活中各種人、事、物，例如社區、圖書館、博物館、媒體與公共活動。由此可見，現代教育的目的，是培養每個人持續學習、獨立思考和解決問題的能力。", "you2 ci3 ke3 jian4, xian4 dai4 jiao4 yu4 de5 mu4 di4 shi4 pei2 yang3 chi2 xu4 xue2 xi2 he2 jie3 jue2 wen4 ti2 de5 neng2 li4.", "Có thể thấy mục tiêu của giáo dục hiện đại là bồi dưỡng năng lực học tập liên tục, tư duy độc lập và giải quyết vấn đề."),
    ],
    extras: [
      extra("本課重點", [
        "主題：介紹華人春節的活動、習俗與由來，並延伸到終身學習的觀念。",
        "目標：能以中文討論家庭教育、社會教育與終身學習。",
        "語法：所謂(的)...是指...、往往、由此可見、...以為...其實...、(雖然)...然而...",
      ]),
    ],
  },
  ...outlineRows.filter((row) => row.lesson >= 4).map((row) => ({
    id: `lesson${row.lesson}-outline-manual`,
    lesson: row.lesson,
    title: `${lessonTitles[row.lesson]}：課程重點`,
    titlePinyin: "",
    titleVi: "Trọng điểm bài học",
    note: "依照補充圖片中的課程重點表人工整理；尚未加入完整課文全文。",
    lines: [
      line("主題", row.topic, "", "Chủ đề bài học."),
      line("目標", row.objective, "", "Mục tiêu học tập."),
    ],
    extras: [
      extra("語法", row.grammar),
      extra("文化", row.culture),
    ],
  })),
];

function grammarItem(lesson, pattern, example) {
  const title = lessonTitles[lesson];
  return {
    id: `manual-outline-grammar-${lesson}-${pattern.replace(/\W+/g, "-").slice(0, 24)}`,
    lesson,
    pattern,
    patternPinyin: "",
    explanationZh: `本語法出自第 ${lesson} 課「${title}」課程重點表。請搭配本課課文、討論題與教師補充例句練習。`,
    explanationPinyin: "",
    explanationVi: `Mẫu ngữ pháp trong bài ${lesson}: ${title}. Hãy luyện cùng bài đọc, câu hỏi thảo luận và ví dụ giáo viên bổ sung.`,
    example,
    examplePinyin: "",
    exampleVi: "Ví dụ luyện tập theo chủ đề bài học.",
    practice: {
      prompt: `請用「${pattern}」依照第 ${lesson} 課主題造一個句子。`,
      answer: example,
    },
  };
}

export const manualSupplementGrammar = outlineRows.flatMap((row) =>
  row.grammar.map((pattern) => grammarItem(row.lesson, pattern, `${lessonTitles[row.lesson]}這一課可以用「${pattern}」來說明課文中的重點。`)),
);
