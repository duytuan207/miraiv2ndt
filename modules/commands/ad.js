 module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "Thông tin admin bot ^^",
  commandCategory: "ad",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/sx83fX1x/z2930463615287-e70f637ab848a28524f3287389bc61bf-Copy.png",
     ];
     var callback = () => api.sendMessage({body:`梁𝔸𝔻𝕄𝕀ℕ 𝔹𝕆𝕋梁
 \nADMIN NAME : Nguyễn Duy Tuấn\nBiệt Danh: Tít \nGiới Thiệu:Nguyễn Duy Tuấn, hết.\nAd Bot NgDuyTuan\nHmm\nTính Cách : Trèm Cẽm\nChiều cao : 1m62\nSinh ngày : 22/10/2007\nLiên hệ:0972260366 \nInstagram: tuantuan898\nTikTok: ndteditor\nSở Thích: Thích mấy bạn gái đang đọc cái bài xàm lờ của tuôi này =)) =))\nCân nặng: 63kg\nUID FACEBOOK : tự tìm đi cu\nName ID : ######### \nLink Facebook : facebook.com/100041161539665\nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đến con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Nguyễn Duy Tuấn ===`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
