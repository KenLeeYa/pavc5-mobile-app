const mark = (type, term, target = term) => ({ type, term, target });

const line = (zh, pinyin, vi, marks = []) => ({ speaker: "旁白", zh, pinyin, vi, marks });

const cardRows = [
  ["生詞", "簡稱", "jian3 cheng1", "較短的名稱或說法", "jiao4 duan3 de5 ming2 cheng1 huo4 shuo1 fa3", "tên gọi tắt", "世界運動會簡稱奧運會。", "shi4 jie4 yun4 dong4 hui4 jian3 cheng1 ao4 yun4 hui4.", "Đại hội Thể thao Thế giới gọi tắt là Thế vận hội."],
  ["生詞", "綜合", "zong1 he2", "把多種內容合在一起", "ba3 duo1 zhong3 nei4 rong2 he2 zai4 yi4 qi3", "tổng hợp", "奧運會是國際性的綜合運動會。", "ao4 yun4 hui4 shi4 guo2 ji4 xing4 de5 zong1 he2 yun4 dong4 hui4.", "Thế vận hội là đại hội thể thao tổng hợp mang tính quốc tế."],
  ["生詞", "關注", "guan1 zhu4", "關心並注意", "guan1 xin1 bing4 zhu4 yi4", "quan tâm, chú ý", "奧運會是全球關注的大事。", "ao4 yun4 hui4 shi4 quan2 qiu2 guan1 zhu4 de5 da4 shi4.", "Thế vận hội là sự kiện lớn được toàn cầu quan tâm."],
  ["生詞", "選手", "xuan3 shou3", "參加比賽的人", "can1 jia1 bi3 sai4 de5 ren2", "tuyển thủ", "各國選手都希望表現自己的實力。", "ge4 guo2 xuan3 shou3 dou1 xi1 wang4 biao3 xian4 zi4 ji3 de5 shi2 li4.", "Tuyển thủ các nước đều mong thể hiện thực lực của mình."],
  ["生詞", "奪得", "duo2 de2", "經競爭而得到", "jing1 jing4 zheng1 er2 de2 dao4", "giành được", "她在比賽中奪得金牌。", "ta1 zai4 bi3 sai4 zhong1 duo2 de2 jin1 pai2.", "Cô ấy giành huy chương vàng trong cuộc thi."],
  ["生詞", "獎牌", "jiang3 pai2", "頒給優勝者的牌子", "ban1 gei3 you1 sheng4 zhe3 de5 pai2 zi5", "huy chương", "選手努力爭取獎牌。", "xuan3 shou3 nu3 li4 zheng1 qu3 jiang3 pai2.", "Các tuyển thủ nỗ lực giành huy chương."],
  ["生詞", "光榮", "guang1 rong2", "值得尊敬而有榮譽", "zhi2 de2 zun1 jing4 er2 you3 rong2 yu4", "vinh quang", "能代表國家參賽十分光榮。", "neng2 dai4 biao3 guo2 jia1 can1 sai4 shi2 fen1 guang1 rong2.", "Được đại diện quốc gia dự thi là điều rất vinh quang."],
  ["生詞", "起源", "qi3 yuan2", "事物開始產生", "shi4 wu4 kai1 shi3 chan3 sheng1", "bắt nguồn", "奧運會起源於古代希臘。", "ao4 yun4 hui4 qi3 yuan2 yu2 gu3 dai4 xi1 la4.", "Thế vận hội bắt nguồn từ Hy Lạp cổ đại."],
  ["生詞", "集合", "ji2 he2", "聚集在一起", "ju4 ji2 zai4 yi4 qi3", "tập hợp", "大家在運動場入口集合。", "da4 jia1 zai4 yun4 dong4 chang3 ru4 kou3 ji2 he2.", "Mọi người tập hợp ở lối vào sân vận động."],
  ["生詞", "典禮", "dian3 li3", "隆重舉行的儀式", "long2 zhong4 ju3 xing2 de5 yi2 shi4", "nghi lễ", "開幕典禮吸引許多人觀看。", "kai1 mu4 dian3 li3 xi1 yin3 xu3 duo1 ren2 guan1 kan4.", "Lễ khai mạc thu hút nhiều người theo dõi."],
  ["生詞", "競技", "jing4 ji4", "比賽技術與能力", "bi3 sai4 ji4 shu4 yu3 neng2 li4", "thi đấu thể thao", "古代典禮中加入了競技活動。", "gu3 dai4 dian3 li3 zhong1 jia1 ru4 le5 jing4 ji4 huo2 dong4.", "Nghi lễ thời cổ có thêm các hoạt động thi đấu."],
  ["生詞", "友愛", "you3 ai4", "友好並互相關愛", "you3 hao3 bing4 hu4 xiang1 guan1 ai4", "tình hữu ái", "和平與友愛是奧運的重要精神。", "he2 ping2 yu3 you3 ai4 shi4 ao4 yun4 de5 zhong4 yao4 jing1 shen2.", "Hòa bình và hữu ái là tinh thần quan trọng của Olympic."],
  ["生詞", "消除", "xiao1 chu2", "使不好的事物不存在", "shi3 bu4 hao3 de5 shi4 wu4 bu4 cun2 zai4", "xóa bỏ", "交流可以消除誤會。", "jiao1 liu2 ke3 yi3 xiao1 chu2 wu4 hui4.", "Giao lưu có thể xóa bỏ hiểu lầm."],
  ["生詞", "仇恨", "chou2 hen4", "強烈的敵意與怨恨", "qiang2 lie4 de5 di2 yi4 yu3 yuan4 hen4", "thù hận", "和平的活動有助於消除仇恨。", "he2 ping2 de5 huo2 dong4 you3 zhu4 yu2 xiao1 chu2 chou2 hen4.", "Hoạt động hòa bình giúp xóa bỏ thù hận."],
  ["生詞", "流傳", "liu2 chuan2", "一代一代傳下去", "yi2 dai4 yi2 dai4 chuan2 xia4 qu4", "lưu truyền", "這個故事流傳了很多年。", "zhe4 ge5 gu4 shi4 liu2 chuan2 le5 hen3 duo1 nian2.", "Câu chuyện này đã lưu truyền nhiều năm."],
  ["生詞", "停辦", "ting2 ban4", "停止舉辦", "ting2 zhi3 ju3 ban4", "ngừng tổ chức", "古代奧運會曾經停辦很久。", "gu3 dai4 ao4 yun4 hui4 ceng2 jing1 ting2 ban4 hen3 jiu3.", "Thế vận hội cổ đại từng ngừng tổ chức rất lâu."],
  ["生詞", "組織", "zu3 zhi1", "安排人員形成團體", "an1 pai2 ren2 yuan2 xing2 cheng2 tuan2 ti3", "tổ chức", "現代奧運會的組織在十九世紀末成立。", "xian4 dai4 ao4 yun4 hui4 de5 zu3 zhi1 zai4 shi2 jiu3 shi4 ji4 mo4 cheng2 li4.", "Tổ chức Olympic hiện đại được thành lập cuối thế kỷ XIX."],
  ["生詞", "世紀", "shi4 ji4", "一百年的期間", "yi4 bai3 nian2 de5 qi1 jian1", "thế kỷ", "這個組織成立於十九世紀末。", "zhe4 ge5 zu3 zhi1 cheng2 li4 yu2 shi2 jiu3 shi4 ji4 mo4.", "Tổ chức này được thành lập vào cuối thế kỷ XIX."],
  ["生詞", "成立", "cheng2 li4", "建立並開始運作", "jian4 li4 bing4 kai1 shi3 yun4 zuo4", "thành lập", "新的運動協會正式成立了。", "xin1 de5 yun4 dong4 xie2 hui4 zheng4 shi4 cheng2 li4 le5.", "Hiệp hội thể thao mới đã chính thức được thành lập."],
  ["生詞", "貢獻", "gong4 xian4", "付出力量使事情更好", "fu4 chu1 li4 liang4 shi3 shi4 qing2 geng4 hao3", "cống hiến", "教育人士為體育活動貢獻力量。", "jiao4 yu4 ren2 shi4 wei4 ti3 yu4 huo2 dong4 gong4 xian4 li4 liang4.", "Các nhà giáo dục cống hiến sức lực cho hoạt động thể thao."],
  ["生詞", "終於", "zhong1 yu2", "經過一段時間後得到結果", "jing1 guo4 yi2 duan4 shi2 jian1 hou4 de2 dao4 jie2 guo3", "cuối cùng", "經過努力，比賽終於順利舉行。", "jing1 guo4 nu3 li4, bi3 sai4 zhong1 yu2 shun4 li4 ju3 xing2.", "Sau nhiều nỗ lực, cuộc thi cuối cùng diễn ra thuận lợi."],
  ["生詞", "從此以後", "cong2 ci3 yi3 hou4", "從這個時候開始往後", "cong2 zhe4 ge5 shi2 hou4 kai1 shi3 wang3 hou4", "từ đó về sau", "從此以後，運動會每四年舉行一次。", "cong2 ci3 yi3 hou4, yun4 dong4 hui4 mei3 si4 nian2 ju3 xing2 yi2 ci4.", "Từ đó về sau, đại hội được tổ chức bốn năm một lần."],
  ["生詞", "團結", "tuan2 jie2", "大家同心合作", "da4 jia1 tong2 xin1 he2 zuo4", "đoàn kết", "隊員團結合作完成比賽。", "dui4 yuan2 tuan2 jie2 he2 zuo4 wan2 cheng2 bi3 sai4.", "Các thành viên đoàn kết hợp tác để hoàn thành cuộc thi."],
  ["生詞", "會旗", "hui4 qi2", "代表一個會議或組織的旗子", "dai4 biao3 yi2 ge5 hui4 yi4 huo4 zu3 zhi1 de5 qi2 zi5", "cờ hội", "奧運會旗上有五個環。", "ao4 yun4 hui4 qi2 shang4 you3 wu3 ge5 huan2.", "Trên cờ Olympic có năm vòng tròn."],
  ["生詞", "種族", "zhong3 zu2", "依共同特徵形成的人群", "yi1 gong4 tong2 te4 zheng1 xing2 cheng2 de5 ren2 qun2", "chủng tộc", "奧運精神強調不分種族。", "ao4 yun4 jing1 shen2 qiang2 diao4 bu4 fen1 zhong3 zu2.", "Tinh thần Olympic nhấn mạnh không phân biệt chủng tộc."],
  ["生詞", "國籍", "guo2 ji2", "一個人所屬的國家身分", "yi2 ge5 ren2 suo3 shu3 de5 guo2 jia1 shen1 fen4", "quốc tịch", "參賽者來自不同國籍。", "can1 sai4 zhe3 lai2 zi4 bu4 tong2 guo2 ji2.", "Người dự thi đến từ nhiều quốc tịch khác nhau."],
  ["生詞", "增進", "zeng1 jin4", "使關係或能力進步", "shi3 guan1 xi4 huo4 neng2 li4 jin4 bu4", "tăng cường", "交流能增進彼此的了解。", "jiao1 liu2 neng2 zeng1 jin4 bi3 ci3 de5 liao3 jie3.", "Giao lưu có thể tăng cường sự hiểu biết lẫn nhau."],
  ["生詞", "彼此", "bi3 ci3", "雙方互相", "shuang1 fang1 hu4 xiang1", "lẫn nhau", "選手彼此尊重，公平競爭。", "xuan3 shou3 bi3 ci3 zun1 zhong4, gong1 ping2 jing4 zheng1.", "Các tuyển thủ tôn trọng lẫn nhau và cạnh tranh công bằng."],
  ["生詞", "達到", "da2 dao4", "到達某個目標或程度", "dao4 da2 mou3 ge5 mu4 biao1 huo4 cheng2 du4", "đạt tới", "大家希望達到天下一家的理想。", "da4 jia1 xi1 wang4 da2 dao4 tian1 xia4 yi4 jia1 de5 li3 xiang3.", "Mọi người mong đạt tới lý tưởng thiên hạ một nhà."],
  ["生詞", "運動員", "yun4 dong4 yuan2", "以運動競技為專長的人", "yi3 yun4 dong4 jing4 ji4 wei2 zhuan1 chang2 de5 ren2", "vận động viên", "運動員每天努力練習。", "yun4 dong4 yuan2 mei3 tian1 nu3 li4 lian4 xi2.", "Vận động viên luyện tập chăm chỉ mỗi ngày."],
  ["生詞", "勝利", "sheng4 li4", "在競爭中獲勝", "zai4 jing4 zheng1 zhong1 huo4 sheng4", "thắng lợi", "參加比賽最重要的不只是勝利。", "can1 jia1 bi3 sai4 zui4 zhong4 yao4 de5 bu4 zhi3 shi4 sheng4 li4.", "Điều quan trọng nhất khi thi đấu không chỉ là chiến thắng."],
  ["生詞", "過程", "guo4 cheng2", "事情發展的經過", "shi4 qing2 fa1 zhan3 de5 jing1 guo4", "quá trình", "練習與比賽的過程讓人成長。", "lian4 xi2 yu3 bi3 sai4 de5 guo4 cheng2 rang4 ren2 cheng2 zhang3.", "Quá trình luyện tập và thi đấu giúp con người trưởng thành."],
  ["生詞", "超越", "chao1 yue4", "超過原有的程度", "chao1 guo4 yuan2 you3 de5 cheng2 du4", "vượt qua", "選手努力超越自己。", "xuan3 shou3 nu3 li4 chao1 yue4 zi4 ji3.", "Tuyển thủ cố gắng vượt qua chính mình."],
  ["生詞", "突破", "tu1 po4", "衝破原來的限制", "chong1 po4 yuan2 lai2 de5 xian4 zhi4", "đột phá", "他在比賽中突破個人紀錄。", "ta1 zai4 bi3 sai4 zhong1 tu1 po4 ge4 ren2 ji4 lu4.", "Anh ấy phá kỷ lục cá nhân trong cuộc thi."],
  ["生詞", "成長", "cheng2 zhang3", "逐漸成熟或進步", "zhu2 jian4 cheng2 shu2 huo4 jin4 bu4", "trưởng thành", "每一次挑戰都能帶來成長。", "mei3 yi2 ci4 tiao3 zhan4 dou1 neng2 dai4 lai2 cheng2 zhang3.", "Mỗi thử thách đều có thể mang lại sự trưởng thành."],
  ["生詞", "堅強", "jian1 qiang2", "能忍受困難而不退縮", "neng2 ren3 shou4 kun4 nan2 er2 bu2 tui4 suo1", "kiên cường", "運動訓練能培養堅強的個性。", "yun4 dong4 xun4 lian4 neng2 pei2 yang3 jian1 qiang2 de5 ge4 xing4.", "Rèn luyện thể thao có thể bồi dưỡng tính cách kiên cường."],
  ["生詞", "和諧", "he2 xie2", "相處協調而融洽", "xiang1 chu3 xie2 tiao2 er2 rong2 qia4", "hài hòa", "體育活動象徵人類和諧共處。", "ti3 yu4 huo2 dong4 xiang4 zheng1 ren2 lei4 he2 xie2 gong4 chu3.", "Hoạt động thể thao tượng trưng cho loài người chung sống hài hòa."],
  ["生詞", "盼望", "pan4 wang4", "殷切地希望", "yin1 qie4 de5 xi1 wang4", "mong mỏi", "人人都盼望世界充滿和平。", "ren2 ren2 dou1 pan4 wang4 shi4 jie4 chong1 man3 he2 ping2.", "Ai cũng mong thế giới tràn đầy hòa bình."],
  ["專有名詞", "奧林匹克", "ao4 lin2 pi3 ke4", "奧林匹克運動會的名稱", "ao4 lin2 pi3 ke4 yun4 dong4 hui4 de5 ming2 cheng1", "Olympic", "奧林匹克精神重視和平與友愛。", "ao4 lin2 pi3 ke4 jing1 shen2 zhong4 shi4 he2 ping2 yu3 you3 ai4.", "Tinh thần Olympic coi trọng hòa bình và hữu ái."],
  ["專有名詞", "希臘", "xi1 la4", "歐洲東南部的國家", "ou1 zhou1 dong1 nan2 bu4 de5 guo2 jia1", "Hy Lạp", "第一屆現代奧運會在希臘舉行。", "di4 yi1 jie4 xian4 dai4 ao4 yun4 hui4 zai4 xi1 la4 ju3 xing2.", "Thế vận hội hiện đại đầu tiên được tổ chức tại Hy Lạp."],
  ["專有名詞", "奧林匹亞", "ao4 lin2 pi3 ya4", "古代希臘舉行競技活動的地方", "gu3 dai4 xi1 la4 ju3 xing2 jing4 ji4 huo2 dong4 de5 di4 fang1", "Olympia", "古代競技活動在奧林匹亞舉行。", "gu3 dai4 jing4 ji4 huo2 dong4 zai4 ao4 lin2 pi3 ya4 ju3 xing2.", "Các cuộc thi thời cổ được tổ chức tại Olympia."],
  ["專有名詞", "雅典", "ya3 dian3", "希臘的首都", "xi1 la4 de5 shou3 du1", "Athens", "一八九六年的奧運會在雅典舉行。", "yi1 ba1 jiu3 liu4 nian2 de5 ao4 yun4 hui4 zai4 ya3 dian3 ju3 xing2.", "Thế vận hội năm 1896 được tổ chức tại Athens."],
  ["成語", "摩拳擦掌", "mo2 quan2 ca1 zhang3", "準備行動而躍躍欲試", "zhun3 bei4 xing2 dong4 er2 yue4 yue4 yu4 shi4", "xoa tay háo hức", "比賽前，選手們個個摩拳擦掌。", "bi3 sai4 qian2, xuan3 shou3 men5 ge4 ge4 mo2 quan2 ca1 zhang3.", "Trước cuộc thi, các tuyển thủ ai nấy đều háo hức sẵn sàng."],
  ["成語", "世界大同", "shi4 jie4 da4 tong2", "世界和平而人人平等", "shi4 jie4 he2 ping2 er2 ren2 ren2 ping2 deng3", "thế giới đại đồng", "奧運會希望實現世界大同。", "ao4 yun4 hui4 xi1 wang4 shi2 xian4 shi4 jie4 da4 tong2.", "Olympic hướng tới lý tưởng thế giới đại đồng."],
  ["成語", "天下一家", "tian1 xia4 yi4 jia1", "把全世界的人看成一家人", "ba3 quan2 shi4 jie4 de5 ren2 kan4 cheng2 yi4 jia1 ren2", "thiên hạ một nhà", "互相尊重能讓人感受天下一家。", "hu4 xiang1 zun1 zhong4 neng2 rang4 ren2 gan3 shou4 tian1 xia4 yi4 jia1.", "Tôn trọng lẫn nhau giúp mọi người cảm nhận thiên hạ một nhà."],
  ["俗語", "志在參加，不在得獎", "zhi4 zai4 can1 jia1, bu2 zai4 de2 jiang3", "重視參與而不只重視獎項", "zhong4 shi4 can1 yu4 er2 bu4 zhi3 zhong4 shi4 jiang3 xiang4", "cốt ở tham gia, không ở đoạt giải", "奧運精神強調志在參加，不在得獎。", "ao4 yun4 jing1 shen2 qiang2 diao4 zhi4 zai4 can1 jia1, bu2 zai4 de2 jiang3.", "Tinh thần Olympic nhấn mạnh cốt ở tham gia, không ở đoạt giải."],
  ["四字詞", "奮力一搏", "fen4 li4 yi4 bo2", "用盡力量勇敢嘗試", "yong4 jin4 li4 liang4 yong3 gan3 chang2 shi4", "dốc sức tranh tài", "選手在競技場上奮力一搏。", "xuan3 shou3 zai4 jing4 ji4 chang3 shang4 fen4 li4 yi4 bo2.", "Tuyển thủ dốc sức tranh tài trên đấu trường."],
  ["詞語", "無不……", "wu2 bu4", "所有的人或事物都如此", "suo3 you3 de5 ren2 huo4 shi4 wu4 dou1 ru2 ci3", "không ai là không", "各國選手無不摩拳擦掌。", "ge4 guo2 xuan3 shou3 wu2 bu4 mo2 quan2 ca1 zhang3.", "Tuyển thủ các nước không ai là không háo hức sẵn sàng."],
  ["詞語", "V入", "V ru4", "動作使事物進入某處或某個群體", "dong4 zuo4 shi3 shi4 wu4 jin4 ru4 mou3 chu4 huo4 mou3 ge5 qun2 ti3", "động từ + vào", "典禮中加入了一些競技活動。", "dian3 li3 zhong1 jia1 ru4 le5 yi4 xie1 jing4 ji4 huo2 dong4.", "Trong nghi lễ đã thêm vào một số hoạt động thi đấu."],
  ["詞語", "……以……（來）……", "yi3... lai2...", "以某種方法或工具達成目的", "yi3 mou3 zhong3 fang1 fa3 huo4 gong1 ju4 da2 cheng2 mu4 di4", "dùng... để...", "人們以和平與友愛的精神來消除仇恨。", "ren2 men5 yi3 he2 ping2 yu3 you3 ai4 de5 jing1 shen2 lai2 xiao1 chu2 chou2 hen4.", "Mọi người dùng tinh thần hòa bình và hữu ái để xóa bỏ thù hận."],
  ["詞語", "經過一番……，終於……", "jing1 guo4 yi4 fan1..., zhong1 yu2...", "經歷努力後得到期待的結果", "jing1 li4 nu3 li4 hou4 de2 dao4 qi1 dai4 de5 jie2 guo3", "sau một phen... cuối cùng...", "經過一番努力，奧運會終於恢復舉行。", "jing1 guo4 yi4 fan1 nu3 li4, ao4 yun4 hui4 zhong1 yu2 hui1 fu4 ju3 xing2.", "Sau một phen nỗ lực, Thế vận hội cuối cùng được tổ chức trở lại."],
  ["詞語", "使", "shi3", "讓某人或某事產生結果", "rang4 mou3 ren2 huo4 mou3 shi4 chan3 sheng1 jie2 guo3", "khiến, làm cho", "交流使大家更了解彼此。", "jiao1 liu2 shi3 da4 jia1 geng4 liao3 jie3 bi3 ci3.", "Giao lưu khiến mọi người hiểu nhau hơn."],
];

const cards = cardRows.map(([type, term, pinyin, meaningZh, meaningPinyin, meaningVi, example, examplePinyin, exampleVi], index) => ({
  id: `lesson5-card-${String(index + 1).padStart(3, "0")}`,
  lesson: 5,
  type,
  term,
  pinyin,
  meaningZh,
  meaningPinyin,
  meaningVi,
  example,
  examplePinyin,
  exampleVi,
}));

const worksheetItem = (title, prompt, answer, pinyin, vi, options = "") => ({ title, prompt, options, answer, pinyin, vi });

const texts = [
  {
    id: "lesson5-main",
    lesson: 5,
    title: "第 5 課 世界運動會",
    titlePinyin: "di4 wu3 ke4: shi4 jie4 yun4 dong4 hui4",
    titleVi: "Bài 5: Đại hội Thể thao Thế giới",
    lines: [
      line(
        "世界運動會又稱為國際奧林匹克運動會，簡稱奧運會。這種國際性的綜合運動會每四年舉辦一次，分為夏季與冬季兩種，都是全球關注的大事。比賽期間，各國選手無不摩拳擦掌，希望在運動會中表現自己的實力，奪得獎牌與光榮。",
        "shi4 jie4 yun4 dong4 hui4 you4 cheng1 wei2 guo2 ji4 ao4 lin2 pi3 ke4 yun4 dong4 hui4, jian3 cheng1 ao4 yun4 hui4. zhe4 zhong3 guo2 ji4 xing4 de5 zong1 he2 yun4 dong4 hui4 mei3 si4 nian2 ju3 ban4 yi2 ci4, fen1 wei2 xia4 ji4 yu3 dong1 ji4 liang3 zhong3, dou1 shi4 quan2 qiu2 guan1 zhu4 de5 da4 shi4. bi3 sai4 qi1 jian1, ge4 guo2 xuan3 shou3 wu2 bu4 mo2 quan2 ca1 zhang3, xi1 wang4 zai4 yun4 dong4 hui4 zhong1 biao3 xian4 zi4 ji3 de5 shi2 li4, duo2 de2 jiang3 pai2 yu3 guang1 rong2.",
        "Đại hội Thể thao Thế giới còn được gọi là Đại hội Olympic Quốc tế, gọi tắt là Thế vận hội. Đại hội thể thao tổng hợp mang tính quốc tế này được tổ chức bốn năm một lần, gồm Thế vận hội Mùa hè và Mùa đông, đều là sự kiện lớn được toàn cầu quan tâm. Trong thời gian thi đấu, tuyển thủ các nước ai nấy đều háo hức sẵn sàng, mong thể hiện thực lực, giành huy chương và vinh quang.",
        [mark("proper", "奧林匹克"), mark("vocab", "簡稱"), mark("vocab", "綜合"), mark("vocab", "關注"), mark("vocab", "選手"), mark("grammar", "無不", "無不……"), mark("idiom", "摩拳擦掌"), mark("vocab", "奪得"), mark("vocab", "獎牌"), mark("vocab", "光榮")]
      ),
      line(
        "奧運會起源於西元前七七六年。當時希臘人在希臘北部一個叫做奧林匹亞的地方，集合各城舉行每四年一次的祭祀典禮，並加入一些競技活動。這種活動的目的本來是想以和平與友愛的精神來消除各城之間的仇恨，流傳下來，就形成現代奧運會的精神。直到西元三九三年，羅馬的統治者決定取消這個活動，古代奧運會就不再舉行了。",
        "ao4 yun4 hui4 qi3 yuan2 yu2 xi1 yuan2 qian2 qi1 qi1 liu4 nian2. dang1 shi2 xi1 la4 ren2 zai4 xi1 la4 bei3 bu4 yi2 ge5 jiao4 zuo4 ao4 lin2 pi3 ya4 de5 di4 fang1, ji2 he2 ge4 cheng2 ju3 xing2 mei3 si4 nian2 yi2 ci4 de5 ji4 si4 dian3 li3, bing4 jia1 ru4 yi4 xie1 jing4 ji4 huo2 dong4. zhe4 zhong3 huo2 dong4 de5 mu4 di4 ben3 lai2 shi4 xiang3 yi3 he2 ping2 yu3 you3 ai4 de5 jing1 shen2 lai2 xiao1 chu2 ge4 cheng2 zhi1 jian1 de5 chou2 hen4, liu2 chuan2 xia4 lai2, jiu4 xing2 cheng2 xian4 dai4 ao4 yun4 hui4 de5 jing1 shen2. zhi2 dao4 xi1 yuan2 san1 jiu3 san1 nian2, luo2 ma3 de5 tong3 zhi4 zhe3 jue2 ding4 qu3 xiao1 zhe4 ge5 huo2 dong4, gu3 dai4 ao4 yun4 hui4 jiu4 bu2 zai4 ju3 xing2 le5.",
        "Thế vận hội bắt nguồn từ năm 776 trước Công nguyên. Khi ấy, người Hy Lạp tập hợp các thành bang tại Olympia ở miền bắc Hy Lạp để tổ chức nghi lễ tế tự bốn năm một lần, đồng thời thêm các hoạt động thi đấu. Mục đích ban đầu là dùng tinh thần hòa bình và hữu ái để xóa bỏ thù hận giữa các thành bang; truyền thống ấy được lưu truyền và hình thành tinh thần Olympic hiện đại. Đến năm 393, nhà cai trị La Mã quyết định hủy bỏ hoạt động này, nên Thế vận hội cổ đại không còn được tổ chức.",
        [mark("vocab", "起源"), mark("proper", "希臘"), mark("proper", "奧林匹亞"), mark("vocab", "集合"), mark("vocab", "典禮"), mark("grammar", "加入", "V入"), mark("vocab", "競技"), mark("grammar", "以和平與友愛的精神來", "……以……（來）……"), mark("vocab", "友愛"), mark("vocab", "消除"), mark("vocab", "仇恨"), mark("vocab", "流傳")]
      ),
      line(
        "在停辦了大約一千五百年後，現代奧運會的組織在十九世紀末成立。當時不少熱心體育的教育人士決定貢獻力量，繼續舉辦這個有意義的競技活動。經過一番努力，到了一八九六年，終於在希臘雅典舉行了第一屆現代奧運會。從此以後，這個運動會按照傳統，每四年舉行一次，每一屆的主辦國家都不同，各有各的特色。",
        "zai4 ting2 ban4 le5 da4 yue1 yi4 qian1 wu3 bai3 nian2 hou4, xian4 dai4 ao4 yun4 hui4 de5 zu3 zhi1 zai4 shi2 jiu3 shi4 ji4 mo4 cheng2 li4. dang1 shi2 bu4 shao3 re4 xin1 ti3 yu4 de5 jiao4 yu4 ren2 shi4 jue2 ding4 gong4 xian4 li4 liang4, ji4 xu4 ju3 ban4 zhe4 ge5 you3 yi4 yi4 de5 jing4 ji4 huo2 dong4. jing1 guo4 yi4 fan1 nu3 li4, dao4 le5 yi1 ba1 jiu3 liu4 nian2, zhong1 yu2 zai4 xi1 la4 ya3 dian3 ju3 xing2 le5 di4 yi1 jie4 xian4 dai4 ao4 yun4 hui4. cong2 ci3 yi3 hou4, zhe4 ge5 yun4 dong4 hui4 an4 zhao4 chuan2 tong3, mei3 si4 nian2 ju3 xing2 yi2 ci4, mei3 yi2 jie4 de5 zhu3 ban4 guo2 jia1 dou1 bu4 tong2, ge4 you3 ge4 de5 te4 se4.",
        "Sau khi ngừng tổ chức khoảng một nghìn năm trăm năm, tổ chức Olympic hiện đại được thành lập vào cuối thế kỷ XIX. Nhiều nhà giáo dục nhiệt tâm với thể thao quyết định góp sức tiếp tục tổ chức hoạt động thi đấu có ý nghĩa này. Sau một phen nỗ lực, đến năm 1896, Thế vận hội hiện đại đầu tiên cuối cùng được tổ chức tại Athens, Hy Lạp. Từ đó về sau, đại hội tuân theo truyền thống tổ chức bốn năm một lần; mỗi kỳ do một quốc gia khác nhau đăng cai và có nét riêng.",
        [mark("vocab", "停辦"), mark("vocab", "組織"), mark("vocab", "世紀"), mark("vocab", "成立"), mark("vocab", "貢獻"), mark("grammar", "經過一番努力", "經過一番……，終於……"), mark("vocab", "終於"), mark("proper", "雅典"), mark("vocab", "從此以後")]
      ),
      line(
        "奧運會雖然是各國的體育競技活動，但主要的精神是和平、友愛、團結與公平競爭。我們從會旗上的五環就可以了解，奧運會的目標是使世界上五大洲的人，不分種族，不分宗教，不分國籍，不分語言，都能同場競技，互相交流，增進對彼此的了解，最後達到「世界大同，天下一家」的理想。",
        "ao4 yun4 hui4 sui1 ran2 shi4 ge4 guo2 de5 ti3 yu4 jing4 ji4 huo2 dong4, dan4 zhu3 yao4 de5 jing1 shen2 shi4 he2 ping2, you3 ai4, tuan2 jie2 yu3 gong1 ping2 jing4 zheng1. wo3 men5 cong2 hui4 qi2 shang4 de5 wu3 huan2 jiu4 ke3 yi3 liao3 jie3, ao4 yun4 hui4 de5 mu4 biao1 shi4 shi3 shi4 jie4 shang4 wu3 da4 zhou1 de5 ren2, bu4 fen1 zhong3 zu2, bu4 fen1 zong1 jiao4, bu4 fen1 guo2 ji2, bu4 fen1 yu3 yan2, dou1 neng2 tong2 chang3 jing4 ji4, hu4 xiang1 jiao1 liu2, zeng1 jin4 dui4 bi3 ci3 de5 liao3 jie3, zui4 hou4 da2 dao4 shi4 jie4 da4 tong2, tian1 xia4 yi4 jia1 de5 li3 xiang3.",
        "Tuy Thế vận hội là hoạt động thi đấu thể thao giữa các nước, tinh thần chủ yếu vẫn là hòa bình, hữu ái, đoàn kết và cạnh tranh công bằng. Năm vòng tròn trên cờ cho thấy mục tiêu Olympic là khiến người dân năm châu, không phân biệt chủng tộc, tôn giáo, quốc tịch hay ngôn ngữ, đều có thể cùng thi đấu, giao lưu, tăng cường hiểu biết lẫn nhau và cuối cùng đạt tới lý tưởng thế giới đại đồng, thiên hạ một nhà.",
        [mark("vocab", "競技"), mark("vocab", "友愛"), mark("vocab", "團結"), mark("vocab", "會旗"), mark("grammar", "使", "使"), mark("vocab", "種族"), mark("vocab", "國籍"), mark("vocab", "增進"), mark("vocab", "彼此"), mark("vocab", "達到"), mark("idiom", "世界大同"), mark("idiom", "天下一家")]
      ),
      line(
        "奧運會重視選手「志在參加，不在得獎」的運動精神，也就是說，對運動員而言，參加奧運會最重要的不是勝利，而是在練習與比賽的過程中，不斷地超越自己、超越他人、最後突破限制，得到成長，這就是人類進步的力量。在競技場上奮力一搏的選手們，也是我們培養堅強個性、勇敢精神的榜樣。",
        "ao4 yun4 hui4 zhong4 shi4 xuan3 shou3 zhi4 zai4 can1 jia1, bu2 zai4 de2 jiang3 de5 yun4 dong4 jing1 shen2, ye3 jiu4 shi4 shuo1, dui4 yun4 dong4 yuan2 er2 yan2, can1 jia1 ao4 yun4 hui4 zui4 zhong4 yao4 de5 bu2 shi4 sheng4 li4, er2 shi4 zai4 lian4 xi2 yu3 bi3 sai4 de5 guo4 cheng2 zhong1, bu2 duan4 de5 chao1 yue4 zi4 ji3, chao1 yue4 ta1 ren2, zui4 hou4 tu1 po4 xian4 zhi4, de2 dao4 cheng2 zhang3, zhe4 jiu4 shi4 ren2 lei4 jin4 bu4 de5 li4 liang4. zai4 jing4 ji4 chang3 shang4 fen4 li4 yi4 bo2 de5 xuan3 shou3 men5, ye3 shi4 wo3 men5 pei2 yang3 jian1 qiang2 ge4 xing4, yong3 gan3 jing1 shen2 de5 bang3 yang4.",
        "Thế vận hội coi trọng tinh thần “cốt ở tham gia, không ở đoạt giải”. Đối với vận động viên, điều quan trọng nhất không phải chiến thắng, mà là trong quá trình luyện tập và thi đấu không ngừng vượt qua bản thân, vượt qua người khác, phá vỡ giới hạn và trưởng thành. Đó chính là sức mạnh thúc đẩy loài người tiến bộ. Những tuyển thủ dốc sức tranh tài cũng là tấm gương để chúng ta rèn tính kiên cường và tinh thần dũng cảm.",
        [mark("idiom", "志在參加，不在得獎"), mark("vocab", "運動員"), mark("vocab", "勝利"), mark("vocab", "過程"), mark("vocab", "超越"), mark("vocab", "突破"), mark("vocab", "成長"), mark("idiom", "奮力一搏"), mark("vocab", "堅強")]
      ),
      line(
        "世界性的體育活動，象徵全人類的和諧共處與團結合作。人人都盼望，這轟動全球的競技活動，能發揮奧運的精神，給我們帶來一個永遠充滿和平與友愛氣氛的世界。",
        "shi4 jie4 xing4 de5 ti3 yu4 huo2 dong4, xiang4 zheng1 quan2 ren2 lei4 de5 he2 xie2 gong4 chu3 yu3 tuan2 jie2 he2 zuo4. ren2 ren2 dou1 pan4 wang4, zhe4 hong1 dong4 quan2 qiu2 de5 jing4 ji4 huo2 dong4, neng2 fa1 hui1 ao4 yun4 de5 jing1 shen2, gei3 wo3 men5 dai4 lai2 yi2 ge5 yong3 yuan3 chong1 man3 he2 ping2 yu3 you3 ai4 qi4 fen1 de5 shi4 jie4.",
        "Hoạt động thể thao mang tính thế giới tượng trưng cho việc toàn nhân loại chung sống hài hòa, đoàn kết và hợp tác. Mọi người đều mong hoạt động thi đấu gây tiếng vang toàn cầu này phát huy tinh thần Olympic, đem lại một thế giới mãi tràn đầy bầu không khí hòa bình và hữu ái.",
        [mark("vocab", "和諧"), mark("vocab", "團結"), mark("vocab", "盼望"), mark("vocab", "競技"), mark("vocab", "友愛")]
      ),
    ],
    extras: [
      {
        type: "worksheet",
        tone: "reading",
        title: "問題討論",
        description: "依課文內容回答，再用自己的經驗補充。",
        items: [
          worksheetItem("第 1 題", "奧運會旗上的五環代表什麼意思？", "五環代表世界五大洲，也表達不分種族、宗教、國籍與語言，同場競技及互相交流的理想。", "wu3 huan2 dai4 biao3 shi4 jie4 wu3 da4 zhou1, ye3 biao3 da2 bu4 fen1 zhong3 zu2, zong1 jiao4, guo2 ji2 yu3 yu3 yan2, tong2 chang3 jing4 ji4 ji2 hu4 xiang1 jiao1 liu2 de5 li3 xiang3.", "Năm vòng tròn đại diện cho năm châu và lý tưởng cùng thi đấu, giao lưu không phân biệt chủng tộc, tôn giáo, quốc tịch hay ngôn ngữ."),
          worksheetItem("第 2 題", "古代奧運會的舉行目的是什麼？", "古代奧運會希望以和平與友愛的精神消除各城之間的仇恨。", "gu3 dai4 ao4 yun4 hui4 xi1 wang4 yi3 he2 ping2 yu3 you3 ai4 de5 jing1 shen2 xiao1 chu2 ge4 cheng2 zhi1 jian1 de5 chou2 hen4.", "Thế vận hội cổ đại nhằm dùng tinh thần hòa bình và hữu ái để xóa bỏ thù hận giữa các thành bang."),
          worksheetItem("第 3 題", "你看過奧運會的開幕式或比賽嗎？請描述你在現場或電視上看過的奧運會內容。", "我在電視上看過開幕式；各國選手進場時，會場充滿團結與友愛的氣氛。", "wo3 zai4 dian4 shi4 shang4 kan4 guo4 kai1 mu4 shi4; ge4 guo2 xuan3 shou3 jin4 chang3 shi2, hui4 chang3 chong1 man3 tuan2 jie2 yu3 you3 ai4 de5 qi4 fen1.", "Tôi từng xem lễ khai mạc trên truyền hình; khi tuyển thủ các nước tiến vào sân, bầu không khí đầy đoàn kết và hữu ái."),
          worksheetItem("第 4 題", "你對奧運會的哪個比賽特別有興趣？它的特色是什麼？", "我對游泳特別有興趣，因為選手不只要有速度，也要有體力、節奏與穩定的技術。", "wo3 dui4 you2 yong3 te4 bie2 you3 xing4 qu4, yin1 wei4 xuan3 shou3 bu4 zhi3 yao4 you3 su4 du4, ye3 yao4 you3 ti3 li4, jie2 zou4 yu3 wen3 ding4 de5 ji4 shu4.", "Tôi đặc biệt hứng thú với bơi lội vì tuyển thủ cần tốc độ, thể lực, nhịp độ và kỹ thuật ổn định."),
          worksheetItem("第 5 題", "奧運會的精神是「志在參加，不在得獎」，這種說法有道理嗎？如果每一位選手都有這樣的態度，還有比賽的意義嗎？", "這種說法有道理。選手仍然會全力爭取勝利，但參加、超越自己與公平競爭，也都是比賽的重要意義。", "zhe4 zhong3 shuo1 fa3 you3 dao4 li3. xuan3 shou3 reng2 ran2 hui4 quan2 li4 zheng1 qu3 sheng4 li4, dan4 can1 jia1, chao1 yue4 zi4 ji3 yu3 gong1 ping2 jing4 zheng1, ye3 dou1 shi4 bi3 sai4 de5 zhong4 yao4 yi4 yi4.", "Cách nói này hợp lý. Tuyển thủ vẫn hết sức tranh thắng, nhưng tham gia, vượt qua bản thân và cạnh tranh công bằng cũng là ý nghĩa quan trọng của thi đấu."),
          worksheetItem("第 6 題", "很多國家都積極地想舉辦奧運會，他們認為奧運會可以促進當地的經濟發展，你同意這樣的想法嗎？為什麼？", "我部分同意。大型運動會可能帶來旅客與工作機會，但主辦國也要評估經費、場館利用與環境影響。", "wo3 bu4 fen4 tong2 yi4. da4 xing2 yun4 dong4 hui4 ke3 neng2 dai4 lai2 lv3 ke4 yu3 gong1 zuo4 ji1 hui4, dan4 zhu3 ban4 guo2 ye3 yao4 ping2 gu1 jing1 fei4, chang3 guan3 li4 yong4 yu3 huan2 jing4 ying3 xiang3.", "Tôi đồng ý một phần. Đại hội lớn có thể đem lại du khách và việc làm, nhưng nước chủ nhà cũng phải đánh giá chi phí, việc sử dụng cơ sở và ảnh hưởng môi trường.")
        ],
      },
      {
        type: "worksheet",
        tone: "grammar",
        title: "課室活動：誰有運動精神？",
        description: "依課本的三個方向，組織一段完整介紹。",
        items: [
          worksheetItem("A. 選手資料", "請介紹一位你最欣賞的運動選手，包括他／她的年紀、國籍與運動專業。", "我會先交代選手的年紀、國籍與專長，再說明我從哪一場比賽開始關注他／她。", "wo3 hui4 xian1 jiao1 dai4 xuan3 shou3 de5 nian2 ji4, guo2 ji2 yu3 zhuan1 chang2, zai4 shuo1 ming2 wo3 cong2 na3 yi4 chang3 bi3 sai4 kai1 shi3 guan1 zhu4 ta1.", "Tôi sẽ giới thiệu tuổi, quốc tịch và sở trường của tuyển thủ, rồi nói từ trận đấu nào tôi bắt đầu quan tâm đến họ."),
          worksheetItem("B. 比賽經驗", "請談談他／她參加比賽的歷史、獎牌和奧運經驗，以及當時的表現。", "介紹時要按時間說明參賽經過、重要成績與臨場表現，並清楚區分事實和自己的評價。", "jie4 shao4 shi2 yao4 an4 shi2 jian1 shuo1 ming2 can1 sai4 jing1 guo4, zhong4 yao4 cheng2 ji1 yu3 lin2 chang3 biao3 xian4, bing4 qing1 chu3 qu1 fen1 shi4 shi2 he2 zi4 ji3 de5 ping2 jia4.", "Khi giới thiệu, cần trình bày theo thời gian quá trình thi đấu, thành tích và biểu hiện tại trận, đồng thời phân biệt rõ sự thật với nhận xét cá nhân."),
          worksheetItem("C. 運動精神", "請說明他／她經過什麼努力才有現在的成績，以及你欣賞他／她哪種運動精神。", "我會說明選手長期訓練、面對失敗仍不放棄，並指出我最欣賞他／她尊重對手和超越自己的精神。", "wo3 hui4 shuo1 ming2 xuan3 shou3 chang2 qi1 xun4 lian4, mian4 dui4 shi1 bai4 reng2 bu2 fang4 qi4, bing4 zhi3 chu1 wo3 zui4 xin1 shang3 ta1 zun1 zhong4 dui4 shou3 he2 chao1 yue4 zi4 ji3 de5 jing1 shen2.", "Tôi sẽ nói về việc tuyển thủ rèn luyện lâu dài, không bỏ cuộc trước thất bại và nêu tinh thần tôn trọng đối thủ, vượt qua bản thân mà tôi ngưỡng mộ nhất.")
        ],
      },
      {
        type: "worksheet",
        tone: "reading",
        title: "閱讀與討論：運動家的風度",
        description: "閱讀短文後思考公平競爭與運動家風度。",
        items: [
          worksheetItem("第 1 題", "什麼是「君子之爭」？", "「君子之爭」是公開、公平、遵守規則的競爭，不用陰險或傷害別人的方法取勝。", "jun1 zi3 zhi1 zheng1 shi4 gong1 kai1, gong1 ping2, zun1 shou3 gui1 ze2 de5 jing4 zheng1, bu2 yong4 yin1 xian3 huo4 shang1 hai4 bie2 ren2 de5 fang1 fa3 qu3 sheng4.", "“Cuộc tranh tài của người quân tử” là cạnh tranh công khai, công bằng, tuân thủ quy tắc và không dùng thủ đoạn làm hại người khác."),
          worksheetItem("第 2 題", "要怎麼當個有風度的運動家？", "有風度的運動家會全力比賽、接受輸贏、尊重對手；遇到失敗時也不逃避或放棄。", "you3 feng1 du4 de5 yun4 dong4 jia1 hui4 quan2 li4 bi3 sai4, jie1 shou4 shu1 ying2, zun1 zhong4 dui4 shou3; yu4 dao4 shi1 bai4 shi2 ye3 bu4 tao2 bi4 huo4 fang4 qi4.", "Một vận động viên có phong độ sẽ thi đấu hết mình, chấp nhận thắng thua, tôn trọng đối thủ và không trốn tránh hay bỏ cuộc khi thất bại."),
          worksheetItem("第 3 題", "賽跑時，如果有一位選手在你面前跌倒了，只要超過他，你就是第一名，你會怎麼做？為什麼？", "我會先確認他是否受傷並呼叫協助，因為安全與運動家風度比一次勝利更重要。", "wo3 hui4 xian1 que4 ren4 ta1 shi4 fou3 shou4 shang1 bing4 hu1 jiao4 xie2 zhu4, yin1 wei4 an1 quan2 yu3 yun4 dong4 jia1 feng1 du4 bi3 yi2 ci4 sheng4 li4 geng4 zhong4 yao4.", "Tôi sẽ kiểm tra xem người đó có bị thương và gọi hỗ trợ, vì an toàn và tinh thần thể thao quan trọng hơn một lần chiến thắng.")
        ],
      },
    ],
  },
];

const grammar = [
  {
    id: "lesson5-grammar-001",
    lesson: 5,
    pattern: "無不……",
    patternPinyin: "wu2 bu4...",
    explanationZh: "「無不」多用於正式語體，表示所有的人、事或情況都具有後面所說的反應或特點。",
    explanationPinyin: "wu2 bu4 duo1 yong4 yu2 zheng4 shi4 yu3 ti3, biao3 shi4 suo3 you3 de5 ren2, shi4 huo4 qing2 kuang4 dou1 ju4 you3 hou4 mian4 suo3 shuo1 de5 fan3 ying4 huo4 te4 dian3.",
    explanationVi: "「無不」 thường dùng trong văn phong trang trọng, nghĩa là tất cả mọi người, sự vật hoặc tình huống đều có phản ứng hay đặc điểm được nói phía sau.",
    example: "比賽期間，各國選手無不摩拳擦掌。",
    examplePinyin: "bi3 sai4 qi1 jian1, ge4 guo2 xuan3 shou3 wu2 bu4 mo2 quan2 ca1 zhang3.",
    exampleVi: "Trong thời gian thi đấu, tuyển thủ các nước ai nấy đều háo hức sẵn sàng.",
    practice: [
      { prompt: "請用「無不」改寫：所有觀眾都為選手的表現感動。", answer: "觀眾無不為選手的表現感動。", requiredTerms: ["無不"] },
      { prompt: "請用「無不」完成句子：聽到代表隊獲勝的消息，大家……", answer: "聽到代表隊獲勝的消息，大家無不歡欣鼓舞。", requiredTerms: ["無不"] },
    ],
  },
  {
    id: "lesson5-grammar-002",
    lesson: 5,
    pattern: "V入",
    patternPinyin: "V ru4",
    explanationZh: "單音節動詞加「入」，表示動作使人或事物進入具體空間、團體、組織或抽象文化之中，如加入、引入、融入。",
    explanationPinyin: "dan1 yin1 jie2 dong4 ci2 jia1 ru4, biao3 shi4 dong4 zuo4 shi3 ren2 huo4 shi4 wu4 jin4 ru4 ju4 ti3 kong1 jian1, tuan2 ti3, zu3 zhi1 huo4 chou1 xiang4 wen2 hua4 zhi1 zhong1, ru2 jia1 ru4, yin3 ru4, rong2 ru4.",
    explanationVi: "Động từ đơn âm tiết cộng 「入」 diễn tả đưa người hoặc vật vào không gian, tập thể, tổ chức hay một nền văn hóa, như 加入, 引入, 融入.",
    example: "祭祀典禮中加入了一些競技活動。",
    examplePinyin: "ji4 si4 dian3 li3 zhong1 jia1 ru4 le5 yi4 xie1 jing4 ji4 huo2 dong4.",
    exampleVi: "Trong nghi lễ tế tự đã thêm vào một số hoạt động thi đấu.",
    practice: [
      { prompt: "請用「加入」回答：你為什麼參加學校的游泳隊？", answer: "我想接受專業訓練，所以加入學校的游泳隊。", requiredTerms: ["加入"] },
      { prompt: "請用「融入」完成句子：留學生多參加活動，就能……", answer: "留學生多參加活動，就能更快融入當地生活。", requiredTerms: ["融入"] },
    ],
  },
  {
    id: "lesson5-grammar-003",
    lesson: 5,
    pattern: "……以……（來）……",
    patternPinyin: "yi3... lai2...",
    explanationZh: "正式語體中可用「以＋名詞／方法＋（來）＋動作」，說明採用某種工具、方法或精神達成目的。",
    explanationPinyin: "zheng4 shi4 yu3 ti3 zhong1 ke3 yong4 yi3 jia1 ming2 ci2 huo4 fang1 fa3 jia1 lai2 jia1 dong4 zuo4, shuo1 ming2 cai3 yong4 mou3 zhong3 gong1 ju4, fang1 fa3 huo4 jing1 shen2 da2 cheng2 mu4 di4.",
    explanationVi: "Trong văn phong trang trọng, dùng 「以＋danh từ/phương pháp＋（來）＋hành động」 để nêu công cụ, cách thức hoặc tinh thần dùng nhằm đạt mục đích.",
    example: "這種活動想以和平與友愛的精神來消除仇恨。",
    examplePinyin: "zhe4 zhong3 huo2 dong4 xiang3 yi3 he2 ping2 yu3 you3 ai4 de5 jing1 shen2 lai2 xiao1 chu2 chou2 hen4.",
    exampleVi: "Hoạt động này muốn dùng tinh thần hòa bình và hữu ái để xóa bỏ thù hận.",
    practice: [
      { prompt: "請用本課語法改寫：主辦單位用公平原則處理爭議。", answer: "主辦單位以公平原則來處理爭議。", requiredTerms: ["以", "來"] },
      { prompt: "請用本課語法完成句子：各國選手……增進彼此的了解。", answer: "各國選手以體育交流來增進彼此的了解。", requiredTerms: ["以", "來"] },
    ],
  },
  {
    id: "lesson5-grammar-004",
    lesson: 5,
    pattern: "經過一番……，終於……",
    patternPinyin: "jing1 guo4 yi4 fan1..., zhong1 yu2...",
    explanationZh: "先說明經歷一段時間、努力或波折，再用「終於」指出最後得到的結果。",
    explanationPinyin: "xian1 shuo1 ming2 jing1 li4 yi2 duan4 shi2 jian1, nu3 li4 huo4 bo1 zhe2, zai4 yong4 zhong1 yu2 zhi3 chu1 zui4 hou4 de2 dao4 de5 jie2 guo3.",
    explanationVi: "Trước hết nêu quá trình trải qua thời gian, nỗ lực hoặc khó khăn, sau đó dùng 「終於」 để chỉ kết quả cuối cùng.",
    example: "經過一番努力，到了一八九六年，終於在雅典舉行了第一屆現代奧運會。",
    examplePinyin: "jing1 guo4 yi4 fan1 nu3 li4, dao4 le5 yi1 ba1 jiu3 liu4 nian2, zhong1 yu2 zai4 ya3 dian3 ju3 xing2 le5 di4 yi1 jie4 xian4 dai4 ao4 yun4 hui4.",
    exampleVi: "Sau một phen nỗ lực, đến năm 1896, Thế vận hội hiện đại đầu tiên cuối cùng được tổ chức tại Athens.",
    practice: [
      { prompt: "請用本課語法說明選手打破紀錄。", answer: "經過一番苦練，這位選手終於突破個人紀錄。", requiredTerms: ["經過一番", "終於"] },
      { prompt: "請用本課語法說明團隊完成準備工作。", answer: "經過一番討論與調整，團隊終於完成所有準備工作。", requiredTerms: ["經過一番", "終於"] },
    ],
  },
  {
    id: "lesson5-grammar-005",
    lesson: 5,
    pattern: "使",
    patternPinyin: "shi3",
    explanationZh: "「使」是較正式的使役動詞，結構為「主語＋使＋對象＋結果」，口語常用「讓」或「叫」。",
    explanationPinyin: "shi3 shi4 jiao4 zheng4 shi4 de5 shi3 yi4 dong4 ci2, jie2 gou4 wei2 zhu3 yu3 jia1 shi3 jia1 dui4 xiang4 jia1 jie2 guo3, kou3 yu3 chang2 yong4 rang4 huo4 jiao4.",
    explanationVi: "「使」 là động từ sai khiến mang sắc thái trang trọng, theo cấu trúc “chủ ngữ + 使 + đối tượng + kết quả”; khẩu ngữ thường dùng 讓 hoặc 叫.",
    example: "奧運會的目標是使五大洲的人都能同場競技。",
    examplePinyin: "ao4 yun4 hui4 de5 mu4 biao1 shi4 shi3 wu3 da4 zhou1 de5 ren2 dou1 neng2 tong2 chang3 jing4 ji4.",
    exampleVi: "Mục tiêu Olympic là khiến người dân năm châu đều có thể cùng thi đấu.",
    practice: [
      { prompt: "請用「使」改寫：體育交流讓各國人民更了解彼此。", answer: "體育交流使各國人民更了解彼此。", requiredTerms: ["使"] },
      { prompt: "請用「使」完成句子：長期訓練……", answer: "長期訓練使運動員的體力與意志更加堅強。", requiredTerms: ["使"] },
    ],
  },
];

export const lesson5Content = { cards, texts, grammar };
