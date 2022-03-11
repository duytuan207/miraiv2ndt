/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "lixi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", //Sang mod cho X, Code working của diện
    description: "Đầu xuân năm mới",
    commandCategory: "𝓣𝓪̀𝓲 𝓬𝓱𝓲́𝓷𝓱",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi.png")) request("https://imgur.com/Y03gw5v.png").pipe(fs.createWriteStream(dirMaterial + "baolixi.png"));
}

module.exports.handleReply = async ({ event, api, handleReply, Currencies }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != event.senderID) return api.sendMessage("Lì xì ai người ấy nhận nha", event.threadID, event.messageID)
//random coins khi mở lì xì
var coinscn = Math.floor(Math.random() * 100) + 70; //random lì xì1
var coinsdv = Math.floor(Math.random() * 100) + 60; //random lì xì2
var coinsmd = Math.floor(Math.random() * 100) + 80; //random lì xì3
var coinss = Math.floor(Math.random() * 100) + 50; //random lì xì4
var coinsx = Math.floor(Math.random() * 50) + 50; //đen đủi
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
           
            switch(event.body) {
                case "1": msg = `🧧Chúc mừng bạn đã nhận ${coinscn}$ khi mở phong lì xì này🎐` ;await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); break;            
                case "2": msg = `🧧Chúc mừng bạn đã nhận ${coinsdv}$ khi mở phong lì xì này🎐`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdv)); break;
                case "3": msg = `🧧Chúc mừng bạn đã nhận ${coinsmd}$ khi mở phong lì xì này🎐`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "4": msg = `🧧Chúc mừng bạn đã nhận ${coinss}$ khi mở phong lì xì này🎐`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "5": msg = `🧧Vào ô mất lượt nhưng vẫn được nhận ${coinsx}$\n🎐CHúc bạn năm mới vui vẻ.`; await Currencies.increaseMoney(event.senderID, parseInt(coinsx)); break;
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("🧧Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 6 || choose < 1) return api.sendMessage("🧧Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "🧧Chưa update...") {
                msg = "🧧Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
           
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    days = Math.floor( t/(1000*60*60*24) ), 
    hours = Math.floor( (t/(1000*60*60)) % 24 ),
    minutes = Math.floor( (t/1000/60) % 60 );
    //cooldownTime cho mỗi lần nhận
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 600000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        return api.sendMessage(`🧧Bạn đã nhận lì xì rồi.\n🌸「𝑻𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒄𝒉𝒂̀𝒐 𝒎𝒖̛̀𝒏𝒈 𝒕𝒆̂́𝒕 𝑨̂𝒎 2022」 » ${days} ngày ${hours} tiếng ${minutes} phút`, event.threadID, event.messageID);
    }
    else {   
        var msg = {
            body: "=== Phong bao lì xì ===" +
                "\n\n1. Bao lì xì 1🧧 (mã:461)" +
                "\n2. Bao lì xì 2🧧 (mã:462)" +
                "\n3. Bao lì xì 3🧧 (mã:463)" +
                "\n4. Bao lì xì 4🧧 (mã:464)" +
                "\n5. Bao lì xì 5🧧 (mã:465)" +
                "\n6. Update soon..." +
                "\n\n🧧Hãy reply tin nhắn chọn bao lì xì muốn nhận.",
                attachment: fs.createReadStream(__dirname + `/cache/baolixi.png`)}
                return api.sendMessage(msg,event.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          }) 
        })
    }
  } 