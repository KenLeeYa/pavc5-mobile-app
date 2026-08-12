const mark = (type, term, target = term) => ({ type, markType: type, term, text: term, target });

const line = (zh, pinyin, vi, marks = []) => ({ zh, pinyin, vi, marks });

const item = (prompt, answer, pinyin, vi) => ({ prompt, answer, pinyin, vi });

export const lesson34CompletionTexts = [
  {
    id: "lesson3-complete-text",
    lesson: 3,
    title: "第 3 課 終身學習",
    titlePinyin: "Dì sān kè: Zhōngshēn xuéxí",
    titleVi: "Bài 3: Học tập suốt đời",
    lines: [
      line(
        "人的一生，會經過幾個不同的教育階段，例如學前、幼兒、小學、中學、大學與研究所，這些都是正規的學校教育。由於時代的進步，教育學者開始提倡「終身學習」的觀念。所謂「終身學習」，是指一個人從學前到高齡階段，持續不斷地學習，最終目標是提升每個人的生活品質。為了達成這個目標，除了學校教育外，學者也強調家庭教育與社會教育的重要性。",
        "Rén de yìshēng, huì jīngguò jǐ ge bùtóng de jiàoyù jiēduàn, lìrú xuéqián, yòu'ér, xiǎoxué, zhōngxué, dàxué yǔ yánjiūsuǒ, zhèxiē dōu shì zhèngguī de xuéxiào jiàoyù. Yóuyú shídài de jìnbù, jiàoyù xuézhě kāishǐ tíchàng zhōngshēn xuéxí de guānniàn. Suǒwèi zhōngshēn xuéxí, shì zhǐ yí ge rén cóng xuéqián dào gāolíng jiēduàn, chíxù bùduàn de xuéxí, zuìzhōng mùbiāo shì tíshēng měi ge rén de shēnghuó pǐnzhì. Wèile dáchéng zhège mùbiāo, chúle xuéxiào jiàoyù wài, xuézhě yě qiángdiào jiātíng jiàoyù yǔ shèhuì jiàoyù de zhòngyàoxìng.",
        "Trong đời người, mỗi người sẽ trải qua nhiều giai đoạn giáo dục khác nhau như trước tuổi học, mầm non, tiểu học, trung học, đại học và sau đại học; tất cả đều là giáo dục chính quy trong nhà trường. Cùng với sự tiến bộ của thời đại, các nhà giáo dục bắt đầu đề xướng quan niệm “học tập suốt đời”. Học tập suốt đời có nghĩa là một người học tập liên tục từ giai đoạn trước tuổi học đến tuổi cao niên, với mục tiêu cuối cùng là nâng cao chất lượng cuộc sống của mỗi người. Để đạt mục tiêu này, ngoài giáo dục nhà trường, các học giả còn nhấn mạnh tầm quan trọng của giáo dục gia đình và giáo dục xã hội.",
        [mark("vocab", "教育階段", "階段"), mark("vocab", "正規"), mark("vocab", "提倡"), mark("vocab", "終身學習", "終身"), mark("vocab", "生活品質"), mark("grammar", "所謂", "所謂(的)...是指..."), mark("proper", "家庭教育"), mark("proper", "社會教育")]
      ),
      line(
        "家庭對教育的影響很大。家庭是每個人來到這個世界上最先接觸的環境，父母是兒女的第一位老師，父母的一言一行，都是兒女學習的榜樣。家人之間的互動方式，也是兒女學習怎麼與他人相處的主要來源。因此，孩子在入學以前，家庭就是他們的學校。父母的教養態度，以及家人之間的關係，都對孩子的身體與心靈發展造成深遠的影響。",
        "Jiātíng duì jiàoyù de yǐngxiǎng hěn dà. Jiātíng shì měi ge rén láidào zhège shìjiè shàng zuìxiān jiēchù de huánjìng, fùmǔ shì érnǚ de dì yī wèi lǎoshī, fùmǔ de yì yán yí xíng, dōu shì érnǚ xuéxí de bǎngyàng. Jiārén zhījiān de hùdòng fāngshì, yě shì érnǚ xuéxí zěnme yǔ tārén xiāngchǔ de zhǔyào láiyuán. Yīncǐ, háizi zài rùxué yǐqián, jiātíng jiù shì tāmen de xuéxiào. Fùmǔ de jiàoyǎng tàidù, yǐjí jiārén zhījiān de guānxì, dōu duì háizi de shēntǐ yǔ xīnlíng fāzhǎn zàochéng shēnyuǎn de yǐngxiǎng.",
        "Gia đình có ảnh hưởng rất lớn đến giáo dục. Gia đình là môi trường đầu tiên mỗi người tiếp xúc khi đến với thế giới này; cha mẹ là những người thầy đầu tiên của con cái, và từng lời nói, hành động của cha mẹ đều là tấm gương cho con học tập. Cách các thành viên trong gia đình tương tác với nhau cũng là nguồn chính để trẻ học cách sống hòa thuận với người khác. Vì vậy, trước khi đi học, gia đình chính là trường học của trẻ. Thái độ nuôi dạy của cha mẹ và mối quan hệ giữa các thành viên đều có ảnh hưởng sâu sắc đến sự phát triển thể chất lẫn tâm hồn của trẻ.",
        [mark("vocab", "影響"), mark("vocab", "榜樣"), mark("vocab", "互動方式"), mark("vocab", "主要來源", "來源"), mark("vocab", "深遠"), mark("idiom", "一言一行")]
      ),
      line(
        "不光是家庭，社會上其他形形色色的現象，往往也會影響一個人的身心發展。感人的社會新聞，如幫助他人、幫無家可歸的動物找到新家，都會形成正面的教育意義。相反地，一些打打殺殺的社會事件，就會帶來負面的影響。如果我們只依賴老師與父母，或是只相信教材裡的知識，不明白理論與實際的差別，就很容易迷失在複雜多變的社會中。由此可見，現代教育的目的是教導每個人持續、自動地學習，培養獨立思考、解決問題的能力。",
        "Bù guāng shì jiātíng, shèhuì shàng qítā xíngxíngsèsè de xiànxiàng, wǎngwǎng yě huì yǐngxiǎng yí ge rén de shēnxīn fāzhǎn. Gǎnrén de shèhuì xīnwén, rú bāngzhù tārén, bāng wújiā kě guī de dòngwù zhǎodào xīn jiā, dōu huì xíngchéng zhèngmiàn de jiàoyù yìyì. Xiāngfǎn de, yìxiē dǎdǎshāshā de shèhuì shìjiàn, jiù huì dàilái fùmiàn de yǐngxiǎng. Rúguǒ wǒmen zhǐ yīlài lǎoshī yǔ fùmǔ, huòshì zhǐ xiāngxìn jiàocái lǐ de zhīshì, bù míngbai lǐlùn yǔ shíjì de chābié, jiù hěn róngyì míshī zài fùzá duōbiàn de shèhuì zhōng. Yóu cǐ kě jiàn, xiàndài jiàoyù de mùdì shì jiàodǎo měi ge rén chíxù, zìdòng de xuéxí, péiyǎng dúlì sīkǎo, jiějué wèntí de nénglì.",
        "Không chỉ gia đình, những hiện tượng muôn hình muôn vẻ trong xã hội cũng thường ảnh hưởng đến sự phát triển thể chất và tinh thần của một người. Những tin tức xã hội cảm động, như giúp đỡ người khác hoặc tìm mái ấm mới cho động vật vô gia cư, đều mang ý nghĩa giáo dục tích cực. Trái lại, một số sự kiện xã hội đầy cảnh đánh giết sẽ gây ảnh hưởng tiêu cực. Nếu chúng ta chỉ dựa vào thầy cô và cha mẹ, hoặc chỉ tin vào kiến thức trong giáo trình mà không hiểu sự khác biệt giữa lý thuyết và thực tế, chúng ta rất dễ lạc lối trong một xã hội phức tạp và luôn biến đổi. Từ đó có thể thấy, mục đích của giáo dục hiện đại là hướng dẫn mỗi người học tập liên tục và tự giác, đồng thời bồi dưỡng khả năng suy nghĩ độc lập và giải quyết vấn đề.",
        [mark("grammar", "不光是", "不光是...，...也是..."), mark("grammar", "由此可見"), mark("vocab", "形形色色"), mark("vocab", "現象"), mark("vocab", "正面"), mark("vocab", "負面"), mark("vocab", "依賴"), mark("vocab", "迷失"), mark("vocab", "教材"), mark("vocab", "理論"), mark("vocab", "實際"), mark("vocab", "培養"), mark("idiom", "打打殺殺")]
      ),
      line(
        "很多人以為學校是教育唯一的來源，其實在「終身學習」的觀念中，人生的成就是多方面的，考試成績絕不是學習唯一的目標，學校也不是學習唯一的場所。因此，完成學校教育以後，踏入社會，更要不斷地吸收新知，充實自己。",
        "Hěnduō rén yǐwéi xuéxiào shì jiàoyù wéiyī de láiyuán, qíshí zài zhōngshēn xuéxí de guānniàn zhōng, rénshēng de chéngjiù shì duō fāngmiàn de. Kǎoshì chéngjì jué bú shì xuéxí wéiyī de mùbiāo, xuéxiào yě bú shì xuéxí wéiyī de chǎngsuǒ. Yīncǐ, wánchéng xuéxiào jiàoyù yǐhòu, tàrù shèhuì, gèng yào bùduàn de xīshōu xīnzhī, chōngshí zìjǐ.",
        "Nhiều người cho rằng trường học là nguồn duy nhất của giáo dục, nhưng thật ra, trong quan niệm “học tập suốt đời”, thành tựu của đời người có nhiều phương diện; điểm thi tuyệt đối không phải mục tiêu duy nhất của việc học, và trường học cũng không phải nơi duy nhất để học tập. Vì vậy, sau khi hoàn thành giáo dục nhà trường và bước vào xã hội, chúng ta càng phải không ngừng tiếp thu kiến thức mới để làm phong phú bản thân.",
        [mark("grammar", "以為", "...以為...，其實..."), mark("vocab", "唯一"), mark("vocab", "成就"), mark("vocab", "吸收"), mark("vocab", "新知"), mark("vocab", "充實")]
      ),
      line(
        "現在有很多年紀較大的父母，兒女在外地工作，為了解決日常生活的各種問題，開始學習使用電腦，不但可以自己上網查資料，也可以和兒女用視訊聊天，甚至在網路上購物、交友。這種「活到老學到老」的精神，值得佩服。",
        "Xiànzài yǒu hěnduō niánjì jiào dà de fùmǔ, érnǚ zài wàidì gōngzuò, wèile jiějué rìcháng shēnghuó de gè zhǒng wèntí, kāishǐ xuéxí shǐyòng diànnǎo, bùdàn kěyǐ zìjǐ shàngwǎng chá zīliào, yě kěyǐ hé érnǚ yòng shìxùn liáotiān, shènzhì zài wǎnglù shàng gòuwù, jiāoyǒu. Zhè zhǒng huó dào lǎo xué dào lǎo de jīngshén, zhídé pèifú.",
        "Hiện nay, nhiều bậc cha mẹ lớn tuổi có con làm việc xa nhà. Để giải quyết các vấn đề trong cuộc sống hằng ngày, họ bắt đầu học sử dụng máy tính; không những có thể tự lên mạng tra cứu thông tin và trò chuyện qua video với con cái, mà thậm chí còn có thể mua sắm và kết bạn trên mạng. Tinh thần “sống đến già, học đến già” này rất đáng khâm phục.",
        [mark("vocab", "視訊"), mark("vocab", "佩服"), mark("idiom", "活到老學到老")]
      ),
      line(
        "一個願意終身學習的人，時時保持對學習的熱情，為了實現理想的生活而努力。雖然社會多變，然而「終身學習」可以幫助我們適應這樣的環境，在生活上更得心應手，活得更有意義、有價值。",
        "Yí ge yuànyì zhōngshēn xuéxí de rén, shíshí bǎochí duì xuéxí de rèqíng, wèile shíxiàn lǐxiǎng de shēnghuó ér nǔlì. Suīrán shèhuì duōbiàn, rán'ér zhōngshēn xuéxí kěyǐ bāngzhù wǒmen shìyìng zhèyàng de huánjìng, zài shēnghuó shàng gèng déxīn yìngshǒu, huó de gèng yǒu yìyì, yǒu jiàzhí.",
        "Người học suốt đời luôn giữ nhiệt huyết, thích nghi tốt hơn với xã hội thay đổi và sống ý nghĩa, có giá trị hơn.",
        [mark("grammar", "雖然", "(雖然)...然而..."), mark("grammar", "然而", "(雖然)...然而..."), mark("vocab", "保持"), mark("vocab", "實現"), mark("vocab", "適應"), mark("vocab", "意義"), mark("vocab", "價值"), mark("idiom", "得心應手")]
      ),
    ],
    worksheet: {
      title: "第 3 課 終身學習 課後練習卷",
      vi: "Phiếu bài tập sau bài học: Bài 3 - Học tập suốt đời",
      sections: [
        {
          title: "一、生詞填空",
          tone: "vocab",
          items: [
            item("每個人在生命不同的＿＿＿＿中，都會遇過各種問題。", "階段", "Měi ge rén zài shēngmìng bùtóng de jiēduàn zhōng, dōu huì yùguò gè zhǒng wèntí.", "Mỗi người đều gặp nhiều vấn đề trong các giai đoạn khác nhau của cuộc đời."),
            item("小文是個聰明的孩子，＿＿＿＿知識的速度很快。", "吸收", "Xiǎowén shì ge cōngmíng de háizi, xīshōu zhīshi de sùdù hěn kuài.", "Tiểu Văn tiếp thu kiến thức rất nhanh."),
            item("他爸爸常常喝酒，這種行為對兒女是一種＿＿＿＿的教育。", "負面", "Tā bàba chángcháng hējiǔ, zhè zhǒng xíngwéi duì érnǚ shì yì zhǒng fùmiàn de jiàoyù.", "Hành vi này là sự giáo dục tiêu cực đối với con cái."),
            item("張先生熱心幫助人的行為，是值得大家學習的好＿＿＿＿。", "榜樣", "Zhāng xiānsheng rèxīn bāngzhù rén de xíngwéi, shì zhídé dàjiā xuéxí de hǎo bǎngyàng.", "Hành vi giúp đỡ người khác là tấm gương tốt."),
            item("李小姐當主任已經五年了，做起事來＿＿＿＿。", "得心應手", "Lǐ xiǎojiě dāng zhǔrèn yǐjīng wǔ nián le, zuò qǐ shì lái déxīn yìngshǒu.", "Cô Lý đã làm chủ nhiệm năm năm nên làm việc rất thành thạo."),
            item("社會上＿＿＿＿的人事物，都可能對孩子的身心發展造成影響。", "形形色色", "Shèhuì shàng xíngxíngsèsè de rén shì wù, dōu kěnéng duì háizi de shēnxīn fāzhǎn zàochéng yǐngxiǎng.", "Những người và sự vật đa dạng trong xã hội đều có thể ảnh hưởng đến trẻ."),
            item("老王為了＿＿＿＿理想，就算經歷好幾次失敗，還是不放棄。", "實現", "Lǎo Wáng wèile shíxiàn lǐxiǎng, jiùsuàn jīnglì hǎo jǐ cì shībài, háishi bù fàngqì.", "Để thực hiện lý tưởng, ông Vương vẫn không bỏ cuộc."),
            item("你能幫我＿＿＿＿一個空中花園嗎？", "設計", "Nǐ néng bāng wǒ shèjì yí ge kōngzhōng huāyuán ma?", "Bạn có thể giúp tôi thiết kế một khu vườn trên không không?"),
          ],
        },
        {
          title: "二、連連看",
          tone: "reading",
          items: [
            item("人的一生，會經過幾個不同的教育階段。", "有學前、幼兒、小學、中學、大學、研究所等正規學校教育。", "Rén de yìshēng, huì jīngguò jǐ ge bùtóng de jiàoyù jiēduàn. Yǒu xuéqián, yòu'ér, xiǎoxué, zhōngxué, dàxué, yánjiūsuǒ děng.", "Con người trải qua nhiều giai đoạn giáo dục, từ mầm non đến nghiên cứu sinh."),
            item("不光是家庭，社會上其他形形色色的現象，", "也會影響一個人的身心發展。", "Bù guāng shì jiātíng, shèhuì shàng qítā xíngxíngsèsè de xiànxiàng, yě huì yǐngxiǎng yí ge rén de shēnxīn fāzhǎn.", "Không chỉ gia đình, xã hội cũng ảnh hưởng đến sự phát triển của con người."),
            item("學校教育很重要，", "家庭教育與社會教育也很重要。", "Xuéxiào jiàoyù hěn zhòngyào, jiātíng jiàoyù yǔ shèhuì jiàoyù yě hěn zhòngyào.", "Giáo dục nhà trường quan trọng; giáo dục gia đình và xã hội cũng quan trọng."),
            item("父母的一言一行，", "都是兒女學習的榜樣。", "Fùmǔ de yì yán yí xíng, dōu shì érnǚ xuéxí de bǎngyàng.", "Lời nói và việc làm của cha mẹ là tấm gương cho con cái."),
            item("終身學習的最終目標是，", "提升每個人的生活品質。", "Zhōngshēn xuéxí de zuìzhōng mùbiāo shì tíshēng měi ge rén de shēnghuó pǐnzhì.", "Mục tiêu cuối cùng của học tập suốt đời là nâng cao chất lượng cuộc sống."),
          ],
        },
        {
          title: "三、填入適當的字",
          tone: "grammar",
          items: [
            item("一般學校的暑＿＿＿＿，大概都長達兩個月。", "假", "Yìbān xuéxiào de shǔjià, dàgài dōu cháng dá liǎng ge yuè.", "Kỳ nghỉ hè của trường học thường kéo dài hai tháng."),
            item("你覺得哪個教育階＿＿＿＿對人的影響最大？", "段", "Nǐ juéde nǎ ge jiàoyù jiēduàn duì rén de yǐngxiǎng zuì dà?", "Bạn nghĩ giai đoạn giáo dục nào ảnh hưởng lớn nhất?"),
            item("身為長輩，你的一言一行都是晚輩們的＿＿＿＿樣。", "榜", "Shēnwéi zhǎngbèi, nǐ de yì yán yí xíng dōu shì wǎnbèi men de bǎngyàng.", "Là người lớn, lời nói việc làm của bạn là tấm gương cho thế hệ sau."),
            item("馬路兩＿＿＿＿種滿了行道樹，開花時特別好看。", "旁", "Mǎlù liǎng páng zhòng mǎnle xíngdào shù.", "Hai bên đường trồng đầy cây xanh."),
            item("有些人不是不想結婚，而是還沒有遇到自己理想中的對＿＿＿＿。", "象", "Yǒuxiē rén bù shì bù xiǎng jiéhūn, ér shì hái méiyǒu yùdào lǐxiǎng de duìxiàng.", "Một số người chưa kết hôn vì chưa gặp được người phù hợp."),
          ],
        },
        {
          title: "四、改錯字",
          tone: "grammar",
          items: [
            item("人生可經過學前、幼稚園、小學、中學、研究所等各種不同的教育階段。", "人生可經過學前、幼兒園、小學、中學、研究所等各種不同的教育階段。", "Rénshēng kě jīngguò xuéqián, yòu'éryuán, xiǎoxué, zhōngxué, yánjiūsuǒ děng gè zhǒng bùtóng de jiàoyù jiēduàn.", "Sửa 幼稚園 thành 幼兒園."),
            item("無論家庭或社會對教育的影響很大。", "無論家庭或社會，對教育的影響都很大。", "Wúlùn jiātíng huò shèhuì, duì jiàoyù de yǐngxiǎng dōu hěn dà.", "Thêm 都 để cấu trúc đầy đủ."),
            item("這支球隊常常保持旺盛的精神，所以比賽成績一直很好。", "這支球隊常常保持旺盛的鬥志，所以比賽成績一直很好。", "Zhè zhī qiúduì chángcháng bǎochí wàngshèng de dòuzhì.", "Dùng 旺盛的鬥志 tự nhiên hơn 旺盛的精神."),
            item("對過答案之後，老師說台麗是班上唯一上傷的人。", "對過答案之後，老師說台麗是班上唯一上榜的人。", "Duì guò dá'àn zhīhòu, lǎoshī shuō Táilì shì bān shàng wéiyī shàngbǎng de rén.", "Sửa 上傷 thành 上榜."),
            item("時代變化快速，你踏入社會之後，更要不斷地級收新知。", "時代變化快速，你踏入社會之後，更要不斷地吸收新知。", "Shídài biànhuà kuàisù, nǐ tàrù shèhuì zhīhòu, gèng yào bùduàn de xīshōu xīnzhī.", "Sửa 級收 thành 吸收."),
          ],
        },
        {
          title: "五、利用生詞造句",
          tone: "vocab",
          items: [
            item("心靈／強調／尊重", "老師強調，尊重別人的心靈與感受，是教育中重要的一部分。", "Lǎoshī qiángdiào, zūnzhòng biérén de xīnlíng yǔ gǎnshòu, shì jiàoyù zhōng zhòngyào de yí bùfen.", "Giáo viên nhấn mạnh rằng tôn trọng tâm hồn và cảm xúc của người khác rất quan trọng."),
            item("來源／唯一／影響", "學校不是知識唯一的來源，家庭與社會也會影響我們。", "Xuéxiào bú shì zhīshi wéiyī de láiyuán, jiātíng yǔ shèhuì yě huì yǐngxiǎng wǒmen.", "Trường học không phải nguồn kiến thức duy nhất."),
            item("得心應手／充實／適應", "他利用假日充實自己，因此很快就適應新工作，做得得心應手。", "Tā lìyòng jiàrì chōngshí zìjǐ, yīncǐ hěn kuài jiù shìyìng xīn gōngzuò, zuò de déxīn yìngshǒu.", "Nhờ bồi dưỡng bản thân, anh ấy nhanh chóng thích nghi với công việc mới."),
          ],
        },
        {
          title: "六、語法造句",
          tone: "grammar",
          items: [
            item("請用「……以為……，其實……」造句。", "很多人以為學校是教育唯一的來源，其實家庭與社會教育也很重要。", "Hěnduō rén yǐwéi xuéxiào shì jiàoyù wéiyī de láiyuán, qíshí jiātíng yǔ shèhuì jiàoyù yě hěn zhòngyào.", "Nhiều người nghĩ trường học là nguồn giáo dục duy nhất, nhưng giáo dục gia đình và xã hội cũng quan trọng."),
            item("請用「雖然……，然而……」造句。", "雖然社會多變，然而我們可以透過終身學習來適應環境。", "Suīrán shèhuì duōbiàn, rán'ér wǒmen kěyǐ tòuguò zhōngshēn xuéxí lái shìyìng huánjìng.", "Mặc dù xã hội thay đổi, chúng ta có thể thích nghi qua học tập suốt đời."),
          ],
        },
      ],
    },
  },
  {
    id: "lesson4-complete-text",
    lesson: 4,
    title: "第 4 課 不經一事，不長一智",
    titlePinyin: "Dì sì kè: Bù jīng yí shì, bù zhǎng yí zhì",
    titleVi: "Bài 4: Không trải qua việc thì không thêm khôn ngoan",
    lines: [
      line(
        "林琳從十二歲起就嚮往歐洲的生活，她看了許多介紹歐洲的雜誌和報導，那裡的美麗風光與著名古蹟深深地吸引著她。於是，在大學畢業兩年後的夏天，她終於下定決心，把銀行的存款提出來，報名參加了一個遊歐洲的旅行團。在二十天的旅程中，導遊要帶團員參觀八個國家的觀光勝地，行程非常緊湊。",
        "Lín Lín cóng shí'èr suì qǐ jiù xiàngwǎng Ōuzhōu de shēnghuó, tā kànle xǔduō jièshào Ōuzhōu de zázhì hé bàodào, nàlǐ de měilì fēngguāng yǔ zhùmíng gǔjì shēnshēn de xīyǐn zhe tā. Yúshì, zài dàxué bìyè liǎng nián hòu de xiàtiān, tā zhōngyú xiàdìng juéxīn, bǎ yínháng de cúnkuǎn tíchūlái, bàomíng cānjiāle yí ge yóu Ōuzhōu de lǚxíngtuán. Zài èrshí tiān de lǚchéng zhōng, dǎoyóu yào dài tuányuán cānguān bā ge guójiā de guānguāng shèngdì, xíngchéng fēicháng jǐncòu.",
        "Từ năm mười hai tuổi, Linh Linh đã ao ước cuộc sống ở châu Âu. Cô đọc nhiều tạp chí và bài báo giới thiệu về châu Âu; phong cảnh đẹp và những di tích nổi tiếng ở đó đã thu hút cô sâu sắc. Vì vậy, vào mùa hè hai năm sau khi tốt nghiệp đại học, cô cuối cùng quyết tâm rút tiền tiết kiệm trong ngân hàng để đăng ký tham gia một đoàn du lịch châu Âu. Trong hành trình hai mươi ngày, hướng dẫn viên sẽ dẫn các thành viên tham quan những thắng cảnh du lịch của tám quốc gia, nên lịch trình rất dày đặc.",
        [mark("vocab", "嚮往"), mark("vocab", "報導"), mark("vocab", "風光"), mark("vocab", "著名"), mark("vocab", "古蹟"), mark("vocab", "存款"), mark("vocab", "旅程"), mark("vocab", "勝地"), mark("vocab", "緊湊"), mark("proper", "歐洲")]
      ),
      line(
        "在旅程中的第三天晚上，大家坐在戶外聆聽音樂演奏。當美妙的旋律讓人如醉如癡時，她突然發現放在腳旁的皮包不翼而飛了。這真是青天霹靂，皮包裡有錢，還有比錢更重要的護照，怎麼辦呢？這時她已無心聽音樂，只感到非常著急。",
        "Zài lǚchéng zhōng de dì sān tiān wǎnshàng, dàjiā zuò zài hùwài língtīng yīnyuè yǎnzòu. Dāng měimiào de xuánlǜ ràng rén rúzuìrúchī shí, tā túrán fāxiàn fàng zài jiǎo páng de píbāo bùyì ér fēile. Zhè zhēn shì qīngtiān pīlì, píbāo lǐ yǒu qián, hái yǒu bǐ qián gèng zhòngyào de hùzhào, zěnme bàn ne? Zhèshí tā yǐ wúxīn tīng yīnyuè, zhǐ gǎndào fēicháng zháojí.",
        "Trong buổi hòa nhạc ngoài trời, cô bỗng phát hiện túi xách biến mất. Hộ chiếu ở trong túi khiến cô vô cùng lo lắng.",
        [mark("vocab", "聆聽"), mark("vocab", "演奏"), mark("vocab", "旋律"), mark("vocab", "突然"), mark("vocab", "無心"), mark("grammar", "當", "當...時"), mark("idiom", "如醉如癡"), mark("idiom", "不翼而飛"), mark("idiom", "青天霹靂")]
      ),
      line(
        "歷經內心的煎熬，好不容易等到音樂會結束了，她才把這件事告訴導遊和其他團員。大家推測也許小偷拿了皮包裡的錢以後，會把皮包連同護照丟在附近，所以就一起在位子下面、樹下、垃圾桶內尋找，結果徒勞無功，一群人只好失望地回到旅館。",
        "Lìjīng nèixīn de jiānáo, hǎobù róngyì děngdào yīnyuèhuì jiéshù le, tā cái bǎ zhè jiàn shì gàosu dǎoyóu hé qítā tuányuán. Dàjiā tuīcè yěxǔ xiǎotōu nále píbāo lǐ de qián yǐhòu, huì bǎ píbāo liántóng hùzhào diū zài fùjìn, suǒyǐ jiù yìqǐ zài wèizi xiàmiàn, shù xià, lājītǒng nèi xúnzhǎo, jiéguǒ túláo wúgōng, yì qún rén zhǐhǎo shīwàng de huí dào lǚguǎn.",
        "Trải qua sự dằn vặt trong lòng, mãi đến khi buổi hòa nhạc kết thúc cô mới kể việc này cho hướng dẫn viên và các thành viên khác. Mọi người đoán rằng có lẽ sau khi lấy tiền trong túi xách, tên trộm sẽ vứt chiếc túi cùng hộ chiếu ở gần đó, nên họ cùng tìm dưới ghế, dưới cây và trong thùng rác. Kết quả là công cốc, cả nhóm đành thất vọng trở về khách sạn.",
        [mark("grammar", "歷經", "歷經...(的)...，好不容易(才)..."), mark("grammar", "好不容易", "歷經...(的)...，好不容易(才)..."), mark("grammar", "等到", "等到...(之後)，..."), mark("grammar", "把皮包連同護照", "把...連同..."), mark("vocab", "煎熬"), mark("vocab", "推測"), mark("vocab", "尋找"), mark("idiom", "徒勞無功")]
      ),
      line(
        "第二天一大早，旅行團就要出發到下一個目的地了，林琳必須獨自留下來，團員們都來安慰她，並借給她一些錢，讓她內心感到很溫暖。但大家離開以後，頓時，懊惱、擔心、無助的感覺一起湧上心頭。好不容易等到上班時間，導遊找了一位住在當地的張先生來旅館幫助她，她的心情才好了一點。",
        "Dì èr tiān yí dà zǎo, lǚxíngtuán jiù yào chūfā dào xià yí ge mùdìdì le, Lín Lín bìxū dúzì liú xiàlái, tuányuán men dōu lái ānwèi tā, bìng jiè gěi tā yìxiē qián, ràng tā nèixīn gǎndào hěn wēnnuǎn. Dàn dàjiā líkāi yǐhòu, dùnshí, àonǎo, dānxīn, wúzhù de gǎnjué yìqǐ yǒng shàng xīntóu. Hǎobù róngyì děngdào shàngbān shíjiān, dǎoyóu zhǎole yí wèi zhù zài dāngdì de Zhāng xiānsheng lái lǚguǎn bāngzhù tā, tā de xīnqíng cái hǎole yìdiǎn.",
        "Sáng sớm hôm sau, đoàn du lịch phải lên đường đến điểm tiếp theo, còn Linh Linh buộc phải ở lại một mình. Các thành viên đến an ủi và cho cô mượn một ít tiền, khiến cô cảm thấy rất ấm lòng. Nhưng sau khi mọi người rời đi, cảm giác buồn bực, lo lắng và bất lực lập tức cùng dâng lên trong lòng cô. Mãi đến giờ làm việc, hướng dẫn viên mới tìm một ông Trương sống tại địa phương đến khách sạn giúp cô, lúc đó tâm trạng cô mới khá hơn một chút.",
        [mark("vocab", "獨自"), mark("vocab", "頓時"), mark("vocab", "懊惱"), mark("vocab", "無助"), mark("vocab", "湧"), mark("proper", "張先生")]
      ),
      line(
        "張先生先帶林琳到警察局報案，接著去拍照，補辦護照，然後到領事館補辦簽證。當時因為碰上旅遊旺季，每個地方都是大排長龍，一切都辦好以後，已經是下午五點了。他們趕快去搭火車，趕到下一站的旅館。一路上，張先生向林琳介紹當地的名勝和歷史，減少了她的不安。到了旅館，其他的團員都過來關心她，她像和失散的家人團聚一般，流下了既辛酸又快樂的眼淚。",
        "Zhāng xiānsheng xiān dài Lín Lín dào jǐngchá jú bào'àn, jiēzhe qù pāizhào, bǔbàn hùzhào, ránhòu dào lǐngshìguǎn bǔbàn qiānzhèng. Dāngshí yīnwèi pèngshàng lǚyóu wàngjì, měi ge dìfang dōu shì dà pái chánglóng, yíqiè dōu bàn hǎo yǐhòu, yǐjīng shì xiàwǔ wǔ diǎn le. Tāmen gǎnkuài qù dā huǒchē, gǎndào xià yì zhàn de lǚguǎn. Yí lù shàng, Zhāng xiānsheng xiàng Lín Lín jièshào dāngdì de míngshèng hé lìshǐ, jiǎnshǎo le tā de bù'ān. Dào le lǚguǎn, qítā tuányuán dōu guòlái guānxīn tā, tā xiàng hé shīsàn de jiārén tuánjù yìbān, liú xiàle jì xīnsuān yòu kuàilè de yǎnlèi.",
        "Ông Trương trước tiên đưa Linh Linh đến đồn cảnh sát trình báo, tiếp theo đi chụp ảnh và làm lại hộ chiếu, rồi đến lãnh sự quán làm lại thị thực. Lúc ấy đúng vào mùa du lịch cao điểm nên nơi nào cũng xếp hàng dài; khi hoàn tất mọi thủ tục thì đã năm giờ chiều. Họ vội đi tàu hỏa đến khách sạn ở chặng tiếp theo. Trên đường, ông Trương giới thiệu cho Linh Linh các danh thắng và lịch sử địa phương, giúp cô bớt bất an. Khi đến khách sạn, các thành viên khác đều đến hỏi han; cô giống như được đoàn tụ với gia đình đã thất lạc và rơi những giọt nước mắt vừa cay đắng vừa vui sướng.",
        [mark("grammar", "先", "先...接著(再)...，然後..."), mark("grammar", "接著", "先...接著(再)...，然後..."), mark("grammar", "然後", "先...接著(再)...，然後..."), mark("proper", "警察局"), mark("proper", "領事館"), mark("vocab", "報案"), mark("vocab", "補辦"), mark("vocab", "旺季"), mark("vocab", "一路上"), mark("vocab", "名勝"), mark("vocab", "不安"), mark("vocab", "失散"), mark("vocab", "團聚"), mark("idiom", "大排長龍")]
      ),
      line(
        "現在林琳已經安全回國，經過這次事件，林琳上了寶貴的一課。後來林琳常常在網路上寫文章分享自己的旅遊經驗，熱心地叮嚀讀者，出國旅遊要注意財物安全，護照和錢千萬要放在貼身口袋裡，也不要忘記帶幾張照片和證件的影本，如果等到發現不見了再去補辦，就要花更多錢和時間了。旅遊前做好所有的準備，旅程中隨時提高警覺，這樣才不會「乘興而來，敗興而歸」。",
        "Xiànzài Lín Lín yǐjīng ānquán huíguó, jīngguò zhè cì shìjiàn, Lín Lín shàngle bǎoguì de yí kè. Hòulái Lín Lín chángcháng zài wǎnglù shàng xiě wénzhāng fēnxiǎng zìjǐ de lǚyóu jīngyàn, rèxīn de dīngníng dúzhě, chūguó lǚyóu yào zhùyì cáiwù ānquán, hùzhào hé qián qiān wàn yào fàng zài tiēshēn kǒudài lǐ, yě búyào wàngjì dài jǐ zhāng zhàopiàn hé zhèngjiàn de yǐngběn, rúguǒ děngdào fāxiàn bú jiànle zài qù bǔbàn, jiù yào huā gèng duō qián hé shíjiān le. Lǚyóu qián zuò hǎo suǒyǒu de zhǔnbèi, lǚchéng zhōng suíshí tígāo jǐngjué, zhèyàng cái bú huì chéngxìng ér lái, bàixìng ér guī.",
        "Hiện nay Linh Linh đã về nước an toàn. Qua sự việc này, cô đã học được một bài học quý giá. Sau đó, cô thường viết bài trên mạng để chia sẻ kinh nghiệm du lịch và nhiệt tình nhắc nhở độc giả rằng khi ra nước ngoài phải chú ý an toàn tài sản; hộ chiếu và tiền nhất định phải để trong túi sát người, đồng thời đừng quên mang theo vài tấm ảnh và bản sao giấy tờ. Nếu đợi đến khi phát hiện bị mất mới đi làm lại thì sẽ tốn nhiều tiền bạc và thời gian hơn. Chuẩn bị đầy đủ trước chuyến đi và luôn nâng cao cảnh giác trong hành trình thì mới tránh được cảnh “hứng khởi mà đi, mất hứng mà về”.",
        [mark("vocab", "寶貴"), mark("vocab", "經驗"), mark("vocab", "叮嚀"), mark("vocab", "貼身"), mark("vocab", "警覺"), mark("vocab", "影本"), mark("grammar", "如果等到發現不見了再去補辦，就", "(如果)等到...就...了"), mark("idiom", "乘興而來，敗興而歸")]
      ),
    ],
    worksheet: {
      title: "第 4 課 不經一事，不長一智 課後練習卷",
      vi: "Phiếu bài tập sau bài học: Bài 4 - Không trải qua việc thì không thêm khôn ngoan",
      sections: [
        {
          title: "一、語法一：歷經……（的）……，好不容易（才）……",
          tone: "grammar",
          items: [
            item(
              "我花了 1 個月準備我的期末口試報告 → 今天終於完成了期末口試報告",
              "我歷經一個月的準備，好不容易才完成了期末口試報告。",
              "Wǒ lìjīng yí ge yuè de zhǔnbèi, hǎobù róngyì cái wánchéngle qīmò kǒushì bàogào.",
              "Tôi đã trải qua một tháng chuẩn bị, mãi mới hoàn thành bài báo cáo thi vấn đáp cuối kỳ."
            ),
            item(
              "小王和小李交往了 10 年 → 父母不同意，所以分手了 3 次 → 上個月結婚了",
              "小王和小李歷經十年的交往和三次分手，好不容易才在上個月結婚了。",
              "Xiǎo Wáng hé Xiǎo Lǐ lìjīng shí nián de jiāowǎng hé sān cì fēnshǒu, hǎobù róngyì cái zài shàng ge yuè jiéhūnle.",
              "Tiểu Vương và Tiểu Lý đã trải qua mười năm yêu nhau và ba lần chia tay, mãi đến tháng trước mới kết hôn."
            ),
            item(
              "科學家研究了 50 年 → 實驗了許多次都不成功 → 登上了火星（huǒxīng / huǒsing, Mars）",
              "科學家歷經五十年的研究和多次失敗的實驗，好不容易才登上了火星。",
              "Kēxuéjiā lìjīng wǔshí nián de yánjiū hé duō cì shībài de shíyàn, hǎobù róngyì cái dēngshàngle Huǒxīng.",
              "Các nhà khoa học đã trải qua năm mươi năm nghiên cứu và nhiều lần thí nghiệm thất bại, mãi mới đặt chân lên sao Hỏa."
            ),
            item(
              "小陳從小就想找到自己的母親 → 過程千辛萬苦 → 20 年以後找到了",
              "小陳歷經千辛萬苦，好不容易才在二十年後找到自己的母親。",
              "Xiǎo Chén lìjīng qiānxīn wànkǔ, hǎobù róngyì cái zài èrshí nián hòu zhǎodào zìjǐ de mǔqīn.",
              "Tiểu Trần đã trải qua muôn vàn gian khổ, mãi hai mươi năm sau mới tìm được mẹ mình."
            ),
          ],
        },
        {
          title: "二、語法二：等到……（之後），……",
          tone: "grammar",
          items: [
            item(
              "A：已經十二點了，你怎麼還沒睡覺？你打算什麼時候睡？",
              "等到我把功課做完之後，我就睡覺。",
              "Děngdào wǒ bǎ gōngkè zuòwán zhīhòu, wǒ jiù shuìjiào.",
              "Sau khi làm xong bài tập thì tôi sẽ đi ngủ."
            ),
            item(
              "A：今天是一月十五號，統一發票可以對獎了嗎？我們什麼時候可以對獎？",
              "等到一月二十五號開獎之後，我們就可以對獎了。",
              "Děngdào yī yuè èrshíwǔ hào kāijiǎng zhīhòu, wǒmen jiù kěyǐ duìjiǎngle.",
              "Đợi đến sau khi xổ thưởng ngày 25 tháng 1 thì chúng ta có thể dò hóa đơn."
            ),
            item(
              "A：今天是正月十二日，華人的春節結束了嗎？春節一般什麼時候結束？",
              "等到正月十五元宵節過後，春節才算結束。",
              "Děngdào zhēngyuè shíwǔ Yuánxiāojié guòhòu, Chūnjié cái suàn jiéshù.",
              "Đợi đến sau Tết Nguyên Tiêu vào rằm tháng Giêng thì Tết mới được xem là kết thúc."
            ),
            item(
              "A：根據台灣的法律規定，一般人幾歲可以騎機車？他們得通過駕照考試嗎？",
              "等到十八歲並通過駕照考試之後，一般人就可以騎機車了。",
              "Děngdào shíbā suì bìng tōngguò jiàzhào kǎoshì zhīhòu, yìbān rén jiù kěyǐ qí jīchēle.",
              "Sau khi đủ mười tám tuổi và thi đậu bằng lái, người bình thường có thể chạy xe máy."
            ),
            item(
              "A：現代人對結婚的條件和以前不同，你認為想結婚的男女，最好先有哪些條件再結婚？",
              "等到雙方都有穩定的工作和經濟能力之後，再結婚比較好。",
              "Děngdào shuāngfāng dōu yǒu wěndìng de gōngzuò hé jīngjì nénglì zhīhòu, zài jiéhūn bǐjiào hǎo.",
              "Đợi đến khi cả hai đều có công việc ổn định và khả năng tài chính rồi mới kết hôn thì tốt hơn."
            ),
          ],
        },
        {
          title: "三、語法三：把……連同……",
          tone: "grammar",
          items: [
            item(
              "A：快登機了，你的機票跟護照放在哪裡？我怎麼找不到？",
              "我把機票連同護照放在背包裡了。",
              "Wǒ bǎ jīpiào liántóng hùzhào fàng zài bèibāo lǐle.",
              "Tôi đã để vé máy bay cùng hộ chiếu trong ba lô rồi."
            ),
            item(
              "A：媽，我的褲子洗了嗎？你知道褲子裡有一張中獎的發票嗎？",
              "糟了，我把那張中獎的發票連同褲子一起洗了。",
              "Zāole, wǒ bǎ nà zhāng zhòngjiǎng de fāpiào liántóng kùzi yìqǐ xǐle.",
              "Chết rồi, mẹ đã giặt tờ hóa đơn trúng thưởng cùng với quần rồi."
            ),
            item(
              "A：您好，我想申請獎學金，請問是先交申請表，再交成績單嗎？",
              "不用，請把申請表連同成績單一起交給我們。",
              "Búyòng, qǐng bǎ shēnqǐngbiǎo liántóng chéngjīdān yìqǐ jiāo gěi wǒmen.",
              "Không cần, vui lòng nộp phiếu đăng ký cùng bảng điểm cho chúng tôi."
            ),
            item(
              "A：廚餘和垃圾可以放在一個袋子裡，一起丟掉嗎？根據規定，應該怎麼處理？",
              "不可以，不能把廚餘連同垃圾放在同一個袋子裡，應該分開處理。",
              "Bù kěyǐ, bùnéng bǎ chúyú liántóng lājī fàng zài tóng yí ge dàizi lǐ, yīnggāi fēnkāi chǔlǐ.",
              "Không được. Không thể bỏ rác nhà bếp cùng rác thường vào một túi; phải xử lý riêng."
            ),
          ],
        },
        {
          title: "四、語法四：先……，接著（再）……，然後……",
          tone: "grammar",
          items: [
            item(
              "A：您好，我想從淡水搭捷運去台北 101，請問應該在哪一站搭車、轉車？",
              "你先在淡水站搭往象山方向的紅線，接著一路坐到台北 101／世貿站，不用轉車，然後在那裡下車。",
              "Nǐ xiān zài Dànshuǐ Zhàn dā wǎng Xiàngshān fāngxiàng de hóngxiàn, jiēzhe yí lù zuò dào Táiběi Yīlíngyī Shìmào Zhàn, búyòng zhuǎnchē, ránhòu zài nàlǐ xiàchē.",
              "Trước tiên lên tuyến đỏ hướng Tượng Sơn tại ga Đạm Thủy, tiếp tục đi thẳng đến ga Đài Bắc 101／Trung tâm Thương mại Thế giới mà không cần đổi tàu, rồi xuống tại đó."
            ),
            item(
              "A：你的中文說得真好，你的學習方法有哪些？",
              "我先多聽中文，接著練習口說和寫作，然後每天閱讀中文文章。",
              "Wǒ xiān duō tīng Zhōngwén, jiēzhe liànxí kǒushuō hé xiězuò, ránhòu měitiān yuèdú Zhōngwén wénzhāng.",
              "Trước tiên tôi nghe tiếng Trung nhiều, tiếp theo luyện nói và viết, rồi mỗi ngày đọc bài tiếng Trung."
            ),
            item(
              "A：小華、小中和你一起寫報告，請說明你們三個人是怎麼合作的。（請注意三個主語不同）",
              "小華先蒐集資料，小中接著整理內容，然後我負責寫報告。",
              "Xiǎo Huá xiān sōují zīliào, Xiǎo Zhōng jiēzhe zhěnglǐ nèiróng, ránhòu wǒ fùzé xiě bàogào.",
              "Tiểu Hoa trước tiên thu thập tài liệu, Tiểu Trung tiếp theo sắp xếp nội dung, rồi tôi chịu trách nhiệm viết báo cáo."
            ),
            item(
              "A：請你教我做一道你最喜歡吃的菜，或是你國家的小吃。（請用「先……，接著（再）……，然後……」和「把……連同……」）",
              "先把米洗乾淨，接著把米連同適量的水放進電鍋，然後按下開關把飯煮熟。",
              "Xiān bǎ mǐ xǐ gānjìng, jiēzhe bǎ mǐ liántóng shìliàng de shuǐ fàng jìn diànguō, ránhòu ànxià kāiguān bǎ fàn zhǔshú.",
              "Trước tiên vo gạo sạch, tiếp theo cho gạo cùng lượng nước vừa đủ vào nồi cơm điện, rồi nhấn công tắc nấu chín cơm."
            ),
          ],
        },
        {
          title: "五、語法五：（如果）等到……，就……了",
          tone: "grammar",
          items: [
            item(
              "A：夜市的商品那麼便宜，品質也不差，應該不會買到仿冒品吧？",
              "如果等到買到仿冒品，就來不及後悔了。",
              "Rúguǒ děngdào mǎidào fǎngmàopǐn, jiù láibují hòuhuǐle.",
              "Nếu đợi đến lúc mua phải hàng giả thì hối hận cũng không kịp nữa."
            ),
            item(
              "A：我才喝了一杯啤酒，開車回家沒關係，不會被警察開罰單吧？",
              "如果等到被警察開罰單或發生車禍，就太晚了。",
              "Rúguǒ děngdào bèi jǐngchá kāi fá dān huò fāshēng chēhuò, jiù tài wǎnle.",
              "Nếu đợi đến khi bị cảnh sát phạt hoặc xảy ra tai nạn thì đã quá muộn."
            ),
            item(
              "A：常常吃漢堡、炸雞對我的身體健康應該沒有影響，我很少生病。",
              "如果等到身體出了問題，就太晚了。",
              "Rúguǒ děngdào shēntǐ chūle wèntí, jiù tài wǎnle.",
              "Nếu đợi đến khi cơ thể có vấn đề thì đã quá muộn."
            ),
            item(
              "A：網路交友非常方便，網站裡也有那些人的照片和資料，不會遇到騙子的，放心吧！",
              "如果等到被騙子拿走個人資料，就來不及了。",
              "Rúguǒ děngdào bèi piànzi názǒu gèrén zīliào, jiù láibujíle.",
              "Nếu đợi đến lúc kẻ lừa đảo lấy mất thông tin cá nhân thì đã không kịp nữa."
            ),
          ],
        },
        {
          title: "六、問題討論",
          tone: "reading",
          items: [
            item(
              "請簡單描述課文中林琳的旅行經驗，她怎麼安排行程？當她遇到困難時，有什麼樣的感覺？",
              "林琳從十二歲起就嚮往歐洲。大學畢業兩年後，她把存款提出來，報名參加一個二十天的歐洲旅行團，行程包括八個國家。皮包和護照不見後，她先非常著急，後來又感到懊惱、擔心和無助。",
              "Lín Lín cóng shí'èr suì qǐ jiù xiàngwǎng Ōuzhōu. Dàxué bìyè liǎng nián hòu, tā bǎ cúnkuǎn tíchūlái, bàomíng cānjiā yí ge èrshí tiān de Ōuzhōu lǚxíngtuán, xíngchéng bāokuò bā ge guójiā. Píbāo hé hùzhào bú jiàn hòu, tā xiān fēicháng zháojí, hòulái yòu gǎndào àonǎo, dānxīn hé wúzhù.",
              "Lâm Lâm mơ về châu Âu từ năm mười hai tuổi. Hai năm sau khi tốt nghiệp đại học, cô rút tiền tiết kiệm và đăng ký tour châu Âu hai mươi ngày qua tám nước. Sau khi túi xách và hộ chiếu biến mất, ban đầu cô rất sốt ruột, sau đó lại cảm thấy ân hận, lo lắng và bất lực."
            ),
            item(
              "一般來說，你去旅行以前都怎麼安排行程？是買介紹旅遊的書、上網找資料、問去過的朋友、問旅行社，還是有其他方法？",
              "我通常先上網查資料，接著問去過的朋友，然後預訂交通和住宿。",
              "Wǒ tōngcháng xiān shàngwǎng chá zīliào, jiēzhe wèn qùguo de péngyou, ránhòu yùdìng jiāotōng hé zhùsù.",
              "Tôi thường tra cứu thông tin trên mạng trước, tiếp theo hỏi những người bạn đã từng đi, rồi đặt phương tiện và chỗ ở."
            ),
            item(
              "你去旅行的時候，最重視哪些行程（例如：看風景、拍照、參觀博物館、吃當地的食物、逛逛當地的古蹟、買紀念品等等）？為什麼？",
              "我最重視看風景、參觀古蹟和品嘗當地食物，因為這些行程能讓我深入了解當地文化。",
              "Wǒ zuì zhòngshì kàn fēngjǐng, cānguān gǔjì hé pǐncháng dāngdì shíwù, yīnwèi zhèxiē xíngchéng néng ràng wǒ shēnrù liǎojiě dāngdì wénhuà.",
              "Tôi coi trọng nhất việc ngắm cảnh, tham quan di tích và thưởng thức món ăn địa phương, vì những hoạt động này giúp tôi hiểu sâu hơn về văn hóa địa phương."
            ),
            item(
              "你喜歡參加旅行團還是自助旅行？為什麼？這兩種旅行方式有哪些優點與缺點？",
              "我比較喜歡自助旅行，因為行程自由。自助旅行彈性大，但準備較麻煩；旅行團方便安全，但行程較不自由。",
              "Wǒ bǐjiào xǐhuan zìzhù lǚxíng, yīnwèi xíngchéng zìyóu. Zìzhù lǚxíng tánxìng dà, dàn zhǔnbèi jiào máfan; lǚxíngtuán fāngbiàn ānquán, dàn xíngchéng jiào bù zìyóu.",
              "Tôi thích du lịch tự túc hơn vì lịch trình tự do. Du lịch tự túc linh hoạt nhưng khâu chuẩn bị phiền hơn; đi tour tiện lợi và an toàn nhưng lịch trình kém tự do."
            ),
            item(
              "對你來說，旅行重要嗎？為什麼重要或不重要？你認為旅行對一個人的生活經驗有哪些幫助或影響？",
              "旅行很重要，因為它能開闊眼界、培養獨立能力，也能幫助我們理解不同文化。",
              "Lǚxíng hěn zhòngyào, yīnwèi tā néng kāikuò yǎnjiè, péiyǎng dúlì nénglì, yě néng bāngzhù wǒmen lǐjiě bùtóng wénhuà.",
              "Du lịch rất quan trọng vì nó có thể mở rộng tầm mắt, rèn luyện khả năng tự lập và giúp chúng ta hiểu các nền văn hóa khác nhau."
            ),
            item(
              "你同意「不經一事，不長一智」這個觀念嗎？為什麼人總是得從經驗中才能得到成長呢？請談談自己「不經一事，不長一智」的一次經驗。",
              "我同意。以前我旅行時弄丟過錢包，從那次經驗以後，我學會把證件影本和財物分開保管。",
              "Wǒ tóngyì. Yǐqián wǒ lǚxíng shí nòngdiūguo qiánbāo, cóng nà cì jīngyàn yǐhòu, wǒ xuéhuì bǎ zhèngjiàn yǐngběn hé cáiwù fēnkāi bǎoguǎn.",
              "Tôi đồng ý. Trước đây tôi từng làm mất ví khi đi du lịch; từ kinh nghiệm đó, tôi học được cách cất riêng bản sao giấy tờ và tài sản."
            ),
          ],
        },
        {
          title: "七、課室活動：旅遊的經驗",
          tone: "reading",
          items: [
            item(
              "介紹你旅遊的地方，有什麼特色、風光、古蹟，深深吸引你？",
              "我曾到台南旅行。安平古堡、傳統老街和當地小吃都很有特色，深深吸引我。",
              "Wǒ céng dào Táinán lǚxíng. Ānpíng Gǔbǎo, chuántǒng lǎojiē hé dāngdì xiǎochī dōu hěn yǒu tèsè, shēnshēn xīyǐn wǒ.",
              "Tôi từng du lịch Đài Nam. Pháo đài An Bình, những con phố cổ truyền thống và món ăn địa phương đều rất đặc sắc, khiến tôi vô cùng bị thu hút."
            ),
            item(
              "在旅程中，發生了什麼特別的事情，或是遇到什麼難題，你怎麼解決？",
              "旅程中我一度迷路，後來先用手機查地圖，接著請當地人指路，然後順利回到旅館。",
              "Lǚchéng zhōng wǒ yídù mílù, hòulái xiān yòng shǒujī chá dìtú, jiēzhe qǐng dāngdì rén zhǐlù, ránhòu shùnlì huídào lǚguǎn.",
              "Trong chuyến đi tôi từng bị lạc. Sau đó tôi tra bản đồ bằng điện thoại trước, tiếp theo nhờ người địa phương chỉ đường, rồi thuận lợi trở về khách sạn."
            ),
            item(
              "如果你的朋友也打算去那個地方旅遊，你會怎麼提醒他們，做好哪些萬全的準備？",
              "我會提醒朋友先查好交通和天氣，預訂住宿，並把護照影本連同緊急聯絡資料放在另一個袋子裡。",
              "Wǒ huì tíxǐng péngyou xiān chá hǎo jiāotōng hé tiānqì, yùdìng zhùsù, bìng bǎ hùzhào yǐngběn liántóng jǐnjí liánluò zīliào fàng zài lìng yí ge dàizi lǐ.",
              "Tôi sẽ nhắc bạn bè kiểm tra trước phương tiện và thời tiết, đặt chỗ ở, đồng thời để bản sao hộ chiếu cùng thông tin liên lạc khẩn cấp trong một túi khác."
            ),
          ],
        },
        {
          title: "八、閱讀與討論：導遊經驗談",
          tone: "reading",
          items: [
            item(
              "你認為做導遊必須有哪些條件（例如健康、有好口才等）？",
              "導遊必須身體健康、有好口才，還要熟悉景點、會外語，並具備處理突發狀況的能力。",
              "Dǎoyóu bìxū shēntǐ jiànkāng, yǒu hǎo kǒucái, hái yào shúxī jǐngdiǎn, huì wàiyǔ, bìng jùbèi chǔlǐ tūfā zhuàngkuàng de nénglì.",
              "Hướng dẫn viên phải có sức khỏe tốt, khả năng ăn nói, hiểu rõ các điểm tham quan, biết ngoại ngữ và có năng lực xử lý tình huống bất ngờ."
            ),
            item(
              "組織（zǔzhī / zǔjhih, to organize）旅行團，最好分年齡、職業等不同性質嗎？",
              "我認為最好按照年齡、職業和興趣分組，這樣比較容易安排合適的行程；不過混合團體也能促進交流。",
              "Wǒ rènwéi zuìhǎo ànzhào niánlíng, zhíyè hé xìngqù fēnzǔ, zhèyàng bǐjiào róngyì ānpái héshì de xíngchéng; búguò hùnhé tuántǐ yě néng cùjìn jiāoliú.",
              "Tôi cho rằng tốt nhất nên chia nhóm theo tuổi tác, nghề nghiệp và sở thích để dễ sắp xếp lịch trình phù hợp; tuy nhiên, nhóm hỗn hợp cũng có thể thúc đẩy giao lưu."
            ),
            item(
              "你對導遊工作有興趣嗎？加入這個行列最大的好處是什麼？",
              "我對導遊工作有興趣。最大的好處是能接觸不同文化、認識各地的人，並提升語言和解決問題的能力。",
              "Wǒ duì dǎoyóu gōngzuò yǒu xìngqù. Zuì dà de hǎochu shì néng jiēchù bùtóng wénhuà, rènshi gèdì de rén, bìng tíshēng yǔyán hé jiějué wèntí de nénglì.",
              "Tôi có hứng thú với công việc hướng dẫn viên. Lợi ích lớn nhất là được tiếp xúc với nhiều nền văn hóa, làm quen với người ở nhiều nơi và nâng cao khả năng ngôn ngữ cùng kỹ năng giải quyết vấn đề."
            ),
          ],
        },
      ],
    },
  },
];
