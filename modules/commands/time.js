//*Đừng sửa name pls
//*
const chalk = require('chalk');
console.log(chalk.bold.hex("#104E8B").bold("Command Time Load Successfully"))
this.config = {    
  name: "Time",
  version: "2.0.0",
  author: {
    name: "Nguyen Quoc Anh", 
    contacts: "" },
  cooldowns: 5,
  role: 0,
  shortDescription: "",
  longDescription: "",
  category: "Time",
  envGlobal: {
  }
};
module.exports = {
  config: this.config,
  start: async function({ api, message, event}) {
 console.log(chalk.bold.hex("#8968CD").bold("Thanks Your Using Command Time :D"))
    const fs = require("fs-extra");
    const axios = require("axios");
    const time = require('moment-timezone');
    //*zones
    let timezone = {
	"Thành Phố Hồ Chí Minh": "Asia/Ho_Chi_Minh",
	"Tokyo" : "Asia/Tokyo",
	"Los Angeles" : "America/Los_Angeles",
 "Qatar" : "Asia/Qatar",
 "Dubai" : "Asia/Dubai",
 "HongKong" : "Asia/Hong_Kong",
};
    let msg = "";
for (let i = 0; i < Object.keys(timezone).length; i++) {
	getTime = time().tz(Object.values(timezone)[i]);
	year = getTime.year();
	date = getTime.date();
	month = getTime.month();
	day = getTime.day();
	hour  = getTime.hour();
	minute = getTime.minute();
	second = getTime.second();
	day = (day == 0) ? "Chủ Nhật" : `Thứ ${day += 1}`;
	msg += `\nĐịa Điểm: ${Object.keys(timezone)[i]}\n${day} Ngày ${date} Tháng ${month} Năm ${year}\n ${hour}h${minute}m${second}s\n======================`;
}
    let picture = (await axios.get(`https://i.imgur.com/dV01CJS.jpeg`, { responseType: "stream"})).data;
 return message.reply({
   body: msg,
   attachment: (picture)
      })
    }
}
//*script Goat Bot