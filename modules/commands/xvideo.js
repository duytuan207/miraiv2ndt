module.exports.config = {
  name: "xvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Same",
  description: "Just For 18+",
  commandCategory: "NSFW",
  usages: "xvideo ['low','high'] link",
  cooldowns: 5
};

async function low(link,api,event) {
    var axios = require('axios'); 
        var out = (msg) => api.sendMessage(msg,event.threadID,event.messageID);
            try {
                var { data } = await axios.get(`http://api.leanhtruong.net/api/xvideos?url=${link}&apikey=LEANHTRUONG=64JgnU5CwzxPFdwZ04bqOLEnZDhZufzsRkfIb2TZWCLv4CF7OP=APIKEY=PLANFREE`);
                    if (data.error > 0) return out("Đã Xảy Ra Lỗi Hoặc Sai Link !");
                        else if (data.error == 0) {
                            var ten = data.title,
                                    anh = data.image,
                                link = data.low,
                            author = data.author;
                        const { createReadStream, unlinkSync, writeFileSync,statSync } = require("fs-extra");
                            var path = __dirname + `/cache/xvideo.mp4`;
                                const { data: stream } = await axios.get(link, { responseType: 'arraybuffer' });
                            writeFileSync(path, Buffer.from(stream, 'utf-8'));
                            const { data: g2 } = await axios.get(anh, { responseType: 'arraybuffer' });
                        writeFileSync('./cache/ximage.png', Buffer.from(g2, 'utf-8'));
                    if (statSync(__dirname + `/cache/xvideo.mp4`).size > 26214400) {
                        api.sendMessage('Vì Video Quá Dài nên Đưa Link nha =))', event.threadID, event.messageID);
                            return api.sendMessage({body: `Tên : ${ten} | Author : ${author} | Link : ${link} | ${anh}`,attachment: createReadStream('./cache/ximage.png')},event.threadID,event.messageID);
                        }
                        else {
                            var xx = [];
                                    xx.push(fs.createReadStream(__dirname + "/cache/xvideo.mp4"));
                                xx.push(fs.createReadStream(__dirname + "/cache/ximage.png"));
                            return api.sendMessage({body: `Tên : ${ten} | Author : ${author} | Link : ${link} | ${anh}`,attachment: xx },event.threadID,event.messageID);
                        }
                    }
                }
        catch (e) {
            console.log(e);
        return out("Đã Lỗi !");
    }
}

async function high(link,api,event) {
    var axios = require('axios'); 
        var out = (msg) => api.sendMessage(msg,event.threadID,event.messageID);
            try {
                var { data } = await axios.get(`http://api.leanhtruong.net/api/xvideos?url=${link}&apikey=LEANHTRUONG=64JgnU5CwzxPFdwZ04bqOLEnZDhZufzsRkfIb2TZWCLv4CF7OP=APIKEY=PLANFREE`);
                    if (data.error > 0) return out("Đã Xảy Ra Lỗi Hoặc Sai Link !");
                        else if (data.error == 0) {
                            var ten = data.title,
                                    anh = data.image,
                                link = data.high,
                            author = data.author;
                        const { createReadStream, unlinkSync, writeFileSync,statSync } = require("fs-extra");
                            var path = __dirname + `/cache/xvideo.mp4`;
                                const { data: stream } = await axios.get(link, { responseType: 'arraybuffer' });
                            writeFileSync(path, Buffer.from(stream, 'utf-8'));
                            const { data: g2 } = await axios.get(anh, { responseType: 'arraybuffer' });
                        writeFileSync('./cache/ximage.png', Buffer.from(g2, 'utf-8'));
                    if (statSync(__dirname + `/cache/xvideo.mp4`).size > 26214400) {
                        api.sendMessage('Vì Video Quá Dài nên Đưa Link nha =))', event.threadID, event.messageID);
                            return api.sendMessage({body: `Tên : ${ten} | Author : ${author} | Link : ${link} | ${anh}`,attachment: createReadStream('./cache/ximage.png')},event.threadID,event.messageID);
                        }
                        else {
                            var xx = [];
                                    xx.push(fs.createReadStream(__dirname + "/cache/xvideo.mp4"));
                                xx.push(fs.createReadStream(__dirname + "/cache/ximage.png"));
                            return api.sendMessage({body: `Tên : ${ten} | Author : ${author} | Link : ${link} | ${anh}`,attachment: xx },event.threadID,event.messageID);
                        }
                    }
                }
        catch (e) {
            console.log(e);
        return out("Đã Lỗi !");
    }
}

module.exports.run = async function ({ api, event, args }) {
try {
    var axios = require('axios'); // vô nghĩa
        var out =  (out) => api.sendMessage(out,event.threadID,event.messageID);
            var choose = args[0];
                if (!choose || choose.length === 0) return out("Vui Lòng Nhập Link 'Sách'");
            switch (args[0]) {
                case "low":
                    case "Low": {
                        if (!args[1] || !args[1].includes("xvideos.com")) return out("Thiếu Link Hoặc Sai Link !");
                            var link = args[1];
                            await low(link,api,event);
                        return out("Đang Xử Lý");
                    } break;
                case "high":
                    case "High": {
                        if (!args[1] || !args[1].includes("xvideos.com")) return out("Thiếu Link Hoặc Sai Link !");
                            var link = args[1];
                            await high(link,api,event);
                        return out("Đang Xử Lý");
                    } break;
                default: return out("Vui Lòng Nhập Theo Kiểu : /xvideo ['low','high'] Link video (low vs high là chất lượng)");
            }
            
        }
    catch (e) {
        console.log(e);
            return out("Đã Xảy Ra Lỗi Gì Đó Thật Kì Lạ 🐧");
    }
}