const fs = require("fs");
module.exports.config = {
  name: "kamina",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("kamina") ||
     react.includes("Kamina") || react.includes("kamino") || react.includes("Kamino") ||
react.includes("kamin") ||
react.includes("Kamin")) {
    var msg = {
        body: `𝐓𝐔 𝐃𝐎𝐔𝐁𝐋𝐄 𝐊𝐀𝐌𝐈𝐍À 𝐌 𝐓𝐎 𝐁𝐎𝐓 𝐇𝐔n😝🙃👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }