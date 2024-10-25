const fs = require("fs");
module.exports.config = {
  name: "Prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Ravi kumar", 
  description: "hihihihi",
  commandCategory: "ravi",
  usages: "prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("prefix")==0 || event.body.indexOf("Prefix")==0 || event.body.indexOf("PREFIX")==0 || event.body.indexOf("Owner")==0) {
    var msg = {
        body: "🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡ 💖🌺💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝐌𝐑. 𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍☜💫                                                                                                                                                                 🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠 𝘬𝘩𝘢𝘯 🖤                                                                                                                                                                                                                                                                                                 😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- 👉https://www.facebook.com/suheb.khanjii                                                                                                                                                                                      😻😻😻😻📑 𝙰𝙶𝙰𝚁 𝙰𝙿𝙺𝙾 𝙰𝙿𝙿𝚁𝙾𝚅𝙰𝙻 𝙽𝙰𝙷𝙸 🙅🏻‍♂️ 𝙼𝙸𝙻 𝚁𝙰𝙷𝙰 𝙷𝙰𝙸 𝚃𝙾𝙷 𝙼𝙴𝚁𝙴 𝙾𝚆𝙽𝙴𝚁 🖤 𝙺𝙾 𝙳𝙸𝚁𝙴𝙲𝚃 𝙰𝙳𝙳 𝙺𝙰𝚁 𝚂𝙰𝙺𝚃𝙴 𝙷𝙾 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 𝙻𝙸𝙽𝙺 𝚂𝙴 😊                                                                                                                                                                                                                                                                   👋𝙵𝙾𝚁 𝙰𝙽𝚈 𝙺𝙸𝙽𝙳 𝙾𝙵 𝙷𝙴𝙻𝙿 𝙲𝙾𝙽𝚃𝙴𝙲𝚃 𝙾𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙽𝚄𝙼𝙱𝙴𝚁 👉 [+91 7983***471] 😇  💖💖✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙",
        attachment: fs.createReadStream(__dirname + `/ravi/IMG_20241025_233612.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💯", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {
