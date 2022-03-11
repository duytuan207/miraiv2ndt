const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Hungcho (remake by nqhuy)",
  description: "goibot",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["chào bạn tôi là bot của Tuấn", "Gọi tui có gì hong", "Shao zạ", "Hi, chào cậu :3", "Shao nè", "Sử dụng /callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "hello...", "What'up bro", "Sao thế công chúa", "Ahihi chào cậu", "Trả 5 chục", "Cậu có cô đơn hong , có thì kệ mie cậu đồ kh có ngiu :>>", "Cho mượn 5 chục đi", "mìn dthw như chủ của bot ạ ahihi", "Gì zạ" ,"Chuyện gì đó", "Đừng spam Pò nha :<<","", "Pòooooooooooooooooo", "get low , get low", "Spam cút đy", "Mệt -,-", "Nói đi , sao?", "chào bạn tôi là bot của Tuấn", "Bạn có biết tôi yêu bạn vai lon", "M ko bt là t là đại ca tịnh thất bồng lai à hoho", "Vợ gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Chúa phù hộ em", "Em đây~~~~", "Yêu anh Tuấn nhất", "Đi giải cứu Diễm Mi nàooo", "Gọi tao lm gì sủa lẹ", "Sao thế công chúa","mô phật", "Tuyển phi công ạ", "Làm bồ em ko ạ? dui lắm", "Cậu cô đơn ko?", "Tuyển ghệ đít bự đi bay lắc", "Được của ló :)))", "Mong thí chủ đừng spam có đc hog hả", "Hăi, bạn gọi tuôi có gì 0?", "Làm chồng em ko ạ?", "Đừng spam em nha :<<", "Bằng lái hủ tiếu kinh nghiệm đầy minh tuyển ghệ đít bự", "Tịnh tâm", "Omg yêu mọi người <3", "Mik đang ế ai hốt yêu lun 😼", "Chồng em đây rồi", "Nứng à kiu hoài", "Mik Hog Tồi Nhoaaa", "ăn cuk hog mà kiu", "hỏ ai kiu bot dọ"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot cùi")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:https://www.facebook.com/100041161539665 để được hỗ trợ", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot oc lon")) {
    return api.sendMessage("𝐊í𝐜𝐡 𝐡𝐨ạ𝐭 𝐭𝐫ì𝐧𝐡 𝐭ự độ𝐧𝐠 𝐨𝐮𝐭 𝐭𝐫𝐨𝐧𝐠 𝟑𝐬......", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "bot lồn")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:Duy Tuấn để được hỗ trợ\nLink fb nè: https://www.facebook.com/100041161539665", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:Duy Tuấn để được hỗ trợ\nLink fb nè:https://www.facebook.com/100041161539665 ", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "sex") || (event.body.toLowerCase() == "Sex")) {
    return api.sendMessage("t thật sai lầm khi làm quen và chơi với 1 người nghiện sẽ, thật là 1 nỗi thất vọng =))", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ôi bạn ơi , sao đấy? ", threadID);
  };

  if ((event.body.toLowerCase() == "úi") || (event.body.toLowerCase() == "ui")) {
    return api.sendMessage("Úi gì zạ", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("sao nèk", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("cục súc zạ, hong đc ừ :<<", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("UwU", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("sao tke", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Bạn zạ cute wa' , bạn xứng đáng có 10 ng iu :3", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("cho mượn 5 chục đi iu liền nè", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Bất hiếu vậy bạn ơi cha mẹ đẻ ra mà nói thế là hỏng r\n🚬🐧 ", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("VĂn minh lên nào bạn eey \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("??", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("Tôi đã làm gì bạn chưa :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("Ng văn minh kh ai nói thế :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("Bạn im đc rồi đấy", threadID);
  };

  if ((event.body.toLowerCase() == "sủa") || (event.body.toLowerCase() == "sua")) {
    return api.sendMessage("Nói ai vậy bạn?", threadID);
  };

  if ((event.body.toLowerCase() == "gáy") || (event.body.toLowerCase() == "gay")) {
    return api.sendMessage("Gáy to lên bạn ơi , nhỏ vậy , bạn bị viêm họng à\n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "Tuan") || (event.body.toLowerCase() == "tuấn")) {
    return api.sendMessage("admin bận ròi, có gì hong zạ ", threadID);
  };

  if ((event.body.toLowerCase() == "ưi") || (event.body.toLowerCase() == "Ưi")) {
    return api.sendMessage("Thấy gái gọi cái ơi ngọt sớt^^ \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Nói lẹ đy nào, tui phải phục vụ các box khác nữa :<<", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Yêu với chả đương, làm bài tập xong chưa đấy \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hì")) {
    return api.sendMessage("chào bạn nè", threadID);
  };

  if ((event.body.toLowerCase() == "ê") || (event.body.toLowerCase() == "Ê")) {
    return api.sendMessage("có gì không cọu ơi 🐸👎", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Hi bạn iu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mng") || (event.body.toLowerCase() == "hi mng")) {
    return api.sendMessage("Hi baby, chúc baby một ngày mới tràn đầy năng lượng 🐹", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn iu, chúc bạn một ngày mới nhiều may mắn ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("Chào bạn , chúc bạn một ngày mới vui vẻ nha ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "sẽ gầy") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi bạn à ><, cái này phải bị phat. :3", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Thôi ông ơi , suy giảm giống nòi ng việt đấy ", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("Sao mày ko cút? Mà bảo tao :) mệt lồn ghê :>", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi gì ", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Đây bạn ơi...", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("Sao bạn êyyyyyyy", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Link bao nhiêu phút á cho e xem với nào 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cúu cái gì, ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("Thế chiến thứ 3 kìa :))", threadID);
  };

  if ((event.body.toLowerCase() == "war không") || (event.body.toLowerCase() == "war khong")) {
    return api.sendMessage("War cái gì ?\n có tao ở đây mà làm loạn hả \n🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  
 if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "Hát đi mng")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };


   if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "Hát đi")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };


   if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "Hát đi bot")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };


   if ((event.body.toLowerCase() == "Mng hát đi") || (event.body.toLowerCase() == "mng hát đi")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };

 
 if ((event.body.toLowerCase() == "M hát đi ") || (event.body.toLowerCase() == "m đi bot")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tui là Nguyễn Duy Tuấn có gì dùng lệnh /ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "chán quá") || (event.body.toLowerCase() == "chan qua")) {
    return api.sendMessage("️k sao mà , có tui đây", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️Trái ớt khoe ai v bạn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Nói chuyện sạch sẽ tý bạn ơi :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "loz")) {
    return api.sendMessage("️bẩn vừa thôi bạn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Bớt xàm giúp tôi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Tự ngậm mồm hay để tôi khóa mõm ?", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Bớt đi bạn ơi 🐡", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "ông tuấn") || (event.body.toLowerCase() == "ong Tuấn")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  }; 

  if ((event.body.toLowerCase() == "cute quá") || (event.body.toLowerCase() == "cute qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha dui thiệc đó :>>", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Haha dui quá ha :>>", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "cloz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :)", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào tui thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "có yêu em không") || (event.body.toLowerCase() == "co yeu em khong")) {
    return api.sendMessage("tui yêu em hơn cả ny em cơ, thế nên iu tui đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "có yêu admin bot không") || (event.body.toLowerCase() == "co yeu admin bot khong")) {
    return api.sendMessage("KHÔNG, bạn nữ nào có nhu cầu thì cho lun đó", threadID);
  };

  if ((event.body.toLowerCase() == "có người yêu chưa") || (event.body.toLowerCase() == "co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "im đi") || (event.body.toLowerCase() == "im di")) {
    return api.sendMessage("Ủa rồi bạn lấy quyên gì bắt ngta im thế 🚬🐧" , threadID);
  };

  if ((event.body.toLowerCase() == "cút đi") || (event.body.toLowerCase() == "cut di")) {
    return api.sendMessage("Mình cút hay kh cũng kh tới lượt bạn lên tiếng 🚬🐧", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cái lon gì") || (event.body.toLowerCase() == "chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục thế còn hỏi :>", threadID);
  };

  if ((event.body.toLowerCase() == "có buồn ko") || (event.body.toLowerCase() == "co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "có yêu t ko") || (event.body.toLowerCase() == "co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "đi ngủ đi") || (event.body.toLowerCase() == "di ngu di")) {
    return api.sendMessage("Tớ ngủ rùi,h cậu mới là người nên cần đi ngủ nè , nhớ giữ sức khỏe đó <3", threadID);
  };

  if ((event.body.toLowerCase() == "ăn cơm chưa") || (event.body.toLowerCase() == "an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "nihao") || (event.body.toLowerCase() == "ni hảo")) {
    return api.sendMessage("Nói tiếng việt đi tr", threadID);
  };

  if ((event.body.toLowerCase() == "Có thương t ko") || (event.body.toLowerCase() == "co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "Có link fb của admin ko") || (event.body.toLowerCase() == "co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3\nLink fb nè: https://www.facebook.com/100041161539665/", threadID);
  };

  if ((event.body.toLowerCase() == "làm thơ đi") ||  (event.body.toLowerCase() == "lam tho di")) {
    return api.sendMessage("Em là cục cứt trôi sông ,\n anh là con chó đứng trông bên bờ \n mây trôi nước chảy hững hờ \n, con cầy cục cứt bao giờ gặp nhau", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lồn") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("Ai dạy bạn ăn nói kiểu đó z", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

   if ((event.body.toLowerCase() == ":<") || (event.body.toLowerCase() == ":>")) {
    return api.sendMessage("OwO 😠", threadID);
  };

  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == ":))))")) {
    return api.sendMessage("Chít Chít🐰", threadID);
  };

 if ((event.body.toLowerCase() == "bot yêu ai") || (event.body.toLowerCase() == "Bot yêu ai")) {
    return api.sendMessage("Bot iu mỗi admin của bot thoi❤️", threadID);
  };


 if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("cười ", threadID);
  };

 if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("🐸🐸🐸 ", threadID);
  };

   
  if ((event.body.toLowerCase() == "info") || (event.body.toLowerCase() == "Info")) {
    return api.sendMessage("prefix + cmd load info", threadID);
  };

   if ((event.body.toLowerCase() == ":((") || (event.body.toLowerCase() == ":(((")) {
    return api.sendMessage("🐰 Chítt❤️", threadID);
  };

  if ((event.body.toLowerCase() == "ũmg") || (event.body.toLowerCase() == "Ũmg")) {
    return api.sendMessage("Ũ kon cặc", threadID);
  };


  if ((event.body.toLowerCase() == "!") || (event.body.toLowerCase() == "_")) {
    return api.sendMessage("Lệnh của bố mày là / nhấn cái lồz gì v ?", threadID);
  };
   
   if ((event.body.toLowerCase() == "sếch") || (event.body.toLowerCase() == "sếch")) {
    return api.sendMessage("Bố mẹ đi làm nuôi con khôn lớn, con trên gr chat cứ sếch sếch =))", threadID);
  };

    if ((event.body.toLowerCase() == "rồi") || (event.body.toLowerCase() == "Rồi")) {
    return api.sendMessage("Biết cl gì mà rồi", threadID);
  };


  if ((event.body.toLowerCase() == "đéo") || (event.body.toLowerCase() == "Đéo")) {
    return api.sendMessage("con đĩ mắc dại này phải trị lại mới được", threadID);
  };

  if ((event.body.toLowerCase() == "Chửi nó") || (event.body.toLowerCase() == "Chửi nó đi bot")) {
    return api.sendMessage("Trời đất dung hoa, vạn vật sinh sôi Con mẹ mày lôi thôi, đầu xanh mỏ đỏ Gặm cỏ thay cơm, đầu tóc bờm xờm Khạc đờm tung tóe, tao địt con mẹ mày  Như lồn trâu lồn chó, lồn bó xi măng Lồn chằng mạng nhện mà lồn bện là khoai Lồn quai lá mít, lồn đít lồn cơm Lồn tơm lồn đậm, lồn đười ươi nó địt Lồn con vịt nó phang, lồn giang mai lồn ỉa chảy Lồn nhảy hiphop, lồn hàng xốp làm hàng hiệu Lồn hàng triệu con súc vật, mà tao địt con đĩ mẹ mày Đứng từ trên cao, mà lao đầu xuống đất Địt lất phất như mưa rơi, địt tơi bởi như bom đạn Địt lãng mạn như Romeo và Juliet Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm Địt đứng tim phổi, địt cặp mắt nai Mà địt chai lỗ đít, địt khít cái lỗ lồn  Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày Như gà mái mổ giun, như chó càn cắn dậu Thằng cậu mày hiếp dâm, tao bật cái cánh cửa Cho con mẹ mày nằm ngửa, bửa nát tử cung Khai thông buồng trứng, hứng full tinh trùng Địt bồi hồi cảm xúc, địt như bánh đúc ra lò Địt như mấy con phò bên hồ Hoàn Kiếm Địt như mấy con điếm bên chợ Đồng Xuân  Địt đằng chân mà lên đằng đầu Địt sập cầu sập cống Địt con mẹ mày sống Địt con mẹ mày chết Cho con mẹ mày AIDS Cho con mẹ mày sida Mà tao địt từ Nga, mà qua tới Pháp  Tao lại địt về Việt Nam mà ra hàng Cỏ  Và một trăm thằng da đỏ, một nghìn thằng da đen Nó lại bem vào cái lỗ lồn con đĩ mẹ mày Địt vô đầu gối Địt thối màng trinh Địt bất thình lình Địt kiểu âu tướng Địt hướng mặt trời Địt chơi địt bời Địt rakiểu mới Địt tới địt lui Địt búi cả đầu Địt đâu cũng chết Địt bết cả lồn Địt kiểu teo kiểu héo Kiểu ngang kiểu dọc Kiểu không cần khoa học Cũng chọc thủng lồn con đĩ mẹ mày Cái thằng đâm cha chém chú Bóp vú chị dâu Cạo đầu em nhỏ Bắn bỏ em trai Kì lồn em gái Đái ỉa ra sông Như công xỉa cánh Như đánh chó hoang Đập đầu chó thiến Chiềng hàng chiềng trại Bắn hại chim non Đập đầu chim cú Bú lồn chim sẻ Bẻ lồn chim ri Kì lồn chim cắt Và đút buồi vào chim trâu Địt cái lồn mẹ mày Đi với phật thì mặc áo cà sa Đi với mà thìmặc áo giấy Mà cái lồn con đĩ mẹ mày không đầy chấy thì cũng đầy ve mà giữa cái hột le", threadID);
  };

  
  if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == "-,-")) {
    return api.sendMessage("️🐰 :33", threadID);
  };
  
  if ((event.body.toLowerCase() == "Flontino") || (event.body.toLowerCase() == "florentino")) {
    return api.sendMessage("Quá ghê gớm....🌚😳 Và đây là Folontilô!😱😱 Folontilô ui... 🥶🥶👿😳một tình huống múa phải nói là cực 👿gắt!! *music🤯 Thẹn thùng nhìn em quay gót đi mãi😞😞💔 Anh đứng chết lặng trong mưa😭😭 Dù rằng bên😊😊 em đã có ai Nhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...So horrible....🌚😳 And this is Folontilo!😱😱 Folontilo ui... 👿😳a dance situation that must be said is extremely 👿hard!! *music🤯 Embarrassed to see you turn your heels away😞😞💔 He stood dumbfounded in the rain😭😭 Even though I have someone by my side But here he is still waiting...太可怕了……🌚😳 这就是 Folontilo！😱😱 Folontilo ui... 👿😳一个非常极端的舞蹈情况！！ *音乐🤯 尴尬地看到你转身离开😞😞💔 他站在雨中傻眼了😭😭 即使有人在我身边 可他还在这儿等着…… Tài kěpàle……🌚😳 zhè jiùshì Folontilo!😱😱 Folontilo ui... 👿😳Yīgè fēicháng jíduān dì wǔdǎo qíngkuàng!!*Yīnyuè 🤯 gāngà de kàn dào nǐ zhuǎnshēn líkāi 😞😞💔 tā zhàn zài yǔzhōng shǎyǎnle 😭😭 jíshǐ yǒurén zài wǒ shēnbiān kě tā hái zài zhè'er děngzhe……Kho siab heev....🌚😳Thiab qhov no yog Folontilo!😱😱 Folontilo ui... 👿😳 dancing heev!! *music🤯 Ntshai tsam koj tig rov qab 😞😞💔 Nws sawv tsees nag hmo 😭😭 Txawm tias kuv muaj ib tug nyob ntawm kuv ib sabTab sis ntawm no nws tseem tos ...Çok korkunç....🌚😳 Ve bu Folontilo!] Folontilo ui... 👿😳çok aşırı bir dans durumu!! *müzik🤯 Topuklarını başka yöne çevirdiğini görmekten utandım😞😞💔 Yağmurda şaşkın bir şekilde durdu😭😭 Yanımda biri olsa da Ama burada hala bekliyor...너무 끔찍하다....🌚😳 그리고 이건 폴론틸로!😱😱 Folontilo ui... 👿😳극단적인 댄스상황!! *음악🤯 발꿈치를 돌리는 모습이 부끄럽다😞😞💔그는 빗속에서 멍하게 서 있었다😭😭내 옆에 누군가가 있어도하지만 여기에서 그는 여전히 기다리고 있습니다 ...neomu kkeumjjighada....🌚😳geuligo igeon pollontillo!😱😱olontilo ui... 👿😳geugdanjeog-in daenseusanghwang!!*eum-ag🤯balkkumchileul dollineun moseub-i bukkeuleobda😞😞💔geuneun bis-sog-eseo meonghage seo iss-eossda😭😭nae yeop-e nugungaga iss-eodohajiman yeogieseo geuneun yeojeonhi gidaligo issseubnida ...とても恐ろしい....🌚そしてこれはフォロンティロです！😱😱Folontilo ui ... 👿😳非常に極端なダンスの状況!!*音楽🤯あなたがかかとをそらすのを見て恥ずかしいです😞😞💔彼は雨の中で唖然としました😭😭そばに誰かいるのにしかし、ここで彼はまだ待っています...Totemo osoroshī. ...🌚😳 Soshite kore wa forontirodesu! 😱😱 Folontiloui... 👿😳 Hijō ni kyokutan'na dansu no jōkyō! ! * Ongaku 🤯 anata ga kakato o sorasu no o mite hazukashīdesu 😞😞💔 kare wa ame no naka de azento shimashita 😭😭 soba ni darek", threadID);
  };



  

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }