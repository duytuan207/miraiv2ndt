module.exports.config = {
  name: "mong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Long LTD",
  description: "Ghệ đích bự ngắm mỏi mắt",
  commandCategory: "Gái xinh",
  usages: "[ngắm ghệ đích bự]",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.no ,
demodule["fs-extra""https://i.ibb.co/7KR7jmJ/Screenshot-2021-11-26-11-35-09-30-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/yd4D8zh/Screenshot-2021-11-26-11-34-15-45-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/C6KBMX9/Screenshot-2021-11-26-11-33-23-55-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/808WmwF/Screenshot-2021-11-26-11-32-41-31-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/6DYyPjz/Screenshot-2021-11-26-11-32-26-46-1c337646f29875672b5a61192b9010f9.jpg,
"https://i.ibb.co/7SP0yxT/Screenshot-2021-11-26-11-32-11-04-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/BCxRkHx/Screenshot-2021-11-26-11-32-00-06-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/VvJmgxw/Screenshot-2021-11-26-11-31-03-14-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/5nMZrSS/Screenshot-2021-11-26-11-30-28-57-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/TMmzFJk/Screenshot-2021-11-26-11-29-09-44-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/ZWbBD4S/Screenshot-2021-11-26-11-28-33-80-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/YPN0Kgf/Screenshot-2021-11-26-11-25-26-28-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/1LTnpsF/Screenshot-2021-11-26-11-25-15-99-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/L1x82vD/Screenshot-2021-11-26-11-24-37-44-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/ys2jtxF/Screenshot-2021-11-26-11-24-15-45-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/42c5CQz/Screenshot-2021-11-26-11-23-39-89-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/9y8ZxYt/Screenshot-2021-11-26-11-23-24-79-1c337646f29875672b5a61192b9010f9.jpg",
"https://i.ibb.co/LkFL8kN/Screenshot-2021-11-26-11-22-18-04-1c337646f29875672b5a61192b9010f9.jpg" ,
"https://i.ibb.co/SXndGN5/Screenshot-2021-11-26-11-21-34-09-1c337646f29875672b5a61192b9010f9.jpg" ,
"https://i.ibb.co/QbczXCT/Screenshot-2021-11-26-11-21-13-86-1c337646f29875672b5a61192b9010f9.jpg" ,
"https://i.ibb.co/JQh9Wzc/Screenshot-2021-11-25-22-38-52-07-f598e1360c96b5a5aa16536c303cff92.jpg" , ",
    "https://i.ibb.co/1LXtYhR/1.png",
    "https://i.ibb.co/Db3LnbW/2.jpg",
    "https://i.ibb.co/Sd30dLy/3.jpg",
     ];
     var callback = () => api.sendMessage({body:`Ghệ đích bự đây <3\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };
