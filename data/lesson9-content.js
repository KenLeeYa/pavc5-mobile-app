const mark = (type, term, target = term) => ({ type, markType: type, term, text: term, target });

const line = (zh, pinyin, vi, marks = []) => ({ zh, pinyin, vi, marks });

const worksheetItem = (prompt, answer, pinyin, vi, options = []) => ({
  prompt,
  options,
  answer,
  pinyin,
  vi,
});

const practice = (prompt, options, answer, requiredTerms) => ({
  prompt,
  options,
  answer,
  requiredTerms,
});

const lesson9Grammar = [
  {
    id: "lesson9-grammar-1",
    lesson: 9,
    pattern: "……因（為）……（而）變得 SV／（而）變成 N",
    patternPinyin: "……yīn (wèi)……(ér) biàn de SV / (ér) biàn chéng N",
    explanationZh: "說明某個原因使人或事物產生狀態或身分上的變化；「變得」後接狀態，「變成」後接名詞。",
    explanationPinyin: "Shuōmíng mǒu ge yuányīn shǐ rén huò shìwù chǎnshēng zhuàngtài huò shēnfèn shàng de biànhuà; ‘biàn de’ hòu jiē zhuàngtài, ‘biàn chéng’ hòu jiē míngcí.",
    explanationVi: "Diễn tả một nguyên nhân làm người hoặc sự vật thay đổi trạng thái hay thân phận; sau 變得 là trạng thái, sau 變成 là danh từ.",
    example: "乾淨的河流因垃圾汙染而變得混濁；清澈的天空也因工廠排放廢氣變得烏煙瘴氣。",
    examplePinyin: "Gānjìng de héliú yīn lājī wūrǎn ér biàn de hùnzhuó; qīngchè de tiānkōng yě yīn gōngchǎng páifàng fèiqì biàn de wūyān-zhàngqì.",
    exampleVi: "Dòng sông sạch trở nên đục vì ô nhiễm rác; bầu trời trong cũng trở nên mù mịt vì khí thải nhà máy.",
    practice: [
      practice(
        "好的家庭教育會怎麼影響孩子？請用指定句型回答。",
        ["因為……而變得……", "雖然……但是……", "一方面……一方面……"],
        "孩子因為受到良好的家庭教育而變得有責任感。",
        ["因為", "而變得"],
      ),
      practice(
        "連日下雨對空氣有什麼影響？",
        ["因……而變得……", "只要……就……", "不但……而且……"],
        "空氣因連日下雨而變得清新。",
        ["因", "而變得"],
      ),
    ],
  },
  {
    id: "lesson9-grammar-2",
    lesson: 9,
    pattern: "……到……（的）地步",
    patternPinyin: "……dào……(de) dìbù",
    explanationZh: "表示動作或情況持續發展，最後達到某種程度或結果，常帶有說話者的評價。",
    explanationPinyin: "Biǎoshì dòngzuò huò qíngkuàng chíxù fāzhǎn, zuìhòu dádào mǒu zhǒng chéngdù huò jiéguǒ, cháng dài yǒu shuōhuàzhě de píngjià.",
    explanationVi: "Diễn tả hành động hay tình trạng phát triển đến một mức độ hoặc kết quả nhất định, thường kèm đánh giá của người nói.",
    example: "人類把這個獨一無二的家園破壞到這種地步，怎不令人惋惜？",
    examplePinyin: "Rénlèi bǎ zhège dú-yī-wú-èr de jiāyuán pòhuài dào zhè zhǒng dìbù, zěn bù lìng rén wǎnxī?",
    exampleVi: "Con người phá hoại mái nhà độc nhất này đến mức như vậy, sao không khiến người ta tiếc nuối?",
    practice: [
      practice(
        "最近空氣品質很差，出門時大家必須做什麼？",
        ["到……的地步", "以……而言", "如何"],
        "空氣差到出門必須戴口罩的地步。",
        ["到", "的地步"],
      ),
    ],
  },
  {
    id: "lesson9-grammar-3",
    lesson: 9,
    pattern: "怎不令……SV？",
    patternPinyin: "zěn bù lìng……SV?",
    explanationZh: "用反問語氣強調某件事必然使人產生某種感受，意思接近「一定令人……」。",
    explanationPinyin: "Yòng fǎnwèn yǔqì qiángdiào mǒu jiàn shì bìrán shǐ rén chǎnshēng mǒu zhǒng gǎnshòu, yìsi jiējìn ‘yídìng lìng rén……’.",
    explanationVi: "Dùng câu hỏi tu từ để nhấn mạnh một việc tất nhiên gây ra cảm xúc nào đó; gần nghĩa với “nhất định khiến người ta…”.",
    example: "人類把家園破壞到這種地步，怎不令人惋惜？",
    examplePinyin: "Rénlèi bǎ jiāyuán pòhuài dào zhè zhǒng dìbù, zěn bù lìng rén wǎnxī?",
    exampleVi: "Con người phá hoại mái nhà đến mức này, sao không khiến người ta tiếc nuối?",
    practice: [
      practice(
        "許多人長期投入環保工作，你有什麼感受？",
        ["怎不令……？", "如何", "也好……也好……"],
        "大家長期為環保努力，怎不令人感動？",
        ["怎不令", "感動"],
      ),
    ],
  },
  {
    id: "lesson9-grammar-4",
    lesson: 9,
    pattern: "如何",
    patternPinyin: "rúhé",
    explanationZh: "詢問做事的方法或情況，意思接近「怎麼」；書面語中常放在動詞前。",
    explanationPinyin: "Xúnwèn zuòshì de fāngfǎ huò qíngkuàng, yìsi jiējìn ‘zěnme’; shūmiànyǔ zhōng cháng fàng zài dòngcí qián.",
    explanationVi: "Hỏi cách làm hoặc tình hình, gần nghĩa với 怎麼; trong văn viết thường đứng trước động từ.",
    example: "父母和師長若能以身作則，孩子自然而然會知道如何保護環境。",
    examplePinyin: "Fùmǔ hé shīzhǎng ruò néng yǐ-shēn-zuò-zé, háizi zìrán-ér-rán huì zhīdào rúhé bǎohù huánjìng.",
    exampleVi: "Nếu cha mẹ và thầy cô làm gương, trẻ sẽ tự nhiên biết cách bảo vệ môi trường.",
    practice: [
      practice(
        "請說明從日常生活保護環境的方法。",
        ["如何", "怎不令", "到……的地步"],
        "我們可以從垃圾分類開始，學習如何保護環境。",
        ["如何"],
      ),
    ],
  },
  {
    id: "lesson9-grammar-5",
    lesson: 9,
    pattern: "……也好，……也好，……都……",
    patternPinyin: "……yě hǎo, ……yě hǎo, ……dōu……",
    explanationZh: "列出兩個或更多可能性，表示不論選哪一個，後面的結果或看法都不改變。",
    explanationPinyin: "Lièchū liǎng ge huò gèng duō kěnéngxìng, biǎoshì búlùn xuǎn nǎ yí ge, hòumiàn de jiéguǒ huò kànfǎ dōu bù gǎibiàn.",
    explanationVi: "Nêu hai hay nhiều khả năng và cho biết dù chọn khả năng nào thì kết quả hay quan điểm phía sau vẫn không đổi.",
    example: "高峰會議討論也好，家庭或學校推行也好，我們每個人都有保護地球的使命。",
    examplePinyin: "Gāofēng huìyì tǎolùn yě hǎo, jiātíng huò xuéxiào tuīxíng yě hǎo, wǒmen měi ge rén dōu yǒu bǎohù dìqiú de shǐmìng.",
    exampleVi: "Dù là thảo luận tại hội nghị thượng đỉnh hay thực hiện ở gia đình và trường học, mỗi người đều có sứ mệnh bảo vệ Trái Đất.",
    practice: [
      practice(
        "請舉出兩種可以減少空氣汙染的交通方式。",
        ["……也好，……也好，……都……", "因為……所以……", "一……就……"],
        "搭捷運也好，騎腳踏車也好，都是減少空氣汙染的方法。",
        ["也好", "都是"],
      ),
    ],
  },
];

const vocabularyRows = [
  ["尖兵", "jiānbīng", "走在前面、帶頭的人。", "Zǒu zài qiánmiàn, dàitóu de rén.", "người tiên phong"],
  ["星球", "xīngqiú", "宇宙中像地球一樣的大型天體。", "Yǔzhòu zhōng xiàng dìqiú yíyàng de dàxíng tiāntǐ.", "hành tinh"],
  ["珍貴", "zhēnguì", "價值很高，值得珍惜。", "Jiàzhí hěn gāo, zhídé zhēnxī.", "quý giá"],
  ["資產", "zīchǎn", "屬於個人、團體或國家的財物與資源。", "Shǔyú gèrén, tuántǐ huò guójiā de cáiwù yǔ zīyuán.", "tài sản"],
  ["混濁", "hùnzhuó", "水或空氣不清澈。", "Shuǐ huò kōngqì bù qīngchè.", "đục, ô nhiễm"],
  ["茂密", "màomì", "草木生長得又多又密。", "Cǎomù shēngzhǎng de yòu duō yòu mì.", "rậm rạp"],
  ["濫伐", "lànfá", "沒有節制地砍伐樹木。", "Méiyǒu jiézhì de kǎnfá shùmù.", "chặt phá bừa bãi"],
  ["乾枯", "gānkū", "因缺水而失去生氣。", "Yīn quē shuǐ ér shīqù shēngqì.", "khô héo"],
  ["清澈", "qīngchè", "乾淨透明，可以看得很清楚。", "Gānjìng tòumíng, kěyǐ kàn de hěn qīngchu.", "trong veo"],
  ["天空", "tiānkōng", "地面以上廣大的空間。", "Dìmiàn yǐshàng guǎngdà de kōngjiān.", "bầu trời"],
  ["排放", "páifàng", "把廢氣、廢水等送到外界。", "Bǎ fèiqì, fèishuǐ děng sòng dào wàijiè.", "thải ra"],
  ["廢氣", "fèiqì", "生產或燃燒後產生的無用氣體。", "Shēngchǎn huò ránshāo hòu chǎnshēng de wúyòng qìtǐ.", "khí thải"],
  ["惋惜", "wǎnxī", "對不好的結果感到可惜。", "Duì bù hǎo de jiéguǒ gǎndào kěxī.", "tiếc nuối"],
  ["日趨", "rìqū", "一天一天朝某種情況發展。", "Yì tiān yì tiān cháo mǒu zhǒng qíngkuàng fāzhǎn.", "ngày càng"],
  ["表面", "biǎomiàn", "事物外面看得見的部分。", "Shìwù wàimiàn kàn de jiàn de bùfen.", "bề mặt"],
  ["臭氧層", "chòuyǎngcéng", "大氣中能吸收多數紫外線的一層氣體。", "Dàqì zhōng néng xīshōu duōshù zǐwàixiàn de yì céng qìtǐ.", "tầng ô-dôn"],
  ["稀薄", "xībó", "濃度低，不濃密。", "Nóngdù dī, bù nóngmì.", "mỏng, loãng"],
  ["紫外線", "zǐwàixiàn", "太陽光中肉眼看不見的一種射線。", "Tàiyángguāng zhōng ròuyǎn kàn bú jiàn de yì zhǒng shèxiàn.", "tia tử ngoại"],
  ["滅絕", "mièjué", "一個物種完全消失。", "Yí ge wùzhǒng wánquán xiāoshī.", "tuyệt chủng"],
  ["生態", "shēngtài", "生物與環境互相影響的狀態。", "Shēngwù yǔ huánjìng hùxiāng yǐngxiǎng de zhuàngtài.", "sinh thái"],
  ["平衡", "pínghéng", "各方面保持穩定、沒有過多或過少。", "Gè fāngmiàn bǎochí wěndìng, méiyǒu guòduō huò guòshǎo.", "cân bằng"],
  ["南極", "nánjí", "地球最南端的地區。", "Dìqiú zuì nánduān de dìqū.", "Nam Cực"],
  ["冰川", "bīngchuān", "長年積雪形成並緩慢移動的大冰體。", "Chángnián jīxuě xíngchéng bìng huǎnmàn yídòng de dà bīngtǐ.", "sông băng"],
  ["加速", "jiāsù", "使速度變快。", "Shǐ sùdù biàn kuài.", "tăng tốc"],
  ["導致", "dǎozhì", "引起某種結果，多指不好的結果。", "Yǐnqǐ mǒu zhǒng jiéguǒ, duō zhǐ bù hǎo de jiéguǒ.", "dẫn đến"],
  ["上升", "shàngshēng", "位置、數量或程度提高。", "Wèizhì, shùliàng huò chéngdù tígāo.", "tăng lên"],
  ["淹沒", "yānmò", "水蓋過陸地或物體。", "Shuǐ gàiguò lùdì huò wùtǐ.", "nhấn chìm"],
  ["沿海", "yánhǎi", "靠近海岸的地區。", "Kàojìn hǎi'àn de dìqū.", "ven biển"],
  ["縮減", "suōjiǎn", "減少原有的數量或範圍。", "Jiǎnshǎo yuányǒu de shùliàng huò fànwéi.", "thu hẹp, cắt giảm"],
  ["未來", "wèilái", "現在以後的時間。", "Xiànzài yǐhòu de shíjiān.", "tương lai"],
  ["遷徙", "qiānxǐ", "從一個地方移到另一個地方居住。", "Cóng yí ge dìfang yí dào lìng yí ge dìfang jūzhù.", "di cư"],
  ["促使", "cùshǐ", "推動某件事情發生。", "Tuīdòng mǒu jiàn shìqing fāshēng.", "thúc đẩy"],
  ["制定", "zhìdìng", "依照需要訂出規則或辦法。", "Yīzhào xūyào dìngchū guīzé huò bànfǎ.", "xây dựng, ban hành"],
  ["避免", "bìmiǎn", "設法不讓某件事發生。", "Shèfǎ bù ràng mǒu jiàn shì fāshēng.", "tránh"],
  ["氣體", "qìtǐ", "沒有固定形狀、會充滿空間的物質。", "Méiyǒu gùdìng xíngzhuàng, huì chōngmǎn kōngjiān de wùzhì.", "chất khí"],
  ["隨手", "suíshǒu", "順便、不費力地做。", "Shùnbiàn, bú fèilì de zuò.", "tiện tay"],
  ["攜帶", "xiédài", "把物品帶在身邊。", "Bǎ wùpǐn dài zài shēnbiān.", "mang theo"],
  ["餐具", "cānjù", "吃飯時使用的碗、筷、刀叉等用品。", "Chīfàn shí shǐyòng de wǎn, kuài, dāochā děng yòngpǐn.", "dụng cụ ăn uống"],
  ["推行", "tuīxíng", "推廣並實行一種制度或觀念。", "Tuīguǎng bìng shíxíng yì zhǒng zhìdù huò guānniàn.", "thực hiện, phổ biến"],
  ["將（把）", "jiāng (bǎ)", "把受影響的事物提前，說明如何處理它。", "Bǎ shòu yǐngxiǎng de shìwù tíqián, shuōmíng rúhé chǔlǐ tā.", "đem, đưa (cấu trúc 把)"],
  ["神聖", "shénshèng", "莊嚴而不可侵犯。", "Zhuāngyán ér bùkě qīnfàn.", "thiêng liêng"],
  ["使命", "shǐmìng", "必須完成的重要責任。", "Bìxū wánchéng de zhòngyào zérèn.", "sứ mệnh"],
];

const idiomRows = [
  ["烏煙瘴氣", "wūyān-zhàngqì", "形容空氣混濁，也比喻環境混亂。", "Xíngróng kōngqì hùnzhuó, yě bǐyù huánjìng hùnluàn.", "khói bụi mù mịt; hỗn loạn"],
  ["獨一無二", "dú-yī-wú-èr", "只有一個，沒有相同的。", "Zhǐyǒu yí ge, méiyǒu xiāngtóng de.", "độc nhất vô nhị"],
  ["捫心自問", "mén-xīn-zì-wèn", "摸著良心問自己，認真反省。", "Mōzhe liángxīn wèn zìjǐ, rènzhēn fǎnxǐng.", "tự hỏi lương tâm"],
  ["以身作則", "yǐ-shēn-zuò-zé", "用自己的行動做別人的榜樣。", "Yòng zìjǐ de xíngdòng zuò biérén de bǎngyàng.", "lấy mình làm gương"],
  ["耳濡目染", "ěr-rú-mù-rǎn", "經常接觸而在不知不覺中受到影響。", "Jīngcháng jiēchù ér zài bùzhībùjué zhōng shòudào yǐngxiǎng.", "thấm dần qua tai mắt"],
  ["自然而然", "zìrán-ér-rán", "不必勉強，自然就會如此。", "Búbì miǎnqiǎng, zìrán jiù huì rúcǐ.", "một cách tự nhiên"],
  ["山明水秀", "shān-míng-shuǐ-xiù", "形容山水景色清麗美好。", "Xíngróng shānshuǐ jǐngsè qīnglì měihǎo.", "non xanh nước biếc"],
];

const makeCard = (row, index, type = "詞語") => {
  const [term, pinyin, meaningZh, meaningPinyin, meaningVi] = row;
  return {
    id: `lesson9-card-${index + 1}`,
    lesson: 9,
    type,
    term,
    pinyin,
    meaningZh,
    meaningPinyin,
    meaningVi,
    example: `課文用「${term}」說明環境保護的議題。`,
    examplePinyin: `Kèwén yòng “${pinyin}” shuōmíng huánjìng bǎohù de yìtí.`,
    exampleVi: "Bài khóa dùng từ này để trình bày chủ đề bảo vệ môi trường.",
    audioUrl: "",
  };
};

const vocabularyCards = vocabularyRows.map((row, index) => makeCard(row, index));
const idiomCards = idiomRows.map((row, index) => makeCard(row, vocabularyCards.length + index, "成語"));
const grammarCards = lesson9Grammar.map((item, index) => ({
  id: `lesson9-card-${vocabularyCards.length + idiomCards.length + index + 1}`,
  lesson: 9,
  type: "語法",
  term: item.pattern,
  pinyin: item.patternPinyin,
  meaningZh: item.explanationZh,
  meaningPinyin: item.explanationPinyin,
  meaningVi: item.explanationVi,
  example: item.example,
  examplePinyin: item.examplePinyin,
  exampleVi: item.exampleVi,
  audioUrl: "",
}));
const sentenceCard = {
  id: `lesson9-card-${vocabularyCards.length + idiomCards.length + grammarCards.length + 1}`,
  lesson: 9,
  type: "句型",
  term: "人人都是環保尖兵",
  pinyin: "rénrén dōu shì huánbǎo jiānbīng",
  meaningZh: "每一個人都能從日常行動開始，成為保護環境的先鋒。",
  meaningPinyin: "Měi yí ge rén dōu néng cóng rìcháng xíngdòng kāishǐ, chéngwéi bǎohù huánjìng de xiānfēng.",
  meaningVi: "Ai cũng có thể bắt đầu từ hành động hằng ngày và trở thành người tiên phong bảo vệ môi trường.",
  example: "環保人人有責，所以人人都是環保尖兵。",
  examplePinyin: "Huánbǎo rénrén yǒu zé, suǒyǐ rénrén dōu shì huánbǎo jiānbīng.",
  exampleVi: "Bảo vệ môi trường là trách nhiệm của mọi người, vì thế ai cũng là người tiên phong.",
  audioUrl: "",
};

const properCards = [
  ["地球日", "Dìqiú Rì", "每年四月二十二日推動環境保護的全球活動。", "Měinián sì yuè èrshí'èr rì tuīdòng huánjìng bǎohù de quánqiú huódòng.", "Ngày Trái Đất"],
  ["地球高峰會", "Dìqiú Gāofēnghuì", "各國討論全球環境與永續發展的高峰會議。", "Gèguó tǎolùn quánqiú huánjìng yǔ yǒngxù fāzhǎn de gāofēng huìyì.", "Hội nghị Thượng đỉnh Trái Đất"],
  ["京都議定書", "Jīngdū Yìdìngshū", "規定締約國減少溫室氣體排放的國際協議。", "Guīdìng dìyuēguó jiǎnshǎo wēnshì qìtǐ páifàng de guójì xiéyì.", "Nghị định thư Kyoto"],
].map((row, index) => ({
  ...makeCard(row, vocabularyCards.length + idiomCards.length + grammarCards.length + index + 2, "專有名詞"),
  id: `lesson9-card-proper-${index + 1}`,
  term: row[0],
}));

const lesson9Cards = [...vocabularyCards, ...idiomCards, ...grammarCards, sentenceCard, ...properCards];

const lesson9Texts = [
  (() => {
    const text = {
    id: "lesson9-main-text",
    lesson: 9,
    title: "第 9 課 人人都是環保尖兵",
    titlePinyin: "Dì jiǔ kè: Rénrén dōu shì huánbǎo jiānbīng",
    titleVi: "Bài 9: Ai cũng là người tiên phong bảo vệ môi trường",
    lines: [
      line(
        "我們生活的地球，是一個非常美麗的星球，也是人類最珍貴的資產。但是，現在的地球已不再美麗。乾淨的河流因垃圾汙染而變得混濁；茂密的森林因濫伐變得乾枯；清澈的天空也因工廠排放廢氣變得烏煙瘴氣。人類把這個獨一無二的家園破壞到這種地步，怎不令人惋惜？",
        "Wǒmen shēnghuó de dìqiú, shì yí ge fēicháng měilì de xīngqiú, yě shì rénlèi zuì zhēnguì de zīchǎn. Dànshì, xiànzài de dìqiú yǐ bú zài měilì. Gānjìng de héliú yīn lājī wūrǎn ér biàn de hùnzhuó; màomì de sēnlín yīn lànfá biàn de gānkū; qīngchè de tiānkōng yě yīn gōngchǎng páifàng fèiqì biàn de wūyān-zhàngqì. Rénlèi bǎ zhège dú-yī-wú-èr de jiāyuán pòhuài dào zhè zhǒng dìbù, zěn bù lìng rén wǎnxī?",
        "Trái Đất nơi chúng ta sống từng là một hành tinh rất đẹp và là tài sản quý giá nhất của loài người. Nhưng nay sông ngòi vì rác mà trở nên đục, rừng rậm vì chặt phá bừa bãi mà khô héo, bầu trời trong vì khí thải nhà máy mà mù mịt. Con người phá hoại mái nhà độc nhất này đến mức ấy, sao không khiến người ta tiếc nuối?",
        [
          mark("vocab", "混濁"),
          mark("vocab", "濫伐"),
          mark("idiom", "烏煙瘴氣"),
          mark("idiom", "獨一無二"),
          mark("grammar", "因垃圾汙染而變得混濁", "……因（為）……（而）變得 SV／（而）變成 N"),
          mark("grammar", "到這種地步", "……到……（的）地步"),
          mark("grammar", "怎不令人惋惜？", "怎不令……SV？"),
        ],
      ),
      line(
        "日趨嚴重的情況不只出現在地球表面，地球上空保護我們的臭氧層，也因為人類的汙染而變得越來越稀薄。缺少臭氧層的保護，太陽的紫外線會直接傷害我們的皮膚，並造成某些生物的滅絕，影響生態的平衡。更令人擔心的是，溫室效應引起全球暖化，可能帶來更多天災人禍。例如，海洋溫度增加，南極的冰川加速融化，導致海平面上升，淹沒沿海地區。這些現象正在縮減人類的居住環境，未來可能因此發生遷徙或戰爭。",
        "Rìqū yánzhòng de qíngkuàng bù zhǐ chūxiàn zài dìqiú biǎomiàn, dìqiú shàngkōng bǎohù wǒmen de chòuyǎngcéng, yě yīnwèi rénlèi de wūrǎn ér biàn de yuèláiyuè xībó. Quēshǎo chòuyǎngcéng de bǎohù, tàiyáng de zǐwàixiàn huì zhíjiē shānghài wǒmen de pífū, bìng zàochéng mǒuxiē shēngwù de mièjué, yǐngxiǎng shēngtài de pínghéng. Gèng lìng rén dānxīn de shì, wēnshì xiàoyìng yǐnqǐ quánqiú nuǎnhuà, kěnéng dàilái gèng duō tiānzāi-rénhuò. Lìrú, hǎiyáng wēndù zēngjiā, Nánjí de bīngchuān jiāsù rónghuà, dǎozhì hǎipíngmiàn shàngshēng, yānmò yánhǎi dìqū. Zhèxiē xiànxiàng zhèngzài suōjiǎn rénlèi de jūzhù huánjìng, wèilái kěnéng yīncǐ fāshēng qiānxǐ huò zhànzhēng.",
        "Tình trạng ngày càng nghiêm trọng không chỉ xuất hiện trên bề mặt Trái Đất; tầng ô-dôn trên cao bảo vệ chúng ta cũng ngày càng mỏng vì ô nhiễm do con người gây ra. Thiếu sự bảo vệ của tầng ô-dôn, tia tử ngoại từ Mặt Trời sẽ trực tiếp làm tổn thương da, khiến một số sinh vật tuyệt chủng và ảnh hưởng cân bằng sinh thái. Đáng lo hơn, hiệu ứng nhà kính gây nóng lên toàn cầu và có thể kéo theo nhiều thiên tai, tai họa do con người. Chẳng hạn, nhiệt độ đại dương tăng, băng Nam Cực tan nhanh, làm mực nước biển dâng và nhấn chìm vùng ven biển. Những hiện tượng này đang thu hẹp môi trường cư trú của con người và tương lai có thể dẫn đến di cư hoặc chiến tranh.",
        [mark("vocab", "臭氧層"), mark("vocab", "紫外線"), mark("vocab", "滅絕"), mark("vocab", "冰川"), mark("vocab", "淹沒")],
      ),
      line(
        "1970年4月22日在美國舉行的第一屆「地球日」活動，是全球環保運動的開始。後來，由數千名環保人士所組成的團體出力奔走，促使一百多個國家成立負責環保工作的組織。透過這些組織的努力，許多國家制定了各種避免汙染的法規。1992年在巴西舉行的第一屆「地球高峰會」，目的就是要解決地球溫度上升、森林濫伐等嚴重的問題。1997年12月，各國代表又在日本舉行會議，通過「京都議定書」，規定減少二氧化碳等溫室氣體的排放量，以減少空氣汙染對地球環境的傷害。",
        "Yījiǔqīlíng nián sì yuè èrshí'èr rì zài Měiguó jǔxíng de dì yī jiè ‘Dìqiú Rì’ huódòng, shì quánqiú huánbǎo yùndòng de kāishǐ. Hòulái, yóu shùqiān míng huánbǎo rénshì suǒ zǔchéng de tuántǐ chūlì bēnzǒu, cùshǐ yìbǎi duō ge guójiā chénglì fùzé huánbǎo gōngzuò de zǔzhī. Tòuguò zhèxiē zǔzhī de nǔlì, xǔduō guójiā zhìdìng le gè zhǒng bìmiǎn wūrǎn de fǎguī. Yījiǔjiǔ'èr nián zài Bāxī jǔxíng de dì yī jiè ‘Dìqiú Gāofēnghuì’, mùdì jiùshì yào jiějué dìqiú wēndù shàngshēng, sēnlín lànfá děng yánzhòng de wèntí. Yījiǔjiǔqī nián shí'èr yuè, gèguó dàibiǎo yòu zài Rìběn jǔxíng huìyì, tōngguò ‘Jīngdū Yìdìngshū’, guīdìng jiǎnshǎo èryǎnghuàtàn děng wēnshì qìtǐ de páifàngliàng, yǐ jiǎnshǎo kōngqì wūrǎn duì dìqiú huánjìng de shānghài.",
        "Ngày 22 tháng 4 năm 1970, hoạt động Ngày Trái Đất lần đầu tổ chức tại Mỹ là khởi đầu của phong trào bảo vệ môi trường toàn cầu. Sau đó, các đoàn thể do hàng nghìn nhà hoạt động môi trường lập nên đã đi khắp nơi vận động, thúc đẩy hơn một trăm quốc gia thành lập các tổ chức phụ trách bảo vệ môi trường. Nhờ nỗ lực của những tổ chức này, nhiều quốc gia ban hành nhiều quy định phòng tránh ô nhiễm. Hội nghị Thượng đỉnh Trái Đất lần đầu tổ chức tại Brazil năm 1992 nhằm giải quyết các vấn đề nghiêm trọng như nhiệt độ Trái Đất tăng và phá rừng. Tháng 12 năm 1997, đại diện các nước lại họp tại Nhật Bản, thông qua Nghị định thư Kyoto, quy định giảm lượng phát thải khí nhà kính như carbon dioxide, qua đó giảm tác hại của ô nhiễm không khí đối với môi trường Trái Đất.",
        [mark("vocab", "促使"), mark("vocab", "制定"), mark("proper", "「地球日」", "地球日"), mark("proper", "「地球高峰會」", "地球高峰會"), mark("proper", "「京都議定書」", "京都議定書"), mark("vocab", "氣體")],
      ),
      line(
        "當這些大問題引起全球注意時，我們應該捫心自問：我是否隨手關燈？是否自己攜帶環保餐具？是否少開車，多搭大眾交通工具？環保應該是由小地方做起，也從自己做起。其實，家庭與學校就是推行環保觀念最理想的地方。父母和師長若能以身作則，孩子天天耳濡目染，自然而然會知道如何保護環境，例如將垃圾分類，做好資源回收；愛惜資源，省水省電；保護樹木與動物，維護生態。總之，高峰會議討論也好，家庭或學校推行也好，我們每個人都有一個神聖的使命，就是保護地球，人人有責。所以說，人人都是環保尖兵。",
        "Dāng zhèxiē dà wèntí yǐnqǐ quánqiú zhùyì shí, wǒmen yīnggāi mén-xīn-zì-wèn: wǒ shìfǒu suíshǒu guān dēng? Shìfǒu zìjǐ xiédài huánbǎo cānjù? Shìfǒu shǎo kāichē, duō dā dàzhòng jiāotōng gōngjù? Huánbǎo yīnggāi shì yóu xiǎo dìfang zuò qǐ, yě cóng zìjǐ zuò qǐ. Qíshí, jiātíng yǔ xuéxiào jiùshì tuīxíng huánbǎo guānniàn zuì lǐxiǎng de dìfang. Fùmǔ hé shīzhǎng ruò néng yǐ-shēn-zuò-zé, háizi tiāntiān ěr-rú-mù-rǎn, zìrán-ér-rán huì zhīdào rúhé bǎohù huánjìng, lìrú jiāng lājī fēnlèi, zuòhǎo zīyuán huíshōu; àixī zīyuán, shěng shuǐ shěng diàn; bǎohù shùmù yǔ dòngwù, wéihù shēngtài. Zǒngzhī, gāofēng huìyì tǎolùn yě hǎo, jiātíng huò xuéxiào tuīxíng yě hǎo, wǒmen měi ge rén dōu yǒu yí ge shénshèng de shǐmìng, jiùshì bǎohù dìqiú, rénrén yǒu zé. Suǒyǐ shuō, rénrén dōu shì huánbǎo jiānbīng.",
        "Khi những vấn đề lớn này thu hút sự chú ý toàn cầu, chúng ta nên tự vấn: tôi có tiện tay tắt đèn không? Có tự mang bộ đồ ăn thân thiện môi trường không? Có bớt lái xe và đi phương tiện công cộng nhiều hơn không? Bảo vệ môi trường phải bắt đầu từ việc nhỏ và từ chính mình. Gia đình và trường học là nơi lý tưởng nhất để phổ biến quan niệm bảo vệ môi trường. Nếu cha mẹ và thầy cô làm gương, trẻ em sẽ thấm dần mỗi ngày và tự nhiên biết cách bảo vệ môi trường, như phân loại rác, tái chế tài nguyên; quý trọng tài nguyên, tiết kiệm nước điện; bảo vệ cây cối, động vật và gìn giữ sinh thái. Tóm lại, dù thảo luận ở hội nghị thượng đỉnh hay thực hiện trong gia đình và trường học, mỗi người chúng ta đều có một sứ mệnh thiêng liêng: bảo vệ Trái Đất. Mọi người đều có trách nhiệm; vì thế ai cũng là chiến sĩ tiên phong bảo vệ môi trường.",
        [
          mark("idiom", "捫心自問"),
          mark("idiom", "以身作則"),
          mark("idiom", "耳濡目染"),
          mark("idiom", "自然而然"),
          mark("grammar", "如何保護環境", "如何"),
          mark("grammar", "高峰會議討論也好，家庭或學校推行也好", "……也好，……也好，……都……"),
          mark("vocab", "人人都是環保尖兵"),
        ],
      ),
    ],
    worksheet: {
      title: "第九課學習單",
      vi: "Phiếu học tập Bài 9",
      sections: [
        {
          title: "問題討論",
          tone: "discussion",
          items: [
            worksheetItem(
              "課文提到哪些主要的環境問題？",
              "課文提到河川汙染、森林濫伐、空氣汙染、臭氧層稀薄、全球暖化與海平面上升。",
              "Kèwén tídào héliú wūrǎn, sēnlín lànfá, kōngqì wūrǎn, chòuyǎngcéng xībó, quánqiú nuǎnhuà yǔ hǎipíngmiàn shàngshēng.",
              "Bài nêu ô nhiễm sông ngòi, phá rừng, ô nhiễm không khí, tầng ô-dôn mỏng, nóng lên toàn cầu và mực nước biển dâng.",
              ["河川與森林", "臭氧層與暖化", "以上皆是"],
            ),
            worksheetItem(
              "為什麼說「人人都是環保尖兵」？",
              "因為環保要從每個人的日常小事做起，人人都有保護地球的責任。",
              "Yīnwèi huánbǎo yào cóng měi ge rén de rìcháng xiǎoshì zuò qǐ, rénrén dōu yǒu bǎohù dìqiú de zérèn.",
              "Vì bảo vệ môi trường bắt đầu từ việc nhỏ hằng ngày và ai cũng có trách nhiệm bảo vệ Trái Đất.",
              ["只有政府有責任", "人人都能採取行動", "只有學校能推行"],
            ),
            worksheetItem(
              "發展經濟與保護環境衝突時，你認為應該怎麼做？",
              "應在發展前評估環境風險，訂定法規並採用較乾淨的技術，讓兩者取得平衡。",
              "Yīng zài fāzhǎn qián pínggū huánjìng fēngxiǎn, dìngdìng fǎguī bìng cǎiyòng jiào gānjìng de jìshù, ràng liǎngzhě qǔdé pínghéng.",
              "Nên đánh giá rủi ro môi trường, ban hành quy định và dùng công nghệ sạch để cân bằng phát triển với bảo vệ môi trường.",
              ["只發展經濟", "只停止所有建設", "兼顧發展與環境"],
            ),
          ],
        },
        {
          title: "課堂活動",
          tone: "activity",
          items: [
            worksheetItem(
              "小組選一個居住地的環境問題，準備五分鐘報告；報告要包含哪些內容？",
              "要說明問題的現況、原因、影響與可行的解決方法，並使用至少五個本課詞語。",
              "Yào shuōmíng wèntí de xiànkuàng, yuányīn, yǐngxiǎng yǔ kěxíng de jiějué fāngfǎ, bìng shǐyòng zhìshǎo wǔ ge běn kè cíyǔ.",
              "Cần trình bày hiện trạng, nguyên nhân, ảnh hưởng và giải pháp khả thi, đồng thời dùng ít nhất năm từ của bài.",
              ["只念題目", "現況、原因、影響、解法", "只列生詞"],
            ),
            worksheetItem(
              "請設計一項班級一週環保行動。",
              "全班自備餐具並做好垃圾分類，每天記錄減少的一次性用品數量。",
              "Quánbān zìbèi cānjù bìng zuòhǎo lājī fēnlèi, měitiān jìlù jiǎnshǎo de yícìxìng yòngpǐn shùliàng.",
              "Cả lớp tự mang dụng cụ ăn uống, phân loại rác và ghi lại số đồ dùng một lần giảm được mỗi ngày.",
              ["自備餐具與分類", "增加一次性用品", "每天開車上學"],
            ),
          ],
        },
        {
          title: "延伸閱讀：山明水秀",
          tone: "reading",
          items: [
            worksheetItem(
              "青青的父親為什麼選基隆河附近蓋別墅？",
              "他認為那裡山明水秀、環境優美，也想享受辛苦工作後的生活。",
              "Tā rènwéi nàlǐ shān-míng-shuǐ-xiù, huánjìng yōuměi, yě xiǎng xiǎngshòu xīnkǔ gōngzuò hòu de shēnghuó.",
              "Ông cho rằng nơi ấy non xanh nước biếc, cảnh đẹp và muốn tận hưởng cuộc sống sau nhiều năm làm việc vất vả.",
              ["因為交通便宜", "因為山明水秀", "因為工廠很多"],
            ),
            worksheetItem(
              "青青要求父親怎麼處理工廠廢水？",
              "她要求父親從自己的工廠做起，徹底處理廢水，不把汙水排入河川。",
              "Tā yāoqiú fùqīn cóng zìjǐ de gōngchǎng zuò qǐ, chèdǐ chǔlǐ fèishuǐ, bù bǎ wūshuǐ páirù héchuān.",
              "Cô yêu cầu cha bắt đầu từ nhà máy của mình, xử lý triệt để nước thải và không xả xuống sông.",
              ["直接排放", "完全處理廢水", "把工廠搬到河邊"],
            ),
          ],
        },
      ],
    },
    };
    text.extras = text.worksheet.sections.map((section) => ({ type: "worksheet", ...section }));
    return text;
  })(),
];

export const lesson9Content = {
  cards: lesson9Cards,
  texts: lesson9Texts,
  grammar: lesson9Grammar,
};
