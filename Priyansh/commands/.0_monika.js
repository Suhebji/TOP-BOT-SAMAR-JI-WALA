const fs = require("fs");
module.exports.config = {
  name: "monika",
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
  if(react.includes("monika") ||
     react.includes("MONIKA") || react.includes("JN") || react.includes("jn") ||
react.includes("@Monika Roy ") ||
react.includes("monika roy") ||     
react.includes("MONIKA ROY")) {
    var msg = {
        body: `${name} 𝐐 𝐘𝐀𝐀𝐃 𝐘𝐀𝐀𝐃 𝐊𝐈𝐘𝐀 𝐀𝐏𝐍𝐄 𝐅𝐈𝐙𝐀 𝐉𝐈 𝐉𝐀𝐀𝐍 𝐌𝐎𝐍𝐈𝐊𝐀 𝐑𝐎𝐘 𝐊𝐎 𝐁𝐀𝐓𝐀𝐎 𝐌𝐄𝐑𝐄 𝐊𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/monika.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
