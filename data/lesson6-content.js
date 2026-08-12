const mark = (type, term, target = term) => ({ type, term, target });

const line = (zh, pinyin, vi, marks = []) => ({ speaker: "旁白", zh, pinyin, vi, marks });

const cardRows = [
  ["生詞", "繁忙", "fan2 mang2", "事情很多而忙碌", "shi4 qing2 hen3 duo1 er2 mang2 lu4", "bận rộn", "他的工作繁忙，連假日都要加班。", "ta1 de5 gong1 zuo4 fan2 mang2, lian2 jia4 ri4 dou1 yao4 jia1 ban1.", "Công việc của anh ấy bận rộn, ngay cả ngày nghỉ cũng phải làm thêm."],
  ["生詞", "閒暇", "xian2 xia2", "沒有工作或任務的空閒時間", "mei2 you3 gong1 zuo4 huo4 ren4 wu4 de5 kong4 xian2 shi2 jian1", "thời gian rảnh", "他常利用閒暇時間到戶外運動。", "ta1 chang2 li4 yong4 xian2 xia2 shi2 jian1 dao4 hu4 wai4 yun4 dong4.", "Anh ấy thường tận dụng thời gian rảnh để vận động ngoài trời."],
  ["生詞", "舒展", "shu1 zhan3", "伸展並放鬆", "shen1 zhan3 bing4 fang4 song1", "duỗi ra, thư giãn", "睡前做輕鬆的動作，可以舒展身體。", "shui4 qian2 zuo4 qing1 song1 de5 dong4 zuo4, ke3 yi3 shu1 zhan3 shen1 ti3.", "Thực hiện động tác nhẹ trước khi ngủ có thể thư giãn cơ thể."],
  ["生詞", "疲勞", "pi2 lao2", "身心感到累", "shen1 xin1 gan3 dao4 lei4", "mệt mỏi", "長時間工作容易使人疲勞。", "chang2 shi2 jian1 gong1 zuo4 rong2 yi4 shi3 ren2 pi2 lao2.", "Làm việc lâu dễ khiến người ta mệt mỏi."],
  ["生詞", "恢復", "hui1 fu4", "回到原來的狀態", "hui2 dao4 yuan2 lai2 de5 zhuang4 tai4", "hồi phục", "休息以後，他的精神逐漸恢復了。", "xiu1 xi1 yi3 hou4, ta1 de5 jing1 shen2 zhu2 jian4 hui1 fu4 le5.", "Sau khi nghỉ ngơi, tinh thần anh ấy dần hồi phục."],
  ["生詞", "體力", "ti3 li4", "身體活動的力量", "shen1 ti3 huo2 dong4 de5 li4 liang4", "thể lực", "他一直保持運動，所以體力很好。", "ta1 yi4 zhi2 bao3 chi2 yun4 dong4, suo3 yi3 ti3 li4 hen3 hao3.", "Anh ấy luôn vận động nên thể lực rất tốt."],
  ["生詞", "室內", "shi4 nei4", "房屋或建築物裡面", "fang2 wu1 huo4 jian4 zhu4 wu4 li3 mian4", "trong nhà", "下雨時，我們可以安排室內活動。", "xia4 yu3 shi2, wo3 men5 ke3 yi3 an1 pai2 shi4 nei4 huo2 dong4.", "Khi trời mưa, chúng ta có thể sắp xếp hoạt động trong nhà."],
  ["生詞", "多半", "duo1 ban4", "大部分或通常", "da4 bu4 fen4 huo4 tong1 chang2", "phần lớn", "上班族多半整天坐在辦公室裡。", "shang4 ban1 zu2 duo1 ban4 zheng3 tian1 zuo4 zai4 ban4 gong1 shi4 li3.", "Người đi làm phần lớn ngồi trong văn phòng cả ngày."],
  ["生詞", "意識", "yi4 shi2", "察覺或認識到", "cha2 jue2 huo4 ren4 shi2 dao4", "nhận thức", "他終於意識到自己說錯了話。", "ta1 zhong1 yu2 yi4 shi2 dao4 zi4 ji3 shuo1 cuo4 le5 hua4.", "Cuối cùng anh ấy nhận ra mình đã nói sai."],
  ["生詞", "缺少", "que1 shao3", "數量不足或沒有", "shu4 liang4 bu4 zu2 huo4 mei2 you3", "thiếu", "這個地區缺少乾淨的水。", "zhe4 ge5 di4 qu1 que1 shao3 gan1 jing4 de5 shui3.", "Khu vực này thiếu nước sạch."],
  ["生詞", "建設性", "jian4 she4 xing4", "有助於改善或解決問題", "you3 zhu4 yu2 gai3 shan4 huo4 jie3 jue2 wen4 ti2", "mang tính xây dựng", "請大家提出建設性的意見。", "qing3 da4 jia1 ti2 chu1 jian4 she4 xing4 de5 yi4 jian4.", "Mời mọi người đưa ra ý kiến mang tính xây dựng."],
  ["生詞", "逐漸", "zhu2 jian4", "一步一步地變化", "yi2 bu4 yi2 bu4 de5 bian4 hua4", "dần dần", "服務性的休閒活動逐漸流行起來。", "fu2 wu4 xing4 de5 xiu1 xian2 huo2 dong4 zhu2 jian4 liu2 xing2 qi3 lai2.", "Hoạt động giải trí phục vụ cộng đồng dần trở nên phổ biến."],
  ["生詞", "義工", "yi4 gong1", "不收報酬而服務的人", "bu4 shou1 bao4 chou2 er2 fu2 wu4 de5 ren2", "tình nguyện viên", "她每週到醫院當義工。", "ta1 mei3 zhou1 dao4 yi1 yuan4 dang1 yi4 gong1.", "Mỗi tuần cô ấy làm tình nguyện viên tại bệnh viện."],
  ["生詞", "獨居", "du2 ju1", "一個人居住", "yi2 ge5 ren2 ju1 zhu4", "sống một mình", "志工定期關心獨居老人。", "zhi4 gong1 ding4 qi1 guan1 xin1 du2 ju1 lao3 ren2.", "Tình nguyện viên thường xuyên quan tâm người cao tuổi sống một mình."],
  ["生詞", "公益", "gong1 yi4", "社會大眾的共同利益", "she4 hui4 da4 zhong4 de5 gong4 tong2 li4 yi4", "công ích", "社區週末舉辦公益活動。", "she4 qu1 zhou1 mo4 ju3 ban4 gong1 yi4 huo2 dong4.", "Cộng đồng tổ chức hoạt động công ích vào cuối tuần."],
  ["生詞", "從事", "cong2 shi4", "參與或以某工作為職業", "can1 yu4 huo4 yi3 mou3 gong1 zuo4 wei2 zhi2 ye4", "làm, hoạt động trong lĩnh vực", "他長期從事服務工作。", "ta1 chang2 qi1 cong2 shi4 fu2 wu4 gong1 zuo4.", "Anh ấy làm công việc phục vụ trong thời gian dài."],
  ["生詞", "首先", "shou3 xian1", "第一步或最先", "di4 yi1 bu4 huo4 zui4 xian1", "trước hết", "首先要了解活動的規定。", "shou3 xian1 yao4 liao3 jie3 huo2 dong4 de5 gui1 ding4.", "Trước hết phải hiểu quy định của hoạt động."],
  ["生詞", "紓解", "shu1 jie3", "減輕並放鬆", "jian3 qing1 bing4 fang4 song1", "giải tỏa", "休閒活動可以紓解工作壓力。", "xiu1 xian2 huo2 dong4 ke3 yi3 shu1 jie3 gong1 zuo4 ya1 li4.", "Hoạt động giải trí có thể giải tỏa áp lực công việc."],
  ["生詞", "其次", "qi2 ci4", "接在第一項之後", "jie1 zai4 di4 yi1 xiang4 zhi1 hou4", "tiếp theo", "團隊最重要，其次才是個人表現。", "tuan2 dui4 zui4 zhong4 yao4, qi2 ci4 cai2 shi4 ge4 ren2 biao3 xian4.", "Đội nhóm quan trọng nhất, sau đó mới là biểu hiện cá nhân."],
  ["生詞", "透過", "tou4 guo4", "經由某種方法", "jing1 you2 mou3 zhong3 fang1 fa3", "thông qua", "透過志工活動，我認識了新朋友。", "tou4 guo4 zhi4 gong1 huo2 dong4, wo3 ren4 shi2 le5 xin1 peng2 you3.", "Thông qua hoạt động tình nguyện, tôi quen thêm bạn mới."],
  ["生詞", "拓展", "tuo4 zhan3", "擴大並發展", "kuo4 da4 bing4 fa1 zhan3", "mở rộng", "服務活動可以拓展人際關係。", "fu2 wu4 huo2 dong4 ke3 yi3 tuo4 zhan3 ren2 ji4 guan1 xi4.", "Hoạt động phục vụ có thể mở rộng quan hệ xã hội."],
  ["生詞", "人際關係", "ren2 ji4 guan1 xi4", "人與人之間的互動關係", "ren2 yu3 ren2 zhi1 jian1 de5 hu4 dong4 guan1 xi4", "quan hệ giữa người với người", "真心待人有助於建立良好的人際關係。", "zhen1 xin1 dai4 ren2 you3 zhu4 yu2 jian4 li4 liang2 hao3 de5 ren2 ji4 guan1 xi4.", "Đối đãi chân thành giúp xây dựng quan hệ tốt đẹp."],
  ["生詞", "若", "ruo4", "如果，較正式的說法", "ru2 guo3, jiao4 zheng4 shi4 de5 shuo1 fa3", "nếu", "若有問題，請先詢問負責人。", "ruo4 you3 wen4 ti2, qing3 xian1 xun2 wen4 fu4 ze2 ren2.", "Nếu có vấn đề, hãy hỏi người phụ trách trước."],
  ["生詞", "選擇", "xuan3 ze2", "從多個項目中挑選", "cong2 duo1 ge5 xiang4 mu4 zhong1 tiao1 xuan3", "lựa chọn", "我們可以根據興趣選擇適當的活動。", "wo3 men5 ke3 yi3 gen1 ju4 xing4 qu4 xuan3 ze2 shi4 dang4 de5 huo2 dong4.", "Chúng ta có thể chọn hoạt động phù hợp theo sở thích."],
  ["生詞", "此外", "ci3 wai4", "除了前面所說的以外", "chu2 le5 qian2 mian4 suo3 shuo1 de5 yi3 wai4", "ngoài ra", "運動能保持健康；此外，也能放鬆心情。", "yun4 dong4 neng2 bao3 chi2 jian4 kang1; ci3 wai4, ye3 neng2 fang4 song1 xin1 qing2.", "Vận động giúp khỏe mạnh; ngoài ra còn giúp thư giãn."],
  ["生詞", "有效", "you3 xiao4", "能產生預期的效果", "neng2 chan3 sheng1 yu4 qi1 de5 xiao4 guo3", "có hiệu quả", "我們要有效利用閒暇時間。", "wo3 men5 yao4 you3 xiao4 li4 yong4 xian2 xia2 shi2 jian1.", "Chúng ta phải sử dụng thời gian rảnh một cách hiệu quả."],
  ["生詞", "十分", "shi2 fen1", "非常，程度很高", "fei1 chang2, cheng2 du4 hen3 gao1", "rất, vô cùng", "這項公益活動十分有意義。", "zhe4 xiang4 gong1 yi4 huo2 dong4 shi2 fen1 you3 yi4 yi4.", "Hoạt động công ích này rất có ý nghĩa."],
  ["生詞", "意外", "yi4 wai4", "沒有預料到的事故或情況", "mei2 you3 yu4 liao4 dao4 de5 shi4 gu4 huo4 qing2 kuang4", "bất ngờ; tai nạn", "參加戶外活動要注意安全，避免意外。", "can1 jia1 hu4 wai4 huo2 dong4 yao4 zhu4 yi4 an1 quan2, bi4 mian3 yi4 wai4.", "Khi tham gia hoạt động ngoài trời cần chú ý an toàn để tránh tai nạn."],
  ["生詞", "關切", "guan1 qie4", "關心並在意", "guan1 xin1 bing4 zai4 yi4", "quan tâm sâu sắc", "災民感謝社會大眾的關切。", "zai1 min2 gan3 xie4 she4 hui4 da4 zhong4 de5 guan1 qie4.", "Người dân vùng thiên tai cảm ơn sự quan tâm của xã hội."],
  ["生詞", "投入", "tou2 ru4", "把時間或力量放進某件事", "ba3 shi2 jian1 huo4 li4 liang4 fang4 jin4 mou3 jian4 shi4", "dốc vào, tham gia", "許多人投入國際公益活動。", "xu3 duo1 ren2 tou2 ru4 guo2 ji4 gong1 yi4 huo2 dong4.", "Nhiều người tham gia các hoạt động công ích quốc tế."],
  ["生詞", "發揮", "fa1 hui1", "把能力或精神充分表現出來", "ba3 neng2 li4 huo4 jing1 shen2 chong1 fen4 biao3 xian4 chu1 lai2", "phát huy", "每個人都可以發揮自己的專長。", "mei3 ge5 ren2 dou1 ke3 yi3 fa1 hui1 zi4 ji3 de5 zhuan1 chang2.", "Mỗi người đều có thể phát huy sở trường của mình."],
  ["生詞", "愛心", "ai4 xin1", "關愛並願意幫助別人的心", "guan1 ai4 bing4 yuan4 yi4 bang1 zhu4 bie2 ren2 de5 xin1", "lòng nhân ái", "志工發揮愛心照顧小動物。", "zhi4 gong1 fa1 hui1 ai4 xin1 zhao4 gu4 xiao3 dong4 wu4.", "Tình nguyện viên phát huy lòng nhân ái để chăm sóc động vật nhỏ."],
  ["生詞", "成為", "cheng2 wei2", "變成某種身分或狀態", "bian4 cheng2 mou3 zhong3 shen1 fen4 huo4 zhuang4 tai4", "trở thành", "今日世界已成為一個地球村。", "jin1 ri4 shi4 jie4 yi3 cheng2 wei2 yi2 ge5 di4 qiu2 cun1.", "Thế giới ngày nay đã trở thành một ngôi làng toàn cầu."],
  ["生詞", "地球村", "di4 qiu2 cun1", "因交通與傳播發達而緊密相連的世界", "yin1 jiao1 tong1 yu3 chuan2 bo1 fa1 da2 er2 jin3 mi4 xiang1 lian2 de5 shi4 jie4", "ngôi làng toàn cầu", "網路使世界成為地球村。", "wang3 lu4 shi3 shi4 jie4 cheng2 wei2 di4 qiu2 cun1.", "Internet khiến thế giới trở thành một ngôi làng toàn cầu."],
  ["四字詞", "伸出援手", "shen1 chu1 yuan2 shou3", "主動幫助有困難的人", "zhu3 dong4 bang1 zhu4 you3 kun4 nan2 de5 ren2", "giơ tay giúp đỡ", "看見別人受苦，我們應該伸出援手。", "kan4 jian4 bie2 ren2 shou4 ku3, wo3 men5 ying1 gai1 shen1 chu1 yuan2 shou3.", "Khi thấy người khác gặp nạn, chúng ta nên chìa tay giúp đỡ."],
  ["生詞", "志願", "zhi4 yuan4", "自己願意從事的心願", "zi4 ji3 yuan4 yi4 cong2 shi4 de5 xin1 yuan4", "nguyện vọng; tình nguyện", "他利用假日從事志願服務。", "ta1 li4 yong4 jia4 ri4 cong2 shi4 zhi4 yuan4 fu2 wu4.", "Anh ấy dùng ngày nghỉ để làm công việc tình nguyện."],
  ["生詞", "體驗", "ti3 yan4", "親身經歷並感受", "qin1 shen1 jing1 li4 bing4 gan3 shou4", "trải nghiệm", "國際志工能體驗不同的文化。", "guo2 ji4 zhi4 gong1 neng2 ti3 yan4 bu4 tong2 de5 wen2 hua4.", "Tình nguyện viên quốc tế có thể trải nghiệm các nền văn hóa khác nhau."],
  ["生詞", "異國", "yi4 guo2", "外國或不同的國家", "wai4 guo2 huo4 bu4 tong2 de5 guo2 jia1", "nước ngoài", "大都市裡可以吃到異國美食。", "da4 du1 shi4 li3 ke3 yi3 chi1 dao4 yi4 guo2 mei3 shi2.", "Ở đô thị lớn có thể thưởng thức món ăn nước ngoài."],
  ["生詞", "行列", "hang2 lie4", "一群人形成的隊伍或所參加的活動", "yi4 qun2 ren2 xing2 cheng2 de5 dui4 wu3 huo4 suo3 can1 jia1 de5 huo2 dong4", "hàng ngũ", "越來越多人加入志工的行列。", "yue4 lai2 yue4 duo1 ren2 jia1 ru4 zhi4 gong1 de5 hang2 lie4.", "Ngày càng nhiều người gia nhập hàng ngũ tình nguyện viên."],
  ["俗語", "自己快樂，別人受惠", "zi4 ji3 kuai4 le4, bie2 ren2 shou4 hui4", "做事讓自己快樂，也使別人得到好處", "zuo4 shi4 rang4 zi4 ji3 kuai4 le4, ye3 shi3 bie2 ren2 de2 dao4 hao3 chu4", "mình vui, người khác được lợi", "服務活動能達到自己快樂，別人受惠的目標。", "fu2 wu4 huo2 dong4 neng2 da2 dao4 zi4 ji3 kuai4 le4, bie2 ren2 shou4 hui4 de5 mu4 biao1.", "Hoạt động phục vụ có thể đạt mục tiêu mình vui, người khác được lợi."],
  ["俗語", "助人為快樂之本", "zhu4 ren2 wei2 kuai4 le4 zhi1 ben3", "幫助別人是獲得快樂的重要來源", "bang1 zhu4 bie2 ren2 shi4 huo4 de2 kuai4 le4 de5 zhong4 yao4 lai2 yuan2", "giúp người là nguồn vui", "幫助別人能使心情變好，正是助人為快樂之本。", "bang1 zhu4 bie2 ren2 neng2 shi3 xin1 qing2 bian4 hao3, zheng4 shi4 zhu4 ren2 wei2 kuai4 le4 zhi1 ben3.", "Giúp người có thể làm tâm trạng tốt hơn; đúng là giúp người là nguồn vui."],
  ["專有名詞", "動物之家", "dong4 wu4 zhi1 jia1", "收容並照顧無家可歸動物的機構", "shou1 rong2 bing4 zhao4 gu4 wu2 jia1 ke3 gui1 dong4 wu4 de5 ji1 gou4", "nhà cứu trợ động vật", "她到動物之家照顧無家可歸的小動物。", "ta1 dao4 dong4 wu4 zhi1 jia1 zhao4 gu4 wu2 jia1 ke3 gui1 de5 xiao3 dong4 wu4.", "Cô ấy đến nhà cứu trợ động vật chăm sóc những con vật nhỏ vô gia cư."],
  ["詞語", "在……之餘，……", "zai4... zhi1 yu2...", "在完成某事後剩下的時間或感受中", "zai4 wan2 cheng2 mou3 shi4 hou4 sheng4 xia4 de5 shi2 jian1 huo4 gan3 shou4 zhong1", "ngoài lúc...; sau khi... còn...", "在工作之餘，他參加公益活動。", "zai4 gong1 zuo4 zhi1 yu2, ta1 can1 jia1 gong1 yi4 huo2 dong4.", "Ngoài giờ làm việc, anh ấy tham gia hoạt động công ích."],
  ["詞語", "藉此", "jie4 ci3", "利用前述方法達成後面的目的", "li4 yong4 qian2 shu4 fang1 fa3 da2 cheng2 hou4 mian4 de5 mu4 di4", "nhờ đó", "她參加志工活動，藉此認識更多朋友。", "ta1 can1 jia1 zhi4 gong1 huo2 dong4, jie4 ci3 ren4 shi2 geng4 duo1 peng2 you3.", "Cô ấy tham gia tình nguyện, nhờ đó quen thêm nhiều bạn."],
  ["詞語", "是否", "shi4 fou3", "是不是，用於正式疑問或疑問內容", "shi4 bu2 shi4, yong4 yu2 zheng4 shi4 yi2 wen4 huo4 yi2 wen4 nei4 rong2", "có hay không; liệu có", "我們應該思考這個計畫是否可行。", "wo3 men5 ying1 gai1 si1 kao3 zhe4 ge5 ji4 hua4 shi4 fou3 ke3 xing2.", "Chúng ta nên suy nghĩ xem kế hoạch này có khả thi hay không."],
  ["詞語", "在……的前提下，……", "zai4... de5 qian2 ti2 xia4...", "先滿足重要條件，再進行後面的事", "xian1 man3 zu2 zhong4 yao4 tiao2 jian4, zai4 jin4 xing2 hou4 mian4 de5 shi4", "với điều kiện là...", "在不影響工作的前提下，他利用假日當義工。", "zai4 bu4 ying3 xiang3 gong1 zuo4 de5 qian2 ti2 xia4, ta1 li4 yong4 jia4 ri4 dang1 yi4 gong1.", "Với điều kiện không ảnh hưởng công việc, anh ấy dùng ngày nghỉ làm tình nguyện."],
  ["詞語", "……不只……，……更……", "bu4 zhi3..., geng4...", "先說一種情況，再用更進一步的情況補充", "xian1 shuo1 yi4 zhong3 qing2 kuang4, zai4 yong4 geng4 jin4 yi2 bu4 de5 qing2 kuang4 bu3 chong1", "không chỉ... mà còn hơn nữa...", "服務活動不只可以發揮愛心，更能增進文化交流。", "fu2 wu4 huo2 dong4 bu4 zhi3 ke3 yi3 fa1 hui1 ai4 xin1, geng4 neng2 zeng1 jin4 wen2 hua4 jiao1 liu2.", "Hoạt động phục vụ không chỉ phát huy lòng nhân ái mà còn tăng cường giao lưu văn hóa."],
];

const cards = cardRows.map(([type, term, pinyin, meaningZh, meaningPinyin, meaningVi, example, examplePinyin, exampleVi], index) => ({
  id: `lesson6-card-${String(index + 1).padStart(3, "0")}`,
  lesson: 6,
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
    id: "lesson6-main",
    lesson: 6,
    title: "第 6 課 服務性的休閒活動",
    titlePinyin: "di4 liu4 ke4: fu2 wu4 xing4 de5 xiu1 xian2 huo2 dong4",
    titleVi: "Bài 6: Hoạt động giải trí phục vụ cộng đồng",
    lines: [
      line(
        "現代人的生活普遍緊張繁忙，在閒暇之餘，總希望以各種休閒活動來舒展疲勞的身心，藉此恢復精神和體力。有人喜歡室內活動，如看書、上網、唱歌；有人喜歡接近大自然，如慢跑、打球、露營。但是多半在參加各種活動以後，由於身體疲累，反而會覺得無聊、浪費時間。有些人開始意識到，我們是否缺少一些更有建設性和教育性的休閒活動呢？於是，服務性的休閒活動就逐漸流行起來了。",
        "xian4 dai4 ren2 de5 sheng1 huo2 pu3 bian4 jin3 zhang1 fan2 mang2, zai4 xian2 xia2 zhi1 yu2, zong3 xi1 wang4 yi3 ge4 zhong3 xiu1 xian2 huo2 dong4 lai2 shu1 zhan3 pi2 lao2 de5 shen1 xin1, jie4 ci3 hui1 fu4 jing1 shen2 he2 ti3 li4. you3 ren2 xi3 huan1 shi4 nei4 huo2 dong4, ru2 kan4 shu1, shang4 wang3, chang4 ge1; you3 ren2 xi3 huan1 jie1 jin4 da4 zi4 ran2, ru2 man4 pao3, da3 qiu2, lu4 ying2. dan4 shi4 duo1 ban4 zai4 can1 jia1 ge4 zhong3 huo2 dong4 yi3 hou4, you2 yu2 shen1 ti3 pi2 lei4, fan3 er2 hui4 jue2 de5 wu2 liao2, lang4 fei4 shi2 jian1. you3 xie1 ren2 kai1 shi3 yi4 shi2 dao4, wo3 men5 shi4 fou3 que1 shao3 yi4 xie1 geng4 you3 jian4 she4 xing4 he2 jiao4 yu4 xing4 de5 xiu1 xian2 huo2 dong4 ne5? yu2 shi4, fu2 wu4 xing4 de5 xiu1 xian2 huo2 dong4 jiu4 zhu2 jian4 liu2 xing2 qi3 lai2 le5.",
        "Cuộc sống hiện đại thường căng thẳng và bận rộn. Ngoài thời gian rảnh, mọi người luôn mong dùng nhiều hoạt động giải trí để thư giãn thân tâm mệt mỏi, nhờ đó hồi phục tinh thần và thể lực. Có người thích hoạt động trong nhà như đọc sách, lên mạng, ca hát; có người thích gần gũi thiên nhiên như chạy bộ, chơi bóng, cắm trại. Nhưng phần lớn sau khi tham gia, vì cơ thể mệt nên lại thấy chán và lãng phí thời gian. Một số người bắt đầu nhận ra liệu chúng ta có đang thiếu những hoạt động giải trí mang tính xây dựng và giáo dục hơn không. Vì thế, hoạt động giải trí phục vụ cộng đồng dần trở nên phổ biến.",
        [mark("vocab", "繁忙"), mark("grammar", "在閒暇之餘", "在……之餘，……"), mark("vocab", "閒暇"), mark("vocab", "舒展"), mark("vocab", "疲勞"), mark("grammar", "藉此", "藉此"), mark("vocab", "恢復"), mark("vocab", "體力"), mark("vocab", "室內"), mark("vocab", "多半"), mark("vocab", "意識"), mark("grammar", "是否", "是否"), mark("vocab", "缺少"), mark("vocab", "建設性"), mark("vocab", "逐漸")]
      ),
      line(
        "所謂服務性的休閒活動，是指利用工作以外的時間參加的服務性活動，例如到醫院當義工、照顧獨居老人、打掃公共環境、參加公益活動等等。從事服務性的休閒活動，有許多好處。首先，這類活動可以消除緊張，紓解壓力，增進個人健康。其次，透過服務性活動，可以拓展人際關係，認識興趣相同的好朋友。最後，無論是幫助他人，還是保護環境，都會增加自己的信心，使自己的身心靈都得到滿足。",
        "suo3 wei4 fu2 wu4 xing4 de5 xiu1 xian2 huo2 dong4, shi4 zhi3 li4 yong4 gong1 zuo4 yi3 wai4 de5 shi2 jian1 can1 jia1 de5 fu2 wu4 xing4 huo2 dong4, li4 ru2 dao4 yi1 yuan4 dang1 yi4 gong1, zhao4 gu4 du2 ju1 lao3 ren2, da3 sao3 gong1 gong4 huan2 jing4, can1 jia1 gong1 yi4 huo2 dong4 deng3 deng3. cong2 shi4 fu2 wu4 xing4 de5 xiu1 xian2 huo2 dong4, you3 xu3 duo1 hao3 chu4. shou3 xian1, zhe4 lei4 huo2 dong4 ke3 yi3 xiao1 chu2 jin3 zhang1, shu1 jie3 ya1 li4, zeng1 jin4 ge4 ren2 jian4 kang1. qi2 ci4, tou4 guo4 fu2 wu4 xing4 huo2 dong4, ke3 yi3 tuo4 zhan3 ren2 ji4 guan1 xi4, ren4 shi2 xing4 qu4 xiang1 tong2 de5 hao3 peng2 you3. zui4 hou4, wu2 lun4 shi4 bang1 zhu4 ta1 ren2, hai2 shi4 bao3 hu4 huan2 jing4, dou1 hui4 zeng1 jia1 zi4 ji3 de5 xin4 xin1, shi3 zi4 ji3 de5 shen1 xin1 ling2 dou1 de2 dao4 man3 zu2.",
        "Hoạt động giải trí phục vụ cộng đồng là việc dùng thời gian ngoài công việc để tham gia phục vụ, như làm tình nguyện viên ở bệnh viện, chăm sóc người cao tuổi sống một mình, dọn dẹp môi trường công cộng, tham gia hoạt động công ích. Những hoạt động này có nhiều lợi ích. Trước hết, chúng giúp xóa căng thẳng, giải tỏa áp lực và tăng cường sức khỏe. Tiếp theo, thông qua phục vụ, ta có thể mở rộng quan hệ và quen bạn cùng sở thích. Cuối cùng, dù giúp người hay bảo vệ môi trường, ta đều tăng thêm tự tin và cảm thấy thỏa mãn cả thân, tâm lẫn tinh thần.",
        [mark("vocab", "義工"), mark("vocab", "獨居"), mark("vocab", "公益"), mark("vocab", "從事"), mark("vocab", "首先"), mark("vocab", "紓解"), mark("vocab", "其次"), mark("vocab", "透過"), mark("vocab", "拓展"), mark("vocab", "人際關係")]
      ),
      line(
        "若想參加有意義的服務性休閒活動，應該怎麼安排呢？我們可以根據自己的個性和興趣，選擇適當的活動，例如，對動物有興趣又有耐心的人，可以到動物之家幫忙照顧無家可歸的小動物。此外，我們也要考慮自己的時間與能力，有效利用閒暇時間，在不影響平常的工作與家庭生活的前提下，達到「自己快樂，別人受惠」的目標，這就是「助人為快樂之本」的意義。",
        "ruo4 xiang3 can1 jia1 you3 yi4 yi4 de5 fu2 wu4 xing4 xiu1 xian2 huo2 dong4, ying1 gai1 zen3 me5 an1 pai2 ne5? wo3 men5 ke3 yi3 gen1 ju4 zi4 ji3 de5 ge4 xing4 he2 xing4 qu4, xuan3 ze2 shi4 dang4 de5 huo2 dong4, li4 ru2, dui4 dong4 wu4 you3 xing4 qu4 you4 you3 nai4 xin1 de5 ren2, ke3 yi3 dao4 dong4 wu4 zhi1 jia1 bang1 mang2 zhao4 gu4 wu2 jia1 ke3 gui1 de5 xiao3 dong4 wu4. ci3 wai4, wo3 men5 ye3 yao4 kao3 lv4 zi4 ji3 de5 shi2 jian1 yu3 neng2 li4, you3 xiao4 li4 yong4 xian2 xia2 shi2 jian1, zai4 bu4 ying3 xiang3 ping2 chang2 de5 gong1 zuo4 yu3 jia1 ting2 sheng1 huo2 de5 qian2 ti2 xia4, da2 dao4 zi4 ji3 kuai4 le4, bie2 ren2 shou4 hui4 de5 mu4 biao1, zhe4 jiu4 shi4 zhu4 ren2 wei2 kuai4 le4 zhi1 ben3 de5 yi4 yi4.",
        "Nếu muốn tham gia hoạt động phục vụ có ý nghĩa, chúng ta có thể căn cứ vào tính cách và sở thích để chọn hoạt động thích hợp. Người yêu động vật và kiên nhẫn có thể đến nhà cứu trợ động vật chăm sóc những con vật vô gia cư. Ngoài ra, cũng phải cân nhắc thời gian và năng lực, sử dụng thời gian rảnh hiệu quả, với điều kiện không ảnh hưởng công việc và gia đình, để đạt mục tiêu “mình vui, người khác được lợi”; đó chính là ý nghĩa của câu “giúp người là nguồn vui”.",
        [mark("vocab", "若"), mark("vocab", "選擇"), mark("proper", "動物之家"), mark("vocab", "此外"), mark("vocab", "有效"), mark("grammar", "在不影響平常的工作與家庭生活的前提下", "在……的前提下，……"), mark("idiom", "自己快樂，別人受惠"), mark("idiom", "助人為快樂之本")]
      ),
      line(
        "在國際上，由於新聞報導傳播十分快速，有些意外事件引起各國人民的關切，使得許多人投入各類國際性的公益活動。這些活動不只可以發揮人類的愛心，更能充實知識，增進文化交流。既然今日世界已成為一個「地球村」，當我們看到有些國家發生天災人禍，許多人因此流離失所，怎麼能不伸出援手呢？",
        "zai4 guo2 ji4 shang4, you2 yu2 xin1 wen2 bao4 dao3 chuan2 bo1 shi2 fen1 kuai4 su4, you3 xie1 yi4 wai4 shi4 jian4 yin3 qi3 ge4 guo2 ren2 min2 de5 guan1 qie4, shi3 de5 xu3 duo1 ren2 tou2 ru4 ge4 lei4 guo2 ji4 xing4 de5 gong1 yi4 huo2 dong4. zhe4 xie1 huo2 dong4 bu4 zhi3 ke3 yi3 fa1 hui1 ren2 lei4 de5 ai4 xin1, geng4 neng2 chong1 shi2 zhi1 shi2, zeng1 jin4 wen2 hua4 jiao1 liu2. ji4 ran2 jin1 ri4 shi4 jie4 yi3 cheng2 wei2 yi2 ge5 di4 qiu2 cun1, dang1 wo3 men5 kan4 dao4 you3 xie1 guo2 jia1 fa1 sheng1 tian1 zai1 ren2 huo4, xu3 duo1 ren2 yin1 ci3 liu2 li2 shi1 suo3, zen3 me5 neng2 bu4 shen1 chu1 yuan2 shou3 ne5?",
        "Trên phạm vi quốc tế, do tin tức truyền đi rất nhanh, một số sự cố bất ngờ gây quan tâm ở nhiều nước, khiến nhiều người tham gia hoạt động công ích quốc tế. Những hoạt động này không chỉ phát huy lòng nhân ái mà còn làm phong phú kiến thức và tăng giao lưu văn hóa. Thế giới ngày nay đã trở thành một “ngôi làng toàn cầu”; khi thấy một số nước gặp thiên tai nhân họa khiến nhiều người phải lưu lạc mất chỗ ở, sao chúng ta có thể không chìa tay giúp đỡ?",
        [mark("vocab", "十分"), mark("vocab", "意外"), mark("vocab", "關切"), mark("vocab", "投入"), mark("grammar", "不只", "……不只……，……更……"), mark("vocab", "發揮"), mark("vocab", "愛心"), mark("vocab", "成為"), mark("vocab", "地球村"), mark("idiom", "伸出援手")]
      ),
      line(
        "近幾年來，國際志工以「邊旅遊邊服務」作為宣傳，吸引了越來越多的人當國際志工，飛往需要幫助的國家，從事志願服務的工作，讓人在發揮愛心幫助別人之餘，也能體驗不同的異國文化。加入服務性休閒活動的行列，不但能豐富新的人生體驗，也能為受苦受難的生命帶來希望，這不是比一般的休閒活動更有意義嗎？",
        "jin4 ji3 nian2 lai2, guo2 ji4 zhi4 gong1 yi3 bian1 lv3 you2 bian1 fu2 wu4 zuo4 wei2 xuan1 chuan2, xi1 yin3 le5 yue4 lai2 yue4 duo1 de5 ren2 dang1 guo2 ji4 zhi4 gong1, fei1 wang3 xu1 yao4 bang1 zhu4 de5 guo2 jia1, cong2 shi4 zhi4 yuan4 fu2 wu4 de5 gong1 zuo4, rang4 ren2 zai4 fa1 hui1 ai4 xin1 bang1 zhu4 bie2 ren2 zhi1 yu2, ye3 neng2 ti3 yan4 bu4 tong2 de5 yi4 guo2 wen2 hua4. jia1 ru4 fu2 wu4 xing4 xiu1 xian2 huo2 dong4 de5 hang2 lie4, bu2 dan4 neng2 feng1 fu4 xin1 de5 ren2 sheng1 ti3 yan4, ye3 neng2 wei4 shou4 ku3 shou4 nan4 de5 sheng1 ming4 dai4 lai2 xi1 wang4, zhe4 bu2 shi4 bi3 yi4 ban1 de5 xiu1 xian2 huo2 dong4 geng4 you3 yi4 yi4 ma5?",
        "Những năm gần đây, tình nguyện viên quốc tế quảng bá “vừa du lịch vừa phục vụ”, thu hút ngày càng nhiều người bay đến các quốc gia cần giúp đỡ để làm công việc tình nguyện. Nhờ đó, ngoài lúc phát huy lòng nhân ái giúp người, họ còn trải nghiệm văn hóa nước ngoài. Gia nhập hàng ngũ hoạt động phục vụ không những làm phong phú trải nghiệm sống mà còn đem hy vọng đến những sinh mệnh đang chịu khổ; chẳng phải ý nghĩa hơn hoạt động giải trí thông thường sao?",
        [mark("vocab", "志願"), mark("vocab", "體驗"), mark("vocab", "異國"), mark("vocab", "行列"), mark("vocab", "發揮"), mark("vocab", "愛心")]
      ),
    ],
    extras: [
      {
        type: "worksheet",
        tone: "reading",
        title: "問題討論",
        description: "先依課文回答，再提出自己的看法。",
        items: [
          worksheetItem("第 1 題", "請談談室內和室外休閒活動的種類與特色。你認為哪一種最有趣？為什麼？", "室內活動不受天氣影響，室外活動能接近自然。我最喜歡室外活動，因為運動時可以舒展身心。", "shi4 nei4 huo2 dong4 bu2 shou4 tian1 qi4 ying3 xiang3, shi4 wai4 huo2 dong4 neng2 jie1 jin4 zi4 ran2. wo3 zui4 xi3 huan1 shi4 wai4 huo2 dong4, yin1 wei4 yun4 dong4 shi2 ke3 yi3 shu1 zhan3 shen1 xin1.", "Hoạt động trong nhà ít bị ảnh hưởng bởi thời tiết; hoạt động ngoài trời giúp gần thiên nhiên. Tôi thích hoạt động ngoài trời vì có thể thư giãn thân tâm."),
          worksheetItem("第 2 題", "根據課文的內容，所謂的「服務性的休閒活動」是指什麼？參加這些公益活動有什麼好處？可能有壞處嗎？", "它是利用工作以外的時間參加服務活動。好處是紓解壓力、拓展人際關係並增加信心；若安排不當，也可能影響工作、家庭或造成疲勞。", "ta1 shi4 li4 yong4 gong1 zuo4 yi3 wai4 de5 shi2 jian1 can1 jia1 fu2 wu4 huo2 dong4. hao3 chu4 shi4 shu1 jie3 ya1 li4, tuo4 zhan3 ren2 ji4 guan1 xi4 bing4 zeng1 jia1 xin4 xin1; ruo4 an1 pai2 bu4 dang4, ye3 ke3 neng2 ying3 xiang3 gong1 zuo4, jia1 ting2 huo4 zao4 cheng2 pi2 lao2.", "Đó là dùng thời gian ngoài công việc để tham gia phục vụ. Lợi ích là giảm áp lực, mở rộng quan hệ và tăng tự tin; nếu sắp xếp không hợp lý có thể ảnh hưởng công việc, gia đình hoặc gây mệt mỏi."),
          worksheetItem("第 3 題", "你參加過服務性的休閒活動嗎？參加這樣的活動帶給你什麼感覺？請談談你參加活動的經驗。", "我曾參加社區清潔活動。雖然工作很累，但看見環境變乾淨，也認識新朋友，讓我覺得很有意義。", "wo3 ceng2 can1 jia1 she4 qu1 qing1 jie2 huo2 dong4. sui1 ran2 gong1 zuo4 hen3 lei4, dan4 kan4 jian4 huan2 jing4 bian4 gan1 jing4, ye3 ren4 shi2 xin1 peng2 you3, rang4 wo3 jue2 de5 hen3 you3 yi4 yi4.", "Tôi từng tham gia dọn vệ sinh cộng đồng. Dù mệt, thấy môi trường sạch hơn và quen bạn mới khiến tôi cảm thấy rất ý nghĩa."),
          worksheetItem("第 4 題", "你認為參加服務性的休閒活動對一個人性格、態度或想法有什麼影響？", "它能培養耐心、責任感與同理心，也使人更願意理解不同處境的人。", "ta1 neng2 pei2 yang3 nai4 xin1, ze2 ren4 gan3 yu3 tong2 li3 xin1, ye3 shi3 ren2 geng4 yuan4 yi4 li3 jie3 bu4 tong2 chu3 jing4 de5 ren2.", "Hoạt động ấy bồi dưỡng kiên nhẫn, trách nhiệm và đồng cảm, đồng thời khiến người ta muốn hiểu những người ở hoàn cảnh khác."),
          worksheetItem("第 5 題", "你認為生活中的休閒活動重要嗎？休閒活動與一般人的生活有什麼關係？", "休閒活動很重要，因為適當休息能恢復精神與體力，也能幫助人平衡工作和家庭生活。", "xiu1 xian2 huo2 dong4 hen3 zhong4 yao4, yin1 wei4 shi4 dang4 xiu1 xi1 neng2 hui1 fu4 jing1 shen2 yu3 ti3 li4, ye3 neng2 bang1 zhu4 ren2 ping2 heng2 gong1 zuo4 he2 jia1 ting2 sheng1 huo2.", "Hoạt động giải trí rất quan trọng vì nghỉ ngơi thích hợp giúp hồi phục tinh thần, thể lực và cân bằng công việc với gia đình."),
          worksheetItem("第 6 題", "有人認為捐款給公益團體也是一種「自己快樂，別人受惠」的方式，而且這樣做比參加服務性的休閒活動能更直接、更快速地幫助別人。你同意這樣的想法嗎？請談談你支持或反對的理由。", "我認為捐款和親自服務都有價值。捐款能快速提供資源，親自服務則能了解需求並建立關係，應依情況選擇或同時進行。", "wo3 ren4 wei2 juan1 kuan3 he2 qin1 zi4 fu2 wu4 dou1 you3 jia4 zhi2. juan1 kuan3 neng2 kuai4 su4 ti2 gong1 zi1 yuan2, qin1 zi4 fu2 wu4 ze2 neng2 liao3 jie3 xu1 qiu2 bing4 jian4 li4 guan1 xi4, ying1 yi1 qing2 kuang4 xuan3 ze2 huo4 tong2 shi2 jin4 xing2.", "Tôi cho rằng quyên góp và trực tiếp phục vụ đều có giá trị. Quyên góp cung cấp nguồn lực nhanh, còn trực tiếp phục vụ giúp hiểu nhu cầu và xây dựng quan hệ; nên chọn theo hoàn cảnh hoặc kết hợp cả hai.")
        ],
      },
      {
        type: "worksheet",
        tone: "grammar",
        title: "課室活動：辯論比賽——是否真的有服務精神？",
        description: "分成正方與反方，使用本課生詞和語法說明理由。",
        items: [
          worksheetItem("立場準備", "為了提高申請大學時的成績而參加志工活動，算是有服務精神嗎？", "正方可以主張結果仍使別人受惠；反方可以主張動機若只為自己，服務精神並不完整。", "zheng4 fang1 ke3 yi3 zhu3 zhang1 jie2 guo3 reng2 shi3 bie2 ren2 shou4 hui4; fan3 fang1 ke3 yi3 zhu3 zhang1 dong4 ji1 ruo4 zhi3 wei4 zi4 ji3, fu2 wu4 jing1 shen2 bing4 bu4 wan2 zheng3.", "Phe thuận có thể cho rằng kết quả vẫn giúp người khác; phe phản đối có thể cho rằng nếu động cơ chỉ vì bản thân thì tinh thần phục vụ chưa trọn vẹn."),
          worksheetItem("交互詰問", "請用「是否」和「在……的前提下」向另一方提出一個問題。", "你是否同意，在不影響受助者權益的前提下，個人同時得到申請學校的好處也可以接受？", "ni3 shi4 fou3 tong2 yi4, zai4 bu4 ying3 xiang3 shou4 zhu4 zhe3 quan2 yi4 de5 qian2 ti2 xia4, ge4 ren2 tong2 shi2 de2 dao4 shen1 qing3 xue2 xiao4 de5 hao3 chu4 ye3 ke3 yi3 jie1 shou4?", "Bạn có đồng ý rằng, với điều kiện không ảnh hưởng quyền lợi người được giúp, cá nhân đồng thời nhận lợi ích khi nộp hồ sơ cũng có thể chấp nhận?"),
          worksheetItem("結論", "請總結哪一方的理由比較完整。", "完整的結論應同時考慮動機、實際服務品質與受助者是否真正受惠，而不只判斷參加者得到什麼。", "wan2 zheng3 de5 jie2 lun4 ying1 tong2 shi2 kao3 lv4 dong4 ji1, shi2 ji4 fu2 wu4 pin3 zhi2 yu3 shou4 zhu4 zhe3 shi4 fou3 zhen1 zheng4 shou4 hui4, er2 bu4 zhi3 pan4 duan4 can1 jia1 zhe3 de2 dao4 shen2 me5.", "Kết luận đầy đủ phải đồng thời xét động cơ, chất lượng phục vụ thực tế và người được giúp có thật sự hưởng lợi hay không, không chỉ xét người tham gia nhận được gì.")
        ],
      },
      {
        type: "worksheet",
        tone: "reading",
        title: "閱讀與討論：世外桃源",
        description: "閱讀陶淵明筆下桃花源的故事後回答。",
        items: [
          worksheetItem("第 1 題", "一個地方要有哪些條件，才可稱為世外桃源？", "世外桃源應該環境優美、生活安定、資源足夠，人們彼此和睦，而且遠離戰亂與外界干擾。", "shi4 wai4 tao2 yuan2 ying1 gai1 huan2 jing4 you1 mei3, sheng1 huo2 an1 ding4, zi1 yuan2 zu2 gou4, ren2 men5 bi3 ci3 he2 mu4, er2 qie3 yuan3 li2 zhan4 luan4 yu3 wai4 jie4 gan1 rao3.", "Một chốn đào nguyên nên có môi trường đẹp, cuộc sống yên ổn, tài nguyên đủ, con người hòa thuận và xa chiến tranh cùng sự quấy nhiễu bên ngoài."),
          worksheetItem("第 2 題", "你在生活中或旅遊時，發現過世外桃源嗎？", "我曾在山中的小村落感受到類似的氣氛；那裡安靜、景色自然，居民也很親切。", "wo3 ceng2 zai4 shan1 zhong1 de5 xiao3 cun1 luo4 gan3 shou4 dao4 lei4 si4 de5 qi4 fen1; na4 li3 an1 jing4, jing3 se4 zi4 ran2, ju1 min2 ye3 hen3 qin1 qie4.", "Tôi từng cảm nhận bầu không khí tương tự tại một làng nhỏ trong núi; nơi ấy yên tĩnh, cảnh tự nhiên và cư dân thân thiện."),
          worksheetItem("第 3 題", "如果你是漁夫，你會選擇留在桃花源或回到外面的世界？為什麼？", "我會先回到外面的世界，因為家人可能正在等我；但我會尊重桃花源居民不希望受到打擾的意願。", "wo3 hui4 xian1 hui2 dao4 wai4 mian4 de5 shi4 jie4, yin1 wei4 jia1 ren2 ke3 neng2 zheng4 zai4 deng3 wo3; dan4 wo3 hui4 zun1 zhong4 tao2 hua1 yuan2 ju1 min2 bu4 xi1 wang4 shou4 dao4 da3 rao3 de5 yi4 yuan4.", "Tôi sẽ trở về thế giới bên ngoài trước vì gia đình có thể đang đợi, nhưng sẽ tôn trọng mong muốn không bị quấy rầy của cư dân Đào Hoa Nguyên.")
        ],
      },
    ],
  },
];

const grammar = [
  {
    id: "lesson6-grammar-001",
    lesson: 6,
    pattern: "在……之餘，……",
    patternPinyin: "zai4... zhi1 yu2...",
    explanationZh: "「餘」是剩下的部分；「在 A 之餘，B」表示完成 A 後利用剩餘時間做 B，也可表示在某種感受之外還有另一種反應。",
    explanationPinyin: "yu2 shi4 sheng4 xia4 de5 bu4 fen4; zai4 A zhi1 yu2, B biao3 shi4 wan2 cheng2 A hou4 li4 yong4 sheng4 yu2 shi2 jian1 zuo4 B, ye3 ke3 biao3 shi4 zai4 mou3 zhong3 gan3 shou4 zhi1 wai4 hai2 you3 ling4 yi4 zhong3 fan3 ying4.",
    explanationVi: "「餘」 là phần còn lại. 「在 A 之餘，B」 diễn tả làm B trong thời gian còn lại sau A, hoặc ngoài một cảm xúc còn có phản ứng khác.",
    example: "現代人在閒暇之餘，總希望以休閒活動來舒展身心。",
    examplePinyin: "xian4 dai4 ren2 zai4 xian2 xia2 zhi1 yu2, zong3 xi1 wang4 yi3 xiu1 xian2 huo2 dong4 lai2 shu1 zhan3 shen1 xin1.",
    exampleVi: "Người hiện đại ngoài thời gian rảnh thường muốn dùng hoạt động giải trí để thư giãn thân tâm.",
    practice: [
      { prompt: "請用本課語法說明：他下班後陪家人，也參加志工活動。", answer: "他在陪伴家人之餘，也參加志工活動。", requiredTerms: ["在", "之餘"] },
      { prompt: "請用本課語法完成句子：她獲獎後很高興，也感到責任重大。", answer: "她在感到高興之餘，也覺得自己責任重大。", requiredTerms: ["在", "之餘"] },
    ],
  },
  {
    id: "lesson6-grammar-002",
    lesson: 6,
    pattern: "藉此",
    patternPinyin: "jie4 ci3",
    explanationZh: "「藉此」是正式連接語，承接前面至少一個句子，表示利用前述方法或事件來達成後面的結果。",
    explanationPinyin: "jie4 ci3 shi4 zheng4 shi4 lian2 jie1 yu3, cheng2 jie1 qian2 mian4 zhi4 shao3 yi2 ge5 ju4 zi5, biao3 shi4 li4 yong4 qian2 shu4 fang1 fa3 huo4 shi4 jian4 lai2 da2 cheng2 hou4 mian4 de5 jie2 guo3.",
    explanationVi: "「藉此」 là từ nối trang trọng, tiếp nối ít nhất một câu phía trước và cho biết dùng cách thức hay sự việc ấy để đạt kết quả sau.",
    example: "人們參加休閒活動，藉此恢復精神和體力。",
    examplePinyin: "ren2 men5 can1 jia1 xiu1 xian2 huo2 dong4, jie4 ci3 hui1 fu4 jing1 shen2 he2 ti3 li4.",
    exampleVi: "Mọi người tham gia hoạt động giải trí, nhờ đó hồi phục tinh thần và thể lực.",
    practice: [
      { prompt: "請用「藉此」合併：公司舉辦公益活動。公司希望建立良好形象。", answer: "公司舉辦公益活動，藉此建立良好形象。", requiredTerms: ["藉此"] },
      { prompt: "請用「藉此」說明參加國際志工的好處。", answer: "我參加國際志工，藉此體驗異國文化並拓展人際關係。", requiredTerms: ["藉此"] },
    ],
  },
  {
    id: "lesson6-grammar-003",
    lesson: 6,
    pattern: "是否",
    patternPinyin: "shi4 fou3",
    explanationZh: "「是否」是正式的「是不是」，可直接形成疑問句，也可放在陳述句中引出尚未確定的疑問內容；不能說「是否他」。",
    explanationPinyin: "shi4 fou3 shi4 zheng4 shi4 de5 shi4 bu2 shi4, ke3 zhi2 jie1 xing2 cheng2 yi2 wen4 ju4, ye3 ke3 fang4 zai4 chen2 shu4 ju4 zhong1 yin3 chu1 shang4 wei4 que4 ding4 de5 yi2 wen4 nei4 rong2; bu4 neng2 shuo1 shi4 fou3 ta1.",
    explanationVi: "「是否」 là cách nói trang trọng của 「是不是」. Nó có thể tạo câu hỏi trực tiếp hoặc đưa nội dung nghi vấn chưa xác định vào câu trần thuật; không nói 「是否他」.",
    example: "我們是否缺少一些更有建設性的休閒活動呢？",
    examplePinyin: "wo3 men5 shi4 fou3 que1 shao3 yi4 xie1 geng4 you3 jian4 she4 xing4 de5 xiu1 xian2 huo2 dong4 ne5?",
    exampleVi: "Liệu chúng ta có thiếu những hoạt động giải trí mang tính xây dựng hơn không?",
    practice: [
      { prompt: "請用「是否」改寫：這個活動適合所有人嗎？", answer: "我們應該先了解這個活動是否適合所有人。", requiredTerms: ["是否"] },
      { prompt: "請用「是否」完成句子：報名前，我想確認……", answer: "報名前，我想確認時間是否會影響平常的工作。", requiredTerms: ["是否"] },
    ],
  },
  {
    id: "lesson6-grammar-004",
    lesson: 6,
    pattern: "在……的前提下，……",
    patternPinyin: "zai4... de5 qian2 ti2 xia4...",
    explanationZh: "A 是最先必須滿足的重要條件；在 A 的前提下，才進一步思考或達成 B。這個結構常用來提醒做事前不可忽略的條件。",
    explanationPinyin: "A shi4 zui4 xian1 bi4 xu1 man3 zu2 de5 zhong4 yao4 tiao2 jian4; zai4 A de5 qian2 ti2 xia4, cai2 jin4 yi2 bu4 si1 kao3 huo4 da2 cheng2 B. zhe4 ge5 jie2 gou4 chang2 yong4 lai2 ti2 xing3 zuo4 shi4 qian2 bu4 ke3 hu1 lve4 de5 tiao2 jian4.",
    explanationVi: "A là điều kiện quan trọng phải đáp ứng trước; chỉ với điều kiện A mới tiếp tục suy nghĩ hoặc đạt B. Mẫu này nhắc tới điều kiện không thể bỏ qua trước khi hành động.",
    example: "我們要在不影響工作與家庭生活的前提下，有效利用閒暇時間。",
    examplePinyin: "wo3 men5 yao4 zai4 bu4 ying3 xiang3 gong1 zuo4 yu3 jia1 ting2 sheng1 huo2 de5 qian2 ti2 xia4, you3 xiao4 li4 yong4 xian2 xia2 shi2 jian1.",
    exampleVi: "Chúng ta phải sử dụng thời gian rảnh hiệu quả với điều kiện không ảnh hưởng công việc và gia đình.",
    practice: [
      { prompt: "請用本課語法說明網路購物時最重要的條件。", answer: "在確認網站安全的前提下，我們才可以輸入付款資料。", requiredTerms: ["在", "的前提下"] },
      { prompt: "請用本課語法說明參加激烈比賽前的準備。", answer: "在做好萬全準備的前提下，選手參賽時才不容易受傷。", requiredTerms: ["在", "的前提下"] },
    ],
  },
  {
    id: "lesson6-grammar-005",
    lesson: 6,
    pattern: "……不只……，……更……",
    patternPinyin: "bu4 zhi3..., geng4...",
    explanationZh: "「不只」提出第一層情況，「更」引出程度更高或更進一步的第二層情況。只有一個主語時可說「主語不只 A，更 B」；兩個主語時可分別放在兩個小句中。",
    explanationPinyin: "bu4 zhi3 ti2 chu1 di4 yi1 ceng2 qing2 kuang4, geng4 yin3 chu1 cheng2 du4 geng4 gao1 huo4 geng4 jin4 yi2 bu4 de5 di4 er4 ceng2 qing2 kuang4. zhi3 you3 yi2 ge5 zhu3 yu3 shi2 ke3 shuo1 zhu3 yu3 bu4 zhi3 A, geng4 B; liang3 ge5 zhu3 yu3 shi2 ke3 fen1 bie2 fang4 zai4 liang3 ge5 xiao3 ju4 zhong1.",
    explanationVi: "「不只」 nêu tầng ý thứ nhất, còn 「更」 đưa ra tình huống cao hơn hoặc tiến thêm một bước. Có thể dùng cùng một chủ ngữ hoặc hai chủ ngữ ở hai vế.",
    example: "這些活動不只可以發揮人類的愛心，更能增進文化交流。",
    examplePinyin: "zhe4 xie1 huo2 dong4 bu4 zhi3 ke3 yi3 fa1 hui1 ren2 lei4 de5 ai4 xin1, geng4 neng2 zeng1 jin4 wen2 hua4 jiao1 liu2.",
    exampleVi: "Những hoạt động này không chỉ phát huy lòng nhân ái mà còn tăng cường giao lưu văn hóa.",
    practice: [
      { prompt: "請用本課語法回答：學習新語言有什麼好處？", answer: "學習新語言不只可以跟別人溝通，更能了解不同文化。", requiredTerms: ["不只", "更"] },
      { prompt: "請用本課語法回答：服務活動對個人和社會有什麼影響？", answer: "服務活動不只使個人增加信心，更能讓社會得到實際幫助。", requiredTerms: ["不只", "更"] },
    ],
  },
];

export const lesson6Content = { cards, texts, grammar };
