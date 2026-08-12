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

const lesson10Grammar = [
  {
    id: "lesson10-grammar-1",
    lesson: 10,
    pattern: "……反映出……",
    patternPinyin: "……fǎnyìng chū……",
    explanationZh: "「反映出」表示從一件具體的事情或現象，看出背後較抽象的情況。",
    explanationPinyin: "‘Fǎnyìng chū’ biǎoshì cóng yí jiàn jùtǐ de shìqing huò xiànxiàng, kànchū bèihòu jiào chōuxiàng de qíngkuàng.",
    explanationVi: "反映出 cho biết từ một sự việc hay hiện tượng cụ thể có thể nhìn ra tình hình trừu tượng phía sau.",
    example: "「吃什麼」與「怎麼吃」可以反映出人類對生活的習慣與看法。",
    examplePinyin: "‘Chī shénme’ yǔ ‘zěnme chī’ kěyǐ fǎnyìng chū rénlèi duì shēnghuó de xíguàn yǔ kànfǎ.",
    exampleVi: "Ăn gì và ăn như thế nào có thể phản ánh thói quen và quan điểm sống của con người.",
    practice: [
      practice(
        "現代人的死亡率下降，這個現象讓我們知道什麼？",
        ["反映出", "為了……著想", "俗話說得好"],
        "現代人的死亡率下降反映出醫學科技的進步。",
        ["反映出"],
      ),
      practice(
        "小謝常參加服務活動，這表示什麼？",
        ["反映出", "固然……但是……", "以……而言"],
        "小謝常參加服務活動，反映出他熱心公益。",
        ["反映出"],
      ),
    ],
  },
  {
    id: "lesson10-grammar-2",
    lesson: 10,
    pattern: "以……而言／來說，……",
    patternPinyin: "yǐ……ér yán / lái shuō, ……",
    explanationZh: "先限定一個主題或立場，再說明這個主題之下某一方面的情況；「以……來說」較口語。",
    explanationPinyin: "Xiān xiàndìng yí ge zhǔtí huò lìchǎng, zài shuōmíng zhège zhǔtí zhīxià mǒu yì fāngmiàn de qíngkuàng; ‘yǐ……lái shuō’ jiào kǒuyǔ.",
    explanationVi: "Trước hết giới hạn một chủ đề hoặc lập trường, sau đó nói về một khía cạnh trong chủ đề ấy; 以……來說 mang tính khẩu ngữ hơn.",
    example: "以素食而言，現在很多國家都流行素食主義。",
    examplePinyin: "Yǐ sùshí ér yán, xiànzài hěn duō guójiā dōu liúxíng sùshí zhǔyì.",
    exampleVi: "Xét về ăn chay, hiện nay chủ nghĩa ăn chay phổ biến ở nhiều quốc gia.",
    practice: [
      practice(
        "請從價錢和品質兩方面談仿冒品。",
        ["以……而言", "反映出", "俗話說得好"],
        "以價錢而言，仿冒品通常比較便宜；以品質而言，仿冒品往往不如正版商品。",
        ["以", "而言"],
      ),
    ],
  },
  {
    id: "lesson10-grammar-3",
    lesson: 10,
    pattern: "……固然……，但是……",
    patternPinyin: "……gùrán……, dànshì……",
    explanationZh: "先承認前面的情況正確，再提出另一個不可忽略、常與前項相對的看法。",
    explanationPinyin: "Xiān chéngrèn qiánmiàn de qíngkuàng zhèngquè, zài tíchū lìng yí ge bùkě hūlüè, cháng yǔ qiánxiàng xiāngduì de kànfǎ.",
    explanationVi: "Trước tiên thừa nhận ý phía trước là đúng, sau đó nêu một mặt khác không thể bỏ qua và thường tương phản với ý trước.",
    example: "吃素的好處固然很多，但是成長中的兒童與青少年仍需要補充足夠的營養。",
    examplePinyin: "Chīsù de hǎochù gùrán hěn duō, dànshì chéngzhǎng zhōng de értóng yǔ qīngshàonián réng xūyào bǔchōng zúgòu de yíngyǎng.",
    exampleVi: "Ăn chay quả có nhiều lợi ích, nhưng trẻ em và thanh thiếu niên đang phát triển vẫn cần bổ sung đủ dinh dưỡng.",
    practice: [
      practice(
        "明天考試卻還沒看完書，應不應該熬夜？",
        ["固然……但是……", "反映出", "為了……著想"],
        "準備考試固然重要，但是沒睡好也會影響表現，還是早點睡吧。",
        ["固然", "但是"],
      ),
      practice(
        "只吃素食一定最健康嗎？",
        ["固然……但是……", "以……而言", "俗話說得好"],
        "蔬果固然有益健康，但是只吃單一食物仍會造成營養不均衡。",
        ["固然", "但是"],
      ),
    ],
  },
  {
    id: "lesson10-grammar-4",
    lesson: 10,
    pattern: "為了……著想",
    patternPinyin: "wèile……zhuóxiǎng",
    explanationZh: "表示做事的目的是替某人或某件事打算，使對方獲得好處或避免問題。",
    explanationPinyin: "Biǎoshì zuòshì de mùdì shì tì mǒu rén huò mǒu jiàn shì dǎsuàn, shǐ duìfāng huòdé hǎochù huò bìmiǎn wèntí.",
    explanationVi: "Diễn tả mục đích làm việc là suy tính cho ai hoặc điều gì, để đối tượng được lợi hoặc tránh vấn đề.",
    example: "為了健康著想，成長中的兒童與青少年不適合只吃單一種類的食物。",
    examplePinyin: "Wèile jiànkāng zhuóxiǎng, chéngzhǎng zhōng de értóng yǔ qīngshàonián bù shìhé zhǐ chī dānyī zhǒnglèi de shíwù.",
    exampleVi: "Vì nghĩ cho sức khỏe, trẻ em và thanh thiếu niên đang phát triển không nên chỉ ăn một loại thực phẩm.",
    practice: [
      practice(
        "父母為什麼不讓孩子常吃漢堡和炸雞？",
        ["為了……著想", "反映出", "以……而言"],
        "父母為了孩子的健康著想，不讓他們常吃高油、高鹽的速食。",
        ["為了", "著想"],
      ),
    ],
  },
  {
    id: "lesson10-grammar-5",
    lesson: 10,
    pattern: "俗話說得好，……",
    patternPinyin: "súhuà shuō de hǎo, ……",
    explanationZh: "放在一句俗語之前，用俗語提醒別人注意某件事，也表示說話者同意這個觀念。",
    explanationPinyin: "Fàng zài yí jù súhuà zhīqián, yòng súhuà tíxǐng biérén zhùyì mǒu jiàn shì, yě biǎoshì shuōhuàzhě tóngyì zhège guānniàn.",
    explanationVi: "Đặt trước một câu tục ngữ để nhắc người khác chú ý và cho biết người nói đồng ý với quan niệm ấy.",
    example: "俗話說得好，「藥補不如食補」，平常注意飲食比依賴保健食品更重要。",
    examplePinyin: "Súhuà shuō de hǎo, ‘yào bǔ bùrú shí bǔ’, píngcháng zhùyì yǐnshí bǐ yīlài bǎojiàn shípǐn gèng zhòngyào.",
    exampleVi: "Tục ngữ nói rất hay: bồi bổ bằng thuốc không bằng bằng thức ăn; chú ý ăn uống thường ngày quan trọng hơn lệ thuộc thực phẩm bổ sung.",
    practice: [
      practice(
        "朋友說極低價的歐洲旅行一定可靠，你如何提醒他？",
        ["俗話說得好", "反映出", "為了……著想"],
        "俗話說得好，天下沒有白吃的午餐；價格低得不合理時要特別小心。",
        ["俗話說得好"],
      ),
    ],
  },
];

const vocabularyRows = [
  ["能量", "néngliàng", "使身體能活動的力量。", "Shǐ shēntǐ néng huódòng de lìliàng.", "năng lượng"],
  ["飲食", "yǐnshí", "日常所吃、所喝的食物與習慣。", "Rìcháng suǒ chī, suǒ hē de shíwù yǔ xíguàn.", "ăn uống, chế độ ăn"],
  ["兼顧", "jiāngù", "同時照顧兩個或更多方面。", "Tóngshí zhàogù liǎng ge huò gèng duō fāngmiàn.", "quan tâm đồng thời"],
  ["輕食", "qīngshí", "分量較少、較清淡的食物。", "Fènliàng jiào shǎo, jiào qīngdàn de shíwù.", "bữa ăn nhẹ"],
  ["素食", "sùshí", "以蔬菜、穀物等為主而不吃肉的飲食。", "Yǐ shūcài, gǔwù děng wéi zhǔ ér bù chī ròu de yǐnshí.", "thức ăn chay"],
  ["信仰", "xìnyǎng", "對宗教、思想或價值的相信。", "Duì zōngjiào, sīxiǎng huò jiàzhí de xiāngxìn.", "tín ngưỡng"],
  ["殺害", "shāhài", "使人或動物失去生命。", "Shǐ rén huò dòngwù shīqù shēngmìng.", "giết hại"],
  ["蔬菜", "shūcài", "可以食用的植物。", "Kěyǐ shíyòng de zhíwù.", "rau củ"],
  ["零食", "língshí", "正餐以外少量吃的食品。", "Zhèngcān yǐwài shǎoliàng chī de shípǐn.", "đồ ăn vặt"],
  ["蛋白質", "dànbáizhì", "人體生長與修補組織需要的重要營養成分。", "Réntǐ shēngzhǎng yǔ xiūbǔ zǔzhī xūyào de zhòngyào yíngyǎng chéngfèn.", "chất đạm"],
  ["代替", "dàitì", "用一種事物換掉另一種事物。", "Yòng yì zhǒng shìwù huàndiào lìng yì zhǒng shìwù.", "thay thế"],
  ["主食", "zhǔshí", "每餐主要用來提供能量的食物。", "Měi cān zhǔyào yònglái tígōng néngliàng de shíwù.", "lương thực chính"],
  ["充足", "chōngzú", "數量夠，能滿足需要。", "Shùliàng gòu, néng mǎnzú xūyào.", "đầy đủ"],
  ["營養", "yíngyǎng", "食物中維持身體生長與健康的成分。", "Shíwù zhōng wéichí shēntǐ shēngzhǎng yǔ jiànkāng de chéngfèn.", "dinh dưỡng"],
  ["預防", "yùfáng", "事先採取辦法避免問題發生。", "Shìxiān cǎiqǔ bànfǎ bìmiǎn wèntí fāshēng.", "phòng ngừa"],
  ["觀點", "guāndiǎn", "看待事情的立場與想法。", "Kàndài shìqing de lìchǎng yǔ xiǎngfǎ.", "quan điểm"],
  ["飼養", "sìyǎng", "給動物食物並照顧牠們。", "Gěi dòngwù shíwù bìng zhàogù tāmen.", "chăn nuôi"],
  ["加工", "jiāgōng", "用方法改變原料，使它成為產品。", "Yòng fāngfǎ gǎibiàn yuánliào, shǐ tā chéngwéi chǎnpǐn.", "chế biến"],
  ["鈣質", "gàizhì", "幫助骨骼與牙齒生長的營養成分。", "Bāngzhù gǔgé yǔ yáchǐ shēngzhǎng de yíngyǎng chéngfèn.", "canxi"],
  ["補充", "bǔchōng", "增加缺少的部分。", "Zēngjiā quēshǎo de bùfen.", "bổ sung"],
  ["生長", "shēngzhǎng", "生物在時間中發育、變大。", "Shēngwù zài shíjiān zhōng fāyù, biàn dà.", "sinh trưởng"],
  ["免疫力", "miǎnyìlì", "身體抵抗疾病的能力。", "Shēntǐ dǐkàng jíbìng de nénglì.", "sức miễn dịch"],
  ["發育", "fāyù", "身體或能力逐漸成長成熟。", "Shēntǐ huò nénglì zhújiàn chéngzhǎng chéngshú.", "phát triển"],
  ["遲緩", "chíhuǎn", "速度比正常情況慢。", "Sùdù bǐ zhèngcháng qíngkuàng màn.", "chậm, trì hoãn"],
  ["症狀", "zhèngzhuàng", "生病後表現出的身體現象。", "Shēngbìng hòu biǎoxiàn chū de shēntǐ xiànxiàng.", "triệu chứng"],
  ["美觀", "měiguān", "外表好看。", "Wàibiǎo hǎokàn.", "đẹp mắt"],
  ["口感", "kǒugǎn", "食物吃進嘴裡的感覺。", "Shíwù chī jìn zuǐlǐ de gǎnjué.", "cảm giác trong miệng"],
  ["含有", "hányǒu", "裡面包括某種成分。", "Lǐmiàn bāokuò mǒu zhǒng chéngfèn.", "có chứa"],
  ["食品", "shípǐn", "可供人吃、喝的商品。", "Kě gōng rén chī, hē de shāngpǐn.", "thực phẩm"],
  ["添加物", "tiānjiāwù", "製作食品時另外加入的物質。", "Zhìzuò shípǐn shí lìngwài jiārù de wùzhì.", "chất phụ gia"],
  ["業者", "yèzhě", "從事某一種行業的人或公司。", "Cóngshì mǒu yì zhǒng hángyè de rén huò gōngsī.", "người hoặc doanh nghiệp trong ngành"],
  ["食用", "shíyòng", "把東西當作食物來吃。", "Bǎ dōngxi dàngzuò shíwù lái chī.", "dùng làm thực phẩm"],
  ["化學", "huàxué", "研究物質組成、性質與變化的科學。", "Yánjiū wùzhì zǔchéng, xìngzhì yǔ biànhuà de kēxué.", "hóa học"],
  ["色素", "sèsù", "使食品呈現顏色的物質。", "Shǐ shípǐn chéngxiàn yánsè de wùzhì.", "chất tạo màu"],
  ["調味料", "tiáowèiliào", "用來調整食物味道的材料。", "Yònglái tiáozhěng shíwù wèidào de cáiliào.", "gia vị"],
  ["防腐劑", "fángfǔjì", "延長食品保存時間的添加物。", "Yáncháng shípǐn bǎocún shíjiān de tiānjiāwù.", "chất bảo quản"],
  ["降低", "jiàngdī", "使程度或數量下降。", "Shǐ chéngdù huò shùliàng xiàjiàng.", "giảm xuống"],
  ["風險", "fēngxiǎn", "可能發生損失或危險的機會。", "Kěnéng fāshēng sǔnshī huò wēixiǎn de jīhuì.", "rủi ro"],
  ["保健", "bǎojiàn", "保護身體並維持健康。", "Bǎohù shēntǐ bìng wéichí jiànkāng.", "chăm sóc sức khỏe"],
  ["偏食", "piānshí", "只挑某些食物吃，不注意均衡。", "Zhǐ tiāo mǒuxiē shíwù chī, bù zhùyì jūnhéng.", "kén ăn"],
  ["原則", "yuánzé", "做事時遵守的基本準則。", "Zuòshì shí zūnshǒu de jīběn zhǔnzé.", "nguyên tắc"],
  ["纖維", "xiānwéi", "植物性食物中有助消化的成分。", "Zhíwùxìng shíwù zhōng yǒuzhù xiāohuà de chéngfèn.", "chất xơ"],
];

const idiomRows = [
  ["口腹之欲", "kǒufù-zhī-yù", "嘴巴和肚子想吃美食的欲望。", "Zuǐba hé dùzi xiǎng chī měishí de yùwàng.", "ham muốn ăn uống"],
  ["大魚大肉", "dàyú-dàròu", "形容菜餚豐盛，也指常吃很多魚肉。", "Xíngróng càiyáo fēngshèng, yě zhǐ cháng chī hěn duō yúròu.", "mâm cao cỗ đầy, nhiều thịt cá"],
  ["色香味俱全", "sè-xiāng-wèi-jù-quán", "食物的顏色、香氣與味道都很好。", "Shíwù de yánsè, xiāngqì yǔ wèidào dōu hěn hǎo.", "đủ sắc, hương và vị"],
  ["藥補不如食補", "yào bǔ bùrú shí bǔ", "與其靠藥物補身，不如從日常飲食補充營養。", "Yǔqí kào yàowù bǔshēn, bùrú cóng rìcháng yǐnshí bǔchōng yíngyǎng.", "bồi bổ bằng thuốc không bằng thức ăn"],
  ["持之以恆", "chí-zhī-yǐ-héng", "長久而有耐心地堅持做一件事。", "Chángjiǔ ér yǒu nàixīn de jiānchí zuò yí jiàn shì.", "kiên trì lâu dài"],
];

const makeCard = (row, index, type = "詞語") => {
  const [term, pinyin, meaningZh, meaningPinyin, meaningVi] = row;
  return {
    id: `lesson10-card-${index + 1}`,
    lesson: 10,
    type,
    term,
    pinyin,
    meaningZh,
    meaningPinyin,
    meaningVi,
    example: `課文用「${term}」說明健康飲食的觀念。`,
    examplePinyin: `Kèwén yòng “${pinyin}” shuōmíng jiànkāng yǐnshí de guānniàn.`,
    exampleVi: "Bài khóa dùng từ này để trình bày quan niệm ăn uống lành mạnh.",
    audioUrl: "",
  };
};

const vocabularyCards = vocabularyRows.map((row, index) => makeCard(row, index));
const idiomCards = idiomRows.map((row, index) => makeCard(row, vocabularyCards.length + index, "成語"));
const grammarCards = lesson10Grammar.map((item, index) => ({
  id: `lesson10-card-${vocabularyCards.length + idiomCards.length + index + 1}`,
  lesson: 10,
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
  id: `lesson10-card-${vocabularyCards.length + idiomCards.length + grammarCards.length + 1}`,
  lesson: 10,
  type: "句型",
  term: "三多與三少",
  pinyin: "sān duō yǔ sān shǎo",
  meaningZh: "多開水、多纖維、多運動；少糖、少鹽、少油。",
  meaningPinyin: "Duō kāishuǐ, duō xiānwéi, duō yùndòng; shǎo táng, shǎo yán, shǎo yóu.",
  meaningVi: "Nhiều nước, nhiều chất xơ, vận động nhiều; ít đường, ít muối, ít dầu.",
  example: "牢記三多與三少的原則並持之以恆，就能幫助身體保持健康。",
  examplePinyin: "Láojì sān duō yǔ sān shǎo de yuánzé bìng chí-zhī-yǐ-héng, jiù néng bāngzhù shēntǐ bǎochí jiànkāng.",
  exampleVi: "Ghi nhớ nguyên tắc ba nhiều, ba ít và kiên trì sẽ giúp cơ thể khỏe mạnh.",
  audioUrl: "",
};

const lesson10Cards = [...vocabularyCards, ...idiomCards, ...grammarCards, sentenceCard];

const lesson10Texts = [
  (() => {
    const text = {
    id: "lesson10-main-text",
    lesson: 10,
    title: "第 10 課 吃得健康又安全",
    titlePinyin: "Dì shí kè: Chī de jiànkāng yòu ānquán",
    titleVi: "Bài 10: Ăn lành mạnh và an toàn",
    lines: [
      line(
        "食物是身體獲得能量的主要來源，「吃什麼」與「怎麼吃」也可以反映出人類對生活的習慣與看法。現代人重視飲食，不僅希望吃得健康，也要兼顧環保與安全。因此，像輕食、素食這類飲食方式近幾年來十分流行。",
        "Shíwù shì shēntǐ huòdé néngliàng de zhǔyào láiyuán, ‘chī shénme’ yǔ ‘zěnme chī’ yě kěyǐ fǎnyìng chū rénlèi duì shēnghuó de xíguàn yǔ kànfǎ. Xiàndàirén zhòngshì yǐnshí, bùjǐn xīwàng chī de jiànkāng, yě yào jiāngù huánbǎo yǔ ānquán. Yīncǐ, xiàng qīngshí, sùshí zhè lèi yǐnshí fāngshì jìn jǐ nián lái shífēn liúxíng.",
        "Thực phẩm là nguồn năng lượng chính của cơ thể. Ăn gì và ăn thế nào cũng phản ánh thói quen và quan điểm sống của con người. Người hiện đại coi trọng ăn uống, không chỉ mong ăn lành mạnh mà còn quan tâm cả môi trường và an toàn. Vì thế, những cách ăn uống như bữa ăn nhẹ và ăn chay rất thịnh hành trong những năm gần đây.",
        [mark("vocab", "能量"), mark("vocab", "飲食"), mark("vocab", "兼顧"), mark("grammar", "反映出人類對生活的習慣與看法", "……反映出……")],
      ),
      line(
        "以素食而言，現在很多國家都流行素食主義，不論在年輕人還是年紀較大的人當中，都有素食者。吃素的原因很多，有的人因為宗教信仰，不忍心為了口腹之慾而殺害生命。有的人認為蔬菜和水果對身體比較有益，大魚、大肉並不是理想的選擇。如果用豆類的植物性蛋白質來代替肉類的動物性蛋白質，再加上米、麵等主食，不但可得到充足的營養，還可預防不少疾病。另外，也有人從環保的觀點來思考吃素的好處。他們認為飼養動物所排出的廢物，以及肉品加工廠所排放的廢氣和廢水等，都會汙染我們生活的環境，因此提倡素食。",
        "Yǐ sùshí ér yán, xiànzài hěn duō guójiā dōu liúxíng sùshí zhǔyì, bùlùn zài niánqīngrén háishì niánjì jiào dà de rén dāngzhōng, dōu yǒu sùshízhě. Chīsù de yuányīn hěn duō, yǒude rén yīnwèi zōngjiào xìnyǎng, bù rěnxīn wèile kǒufù-zhī-yù ér shāhài shēngmìng. Yǒude rén rènwéi shūcài hé shuǐguǒ duì shēntǐ bǐjiào yǒuyì, dàyú, dàròu bìng bú shì lǐxiǎng de xuǎnzé. Rúguǒ yòng dòulèi de zhíwùxìng dànbáizhì lái dàitì ròulèi de dòngwùxìng dànbáizhì, zài jiāshàng mǐ, miàn děng zhǔshí, bùdàn kě dédào chōngzú de yíngyǎng, hái kě yùfáng bùshǎo jíbìng. Lìngwài, yě yǒurén cóng huánbǎo de guāndiǎn lái sīkǎo chīsù de hǎochù. Tāmen rènwéi sìyǎng dòngwù suǒ páichū de fèiwù, yǐjí ròupǐn jiāgōngchǎng suǒ páifàng de fèiqì hé fèishuǐ děng, dōu huì wūrǎn wǒmen shēnghuó de huánjìng, yīncǐ tíchàng sùshí.",
        "Xét về ăn chay, hiện nay nhiều quốc gia đều thịnh hành chủ nghĩa ăn chay; trong cả người trẻ lẫn người lớn tuổi đều có người ăn chay. Có nhiều lý do ăn chay: có người vì tín ngưỡng tôn giáo, không nỡ giết hại sinh mạng chỉ để thỏa ham muốn ăn uống. Có người cho rằng rau quả có lợi hơn cho cơ thể và những bữa đầy cá thịt không phải lựa chọn lý tưởng. Nếu dùng đạm thực vật từ đậu thay cho đạm động vật từ thịt, rồi ăn thêm lương thực chính như cơm và mì, ta không chỉ nhận đủ dinh dưỡng mà còn phòng ngừa được nhiều bệnh. Ngoài ra, có người xét lợi ích của ăn chay từ góc độ môi trường. Họ cho rằng chất thải chăn nuôi cùng khí thải, nước thải từ nhà máy chế biến thịt đều làm ô nhiễm môi trường sống, vì thế cổ vũ ăn chay.",
        [mark("vocab", "素食"), mark("vocab", "信仰"), mark("vocab", "殺害"), mark("vocab", "代替"), mark("vocab", "主食"), mark("vocab", "充足"), mark("vocab", "預防"), mark("vocab", "觀點"), mark("vocab", "飼養"), mark("vocab", "加工"), mark("idiom", "口腹之慾", "口腹之欲"), mark("idiom", "大魚、大肉", "大魚大肉"), mark("grammar", "以素食而言", "以……而言／來說，……")],
      ),
      line(
        "吃素的好處固然很多，但是還在成長中的兒童與青少年，仍然需要大量的動物性蛋白質、鈣質等來補充體力。為了健康著想，他們不適合天天吃素，否則可能導致營養不均衡、免疫力變差、大腦發育遲緩等症狀。另外，為了提升食物的美觀與口感，達到色香味俱全的效果，素食中可能含有過多的油，這也是喜愛素食者不能不注意的問題。",
        "Chīsù de hǎochù gùrán hěn duō, dànshì hái zài chéngzhǎng zhōng de értóng yǔ qīngshàonián, réngrán xūyào dàliàng de dòngwùxìng dànbáizhì, gàizhì děng lái bǔchōng tǐlì. Wèile jiànkāng zhuóxiǎng, tāmen bù shìhé tiāntiān chīsù, fǒuzé kěnéng dǎozhì yíngyǎng bù jūnhéng, miǎnyìlì biàn chà, dànǎo fāyù chíhuǎn děng zhèngzhuàng. Lìngwài, wèile tíshēng shíwù de měiguān yǔ kǒugǎn, dádào sè-xiāng-wèi-jù-quán de xiàoguǒ, sùshí zhōng kěnéng hányǒu guòduō de yóu, zhè yě shì xǐ'ài sùshí zhě bùnéng bù zhùyì de wèntí.",
        "Ăn chay quả có nhiều lợi ích, nhưng trẻ em và thanh thiếu niên còn đang lớn vẫn cần nhiều đạm động vật, canxi và các chất khác để bổ sung thể lực. Vì sức khỏe, các em không thích hợp ăn chay mỗi ngày; nếu không, có thể bị mất cân bằng dinh dưỡng, suy giảm miễn dịch và chậm phát triển não. Ngoài ra, để món ăn đẹp mắt, ngon miệng và đủ cả sắc, hương, vị, đồ chay có thể chứa quá nhiều dầu; đây cũng là vấn đề người thích ăn chay phải đặc biệt chú ý.",
        [mark("vocab", "蛋白質"), mark("vocab", "鈣質"), mark("vocab", "補充"), mark("vocab", "免疫力"), mark("vocab", "遲緩"), mark("vocab", "美觀"), mark("vocab", "口感"), mark("vocab", "含有"), mark("idiom", "色香味俱全"), mark("grammar", "吃素的好處固然很多，但是", "……固然……，但是……"), mark("grammar", "為了健康著想", "為了……著想")],
      ),
      line(
        "現代人除了講究食物是否營養和環保，也很注意食品的安全，最常討論的是食品添加物的問題。食品業者為了保持食物的品質或增加口味，常在食物中加入食品添加物。然而，若添加太多，或加入不能食用的化學成分，都可能對人體造成嚴重的傷害。因此，平常我們應該多吃天然的食物，少吃加工的食品，例如含有色素的點心、飲料，或添加過多調味料、防腐劑的泡麵、麵包等，這樣才能降低得到疾病的風險。",
        "Xiàndàirén chúle jiǎngjiu shíwù shìfǒu yíngyǎng hé huánbǎo, yě hěn zhùyì shípǐn de ānquán, zuì cháng tǎolùn de shì shípǐn tiānjiāwù de wèntí. Shípǐn yèzhě wèile bǎochí shíwù de pǐnzhì huò zēngjiā kǒuwèi, cháng zài shíwù zhōng jiārù shípǐn tiānjiāwù. Rán'ér, ruò tiānjiā tài duō, huò jiārù bùnéng shíyòng de huàxué chéngfèn, dōu kěnéng duì réntǐ zàochéng yánzhòng de shānghài. Yīncǐ, píngcháng wǒmen yīnggāi duō chī tiānrán de shíwù, shǎo chī jiāgōng de shípǐn, lìrú hányǒu sèsù de diǎnxīn, yǐnliào, huò tiānjiā guòduō tiáowèiliào, fángfǔjì de pàomiàn, miànbāo děng, zhèyàng cái néng jiàngdī dédào jíbìng de fēngxiǎn.",
        "Ngoài việc xem thực phẩm có đủ dinh dưỡng và thân thiện với môi trường hay không, người hiện đại còn rất chú ý an toàn thực phẩm; vấn đề thường được bàn nhất là phụ gia thực phẩm. Để giữ chất lượng hoặc tăng hương vị, doanh nghiệp thực phẩm thường cho phụ gia vào món ăn. Tuy nhiên, nếu cho quá nhiều hoặc dùng thành phần hóa học không thể ăn được thì đều có thể gây tổn hại nghiêm trọng cho cơ thể. Vì vậy, thường ngày chúng ta nên ăn nhiều thực phẩm tự nhiên và ít đồ chế biến, chẳng hạn bánh ngọt, đồ uống có chất tạo màu, hoặc mì gói và bánh mì có quá nhiều gia vị, chất bảo quản; như vậy mới giảm được nguy cơ mắc bệnh.",
        [mark("vocab", "食品"), mark("vocab", "添加物"), mark("vocab", "色素"), mark("vocab", "防腐劑"), mark("vocab", "風險")],
      ),
      line(
        "雖然現在醫學進步，吃保健食品也能補充營養，但俗話說得好，「藥補不如食補」。只要三餐正常，營養均衡，不要偏食，並且記得「三多」與「三少」的原則，多開水、多纖維、多運動，以及少糖、少鹽、少油，持之以恆，就更能保持身體健康。",
        "Suīrán xiànzài yīxué jìnbù, chī bǎojiàn shípǐn yě néng bǔchōng yíngyǎng, dàn súhuà shuō de hǎo, ‘yào bǔ bùrú shí bǔ’. Zhǐyào sāncān zhèngcháng, yíngyǎng jūnhéng, bú yào piānshí, bìngqiě jìde ‘sān duō’ yǔ ‘sān shǎo’ de yuánzé, duō kāishuǐ, duō xiānwéi, duō yùndòng, yǐjí shǎo táng, shǎo yán, shǎo yóu, chí-zhī-yǐ-héng, jiù gèng néng bǎochí shēntǐ jiànkāng.",
        "Dù y học ngày nay tiến bộ và dùng thực phẩm bảo vệ sức khỏe cũng có thể bổ sung dinh dưỡng, nhưng tục ngữ nói rất hay: ‘Bồi bổ bằng thuốc không bằng thức ăn.’ Chỉ cần ăn ba bữa bình thường, dinh dưỡng cân bằng, không kén ăn, đồng thời nhớ nguyên tắc ‘ba nhiều’ và ‘ba ít’: nhiều nước, nhiều chất xơ, nhiều vận động; ít đường, ít muối, ít dầu, rồi kiên trì lâu dài thì càng có thể duy trì sức khỏe.",
        [mark("vocab", "保健"), mark("vocab", "原則"), mark("proper", "「三多」與「三少」", "三多與三少"), mark("idiom", "藥補不如食補"), mark("idiom", "持之以恆"), mark("grammar", "俗話說得好", "俗話說得好，……")],
      ),
    ],
    worksheet: {
      title: "第十課學習單",
      vi: "Phiếu học tập Bài 10",
      sections: [
        {
          title: "問題討論",
          tone: "discussion",
          items: [
            worksheetItem(
              "根據課文，什麼是素食主義？吃素有哪些優點與注意事項？",
              "素食主義以植物性食物為主；它可兼顧健康與環保，但仍要補充足夠的蛋白質、鈣質等營養，並避免過油或飲食單一。",
              "Sùshí zhǔyì yǐ zhíwùxìng shíwù wéi zhǔ; tā kě jiāngù jiànkāng yǔ huánbǎo, dàn réng yào bǔchōng zúgòu de dànbáizhì, gàizhì děng yíngyǎng, bìng bìmiǎn guòyóu huò yǐnshí dānyī.",
              "Ăn chay lấy thực vật làm chính; có thể tốt cho sức khỏe và môi trường nhưng vẫn phải bổ sung đủ đạm, canxi, tránh quá nhiều dầu hoặc ăn đơn điệu.",
              ["只吃一種蔬菜", "兼顧營養並避免單一", "完全不需蛋白質"],
            ),
            worksheetItem(
              "選擇食品時，應該注意哪些安全問題？",
              "應查看成分與標示，少吃含過多色素、調味料、防腐劑的加工食品，也不要相信誇大的保健食品廣告。",
              "Yīng chákàn chéngfèn yǔ biāoshì, shǎo chī hán guòduō sèsù, tiáowèiliào, fángfǔjì de jiāgōng shípǐn, yě búyào xiāngxìn kuādà de bǎojiàn shípǐn guǎnggào.",
              "Nên xem thành phần và nhãn, hạn chế thực phẩm chế biến có quá nhiều chất tạo màu, gia vị, chất bảo quản và không tin quảng cáo phóng đại.",
              ["只看包裝顏色", "查看成分與標示", "添加物越多越好"],
            ),
            worksheetItem(
              "飲食方式與身體健康有什麼關係？",
              "均衡、多樣而節制的飲食能提供營養、降低疾病風險；偏食、過油或過度依賴加工食品則可能傷害健康。",
              "Jūnhéng, duōyàng ér jiézhì de yǐnshí néng tígōng yíngyǎng, jiàngdī jíbìng fēngxiǎn; piānshí, guòyóu huò guòdù yīlài jiāgōng shípǐn zé kěnéng shānghài jiànkāng.",
              "Ăn cân bằng, đa dạng và điều độ cung cấp dinh dưỡng, giảm rủi ro bệnh; kén ăn, quá dầu hoặc lệ thuộc đồ chế biến có thể hại sức khỏe.",
              ["沒有關係", "均衡飲食有助健康", "只靠保健食品即可"],
            ),
          ],
        },
        {
          title: "課堂活動：你也是營養師",
          tone: "activity",
          items: [
            worksheetItem(
              "為不能吃奶類的女性素食者設計一天三餐，並補足蛋白質與熱量。",
              "早餐可吃豆漿、燕麥與堅果；午餐吃糙米、豆腐和多色蔬菜；晚餐吃藜麥、豆類與水果，並依需求調整份量。",
              "Zǎocān kě chī dòujiāng, yànmài yǔ jiānguǒ; wǔcān chī cāomǐ, dòufu hé duōsè shūcài; wǎncān chī límài, dòulèi yǔ shuǐguǒ, bìng yī xūqiú tiáozhěng fènliàng.",
              "Bữa sáng có sữa đậu nành, yến mạch, hạt; trưa có gạo lứt, đậu phụ, rau nhiều màu; tối có quinoa, đậu và trái cây, điều chỉnh khẩu phần theo nhu cầu.",
              ["只有白飯", "豆類、穀物與多色蔬果", "只吃甜點"],
            ),
            worksheetItem(
              "小組報告菜單時應包含哪些項目？",
              "應說明三餐食物、每日大致熱量、營養搭配的理由，並回答同學對菜單的提問。",
              "Yīng shuōmíng sān cān shíwù, měirì dàzhì rèliàng, yíngyǎng dāpèi de lǐyóu, bìng huídá tóngxué duì càidān de tíwèn.",
              "Cần nêu món của ba bữa, lượng calo ước tính mỗi ngày, lý do phối hợp dinh dưỡng và trả lời câu hỏi của bạn học.",
              ["只列菜名", "食物、熱量與理由", "只念生詞"],
            ),
          ],
        },
        {
          title: "延伸閱讀：食物與健康／生機飲食",
          tone: "reading",
          items: [
            worksheetItem(
              "什麼是「一日五蔬果」？",
              "除了主食以外，每天要吃五份不同種類與顏色的蔬菜和水果，讓營養更均衡。",
              "Chúle zhǔshí yǐwài, měitiān yào chī wǔ fèn bùtóng zhǒnglèi yǔ yánsè de shūcài hé shuǐguǒ, ràng yíngyǎng gèng jūnhéng.",
              "Ngoài món chính, mỗi ngày nên ăn năm phần rau quả khác loại và khác màu để dinh dưỡng cân bằng hơn.",
              ["五份同一種水果", "五份不同蔬果", "五餐速食"],
            ),
            worksheetItem(
              "生機飲食的食材有什麼特色？",
              "它重視未受農藥、化學肥料、化學添加物或防腐處理汙染的有機食品，並主張食材多樣、常常變化。",
              "Tā zhòngshì wèi shòu nóngyào, huàxué féiliào, huàxué tiānjiāwù huò fángfǔ chǔlǐ wūrǎn de yǒujī shípǐn, bìng zhǔzhāng shícái duōyàng, chángcháng biànhuà.",
              "Cách ăn này coi trọng thực phẩm hữu cơ không nhiễm thuốc trừ sâu, phân hóa học, phụ gia hay xử lý bảo quản, đồng thời đề cao sự đa dạng.",
              ["添加物很多", "有機而多樣", "只吃同一種食物"],
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

export const lesson10Content = {
  cards: lesson10Cards,
  texts: lesson10Texts,
  grammar: lesson10Grammar,
};
