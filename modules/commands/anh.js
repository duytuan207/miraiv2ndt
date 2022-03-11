module.exports.config = {
  name: "anh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Adonis",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "Tiện ích",
  usages: "Hình ảnh",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(` 🎭 Danh sách các ảnh hiện có  🎭 \n\n1.ảnh gái\n2.ảnh trai \n3.ảnh mông \n4.ảnh naughty \n5.ảnh nude\n6.ảnh cosplay\n7.ảnh anime\n8.ảnh sexy\n9.ảnh kana\n10.vú < 18 + >\n11.ảnh hentai\n12.ảnh meme\n13.ảnh gái sexy\n14.ảnh rushia\n15.ảnh kanna\n16.ảnh Kurumi\n17.ảnh rem\n18.ảnh mirai\n19.ảnh anime\n20.ảnh chitanda\n 21.ảnh jimmy\n22.ảnh shiba\n23.ảnh umaru\n24.ảnh wibu\n25.ảnh mona\n26.ảnh hutao\n27.ảnh ganyu\n28.ảnh yoimiya\n29.ảnh yae\n30.ảnh yunjin\n31.ảnh baal\n32.ảnh loli\n33.ảnh twitter\n34.ảnh instragram\n35.ảnh jack\n36.ảnh lgbt\n37.ảnh lienquan\n38.ảnh slime\n39.ảnh lienminh\n40.ảnh gay\nDùng !anh  < ảnh bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "vú") {
    axios.get('https://api-kanekidz.herokuapp.com/gaivuto').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
      if (args[0] == "gái") {
    axios.get('https://apikanekiflop.tk/gaivuto').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback) });
  }
    if (args[0] == "trai") {
    axios.get('https://apikanekiflop.tk/trai').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "hentai") {
    axios.get('https://api-kanekidz.herokuapp.com/hentai').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/hentai.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hentai.${ext}`)).on("close", callback) });
  }
  if (args[0] == "naughty") {
    axios.get('https://apitaoa-1.chinhle4447.repl.co/v1/nauthy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/naughty.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/naughty.${ext}`)).on("close", callback) });
  }
  if (args[0] == "kana") {
    axios.get('https://apichitanda-1.khanh-huyenhuy3.repl.co/kana.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/kana.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kana.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kana.${ext}`)).on("close", callback) });
  }
  if (args[0] == "sexy") {
    axios.get('https://api-kanekidz.herokuapp.com/gaisexy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/sexy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sexy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "nude") {
    axios.get('https://api.vinhbeat.ga/nude.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/nude.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nude.${ext}`)).on("close", callback) });
  }
  if (args[0] == "cosplay") {
    axios.get('https://api.vinhbeat.ga/cosplay.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback) });
  }
  if (args[0] == "anime") {
    axios.get('https://uptime.ocvat2810.repl.co/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback) });
  }
  if (args[0] == "mông") {
    axios.get('https://api-kanekidz.herokuapp.com/gaiditbu').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/mông.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mông.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mông.${ext}`)).on("close", callback) });
  }
 if (args[0] == "gái") {
axios.get('https://api.vinhbeat.ga/gai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/gái.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gái.${ext}`)).on("close", callback) });
  }
   if (args[0] == "meme") {
axios.get('https://api.ryder447.repl.co/meme').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback) });
  }
     if (args[0] == "gái sexy") {
axios.get('https://api.ryder447.repl.co/gaisexy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback) });
  }
            if (args[0] == "kanna") {
axios.get('https://apikanna.khoahoang3.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/kanna.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kanna.${ext}`)).on("close", callback) });
  }
             if (args[0] == "rem") {
axios.get('https://api.nekos.dev/api/v3/images/nsfw/img/smallboobs_lewd/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/loli.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cacheloli.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/loli.${ext}`)).on("close", callback) });
  }

             if (args[0] == "violet") {
axios.get('https://apiviolet.khoahoang3.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/violet.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/violet.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/rushia.${ext}`)).on("close", callback) });
  }
               if (args[0] == "rem") {
axios.get('https://apirem.khoahoang3.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                 if (args[0] == "mirai") {
axios.get('https://mirai.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                   if (args[0] == "anime") {
axios.get('https://anime.ocvat2810.repl.co/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                     if (args[0] == "chitanda") {
axios.get('https://apichitanda.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                       if (args[0] == "jimmy") {
axios.get('https://jimmy.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
    if (args[0] == "shiba") {
axios.get('https://shiba.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
      if (args[0] == "umaru") {
axios.get('https://apiumaru.khoahoang3.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
        if (args[0] == "wibu") {
axios.get('https://wibu.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
          if (args[0] == "loli") {
axios.get('https://jrt-api.j-jrt-official.repl.co/loli').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
            if (args[0] == "mona") {
axios.get('https://mona.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
              if (args[0] == "hutao") {
axios.get('https://hutao.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                if (args[0] == "ganyu") {
axios.get('https://ganyu.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                  if (args[0] == "yoimiya") {
axios.get('https://yoimiya.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                    if (args[0] == "yae") {
axios.get('https://Guuji-Yae.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
             if (args[0] == "yunjin") {
axios.get('https://Yunjin.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
              if (args[0] == "baal") {
axios.get('https://Raiden-Shogun.feedheavens.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
            if (args[0] == "loli") {
axios.get('https://jrt-api.j-jrt-official.repl.co/loli').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
           if (args[0] == "twitter") {
axios.get('https://jrt-api.j-jrt-official.repl.co/twitter').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
             if (args[0] == "lgbt") {
axios.get('https://jrt-api.j-jrt-official.repl.co/lgbt').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  
            }
   if (args[0] == "jack") {
axios.get('https://jrt-api.j-jrt-official.repl.co/jack').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
     if (args[0] == "instagram") {
axios.get('https://jrt-api.j-jrt-official.repl.co/instagram').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
       if (args[0] == "lienquan") {
axios.get('https://lienquan.sangnguyn10.repl.co/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
         if (args[0] == "slime") {
axios.get('https://slime.sangnguyn10.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
           if (args[0] == "lienminh") {
axios.get('https://lienminh.sangnguyn10.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
             if (args[0] == "gay") {
axios.get('https://gay.sangnguyn10.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
}