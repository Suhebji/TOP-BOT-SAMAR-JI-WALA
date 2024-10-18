const fs = require("fs");
module.exports.config = {
  name: "love",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("love") ||
     react.includes("Love") || react.includes("luv") || react.includes("lv") ||
react.includes("Luv") ||
react.includes("Lv") ||     
react.includes("LOVE")) {
    var msg = {
        body: `${name} lOVE YOU SO MUCH MERI JAAN💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Love.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }