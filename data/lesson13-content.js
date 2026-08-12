const mark = (type, term, target = term) => ({ type, markType: type, term, text: term, target });

const line = (zh, pinyin, vi, marks = []) => ({ speaker: "旁白", zh, pinyin, vi, marks });

const worksheetItem = (prompt, answer, pinyin, vi) => ({ prompt, answer, pinyin, vi });

function card(id, type, term, pinyin, meaningZh, meaningPinyin, meaningVi, example, examplePinyin, exampleVi) {
  return {
    id: `13-${id}`,
    lesson: 13,
    type,
    term,
    pinyin,
    meaningZh,
    meaningPinyin,
    meaningVi,
    example,
    examplePinyin,
    exampleVi,
    audioUrl: "",
  };
}

const vocabRows = [
  ["v001", "生詞", "演變", "yan3 bian4", "發展變化的過程。", "fa1 zhan3 bian4 hua4 de5 guo4 cheng2.", "sự diễn biến; quá trình biến đổi", "雖然頭痛只是小問題，但是如果小病不醫好，等到演變成大病，就更麻煩了。許多中文字歷經多年的演變，現在已經很少人熟知這些字的來源了。", "sui1 ran2 tou2 tong4 zhi3 shi4 xiao3 wen4 ti2, dan4 shi4 ru2 guo3 xiao3 bing4 bu4 yi1 hao3, deng3 dao4 yan3 bian4 cheng2 da4 bing4, jiu4 geng4 ma2 fan2 le5. xu3 duo1 zhong1 wen2 zi4 li4 jing1 duo1 nian2 de5 yan3 bian4, xian4 zai4 yi3 jing1 hen3 shao3 ren2 shu2 zhi1 zhe4 xie1 zi4 de5 lai2 yuan2 le5.", "Dù đau đầu chỉ là vấn đề nhỏ, nhưng nếu bệnh nhẹ không chữa khỏi, đến khi diễn biến thành bệnh nặng thì càng phiền. Nhiều chữ Hán đã trải qua nhiều năm biến đổi, nay rất ít người biết rõ nguồn gốc của chúng."],
  ["v002", "生詞", "銅器", "tong2 qi4", "用銅製成的器物。", "yong4 tong2 zhi4 cheng2 de5 qi4 wu4.", "đồ đồng", "博物館裡有許多古代的銅器，這些銅器對於研究古代的文字與文化都有很大的幫助。", "bo2 wu4 guan3 li3 you3 xu3 duo1 gu3 dai4 de5 tong2 qi4, zhe4 xie1 tong2 qi4 dui4 yu2 yan2 jiu1 gu3 dai4 de5 wen2 zi4 yu3 wen2 hua4 dou1 you3 hen3 da4 de5 bang1 zhu4.", "Trong bảo tàng có nhiều đồ đồng cổ; chúng giúp ích rất nhiều cho việc nghiên cứu chữ viết và văn hóa cổ đại."],
  ["v003", "生詞", "字體", "zi4 ti3", "文字書寫或印刷的形體樣式。", "wen2 zi4 shu1 xie3 huo4 yin4 shua1 de5 xing2 ti3 yang4 shi4.", "kiểu chữ; phông chữ", "用電腦打中文作業時，比較常用標楷體和細明體等正式字體。", "yong4 dian4 nao3 da3 zhong1 wen2 zuo4 ye4 shi2, bi3 jiao4 chang2 yong4 biao1 kai3 ti3 he2 xi4 ming2 ti3 deng3 zheng4 shi4 zi4 ti3.", "Khi làm bài tập tiếng Trung trên máy tính, người ta thường dùng các kiểu chữ trang trọng như chữ Khải chuẩn và chữ Minh mảnh."],
  ["v004", "生詞", "墨", "mo4", "書寫或繪畫使用的黑色材料。", "shu1 xie3 huo4 hui4 hua4 shi3 yong4 de5 hei1 se4 cai2 liao4.", "mực", "聽說用這種墨寫出來的書法字特別好看，所以我打算買來送給我的書法老師。", "ting1 shuo1 yong4 zhe4 zhong3 mo4 xie3 chu1 lai2 de5 shu1 fa3 zi4 te4 bie2 hao3 kan4, suo3 yi3 wo3 da3 suan4 mai3 lai2 song4 gei3 wo3 de5 shu1 fa3 lao3 shi1.", "Nghe nói chữ thư pháp viết bằng loại mực này đặc biệt đẹp, nên tôi định mua tặng thầy dạy thư pháp."],
  ["v005", "生詞", "硯", "yan4", "磨墨和盛墨的文具。", "mo2 mo4 he2 sheng4 mo4 de5 wen2 ju4.", "nghiên mực", "所謂「文房四寶」是指筆、墨、紙、硯，有些人為了方便，使用墨水寫書法，就不必用到墨和硯了。", "suo3 wei4 wen2 fang2 si4 bao3 shi4 zhi3 bi3, mo4, zhi3, yan4, you3 xie1 ren2 wei4 le5 fang1 bian4, shi3 yong4 mo4 shui3 xie3 shu1 fa3, jiu4 bu4 bi4 yong4 dao4 mo4 he2 yan4 le5.", "‘Văn phòng tứ bảo’ là bút, mực, giấy và nghiên. Một số người dùng mực nước cho tiện nên không cần dùng thỏi mực và nghiên."],
  ["v006", "生詞", "工整", "gong1 zheng3", "字寫得整齊端正。", "zi4 xie3 de2 zheng3 qi2 duan1 zheng4.", "ngay ngắn; chỉnh tề", "從一個人寫字的工整程度，可以看出他做事情的態度，因此有些公司會要求來找工作的人手寫履歷表。", "cong2 yi2 ge5 ren2 xie3 zi4 de5 gong1 zheng3 cheng2 du4, ke3 yi3 kan4 chu1 ta1 zuo4 shi4 qing2 de5 tai4 du4, yin1 ci3 you3 xie1 gong1 si1 hui4 yao1 qiu2 lai2 zhao3 gong1 zuo4 de5 ren2 shou3 xie3 lv3 li4 biao3.", "Mức độ ngay ngắn của chữ viết có thể cho thấy thái độ làm việc, vì vậy một số công ty yêu cầu ứng viên viết tay sơ yếu lý lịch."],
  ["v007", "生詞", "通行", "tong1 xing2", "被接受，或可以經過某處。", "bei4 jie1 shou4, huo4 ke3 yi3 jing1 guo4 mou3 chu4.", "lưu hành; đi qua được", "聽說這種信用卡已經在全世界通行了，所以你不管去哪裡旅行都可以用它付錢。颱風過後，許多大石頭從山上滾下來，壓壞了這座橋，所以現在已經無法通行了。", "ting1 shuo1 zhe4 zhong3 xin4 yong4 ka3 yi3 jing1 zai4 quan2 shi4 jie4 tong1 xing2 le5, suo3 yi3 ni3 bu4 guan3 qu4 na3 li3 lv3 xing2 dou1 ke3 yi3 yong4 ta1 fu4 qian2. tai2 feng1 guo4 hou4, xu3 duo1 da4 shi2 tou2 cong2 shan1 shang4 gun3 xia4 lai2, ya1 huai4 le5 zhe4 zuo4 qiao2, suo3 yi3 xian4 zai4 yi3 jing1 wu2 fa3 tong1 xing2 le5.", "Nghe nói thẻ tín dụng này lưu hành khắp thế giới nên đi đâu bạn cũng có thể dùng để trả tiền. Sau bão, đá lớn lăn xuống núi làm hỏng cầu nên hiện không thể đi qua."],
  ["v008", "生詞", "演化", "yan3 hua4", "逐漸發展變化。", "zhu2 jian4 fa1 zhan3 bian4 hua4.", "tiến hóa; dần biến đổi", "有的專家認為恐龍並沒有真的滅絕，也表示現代的鳥其實是由一部分的恐龍演化而來的。", "you3 de5 zhuan1 jia1 ren4 wei2 kong3 long2 bing4 mei2 you3 zhen1 de5 mie4 jue2, ye3 biao3 shi4 xian4 dai4 de5 niao3 qi2 shi2 shi4 you2 yi2 bu4 fen4 de5 kong3 long2 yan3 hua4 er2 lai2 de5.", "Một số chuyên gia cho rằng khủng long chưa thật sự tuyệt chủng và chim hiện đại thực ra tiến hóa từ một bộ phận khủng long."],
  ["v009", "生詞", "形體", "xing2 ti3", "身體或物體的外在形狀。", "shen1 ti3 huo4 wu4 ti3 de5 wai4 zai4 xing2 zhuang4.", "hình thể", "有些狗的形體與狼很相像，從外觀上並不容易分別。", "you3 xie1 gou3 de5 xing2 ti3 yu3 lang2 hen3 xiang1 xiang4, cong2 wai4 guan1 shang4 bing4 bu4 rong2 yi4 fen1 bie2.", "Hình thể của một số loài chó rất giống sói nên không dễ phân biệt bằng vẻ ngoài."],
  ["v010", "生詞", "筆畫", "bi3 hua4", "組成漢字的線條。", "zu3 cheng2 han4 zi4 de5 xian4 tiao2.", "nét chữ", "許多中文字的筆畫很多又複雜，對學習中文的人來說非常困難，例如烏龍茶的「龍」。", "xu3 duo1 zhong1 wen2 zi4 de5 bi3 hua4 hen3 duo1 you4 fu4 za2, dui4 xue2 xi2 zhong1 wen2 de5 ren2 lai2 shuo1 fei1 chang2 kun4 nan2, li4 ru2 wu1 long2 cha2 de5 long2.", "Nhiều chữ Hán có rất nhiều nét phức tạp, rất khó đối với người học tiếng Trung, như chữ ‘long’ trong trà ô long."],
  ["v011", "生詞", "書寫", "shu1 xie3", "寫字。", "xie3 zi4.", "viết; ghi chép", "書寫正式的商業電子郵件時，除了得注意使用的詞，還得了解商業郵件的格式規定，才不會讓客戶誤會。", "shu1 xie3 zheng4 shi4 de5 shang1 ye4 dian4 zi3 you2 jian4 shi2, chu2 le5 dei3 zhu4 yi4 shi3 yong4 de5 ci2, hai2 dei3 liao3 jie3 shang1 ye4 you2 jian4 de5 ge2 shi4 gui1 ding4, cai2 bu4 hui4 rang4 ke4 hu4 wu4 hui4.", "Khi viết email thương mại trang trọng, ngoài chú ý từ ngữ còn phải hiểu quy định định dạng để khách hàng không hiểu lầm."],
  ["v012", "生詞", "富有", "fu4 you3", "擁有很多，或內容豐富。", "yong1 you3 hen3 duo1, huo4 nei4 rong2 feng1 fu4.", "giàu có; giàu tính chất nào đó", "他設計的服裝富有藝術感，和一般流行服裝有很大的差別。很多富有的人開名車、住又大又漂亮的房子，但是過這種生活的人真的幸福嗎？這個問題值得深思。", "ta1 she4 ji4 de5 fu2 zhuang1 fu4 you3 yi4 shu4 gan3, he2 yi4 ban1 liu2 xing2 fu2 zhuang1 you3 hen3 da4 de5 cha4 bie2. hen3 duo1 fu4 you3 de5 ren2 kai1 ming2 che1, zhu4 you4 da4 you4 piao4 liang4 de5 fang2 zi5, dan4 shi4 guo4 zhe4 zhong3 sheng1 huo2 de5 ren2 zhen1 de5 xing4 fu2 ma5? zhe4 ge5 wen4 ti2 zhi2 de5 shen1 si1.", "Trang phục anh ấy thiết kế giàu tính nghệ thuật, rất khác thời trang thông thường. Nhiều người giàu lái xe sang, ở nhà lớn đẹp, nhưng sống như vậy có thật sự hạnh phúc không? Câu hỏi này đáng suy ngẫm."],
  ["v013", "生詞", "典雅", "dian3 ya3", "優美而不俗氣。", "you1 mei3 er2 bu4 su2 qi4.", "thanh nhã", "這間中國餐館布置得很典雅，店裡所有的桌、椅、杯、盤都是真的古董，整間店充滿了中國風。", "zhe4 jian1 zhong1 guo2 can1 guan3 bu4 zhi4 de2 hen3 dian3 ya3, dian4 li3 suo3 you3 de5 zhuo1, yi3, bei1, pan2 dou1 shi4 zhen1 de5 gu3 dong3, zheng3 jian1 dian4 chong1 man3 le5 zhong1 guo2 feng1.", "Nhà hàng Trung Hoa này trang trí rất thanh nhã; bàn, ghế, cốc và đĩa đều là đồ cổ thật, cả quán đậm phong cách Trung Hoa."],
  ["v014", "生詞", "美感", "mei3 gan3", "對美的感受。", "dui4 mei3 de5 gan3 shou4.", "cảm quan thẩm mỹ", "這條街已經有一百年的歷史，可惜街上商店的招牌太亂，破壞了整條街的歷史美感。", "zhe4 tiao2 jie1 yi3 jing1 you3 yi4 bai3 nian2 de5 li4 shi3, ke3 xi1 jie1 shang4 shang1 dian4 de5 zhao1 pai2 tai4 luan4, po4 huai4 le5 zheng3 tiao2 jie1 de5 li4 shi3 mei3 gan3.", "Con phố đã có lịch sử một trăm năm, tiếc rằng biển hiệu lộn xộn làm hỏng vẻ đẹp lịch sử của cả phố."],
  ["v015", "生詞", "深具", "shen1 ju4", "充分具有。", "chong1 fen4 ju4 you3.", "có đầy đủ; có sâu sắc", "這位老闆對他公司的新產品深具信心，相信開始賣以後，一定會替公司賺進一大筆錢。", "zhe4 wei4 lao3 ban3 dui4 ta1 gong1 si1 de5 xin1 chan3 pin3 shen1 ju4 xin4 xin1, xiang1 xin4 kai1 shi3 mai4 yi3 hou4, yi2 ding4 hui4 ti4 gong1 si1 zhuan4 jin4 yi2 da4 bi3 qian2.", "Ông chủ rất tin tưởng sản phẩm mới và tin rằng khi bán ra nó chắc chắn sẽ kiếm cho công ty một khoản lớn."],
  ["v016", "生詞", "磨滅", "mo2 mie4", "經過時間而消失。", "jing1 guo4 shi2 jian1 er2 xiao1 shi1.", "mai một; phai mòn", "經過長久的歲月，這塊石頭上的小篆字跡已經磨滅了。陳經理對這家公司多年來的貢獻不可磨滅，連老闆都非常尊敬他。", "jing1 guo4 chang2 jiu3 de5 sui4 yue4, zhe4 kuai4 shi2 tou2 shang4 de5 xiao3 zhuan4 zi4 ji1 yi3 jing1 mo2 mie4 le5. chen2 jing1 li3 dui4 zhe4 jia1 gong1 si1 duo1 nian2 lai2 de5 gong4 xian4 bu4 ke3 mo2 mie4, lian2 lao3 ban3 dou1 fei1 chang2 zun1 jing4 ta1.", "Qua năm tháng dài lâu, chữ tiểu triện trên phiến đá đã mòn mất. Đóng góp nhiều năm của quản lý Trần cho công ty không thể phai mờ, ngay cả ông chủ cũng rất kính trọng ông."],
  ["v017", "生詞", "經歷", "jing1 li4", "親身遇到，或所遇到的事情。", "qin1 shen1 yu4 dao4, huo4 suo3 yu4 dao4 de5 shi4 qing2.", "trải qua; trải nghiệm", "陳奶奶一生經歷過兩次戰爭，每次講起戰爭的經過，她的眼淚總是流個不停。林伯伯不但參加過第二次世界大戰，也參加過奧運，如此豐富的人生經歷，使他的演講非常精彩。", "chen2 nai3 nai5 yi4 sheng1 jing1 li4 guo4 liang3 ci4 zhan4 zheng1, mei3 ci4 jiang3 qi3 zhan4 zheng1 de5 jing1 guo4, ta1 de5 yan3 lei4 zong3 shi4 liu2 ge5 bu4 ting2. lin2 bo2 bo5 bu4 dan4 can1 jia1 guo4 di4 er4 ci4 shi4 jie4 da4 zhan4, ye3 can1 jia1 guo4 ao4 yun4, ru2 ci3 feng1 fu4 de5 ren2 sheng1 jing1 li4, shi3 ta1 de5 yan3 jiang3 fei1 chang2 jing1 cai3.", "Bà Trần trải qua hai cuộc chiến và luôn rơi lệ khi kể lại. Bác Lâm từng tham gia Thế chiến thứ hai lẫn Olympic; trải nghiệm phong phú khiến bài diễn thuyết rất đặc sắc."],
  ["v018", "生詞", "識字", "shi2 zi4", "認得並能讀寫文字。", "ren4 de2 bing4 neng2 du2 xie3 wen2 zi4.", "biết chữ", "這個國家不識字的人數占全國人口的百分之七十，因此政府把提高識字率視為未來十年最重要的教育目標。", "zhe4 ge5 guo2 jia1 bu4 shi2 zi4 de5 ren2 shu4 zhan4 quan2 guo2 ren2 kou3 de5 bai3 fen1 zhi1 qi1 shi2, yin1 ci3 zheng4 fu3 ba3 ti2 gao1 shi2 zi4 lv4 shi4 wei2 wei4 lai2 shi2 nian2 zui4 zhong4 yao4 de5 jiao4 yu4 mu4 biao1.", "Người mù chữ chiếm 70% dân số nước này, nên chính phủ coi nâng cao tỷ lệ biết chữ là mục tiêu giáo dục quan trọng nhất trong mười năm tới."],
  ["v019", "生詞", "文盲", "wen2 mang2", "不識字的人。", "bu4 shi2 zi4 de5 ren2.", "người mù chữ", "有些專家認為簡體字運動是為了減少文盲，讓中國大陸的人民都具有基本的識字和寫字能力。", "you3 xie1 zhuan1 jia1 ren4 wei2 jian3 ti3 zi4 yun4 dong4 shi4 wei4 le5 jian3 shao3 wen2 mang2, rang4 zhong1 guo2 da4 lu4 de5 ren2 min2 dou1 ju4 you3 ji1 ben3 de5 shi2 zi4 he2 xie3 zi4 neng2 li4.", "Một số chuyên gia cho rằng phong trào chữ giản thể nhằm giảm mù chữ, giúp người dân Trung Quốc đại lục có khả năng đọc viết cơ bản."],
  ["v020", "生詞", "新生代", "xin1 sheng1 dai4", "新的一代人。", "xin1 de5 yi2 dai4 ren2.", "thế hệ mới", "想要當個新生代的明星並不容易，不但要會唱歌、會跳舞，還得會演戲。", "xiang3 yao4 dang1 ge5 xin1 sheng1 dai4 de5 ming2 xing1 bing4 bu4 rong2 yi4, bu4 dan4 yao4 hui4 chang4 ge1, hui4 tiao4 wu3, hai2 dei3 hui4 yan3 xi4.", "Muốn trở thành ngôi sao thế hệ mới không dễ: không chỉ phải biết hát, biết nhảy mà còn phải biết diễn xuất."],
  ["v021", "生詞", "暢遊", "chang4 you2", "痛快地遊覽。", "tong4 kuai4 di4 you2 lan3.", "du ngoạn thỏa thích", "他打算利用這半年的假期，暢遊整個歐洲，讓自己的人生經驗更豐富。", "ta1 da3 suan4 li4 yong4 zhe4 ban4 nian2 de5 jia4 qi1, chang4 you2 zheng3 ge5 ou1 zhou1, rang4 zi4 ji3 de5 ren2 sheng1 jing1 yan4 geng4 feng1 fu4.", "Anh ấy định dùng kỳ nghỉ nửa năm để du ngoạn khắp châu Âu, làm phong phú thêm trải nghiệm đời mình."],
  ["v022", "生詞", "碑銘", "bei1 ming2", "刻在石碑上記錄事件或人物事蹟的文字。", "ke4 zai4 shi2 bei1 shang4 ji4 lu4 shi4 jian4 huo4 ren2 wu4 shi4 ji1 de5 wen2 zi4.", "văn bia", "古人常用碑銘記錄重大的事件，或記錄偉人的事蹟。", "gu3 ren2 chang2 yong4 bei1 ming2 ji4 lu4 zhong4 da4 de5 shi4 jian4, huo4 ji4 lu4 wei3 ren2 de5 shi4 ji1.", "Người xưa thường dùng văn bia để ghi lại sự kiện lớn hoặc sự tích của vĩ nhân."],
  ["v023", "生詞", "匾額", "bian3 e2", "掛在門上或牆上的橫式題字牌。", "gua4 zai4 men2 shang4 huo4 qiang2 shang4 de5 heng2 shi4 ti2 zi4 pai2.", "hoành phi; biển đề ngang", "陳先生為了感謝張醫生治好他的病，特別送了一塊匾額，匾額上寫著「仁心仁術」四個字。", "chen2 xian1 sheng1 wei4 le5 gan3 xie4 zhang1 yi1 sheng1 zhi4 hao3 ta1 de5 bing4, te4 bie2 song4 le5 yi2 kuai4 bian3 e2, bian3 e2 shang4 xie3 zhe5 ren2 xin1 ren2 shu4 si4 ge5 zi4.", "Để cảm ơn bác sĩ Trương chữa khỏi bệnh, ông Trần tặng một tấm hoành phi ghi bốn chữ ‘nhân tâm nhân thuật’."],
  ["v024", "生詞", "題字", "ti2 zi4", "寫下作為紀念或標示的文字。", "xie3 xia4 zuo4 wei2 ji4 nian4 huo4 biao1 shi4 de5 wen2 zi4.", "đề chữ", "這間學校校門口的題字是由第一任校長題的，深具意義。李先生捐一億元給他的母校蓋圖書館，圖書館蓋好了以後，學校特別請他在門口題字，作為紀念。", "zhe4 jian1 xue2 xiao4 xiao4 men2 kou3 de5 ti2 zi4 shi4 you2 di4 yi1 ren4 xiao4 zhang3 ti2 de5, shen1 ju4 yi4 yi4. li3 xian1 sheng1 juan1 yi2 yi4 yuan2 gei3 ta1 de5 mu3 xiao4 gai4 tu2 shu1 guan3, tu2 shu1 guan3 gai4 hao3 le5 yi3 hou4, xue2 xiao4 te4 bie2 qing3 ta1 zai4 men2 kou3 ti2 zi4, zuo4 wei2 ji4 nian4.", "Chữ đề ở cổng trường do hiệu trưởng đầu tiên viết nên rất ý nghĩa. Ông Lý quyên góp một trăm triệu để trường cũ xây thư viện; sau khi hoàn thành, trường mời ông đề chữ ở cửa làm kỷ niệm."],
  ["v025", "生詞", "古籍", "gu3 ji2", "古代流傳下來的書。", "gu3 dai4 liu2 chuan2 xia4 lai2 de5 shu1.", "cổ thư", "這位學者花了十年整理圖書館裡的古籍，對於古典文獻相當有研究。", "zhe4 wei4 xue2 zhe3 hua1 le5 shi2 nian2 zheng3 li3 tu2 shu1 guan3 li3 de5 gu3 ji2, dui4 yu2 gu3 dian3 wen2 xian4 xiang1 dang1 you3 yan2 jiu1.", "Học giả này dành mười năm chỉnh lý cổ thư trong thư viện và nghiên cứu rất sâu về văn hiến cổ điển."],
  ["v026", "生詞", "經典", "jing1 dian3", "具有長久重要價值的作品。", "ju4 you3 chang2 jiu3 zhong4 yao4 jia4 zhi2 de5 zuo4 pin3.", "kinh điển", "雖然時代不斷在改變，每年都有許多現代的文學作品出版，但古代的經典文學作品仍然有永遠保存的價值。", "sui1 ran2 shi2 dai4 bu4 duan4 zai4 gai3 bian4, mei3 nian2 dou1 you3 xu3 duo1 xian4 dai4 de5 wen2 xue2 zuo4 pin3 chu1 ban3, dan4 gu3 dai4 de5 jing1 dian3 wen2 xue2 zuo4 pin3 reng2 ran2 you3 yong3 yuan3 bao3 cun2 de5 jia4 zhi2.", "Dù thời đại luôn thay đổi và mỗi năm có nhiều tác phẩm hiện đại xuất bản, tác phẩm văn học kinh điển cổ đại vẫn có giá trị lưu truyền mãi mãi."],
  ["v027", "生詞", "旁", "pang2", "漢字左右兩側的部件。", "han4 zi4 zuo3 you4 liang3 ce4 de5 bu4 jian4.", "bộ bên của chữ Hán", "「河」、「湖」、「海」字的「氵」是水旁；而「打」、「抱」、「擋」字的「扌」則是手旁。", "he2, hu2, hai3 zi4 de5 san1 dian3 shui3 shi4 shui3 pang2; er2 da3, bao4, dang3 zi4 de5 ti2 shou3 pang2 ze2 shi4 shou3 pang2.", "Bộ ba chấm thủy trong các chữ ‘hà, hồ, hải’ là bộ thủy; bộ thủ trong ‘đả, bão, đáng’ là bộ tay."],
  ["v028", "生詞", "商榷", "shang1 que4", "討論是否合適或正確。", "tao3 lun4 shi4 fou3 he2 shi4 huo4 zheng4 que4.", "bàn bạc; cân nhắc", "由於沒有之前的研究可以證明，這個新計畫能不能解決目前的經濟問題，還需要再商榷。", "you2 yu2 mei2 you3 zhi1 qian2 de5 yan2 jiu1 ke3 yi3 zheng4 ming2 zhe4 ge5 xin1 ji4 hua4 neng2 bu4 neng2 jie3 jue2 mu4 qian2 de5 jing1 ji4 wen4 ti2, hai2 xu1 yao4 zai4 shang1 que4.", "Do chưa có nghiên cứu trước đó chứng minh kế hoạch mới giải quyết được vấn đề kinh tế hiện tại hay không, việc này vẫn cần bàn bạc thêm."],
  ["v029", "生詞", "譬如", "pi4 ru2", "例如。", "li4 ru2.", "ví dụ như", "祝賀別人結婚時，寫在紅包袋上的吉祥話有很多種，譬如：「百年好合」、「早生貴子」等等。很多中文成語都與動物、花草或自然環境有關，譬如：「對牛彈琴」、「馬到成功」、「花好月圓」等等。", "zhu4 he4 bie2 ren2 jie2 hun1 shi2, xie3 zai4 hong2 bao1 dai4 shang4 de5 ji2 xiang2 hua4 you3 hen3 duo1 zhong3, pi4 ru2 bai3 nian2 hao3 he2, zao3 sheng1 gui4 zi5 deng3 deng3. hen3 duo1 zhong1 wen2 cheng2 yu3 dou1 yu3 dong4 wu4, hua1 cao3 huo4 zi4 ran2 huan2 jing4 you3 guan1, pi4 ru2 dui4 niu2 dan4 qin2, ma3 dao4 cheng2 gong1, hua1 hao3 yue4 yuan2 deng3 deng3.", "Lời chúc viết trên bao lì xì mừng cưới có nhiều loại, như ‘bách niên hảo hợp’, ‘sớm sinh quý tử’. Nhiều thành ngữ liên quan đến động vật, cây cỏ hay thiên nhiên, như ‘đàn gảy tai trâu’, ‘mã đáo thành công’, ‘hoa đẹp trăng tròn’."],
  ["v030", "生詞", "干擾", "gan1 rao3", "擾亂或妨礙。", "rao3 luan4 huo4 fang2 ai4.", "gây nhiễu; can thiệp", "搭飛機時得關掉手機是因為手機的訊號可能會干擾飛機上的設備，造成危險。很多人學外語的時候，受到母語的干擾，說的外語常有口音上的問題。", "da1 fei1 ji1 shi2 dei3 guan1 diao4 shou3 ji1 shi4 yin1 wei4 shou3 ji1 de5 xun4 hao4 ke3 neng2 hui4 gan1 rao3 fei1 ji1 shang4 de5 she4 bei4, zao4 cheng2 wei1 xian3. hen3 duo1 ren2 xue2 wai4 yu3 de5 shi2 hou4, shou4 dao4 mu3 yu3 de5 gan1 rao3, shuo1 de5 wai4 yu3 chang2 you3 kou3 yin1 shang4 de5 wen4 ti2.", "Phải tắt điện thoại trên máy bay vì tín hiệu có thể gây nhiễu thiết bị và tạo nguy hiểm. Nhiều người học ngoại ngữ bị tiếng mẹ đẻ can thiệp nên thường có vấn đề về giọng."],
  ["v031", "生詞", "樹幹", "shu4 gan4", "樹木的主要粗莖。", "shu4 mu4 de5 zhu3 yao4 cu1 jing1.", "thân cây", "這棵大樹的樹幹這麼粗，一定有好幾百年的歷史，可以稱為神木了吧？", "zhe4 ke1 da4 shu4 de5 shu4 gan4 zhe4 me5 cu1, yi2 ding4 you3 hao3 ji3 bai3 nian2 de5 li4 shi3, ke3 yi3 cheng1 wei2 shen2 mu4 le5 ba5?", "Thân cây lớn này to như vậy, hẳn đã có lịch sử vài trăm năm và có thể gọi là cây thần chứ?"],
  ["v032", "生詞", "衝動", "chong1 dong4", "情緒強烈而做事欠缺考慮。", "qing2 xu4 qiang2 lie4 er2 zuo4 shi4 qian4 que1 kao3 lv4.", "bốc đồng", "小劉的個性衝動，常常做出讓自己後悔的決定，譬如他上個月就因為一時衝動跟女朋友分手，到現在都還一直求她原諒。", "xiao3 liu2 de5 ge4 xing4 chong1 dong4, chang2 chang2 zuo4 chu1 rang4 zi4 ji3 hou4 hui3 de5 jue2 ding4, pi4 ru2 ta1 shang4 ge5 yue4 jiu4 yin1 wei4 yi4 shi2 chong1 dong4 gen1 nv3 peng2 you3 fen1 shou3, dao4 xian4 zai4 dou1 hai2 yi4 zhi2 qiu2 ta1 yuan2 liang4.", "Tiểu Lưu bốc đồng và thường đưa ra quyết định khiến mình hối hận; tháng trước anh ấy nhất thời chia tay bạn gái, đến nay vẫn xin cô tha thứ."],
  ["v033", "生詞", "困惑", "kun4 huo4", "感到疑惑不明白。", "gan3 dao4 yi2 huo4 bu4 ming2 bai2.", "bối rối; khó hiểu", "他最近的行為舉止和過去完全不同，一下子大哭、一下子又大笑，真是令人困惑。", "ta1 zui4 jin4 de5 xing2 wei4 ju3 zhi3 he2 guo4 qu4 wan2 quan2 bu4 tong2, yi2 xia4 zi5 da4 ku1, yi2 xia4 zi5 you4 da4 xiao4, zhen1 shi4 ling4 ren2 kun4 huo4.", "Hành vi gần đây của anh ấy hoàn toàn khác trước, lúc khóc lớn lúc lại cười lớn, thật khó hiểu."],
  ["v034", "生詞", "推敲", "tui1 qiao1", "仔細思考並判斷。", "zai3 xi4 si1 kao3 bing4 pan4 duan4.", "cân nhắc kỹ; suy luận", "看到文章中的生詞時，最好不要馬上查字典，可以根據上下文的內容推敲生詞的意思，這樣有助於提升閱讀能力。", "kan4 dao4 wen2 zhang1 zhong1 de5 sheng1 ci2 shi2, zui4 hao3 bu4 yao4 ma3 shang4 cha2 zi4 dian3, ke3 yi3 gen1 ju4 shang4 xia4 wen2 de5 nei4 rong2 tui1 qiao1 sheng1 ci2 de5 yi4 si5, zhe4 yang4 you3 zhu4 yu2 ti2 sheng1 yue4 du2 neng2 li4.", "Khi gặp từ mới trong bài, tốt nhất đừng tra từ điển ngay mà hãy dựa vào ngữ cảnh suy luận ý nghĩa; cách này giúp nâng cao năng lực đọc."],
  ["v035", "生詞", "錯誤", "cuo4 wu4", "不正確，或不正確的事情。", "bu4 zheng4 que4, huo4 bu4 zheng4 que4 de5 shi4 qing2.", "sai; lỗi", "誰說女孩開戰鬥機一定不太好？這種錯誤的想法簡直是性別歧視。把商品的價格弄錯是非常嚴重的事情，這樣的錯誤千萬別再犯，否則你就不用再來上班了！", "shui2 shuo1 nv3 hai2 kai1 zhan4 dou4 ji1 yi2 ding4 bu4 tai4 hao3? zhe4 zhong3 cuo4 wu4 de5 xiang3 fa3 jian3 zhi2 shi4 xing4 bie2 qi2 shi4. ba3 shang1 pin3 de5 jia4 ge2 nong4 cuo4 shi4 fei1 chang2 yan2 zhong4 de5 shi4 qing2, zhe4 yang4 de5 cuo4 wu4 qian1 wan4 bie2 zai4 fan4, fou3 ze2 ni3 jiu4 bu4 yong4 zai4 lai2 shang4 ban1 le5!", "Ai nói con gái lái máy bay chiến đấu thì không tốt? Suy nghĩ sai đó đơn giản là phân biệt giới tính. Ghi sai giá hàng là việc rất nghiêm trọng; đừng bao giờ tái phạm, nếu không bạn khỏi cần đi làm nữa!"],
  ["v036", "生詞", "保留", "bao3 liu2", "保存而不去掉。", "bao3 cun2 er2 bu4 qu4 diao4.", "giữ lại; bảo tồn", "在國際化的影響下，很多國家的傳統文化漸漸消失，因此各國政府都十分重視保留傳統文化的政策。", "zai4 guo2 ji4 hua4 de5 ying3 xiang3 xia4, hen3 duo1 guo2 jia1 de5 chuan2 tong3 wen2 hua4 jian4 jian4 xiao1 shi1, yin1 ci3 ge4 guo2 zheng4 fu3 dou1 shi2 fen1 zhong4 shi4 bao3 liu2 chuan2 tong3 wen2 hua4 de5 zheng4 ce4.", "Dưới ảnh hưởng quốc tế hóa, văn hóa truyền thống của nhiều nước dần biến mất, nên chính phủ các nước rất coi trọng chính sách bảo tồn."],
  ["v037", "生詞", "會意", "hui4 yi4", "把兩個以上部件合起來表示新意；也指明白意思。", "ba3 liang3 ge5 yi3 shang4 bu4 jian4 he2 qi3 lai2 biao3 shi4 xin1 yi4; ye3 zhi3 ming2 bai2 yi4 si5.", "hội ý; hiểu ý", "會意是中文造字的六種方法之一，是指將兩個以上的字放在一起，表示一個新的意義，例如「人」和「言」為「信」。我對那個服務生招手，但他沒會意，也沒過來問我需要什麼。後來我才知道在那裡吃飯，得自己去點餐，真糗！", "hui4 yi4 shi4 zhong1 wen2 zao4 zi4 de5 liu4 zhong3 fang1 fa3 zhi1 yi1, shi4 zhi3 jiang1 liang3 ge5 yi3 shang4 de5 zi4 fang4 zai4 yi4 qi3, biao3 shi4 yi2 ge5 xin1 de5 yi4 yi4, li4 ru2 ren2 he2 yan2 wei2 xin4. wo3 dui4 na4 ge5 fu2 wu4 sheng1 zhao1 shou3, dan4 ta1 mei2 hui4 yi4, ye3 mei2 guo4 lai2 wen4 wo3 xu1 yao4 shen2 me5. hou4 lai2 wo3 cai2 zhi1 dao4 zai4 na4 li3 chi1 fan4, dei3 zi4 ji3 qu4 dian3 can1, zhen1 qiu3!", "Hội ý là một trong sáu cách tạo chữ Hán: ghép từ hai chữ trở lên để biểu đạt nghĩa mới, như người và lời thành chữ tín. Tôi vẫy người phục vụ nhưng anh ấy không hiểu ý; sau mới biết phải tự đi gọi món, thật ngượng!"],
  ["v038", "生詞", "刪除", "shan1 chu2", "去掉不要的文字或資料。", "qu4 diao4 bu2 yao4 de5 wen2 zi4 huo4 zi1 liao4.", "xóa bỏ", "為了節省電腦的儲存容量，他把不需要的資料都刪除了。", "wei4 le5 jie2 sheng3 dian4 nao3 de5 chu3 cun2 rong2 liang4, ta1 ba3 bu4 xu1 yao4 de5 zi1 liao4 dou1 shan1 chu2 le5.", "Để tiết kiệm dung lượng máy tính, anh ấy xóa hết dữ liệu không cần thiết."],
  ["v039", "生詞", "輪廓", "lun2 kuo4", "物體外圍的大致形狀。", "wu4 ti3 wai4 wei2 de5 da4 zhi4 xing2 zhuang4.", "đường nét; hình dáng bao quát", "畫家畫人像畫時，一般常先畫身體和臉的輪廓，再仔細畫其他的部分。有些學生學寫漢字時，因為懶得記整個字，只記大概的形體和輪廓，再加上沒有仔細練習，就會常常寫錯字。", "hua4 jia1 hua4 ren2 xiang4 hua4 shi2, yi4 ban1 chang2 xian1 hua4 shen1 ti3 he2 lian3 de5 lun2 kuo4, zai4 zai3 xi4 hua4 qi2 ta1 de5 bu4 fen4. you3 xie1 xue2 sheng1 xue2 xie3 han4 zi4 shi2, yin1 wei4 lan3 de2 ji4 zheng3 ge5 zi4, zhi3 ji4 da4 gai4 de5 xing2 ti3 he2 lun2 kuo4, zai4 jia1 shang4 mei2 you3 zai3 xi4 lian4 xi2, jiu4 hui4 chang2 chang2 xie3 cuo4 zi4.", "Khi vẽ chân dung, họa sĩ thường phác đường nét thân và mặt trước rồi mới vẽ chi tiết. Một số học sinh chỉ nhớ hình dáng đại khái mà không luyện kỹ nên thường viết sai chữ."],
  ["v040", "生詞", "初次", "chu1 ci4", "第一次。", "di4 yi1 ci4.", "lần đầu", "找工作面試時，雖然老闆和你是初次見面，但是他還是能從你的言行舉止推測你做事情的態度，所以一言一行都得注意。", "zhao3 gong1 zuo4 mian4 shi4 shi2, sui1 ran2 lao3 ban3 he2 ni3 shi4 chu1 ci4 jian4 mian4, dan4 shi4 ta1 hai2 shi4 neng2 cong2 ni3 de5 yan2 xing2 ju3 zhi3 tui1 ce4 ni3 zuo4 shi4 qing2 de5 tai4 du4, suo3 yi3 yi4 yan2 yi4 xing2 dou1 dei3 zhu4 yi4.", "Khi phỏng vấn xin việc, dù lần đầu gặp ông chủ, ông vẫn có thể suy đoán thái độ làm việc qua lời nói và cử chỉ của bạn, nên từng lời từng hành động đều phải chú ý."],
];

const properRows = [
  ["p001", "專有名詞", "正體字", "zheng4 ti3 zi4", "又稱繁體字，是長期演變並連續使用至今的書寫系統；目前是臺灣、香港和澳門的正式書寫系統。", "you4 cheng1 fan2 ti3 zi4, shi4 chang2 qi1 yan3 bian4 bing4 lian2 xu4 shi3 yong4 zhi4 jin1 de5 shu1 xie3 xi4 tong3; mu4 qian2 shi4 tai2 wan1, xiang1 gang3 he2 ao4 men2 de5 zheng4 shi4 shu1 xie3 xi4 tong3.", "chữ chính thể, còn gọi là chữ phồn thể", "以目前的情形來看，海峽兩岸只有我寫我的正體字，你寫你的簡體字了。", "yi3 mu4 qian2 de5 qing2 xing2 lai2 kan4, hai3 xia2 liang3 an4 zhi3 you3 wo3 xie3 wo3 de5 zheng4 ti3 zi4, ni3 xie3 ni3 de5 jian3 ti3 zi4 le5.", "Xét tình hình hiện nay, hai bờ eo biển chỉ còn bên này viết chữ chính thể, bên kia viết chữ giản thể."],
  ["p002", "專有名詞", "簡體字", "jian3 ti3 zi4", "又稱簡化字，字形多來自俗書、草書、簡筆俗字、異體字或古字，也有新創字形。", "you4 cheng1 jian3 hua4 zi4, zi4 xing2 duo1 lai2 zi4 su2 shu1, cao3 shu1, jian3 bi3 su2 zi4, yi4 ti3 zi4 huo4 gu3 zi4, ye3 you3 xin1 chuang4 zi4 xing2.", "chữ giản thể", "簡體字的形成多半是根據草書簡化而造出來的。", "jian3 ti3 zi4 de5 xing2 cheng2 duo1 ban4 shi4 gen1 ju4 cao3 shu1 jian3 hua4 er2 zao4 chu1 lai2 de5.", "Chữ giản thể phần lớn được tạo ra bằng cách giản hóa dựa trên chữ thảo."],
  ["p003", "專有名詞", "殷商", "yin1 shang1", "約西元前一千八百年至前一千二百年的商代。", "yue1 xi1 yuan2 qian2 yi1 qian1 ba1 bai3 nian2 zhi4 qian2 yi1 qian1 er4 bai3 nian2 de5 shang1 dai4.", "nhà Ân–Thương", "中華文字的演變，可以說從殷商甲骨文開始。", "zhong1 hua2 wen2 zi4 de5 yan3 bian4, ke3 yi3 shuo1 cong2 yin1 shang1 jia3 gu3 wen2 kai1 shi3.", "Có thể nói sự diễn biến của chữ viết Trung Hoa bắt đầu từ giáp cốt văn đời Ân–Thương."],
  ["p004", "專有名詞", "甲骨文", "jia3 gu3 wen2", "殷商時代刻在龜甲或獸骨上的文字。", "yin1 shang1 shi2 dai4 ke4 zai4 gui1 jia3 huo4 shou4 gu3 shang4 de5 wen2 zi4.", "chữ giáp cốt", "中華文字的演變，可以說從殷商甲骨文開始。", "zhong1 hua2 wen2 zi4 de5 yan3 bian4, ke3 yi3 shuo1 cong2 yin1 shang1 jia3 gu3 wen2 kai1 shi3.", "Có thể nói sự diễn biến của chữ viết Trung Hoa bắt đầu từ giáp cốt văn đời Ân–Thương."],
  ["p005", "專有名詞", "金文", "jin1 wen2", "商周時代鑄或刻在銅器上的文字。", "shang1 zhou1 shi2 dai4 zhu4 huo4 ke4 zai4 tong2 qi4 shang4 de5 wen2 zi4.", "kim văn", "接著是刻在銅器上的金文，再來是大篆。", "jie1 zhe5 shi4 ke4 zai4 tong2 qi4 shang4 de5 jin1 wen2, zai4 lai2 shi4 da4 zhuan4.", "Tiếp theo là kim văn khắc trên đồ đồng, rồi đến đại triện."],
  ["p006", "專有名詞", "大篆", "da4 zhuan4", "周秦間使用、形體較繁雜且多已失傳的字體。", "zhou1 qin2 jian1 shi3 yong4, xing2 ti3 jiao4 fan2 za2 qie3 duo1 yi3 shi1 chuan2 de5 zi4 ti3.", "đại triện", "接著是刻在銅器上的金文，再來是大篆。", "jie1 zhe5 shi4 ke4 zai4 tong2 qi4 shang4 de5 jin1 wen2, zai4 lai2 shi4 da4 zhuan4.", "Tiếp theo là kim văn khắc trên đồ đồng, rồi đến đại triện."],
  ["p007", "專有名詞", "秦始皇", "qin2 shi3 huang2", "姓嬴名政，併吞六國並統一天下的秦朝始皇帝。", "xing4 ying2 ming2 zheng4, bing4 tun1 liu4 guo2 bing4 tong3 yi1 tian1 xia4 de5 qin2 chao2 shi3 huang2 di4.", "Tần Thủy Hoàng", "自秦始皇統一秦朝的文字以後，小篆即成為當時的標準字體。", "zi4 qin2 shi3 huang2 tong3 yi1 qin2 chao2 de5 wen2 zi4 yi3 hou4, xiao3 zhuan4 ji2 cheng2 wei2 dang1 shi2 de5 biao1 zhun3 zi4 ti3.", "Sau khi Tần Thủy Hoàng thống nhất chữ viết nhà Tần, tiểu triện lập tức trở thành kiểu chữ chuẩn đương thời."],
  ["p008", "專有名詞", "小篆", "xiao3 zhuan4", "秦代根據大篆省改簡化而成的通行字體。", "qin2 dai4 gen1 ju4 da4 zhuan4 sheng3 gai3 jian3 hua4 er2 cheng2 de5 tong1 xing2 zi4 ti3.", "tiểu triện", "自秦始皇統一秦朝的文字以後，小篆即成為當時的標準字體。", "zi4 qin2 shi3 huang2 tong3 yi1 qin2 chao2 de5 wen2 zi4 yi3 hou4, xiao3 zhuan4 ji2 cheng2 wei2 dang1 shi2 de5 biao1 zhun3 zi4 ti3.", "Sau khi Tần Thủy Hoàng thống nhất chữ viết nhà Tần, tiểu triện lập tức trở thành kiểu chữ chuẩn đương thời."],
  ["p009", "專有名詞", "漢朝", "han4 chao2", "約西元前二百零六年至西元二百一十九年的朝代。", "yue1 xi1 yuan2 qian2 er4 bai3 ling2 liu4 nian2 zhi4 xi1 yuan2 er4 bai3 yi1 shi2 jiu3 nian2 de5 chao2 dai4.", "nhà Hán", "到了漢朝，工整的隸書成為通行的字體。", "dao4 le5 han4 chao2, gong1 zheng3 de5 li4 shu1 cheng2 wei2 tong1 xing2 de5 zi4 ti3.", "Đến đời Hán, chữ lệ ngay ngắn trở thành kiểu chữ lưu hành."],
  ["p010", "專有名詞", "隸書", "li4 shu1", "漢朝通行、字形與小篆差異很大的字體。", "han4 chao2 tong1 xing2, zi4 xing2 yu3 xiao3 zhuan4 cha4 yi4 hen3 da4 de5 zi4 ti3.", "lệ thư", "工整的隸書成為通行的字體。", "gong1 zheng3 de5 li4 shu1 cheng2 wei2 tong1 xing2 de5 zi4 ti3.", "Chữ lệ ngay ngắn trở thành kiểu chữ lưu hành."],
  ["p011", "專有名詞", "楷書", "kai3 shu1", "由隸書演變、筆畫平直且字形方正的書寫字體。", "you2 li4 shu1 yan3 bian4, bi3 hua4 ping2 zhi2 qie3 zi4 xing2 fang1 zheng4 de5 shu1 xie3 zi4 ti3.", "khải thư", "隨著歷史的發展，隸書逐漸演化為楷書。", "sui2 zhe5 li4 shi3 de5 fa1 zhan3, li4 shu1 zhu2 jian4 yan3 hua4 wei2 kai3 shu1.", "Cùng với lịch sử phát triển, chữ lệ dần diễn hóa thành chữ khải."],
  ["p012", "專有名詞", "行書", "xing2 shu1", "根據楷書簡易書寫、筆畫連綿流動的字體。", "gen1 ju4 kai3 shu1 jian3 yi4 shu1 xie3, bi3 hua4 lian2 mian2 liu2 dong4 de5 zi4 ti3.", "hành thư", "隨著歷史的發展，也出現了行書與草書。", "sui2 zhe5 li4 shi3 de5 fa1 zhan3, ye3 chu1 xian4 le5 xing2 shu1 yu3 cao3 shu1.", "Cùng với lịch sử phát triển, chữ hành và chữ thảo cũng xuất hiện."],
  ["p013", "專有名詞", "草書", "cao3 shu1", "約起於漢代、為了簡便快速或美化書寫而形成的字體。", "yue1 qi3 yu2 han4 dai4, wei4 le5 jian3 bian4 kuai4 su4 huo4 mei3 hua4 shu1 xie3 er2 xing2 cheng2 de5 zi4 ti3.", "thảo thư", "隨著歷史的發展，也出現了行書與草書。", "sui2 zhe5 li4 shi3 de5 fa1 zhan3, ye3 chu1 xian4 le5 xing2 shu1 yu3 cao3 shu1.", "Cùng với lịch sử phát triển, chữ hành và chữ thảo cũng xuất hiện."],
];

const idiomRows = [
  ["i001", "成語", "龍飛鳳舞", "long2 fei1 feng4 wu3", "形容書法筆勢生動奔放。", "xing2 rong2 shu1 fa3 bi3 shi4 sheng1 dong4 ben1 fang4.", "rồng bay phượng múa; nét chữ phóng khoáng", "小時候我花了很多時間練習寫字，因為我媽媽常常對我說：「你寫的是什麼字，龍飛鳳舞，怎麼看都看不懂，拿去再寫一次。」", "xiao3 shi2 hou4 wo3 hua1 le5 hen3 duo1 shi2 jian1 lian4 xi2 xie3 zi4, yin1 wei4 wo3 ma1 ma5 chang2 chang2 dui4 wo3 shuo1: ni3 xie3 de5 shi4 shen2 me5 zi4, long2 fei1 feng4 wu3, zen3 me5 kan4 dou1 kan4 bu4 dong3, na2 qu4 zai4 xie3 yi2 ci4.", "Khi nhỏ tôi luyện viết rất lâu vì mẹ thường bảo chữ tôi rồng bay phượng múa, nhìn mãi không hiểu, phải viết lại."],
  ["i002", "成語", "行雲流水", "xing2 yun2 liu2 shui3", "形容書寫或動作流暢自然。", "xing2 rong2 shu1 xie3 huo4 dong4 zuo4 liu2 chang4 zi4 ran2.", "mây trôi nước chảy; tự nhiên lưu loát", "這篇哲學文章寫得很通順，如行雲流水，讀者很容易就理解作者的想法。", "zhe4 pian1 zhe2 xue2 wen2 zhang1 xie3 de2 hen3 tong1 shun4, ru2 xing2 yun2 liu2 shui3, du2 zhe3 hen3 rong2 yi4 jiu4 li3 jie3 zuo4 zhe3 de5 xiang3 fa3.", "Bài triết học này viết rất trôi chảy như mây trôi nước chảy nên người đọc dễ hiểu tư tưởng tác giả."],
  ["i003", "成語", "發人深省", "fa1 ren2 shen1 xing3", "使人深入思考。", "shi3 ren2 shen1 ru4 si1 kao3.", "khiến người ta suy ngẫm sâu sắc", "這部社會寫實片的結局，反映出現代社會還是有重男輕女的問題，的確發人深省。", "zhe4 bu4 she4 hui4 xie3 shi2 pian4 de5 jie2 ju2, fan3 ying4 chu1 xian4 dai4 she4 hui4 hai2 shi4 you3 zhong4 nan2 qing1 nv3 de5 wen4 ti2, di2 que4 fa1 ren2 shen1 xing3.", "Kết cục bộ phim hiện thực phản ánh xã hội hiện đại vẫn trọng nam khinh nữ, thật đáng suy ngẫm."],
  ["i004", "成語", "茫然不解", "mang2 ran2 bu4 jie3", "完全不了解或不明白。", "wan2 quan2 bu4 liao3 jie3 huo4 bu4 ming2 bai2.", "hoàn toàn không hiểu", "航空公司突然取消了這個航班，讓許多旅客感到茫然不解，不斷地來詢問取消航班的原因。", "hang2 kong1 gong1 si1 tu1 ran2 qu3 xiao1 le5 zhe4 ge5 hang2 ban1, rang4 xu3 duo1 lv3 ke4 gan3 dao4 mang2 ran2 bu4 jie3, bu2 duan4 de5 lai2 xun2 wen4 qu3 xiao1 hang2 ban1 de5 yuan2 yin1.", "Hãng hàng không đột ngột hủy chuyến khiến nhiều hành khách không hiểu gì và liên tục hỏi nguyên nhân."],
  ["i005", "成語", "貽笑大方", "yi2 xiao4 da4 fang1", "因做錯事而被內行人笑話。", "yin1 zuo4 cuo4 shi4 er2 bei4 nei4 hang2 ren2 xiao4 hua4.", "làm trò cười cho người hiểu biết", "我們新年晚會的主持人介紹表演者時，因為將一位有名的舞者名字念錯了而貽笑大方。", "wo3 men5 xin1 nian2 wan3 hui4 de5 zhu3 chi2 ren2 jie4 shao4 biao3 yan3 zhe3 shi2, yin1 wei4 jiang1 yi2 wei4 you3 ming2 de5 wu3 zhe3 ming2 zi4 nian4 cuo4 le5 er2 yi2 xiao4 da4 fang1.", "Người dẫn chương trình tiệc năm mới đọc sai tên một vũ công nổi tiếng nên trở thành trò cười cho người sành."],
];

const cards = [...vocabRows, ...properRows, ...idiomRows].map((row) => card(...row));

const mainLines = [
  line(
    "中華文字的演變，可以說從殷商甲骨文開始，接著是刻在銅器上的金文，再來是大篆。而自秦始皇統一秦朝的文字以後，小篆即成為當時的標準字體。到了漢朝，由於發明了俗稱筆、墨、紙、硯的文房四寶，工整的隸書成為通行的字體，使中華文字的發展有了更大的進步。",
    "zhong1 hua2 wen2 zi4 de5 yan3 bian4, ke3 yi3 shuo1 cong2 yin1 shang1 jia3 gu3 wen2 kai1 shi3, jie1 zhe5 shi4 ke4 zai4 tong2 qi4 shang4 de5 jin1 wen2, zai4 lai2 shi4 da4 zhuan4. er2 zi4 qin2 shi3 huang2 tong3 yi1 qin2 chao2 de5 wen2 zi4 yi3 hou4, xiao3 zhuan4 ji2 cheng2 wei2 dang1 shi2 de5 biao1 zhun3 zi4 ti3. dao4 le5 han4 chao2, you2 yu2 fa1 ming2 le5 su2 cheng1 bi3, mo4, zhi3, yan4 de5 wen2 fang2 si4 bao3, gong1 zheng3 de5 li4 shu1 cheng2 wei2 tong1 xing2 de5 zi4 ti3, shi3 zhong1 hua2 wen2 zi4 de5 fa1 zhan3 you3 le5 geng4 da4 de5 jin4 bu4.",
    "Sự diễn biến của chữ viết Trung Hoa có thể nói bắt đầu từ giáp cốt văn đời Ân–Thương, tiếp theo là kim văn khắc trên đồ đồng, rồi đến đại triện. Sau khi Tần Thủy Hoàng thống nhất chữ viết nhà Tần, tiểu triện lập tức trở thành kiểu chữ chuẩn đương thời. Đến đời Hán, nhờ phát minh văn phòng tứ bảo thường gọi là bút, mực, giấy và nghiên, chữ lệ ngay ngắn trở thành kiểu chữ lưu hành, giúp chữ viết Trung Hoa tiến thêm một bước lớn.",
    [
      mark("vocab", "演變"), mark("proper", "殷商"), mark("proper", "甲骨文"), mark("vocab", "銅器"), mark("proper", "金文"), mark("proper", "大篆"),
      mark("proper", "秦始皇"), mark("proper", "小篆"), mark("proper", "漢朝"), mark("vocab", "字體"), mark("vocab", "墨"), mark("vocab", "硯"),
      mark("vocab", "工整"), mark("proper", "隸書"), mark("vocab", "通行"),
      mark("grammar", "自秦始皇統一秦朝的文字以後，小篆即成為當時的標準字體", "自……（以）後，……即成為……"),
    ],
  ),
  line(
    "隨著歷史的發展，隸書逐漸演化為楷書，也出現了行書與草書。其中，楷書的特色是形體方正，筆畫平直，而行書與草書則看起來龍飛鳳舞，如行雲流水一般。無論是楷書、行書、草書，都被華人視為既實用又美觀的書寫文字，不僅富有典雅的美感，也深具歷史與文化意義，更重要的是具有不可磨滅的藝術價值。",
    "sui2 zhe5 li4 shi3 de5 fa1 zhan3, li4 shu1 zhu2 jian4 yan3 hua4 wei2 kai3 shu1, ye3 chu1 xian4 le5 xing2 shu1 yu3 cao3 shu1. qi2 zhong1, kai3 shu1 de5 te4 se4 shi4 xing2 ti3 fang1 zheng4, bi3 hua4 ping2 zhi2, er2 xing2 shu1 yu3 cao3 shu1 ze2 kan4 qi3 lai2 long2 fei1 feng4 wu3, ru2 xing2 yun2 liu2 shui3 yi4 ban1. wu2 lun4 shi4 kai3 shu1, xing2 shu1, cao3 shu1, dou1 bei4 hua2 ren2 shi4 wei2 ji4 shi2 yong4 you4 mei3 guan1 de5 shu1 xie3 wen2 zi4, bu4 jin3 fu4 you3 dian3 ya3 de5 mei3 gan3, ye3 shen1 ju4 li4 shi3 yu3 wen2 hua4 yi4 yi4, geng4 zhong4 yao4 de5 shi4 ju4 you3 bu4 ke3 mo2 mie4 de5 yi4 shu4 jia4 zhi2.",
    "Cùng với sự phát triển của lịch sử, chữ lệ dần diễn hóa thành chữ khải, đồng thời xuất hiện chữ hành và chữ thảo. Chữ khải có hình thể vuông vức, nét bút thẳng; chữ hành và chữ thảo lại như rồng bay phượng múa, mây trôi nước chảy. Cả ba đều được người Hoa xem là chữ viết vừa thực dụng vừa đẹp, không chỉ thanh nhã mà còn mang ý nghĩa lịch sử, văn hóa và giá trị nghệ thuật không thể phai mờ.",
    [
      mark("grammar", "隨著"), mark("vocab", "演化"), mark("proper", "楷書"), mark("proper", "行書"), mark("proper", "草書"), mark("vocab", "形體"), mark("vocab", "筆畫"),
      mark("idiom", "龍飛鳳舞"), mark("idiom", "行雲流水"), mark("grammar", "如行雲流水一般", "如……一般（SV）"),
      mark("grammar", "被華人視為", "被……視為……"), mark("vocab", "書寫"), mark("vocab", "富有"), mark("vocab", "典雅"), mark("vocab", "美感"), mark("vocab", "深具"), mark("vocab", "磨滅"),
    ],
  ),
  line(
    "然而，自中國大陸通行簡體字後，數十年來的文字經歷了很大的變化，也出現不少發人深省的現象。在中國大陸，不識字的人口眾多，為了因應語文教育的需要，簡化文字可能是減少文盲的有效政策，而簡體字也確實發揮不少功能。但近年來，大陸的新生代在暢遊名勝古蹟時，竟然看不太懂碑銘匾額上的題字，而接觸到古籍經典時，更是茫然不解。這個現象是如何形成的呢？",
    "ran2 er2, zi4 zhong1 guo2 da4 lu4 tong1 xing2 jian3 ti3 zi4 hou4, shu4 shi2 nian2 lai2 de5 wen2 zi4 jing1 li4 le5 hen3 da4 de5 bian4 hua4, ye3 chu1 xian4 bu4 shao3 fa1 ren2 shen1 xing3 de5 xian4 xiang4. zai4 zhong1 guo2 da4 lu4, bu4 shi2 zi4 de5 ren2 kou3 zhong4 duo1, wei4 le5 yin1 ying4 yu3 wen2 jiao4 yu4 de5 xu1 yao4, jian3 hua4 wen2 zi4 ke3 neng2 shi4 jian3 shao3 wen2 mang2 de5 you3 xiao4 zheng4 ce4, er2 jian3 ti3 zi4 ye3 que4 shi2 fa1 hui1 bu4 shao3 gong1 neng2. dan4 jin4 nian2 lai2, da4 lu4 de5 xin1 sheng1 dai4 zai4 chang4 you2 ming2 sheng4 gu3 ji1 shi2, jing4 ran2 kan4 bu4 tai4 dong3 bei1 ming2 bian3 e2 shang4 de5 ti2 zi4, er2 jie1 chu4 dao4 gu3 ji2 jing1 dian3 shi2, geng4 shi4 mang2 ran2 bu4 jie3. zhe4 ge5 xian4 xiang4 shi4 ru2 he2 xing2 cheng2 de5 ne5?",
    "Tuy nhiên, sau khi Trung Quốc đại lục dùng chữ giản thể, chữ viết đã thay đổi lớn trong nhiều thập niên và xuất hiện những hiện tượng đáng suy ngẫm. Việc giản hóa có thể là chính sách hữu hiệu để giảm mù chữ và đáp ứng giáo dục ngôn ngữ. Nhưng gần đây, thế hệ mới ở đại lục khi thăm danh thắng cổ tích lại khó hiểu chữ đề trên văn bia, hoành phi, và càng mờ mịt trước cổ thư kinh điển. Hiện tượng này hình thành thế nào?",
    [
      mark("proper", "簡體字"), mark("vocab", "經歷"), mark("idiom", "發人深省"), mark("vocab", "識字"), mark("vocab", "文盲"), mark("vocab", "新生代"), mark("vocab", "暢遊"),
      mark("vocab", "碑銘"), mark("vocab", "匾額"), mark("vocab", "題字"), mark("vocab", "古籍"), mark("vocab", "經典"), mark("idiom", "茫然不解"),
    ],
  ),
  line(
    "一般而言，簡體字的形成多半是根據草書簡化而造出來的，例如「言」字旁的「說」寫成「说」、「會」寫成「会」、「應」寫成「应」。這一類的字，實行起來仍能被人接受。但有些字確實有商榷的必要，譬如正體字「干擾」的「干」、「乾淨」的「乾」和「樹幹」的「幹」，簡體字都寫成「干」；又如「頭髮」的「髮」和「發生」的「發」，簡體字都是「发」；而「衝動」的「衝」和「沖洗」的「沖」，簡體字都是「冲」。如此一來，一向使用正體字的人會感到困惑，要仔細推敲才知道真正的意思，而使用簡體字的人，想把這些字改成正體字時，也可能因為選擇錯誤而貽笑大方。",
    "yi4 ban1 er2 yan2, jian3 ti3 zi4 de5 xing2 cheng2 duo1 ban4 shi4 gen1 ju4 cao3 shu1 jian3 hua4 er2 zao4 chu1 lai2 de5, li4 ru2 yan2 zi4 pang2 de5 shuo1 xie3 cheng2 shuo1, hui4 xie3 cheng2 hui4, ying1 xie3 cheng2 ying1. zhe4 yi2 lei4 de5 zi4, shi2 xing2 qi3 lai2 reng2 neng2 bei4 ren2 jie1 shou4. dan4 you3 xie1 zi4 que4 shi2 you3 shang1 que4 de5 bi4 yao4, pi4 ru2 zheng4 ti3 zi4 gan1 rao3 de5 gan1, gan1 jing4 de5 gan1 he2 shu4 gan4 de5 gan4, jian3 ti3 zi4 dou1 xie3 cheng2 gan1; you4 ru2 tou2 fa5 de5 fa3 he2 fa1 sheng1 de5 fa1, jian3 ti3 zi4 dou1 shi4 fa1; er2 chong1 dong4 de5 chong1 he2 chong1 xi3 de5 chong1, jian3 ti3 zi4 dou1 shi4 chong1. ru2 ci3 yi2 lai2, yi2 xiang4 shi3 yong4 zheng4 ti3 zi4 de5 ren2 hui4 gan3 dao4 kun4 huo4, yao4 zai3 xi4 tui1 qiao1 cai2 zhi1 dao4 zhen1 zheng4 de5 yi4 si5, er2 shi3 yong4 jian3 ti3 zi4 de5 ren2, xiang3 ba3 zhe4 xie1 zi4 gai3 cheng2 zheng4 ti3 zi4 shi2, ye3 ke3 neng2 yin1 wei4 xuan3 ze2 cuo4 wu4 er2 yi2 xiao4 da4 fang1.",
    "Nói chung, chữ giản thể phần lớn được tạo bằng cách giản hóa chữ thảo. Một số chữ vẫn dễ chấp nhận, nhưng có chữ cần cân nhắc: ‘干’ trong can nhiễu, ‘乾’ trong sạch sẽ và ‘幹’ trong thân cây đều viết là ‘干’; hai chữ ‘髮/發’ cùng thành ‘发’, ‘衝/沖’ cùng thành ‘冲’. Vì vậy người quen chữ chính thể phải suy luận kỹ, còn người dùng chữ giản thể có thể chọn sai chữ khi đổi lại và trở thành trò cười.",
    [
      mark("proper", "簡體字"), mark("proper", "草書"), mark("vocab", "旁"), mark("vocab", "商榷"), mark("vocab", "譬如"), mark("proper", "正體字"), mark("vocab", "干擾"), mark("vocab", "樹幹"),
      mark("vocab", "衝動"), mark("vocab", "困惑"), mark("vocab", "推敲"), mark("vocab", "錯誤"), mark("idiom", "貽笑大方"),
    ],
  ),
  line(
    "除此以外，尚有一些簡體字，例如「开」（開）與「业」（業）保留了原字的一部分，還容易推測意思，但是「尘」（塵）與「灭」（滅）是新的會意字，只有將上下兩個部分合起來，才猜得出意思。至於「厂」（廠）與「广」（廣），刪除中間部分，只保留輪廓，而「卫」（衛）與「叶」（葉），則完全用新的字形來代替，初次見到這些字的人，真的想半天也猜不出呢！以目前的情形來看，海峽兩岸只有我寫我的正體字，你寫你的簡體字了。",
    "chu2 ci3 yi3 wai4, shang4 you3 yi4 xie1 jian3 ti3 zi4, li4 ru2 kai1 kai1 yu3 ye4 ye4 bao3 liu2 le5 yuan2 zi4 de5 yi2 bu4 fen4, hai2 rong2 yi4 tui1 ce4 yi4 si5, dan4 shi4 chen2 chen2 yu3 mie4 mie4 shi4 xin1 de5 hui4 yi4 zi4, zhi3 you3 jiang1 shang4 xia4 liang3 ge5 bu4 fen4 he2 qi3 lai2, cai2 cai1 de5 chu1 yi4 si5. zhi4 yu2 chang3 chang3 yu3 guang3 guang3, shan1 chu2 zhong1 jian1 bu4 fen4, zhi3 bao3 liu2 lun2 kuo4, er2 wei4 wei4 yu3 ye4 ye4, ze2 wan2 quan2 yong4 xin1 de5 zi4 xing2 lai2 dai4 ti4, chu1 ci4 jian4 dao4 zhe4 xie1 zi4 de5 ren2, zhen1 de5 xiang3 ban4 tian1 ye3 cai1 bu4 chu1 ne5! yi3 mu4 qian2 de5 qing2 xing2 lai2 kan4, hai3 xia2 liang3 an4 zhi3 you3 wo3 xie3 wo3 de5 zheng4 ti3 zi4, ni3 xie3 ni3 de5 jian3 ti3 zi4 le5.",
    "Ngoài ra, một số chữ giản thể như ‘开’ và ‘业’ giữ lại một phần chữ gốc nên còn dễ đoán; nhưng ‘尘’ và ‘灭’ là chữ hội ý mới, phải ghép hai phần mới hiểu. ‘厂’ và ‘广’ xóa phần giữa, chỉ giữ đường nét; ‘卫’ và ‘叶’ dùng hình mới hoàn toàn, người lần đầu thấy khó mà đoán được. Hiện nay hai bờ eo biển chỉ còn bên này viết chữ chính thể, bên kia viết chữ giản thể.",
    [
      mark("grammar", "除此以外，尚有", "除此以外，尚有……"), mark("proper", "簡體字"), mark("vocab", "保留"), mark("vocab", "會意"), mark("vocab", "刪除"), mark("vocab", "輪廓"), mark("vocab", "初次"), mark("proper", "正體字"),
    ],
  ),
];

const discussionItems = [
  worksheetItem(
    "請簡單地敘述中國的文字如何演變。",
    "中國文字從殷商甲骨文開始，接著出現金文、大篆；秦始皇統一文字後，小篆成為標準字體。到了漢朝，隸書通行，後來又演化出楷書、行書與草書。",
    "zhong1 guo2 wen2 zi4 cong2 yin1 shang1 jia3 gu3 wen2 kai1 shi3, jie1 zhe5 chu1 xian4 jin1 wen2, da4 zhuan4; qin2 shi3 huang2 tong3 yi1 wen2 zi4 hou4, xiao3 zhuan4 cheng2 wei2 biao1 zhun3 zi4 ti3. dao4 le5 han4 chao2, li4 shu1 tong1 xing2, hou4 lai2 you4 yan3 hua4 chu1 kai3 shu1, xing2 shu1 yu3 cao3 shu1.",
    "Chữ viết Trung Hoa bắt đầu từ giáp cốt văn đời Ân–Thương, tiếp đến kim văn và đại triện. Sau khi Tần Thủy Hoàng thống nhất chữ viết, tiểu triện trở thành kiểu chữ chuẩn. Đến đời Hán, lệ thư thịnh hành rồi phát triển thành khải thư, hành thư và thảo thư.",
  ),
  worksheetItem(
    "在你看來，正體字與簡體字看起來有什麼不一樣？",
    "正體字通常保留較完整的部件，筆畫比較多；簡體字常省略或合併部件，筆畫比較少。",
    "zheng4 ti3 zi4 tong1 chang2 bao3 liu2 jiao4 wan2 zheng3 de5 bu4 jian4, bi3 hua4 bi3 jiao4 duo1; jian3 ti3 zi4 chang2 sheng3 lve4 huo4 he2 bing4 bu4 jian4, bi3 hua4 bi3 jiao4 shao3.",
    "Chữ chính thể thường giữ các bộ phận đầy đủ hơn và có nhiều nét hơn; chữ giản thể thường lược bỏ hoặc gộp bộ phận nên ít nét hơn.",
  ),
  worksheetItem(
    "你選擇學習寫正體字或簡體字的理由是什麼？是為了以後找工作方便？為了看懂古代漢語？還是有其他的理由？",
    "我選擇學正體字，因為它能幫助我理解漢字的部件與文化，也方便閱讀臺灣的資料。",
    "wo3 xuan3 ze2 xue2 zheng4 ti3 zi4, yin1 wei4 ta1 neng2 bang1 zhu4 wo3 li3 jie3 han4 zi4 de5 bu4 jian4 yu3 wen2 hua4, ye3 fang1 bian4 yue4 du2 tai2 wan1 de5 zi1 liao4.",
    "Tôi chọn học chữ chính thể vì nó giúp tôi hiểu cấu tạo và văn hóa của chữ Hán, đồng thời thuận tiện đọc tài liệu của Đài Loan.",
  ),
  worksheetItem(
    "對你來說，學習寫正體字或簡體字哪一個比較難？為什麼？請談談你平常用哪些方法練習寫字、記住漢字等等。",
    "對我來說正體字較難，因為筆畫多。我會拆分部件、按筆順抄寫，並用例句和間隔複習記住漢字。",
    "dui4 wo3 lai2 shuo1 zheng4 ti3 zi4 jiao4 nan2, yin1 wei4 bi3 hua4 duo1. wo3 hui4 chai1 fen1 bu4 jian4, an4 bi3 shun4 chao1 xie3, bing4 yong4 li4 ju4 he2 jian1 ge2 fu4 xi2 ji4 zhu4 han4 zi4.",
    "Với tôi, chữ chính thể khó hơn vì có nhiều nét. Tôi tách chữ thành các bộ phận, chép theo thứ tự nét và dùng câu ví dụ cùng phương pháp ôn cách quãng để ghi nhớ.",
  ),
  worksheetItem(
    "你認為學習寫正體字或簡體字有哪些優點與缺點？（例如：筆畫多少、部首、部件有沒有邏輯、能不能很快地記住怎麼寫等等。）",
    "正體字的部件關係通常較清楚，但筆畫多；簡體字較快書寫，卻有些字形較難看出原來的部件。",
    "zheng4 ti3 zi4 de5 bu4 jian4 guan1 xi4 tong1 chang2 jiao4 qing1 chu3, dan4 bi3 hua4 duo1; jian3 ti3 zi4 jiao4 kuai4 shu1 xie3, que4 you3 xie1 zi4 xing2 jiao4 nan2 kan4 chu1 yuan2 lai2 de5 bu4 jian4.",
    "Quan hệ giữa các bộ phận của chữ chính thể thường rõ hơn nhưng nhiều nét; chữ giản thể viết nhanh hơn, song một số hình chữ khó cho thấy cấu tạo ban đầu.",
  ),
  worksheetItem(
    "有些學者認為要讓學習華語更方便，就應該改變華語的文字系統，既不用正體字，也不用簡體字，把漢字全部改成拼音。你同意這樣的做法嗎？請談談你支持或反對的理由。如果漢字真的消失了，對華人的語言與文化會有哪些影響？",
    "我不贊成完全以拼音取代漢字。拼音便於學習讀音，但漢字也保存字義、歷史與文化；若完全消失，許多古籍、書法和文字文化會更難理解。",
    "wo3 bu4 zan4 cheng2 wan2 quan2 yi3 pin1 yin1 qu3 dai4 han4 zi4. pin1 yin1 bian4 yu2 xue2 xi2 du2 yin1, dan4 han4 zi4 ye3 bao3 cun2 zi4 yi4, li4 shi3 yu3 wen2 hua4; ruo4 wan2 quan2 xiao1 shi1, xu3 duo1 gu3 ji2, shu1 fa3 he2 wen2 zi4 wen2 hua4 hui4 geng4 nan2 li3 jie3.",
    "Tôi không tán thành việc dùng pinyin thay hoàn toàn chữ Hán. Pinyin thuận tiện để học âm đọc, nhưng chữ Hán còn lưu giữ nghĩa chữ, lịch sử và văn hóa; nếu biến mất hoàn toàn, nhiều cổ tịch, thư pháp và văn hóa chữ viết sẽ khó hiểu hơn.",
  ),
];

const activityItems = [
  worksheetItem(
    "先到「漢字字源網」選出五個你覺得有趣、想研究的漢字，查一查它們從甲骨文、金文、篆書、隸書、草書到楷書的字形演變，並記錄有趣的字源故事或解釋。",
    "我先選五個想研究的漢字，查出它們從甲骨文、金文、篆書到楷書的演變，再記錄可靠的字源解釋。",
    "wo3 xian1 xuan3 wu3 ge4 xiang3 yan2 jiu1 de5 han4 zi4, cha2 chu1 ta1 men5 cong2 jia3 gu3 wen2, jin1 wen2, zhuan4 shu1 dao4 kai3 shu1 de5 yan3 bian4, zai4 ji4 lu4 ke3 kao4 de5 zi4 yuan2 jie3 shi4.",
    "Trước hết tôi chọn năm chữ Hán muốn tìm hiểu, tra quá trình biến đổi từ giáp cốt văn, kim văn, triện thư đến khải thư rồi ghi lại lời giải thích đáng tin cậy về nguồn gốc chữ.",
  ),
  worksheetItem(
    "比較這五個字的正體字與簡體字有什麼不同，說明你為什麼選它們，以及每個字對你有沒有特別的意義。",
    "我會比較每個字的正體字與簡體字，指出保留、刪除或改變的部件，並說明我選這個字的理由。",
    "wo3 hui4 bi3 jiao4 mei3 ge4 zi4 de5 zheng4 ti3 zi4 yu3 jian3 ti3 zi4, zhi3 chu1 bao3 liu2, shan1 chu2 huo4 gai3 bian4 de5 bu4 jian4, bing4 shuo1 ming2 wo3 xuan3 zhe4 ge5 zi4 de5 li3 you2.",
    "Tôi sẽ so sánh dạng chính thể và giản thể của từng chữ, chỉ ra bộ phận được giữ, lược bỏ hoặc thay đổi và giải thích lý do chọn chữ đó.",
  ),
  worksheetItem(
    "整理圖片並向同學介紹五個漢字的字形、故事、正簡差異、特殊意義與記憶方法；分享時盡量使用本課生詞與語法。",
    "分享時，我會用圖片依序介紹字形、故事、正簡差異與記憶方法，並用本課的生詞和語法回答同學的問題。",
    "fen1 xiang3 shi2, wo3 hui4 yong4 tu2 pian4 yi1 xu4 jie4 shao4 zi4 xing2, gu4 shi4, zheng4 jian3 cha1 yi4 yu3 ji4 yi4 fang1 fa3, bing4 yong4 ben3 ke4 de5 sheng1 ci2 he2 yu3 fa3 hui2 da2 tong2 xue2 de5 wen4 ti2.",
    "Khi trình bày, tôi sẽ dùng hình ảnh lần lượt giới thiệu hình chữ, câu chuyện, khác biệt chính–giản và cách ghi nhớ, đồng thời dùng từ mới và ngữ pháp của bài để trả lời bạn học.",
  ),
];

const readingItems = [
  worksheetItem(
    "請指出下面的漢字是屬於象形、指事、會意、形聲中的哪一種造字：刃、山、魚、弓、下、果、男、忠、信、夢、卡、囚、草、伴、輪、把、江、尖、歪、玲。",
    "刃是指事，山是象形，魚是象形，弓是象形，下是指事，果是象形，男是會意，忠是形聲，信是會意，夢是會意，卡是會意，囚是會意，草是形聲，伴是形聲，輪是形聲，把是形聲，江是形聲，尖是會意，歪是會意，玲是形聲。",
    "ren4 shi4 zhi3 shi4, shan1 shi4 xiang4 xing2, yu2 shi4 xiang4 xing2, gong1 shi4 xiang4 xing2, xia4 shi4 zhi3 shi4, guo3 shi4 xiang4 xing2, nan2 shi4 hui4 yi4, zhong1 shi4 xing2 sheng1, xin4 shi4 hui4 yi4, meng4 shi4 hui4 yi4, ka3 shi4 hui4 yi4, qiu2 shi4 hui4 yi4, cao3 shi4 xing2 sheng1, ban4 shi4 xing2 sheng1, lun2 shi4 xing2 sheng1, ba3 shi4 xing2 sheng1, jiang1 shi4 xing2 sheng1, jian1 shi4 hui4 yi4, wai1 shi4 hui4 yi4, ling2 shi4 xing2 sheng1.",
    "刃 là chỉ sự; 山, 魚, 弓 và 果 là tượng hình; 下 là chỉ sự; 男, 信, 夢, 卡, 囚, 尖 và 歪 là hội ý; 忠, 草, 伴, 輪, 把, 江 và 玲 là hình thanh.",
  ),
  worksheetItem(
    "請給象形、指事、會意、形聲、轉注、假借這六種文字構造的方法各舉一個例子。",
    "象形如「日」，指事如「上」，會意如「休」，形聲如「河」，轉注如「考」與「老」，假借如借「來」表示來到的「來」。",
    "xiang4 xing2 ru2 ri4, zhi3 shi4 ru2 shang4, hui4 yi4 ru2 xiu1, xing2 sheng1 ru2 he2, zhuan3 zhu4 ru2 kao3 yu3 lao3, jia3 jie4 ru2 jie4 lai2 biao3 shi4 lai2 dao4 de5 lai2.",
    "Ví dụ: tượng hình là 日, chỉ sự là 上, hội ý là 休, hình thanh là 河, chuyển chú là 考 và 老, giả tá là mượn 來 để biểu thị nghĩa ‘đến’.",
  ),
  worksheetItem(
    "請談談貴國文字的歷史與演變，貴國現代所使用的文字構造有什麼特點？",
    "越南早期使用漢字，後來發展出字喃，近代改用以拉丁字母為基礎的國語字。現代越南文用字母和聲調符號記錄語音，拼寫與發音的關係較有規則。",
    "yue4 nan2 zao3 qi2 shi3 yong4 han4 zi4, hou4 lai2 fa1 zhan3 chu1 zi4 nan2, jin4 dai4 gai3 yong4 yi3 la1 ding1 zi4 mu3 wei2 ji1 chu3 de5 guo2 yu3 zi4. xian4 dai4 yue4 nan2 wen2 yong4 zi4 mu3 he2 sheng1 diao4 fu2 hao4 ji4 lu4 yu3 yin1, pin1 xie3 yu3 fa1 yin1 de5 guan1 xi4 jiao4 you3 gui1 ze2.",
    "Việt Nam thời kỳ đầu dùng chữ Hán, sau đó phát triển chữ Nôm và thời cận đại chuyển sang chữ Quốc ngữ dựa trên bảng chữ cái Latin. Tiếng Việt hiện đại dùng chữ cái cùng dấu thanh để ghi âm, quan hệ giữa chính tả và phát âm khá có quy tắc.",
  ),
];

const texts = [
  {
    id: "lesson13-text",
    lesson: 13,
    title: "第 13 課 正體字與簡體字",
    titlePinyin: "di4 shi2 san1 ke4: zheng4 ti3 zi4 yu3 jian3 ti3 zi4",
    titleVi: "Bài 13: Chữ chính thể và chữ giản thể",
    lines: mainLines,
    extras: [
      {
        type: "worksheet",
      title: "問題討論",
        description: "根據第十三課課文回答問題，並結合自己的漢字學習經驗表達看法。",
        tone: "discussion",
        items: discussionItems,
      },
      {
        type: "worksheet",
      title: "課室活動：「漢字」原來如此",
        description: "到「漢字字源網」研究五個有趣的漢字，再從字形演變、字源故事、正簡差異、選字理由與記憶方法五方面向同學介紹。",
        tone: "activity",
        items: activityItems,
      },
      {
        type: "worksheet",
        title: "閱讀與討論：中國文字的構造",
        description: "中國文字的造字方法有六種，叫做六書：象形按照物體形象用筆畫表示；指事用符號表示抽象事情；會意結合兩個或更多字表示新義；形聲由形符與聲符結合；轉注因時間、地區不同而有形體不同但意義相近、可互相解釋的字；假借是在沒有本字時借用同音或音近字。有些專家認為象形、指事、會意、形聲是造字方法，轉注與假借是文字運用方法。",
        tone: "reading",
        items: readingItems,
      },
    ],
  },
];

const grammar = [
  {
    id: "lesson13-grammar-since-become",
    lesson: 13,
    pattern: "自……（以）後，……即成為……",
    patternPinyin: "zi4 ... (yi3) hou4, ... ji2 cheng2 wei2 ...",
    explanationZh: "「自（從）」放在起始時間或地點前，是較正式的說法；和「（以）後」連用時，指出起始時間之後的變化。「即成為」是「就成為」的正式說法。",
    explanationPinyin: "zi4 (cong2) fang4 zai4 qi3 shi3 shi2 jian1 huo4 di4 dian3 qian2, shi4 jiao4 zheng4 shi4 de5 shuo1 fa3; he2 (yi3) hou4 lian2 yong4 shi2, zhi3 chu1 qi3 shi3 shi2 jian1 zhi1 hou4 de5 bian4 hua4. ji2 cheng2 wei2 shi4 jiu4 cheng2 wei2 de5 zheng4 shi4 shuo1 fa3.",
    explanationVi: "‘Tự/từ’ đặt trước thời gian hoặc địa điểm bắt đầu, mang sắc thái trang trọng; đi với ‘sau đó’ để nêu sự thay đổi từ mốc ấy. ‘Tức trở thành’ là cách nói trang trọng của ‘liền trở thành’.",
    example: "自秦始皇統一秦朝的文字以後，小篆即成為當時的標準字體。",
    examplePinyin: "zi4 qin2 shi3 huang2 tong3 yi1 qin2 chao2 de5 wen2 zi4 yi3 hou4, xiao3 zhuan4 ji2 cheng2 wei2 dang1 shi2 de5 biao1 zhun3 zi4 ti3.",
    exampleVi: "Sau khi Tần Thủy Hoàng thống nhất chữ viết nhà Tần, tiểu triện lập tức trở thành kiểu chữ chuẩn đương thời.",
    practice: [
      {
        prompt: "請用本課語法回答：電腦發明後，電子郵件有什麼地位？",
        answer: "自電腦發明以後，電子郵件即成為聯絡朋友的重要方式。",
        requiredTerms: ["自", "以後", "即成為"],
      },
      {
        prompt: "請用本課語法回答：秦朝統一文字後，小篆有什麼地位？",
        answer: "自秦始皇統一秦朝的文字以後，小篆即成為當時的標準字體。",
        requiredTerms: ["自", "以後", "即成為"],
      },
    ],
  },
  {
    id: "lesson13-grammar-along-with",
    lesson: 13,
    pattern: "隨著",
    patternPinyin: "sui2 zhe5",
    explanationZh: "「隨著 A，主語也 VP」表示因 A 發生或變化，主語也跟著產生變化；後句常搭配增加、減少、提高、降低、改變、發展或「逐漸、越來越」。",
    explanationPinyin: "sui2 zhe5 A, zhu3 yu3 ye3 VP biao3 shi4 yin1 A fa1 sheng1 huo4 bian4 hua4, zhu3 yu3 ye3 gen1 zhe5 chan3 sheng1 bian4 hua4; hou4 ju4 chang2 da1 pei4 zeng1 jia1, jian3 shao3, ti2 gao1, jiang4 di1, gai3 bian4, fa1 zhan3 huo4 zhu2 jian4, yue4 lai2 yue4.",
    explanationVi: "‘Cùng với A, chủ ngữ cũng…’ cho biết khi A xảy ra hoặc thay đổi thì chủ ngữ thay đổi theo; vế sau thường đi với tăng, giảm, nâng cao, hạ thấp, thay đổi, phát triển, dần dần hoặc ngày càng.",
    example: "隨著歷史的發展，隸書逐漸演化為楷書。",
    examplePinyin: "sui2 zhe5 li4 shi3 de5 fa1 zhan3, li4 shu1 zhu2 jian4 yan3 hua4 wei2 kai3 shu1.",
    exampleVi: "Cùng với sự phát triển của lịch sử, lệ thư dần biến thành khải thư.",
    practice: [
      {
        prompt: "請用「隨著」說明科技發展帶來的改變。",
        answer: "隨著科技的發展，人們取得資訊的速度也越來越快。",
        requiredTerms: ["隨著", "也", "越來越"],
      },
      {
        prompt: "請用「隨著」說明天氣變冷後的變化。",
        answer: "隨著天氣逐漸變冷，街上的行人也減少了。",
        requiredTerms: ["隨著", "也", "減少"],
      },
    ],
  },
  {
    id: "lesson13-grammar-like",
    lesson: 13,
    pattern: "如……一般（SV）",
    patternPinyin: "ru2 ... yi4 ban1 (SV)",
    explanationZh: "「如」是「像」的正式說法，「一般」表示「一樣」。名詞通常是具體事物，用來比喻抽象情況；「一般」後可接狀態描述，也可省略。",
    explanationPinyin: "ru2 shi4 xiang4 de5 zheng4 shi4 shuo1 fa3, yi4 ban1 biao3 shi4 yi2 yang4. ming2 ci2 tong1 chang2 shi4 ju4 ti3 shi4 wu4, yong4 lai2 bi3 yu4 chou1 xiang4 qing2 kuang4; yi4 ban1 hou4 ke3 jie1 zhuang4 tai4 miao2 shu4, ye3 ke3 sheng3 lve4.",
    explanationVi: "‘Như’ là cách nói trang trọng của ‘giống’; ‘bình thường/chung’ ở đây nghĩa là ‘y như’. Danh từ thường là vật cụ thể dùng để ví tình huống trừu tượng; sau ‘一般’ có thể có mô tả trạng thái hoặc được lược bỏ.",
    example: "行書與草書看起來龍飛鳳舞，如行雲流水一般。",
    examplePinyin: "xing2 shu1 yu3 cao3 shu1 kan4 qi3 lai2 long2 fei1 feng4 wu3, ru2 xing2 yun2 liu2 shui3 yi4 ban1.",
    exampleVi: "Hành thư và thảo thư trông phóng khoáng như mây trôi nước chảy.",
    practice: [
      {
        prompt: "請用「如……一般」形容她唱歌的聲音。",
        answer: "她唱歌的聲音如春風一般溫柔。",
        requiredTerms: ["如", "一般"],
      },
      {
        prompt: "請用「如……一般」形容時間過得很快。",
        answer: "快樂的時光如流水一般，一轉眼就過去了。",
        requiredTerms: ["如", "一般"],
      },
    ],
  },
  {
    id: "lesson13-grammar-passive-regard",
    lesson: 13,
    pattern: "被……視為……",
    patternPinyin: "bei4 ... shi4 wei2 ...",
    explanationZh: "「被」引出動作的施事者，「視為」表示「看作、認定為」；整個句型說明某個對象被某人或某群體看作某種身分或事物。",
    explanationPinyin: "bei4 yin3 chu1 dong4 zuo4 de5 shi1 shi4 zhe3, shi4 wei2 biao3 shi4 kan4 zuo4, ren4 ding4 wei2; zheng3 ge5 ju4 xing2 shuo1 ming2 mou3 ge5 dui4 xiang4 bei4 mou3 ren2 huo4 mou3 qun2 ti3 kan4 zuo4 mou3 zhong3 shen1 fen4 huo4 shi4 wu4.",
    explanationVi: "‘Bị’ dẫn ra người thực hiện hành động; ‘xem là’ nghĩa là coi hoặc xác định là. Cả mẫu câu nói một đối tượng được ai đó hay một nhóm xem như một thân phận hoặc sự vật nào đó.",
    example: "楷書、行書、草書都被華人視為既實用又美觀的書寫文字。",
    examplePinyin: "kai3 shu1, xing2 shu1, cao3 shu1 dou1 bei4 hua2 ren2 shi4 wei2 ji4 shi2 yong4 you4 mei3 guan1 de5 shu1 xie3 wen2 zi4.",
    exampleVi: "Khải thư, hành thư và thảo thư đều được người Hoa xem là kiểu chữ vừa thực dụng vừa đẹp.",
    practice: [
      {
        prompt: "請用「被……視為……」說明長城的文化地位。",
        answer: "萬里長城被許多人視為中華文化的重要象徵。",
        requiredTerms: ["被", "視為"],
      },
      {
        prompt: "請用「被……視為……」說明這本小說的文學地位。",
        answer: "這本小說被讀者視為作者最重要的作品。",
        requiredTerms: ["被", "視為"],
      },
    ],
  },
  {
    id: "lesson13-grammar-besides",
    lesson: 13,
    pattern: "除此以外，尚有……",
    patternPinyin: "chu2 ci3 yi3 wai4, shang4 you3 ...",
    explanationZh: "「除此以外、除此之外、此外」先承接前面已說明的情況，再用較正式的「尚有」補充其他的人、事或物。",
    explanationPinyin: "chu2 ci3 yi3 wai4, chu2 ci3 zhi1 wai4, ci3 wai4 xian1 cheng2 jie1 qian2 mian4 yi3 shuo1 ming2 de5 qing2 kuang4, zai4 yong4 jiao4 zheng4 shi4 de5 shang4 you3 bu3 chong1 qi2 ta1 de5 ren2, shi4 huo4 wu4.",
    explanationVi: "‘Ngoài điều này/ngoài ra’ nối với tình huống đã nói trước, sau đó dùng cách nói trang trọng ‘còn có’ để bổ sung người, việc hoặc vật khác.",
    example: "除此以外，尚有一些簡體字保留了原字的一部分。",
    examplePinyin: "chu2 ci3 yi3 wai4, shang4 you3 yi4 xie1 jian3 ti3 zi4 bao3 liu2 le5 yuan2 zi4 de5 yi2 bu4 fen4.",
    exampleVi: "Ngoài ra, vẫn còn một số chữ giản thể giữ lại một phần của chữ gốc.",
    practice: [
      {
        prompt: "請用指定語法補充這家書店的其他服務。",
        answer: "這家書店可以買書；除此以外，尚有咖啡區和閱讀座位。",
        requiredTerms: ["除此以外", "尚有"],
      },
      {
        prompt: "請用指定語法補充學漢字的其他好處。",
        answer: "學漢字能閱讀中文資料；除此以外，尚有了解歷史文化的好處。",
        requiredTerms: ["除此以外", "尚有"],
      },
    ],
  },
];

export const lesson13Content = { cards, texts, grammar };
