const fs = require("fs");
module.exports.config = {
  name: "vimal",
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
  if(react.includes("vimal") ||
     react.includes("VIMAL") || react.includes("GAGAN") || react.includes("kesri") ||
react.includes("GUTKHA") ||
react.includes("GUTKA") ||     
react.includes("Gagan")) {
    var msg = {
        body: `${name} 𝐁𝐎𝐋𝐎 𝐉𝐔𝐖𝐀 𝐊𝐄𝐒𝐑𝐈 💐 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁✿`,attachment: fs.createReadStream(__dirname + `/noprefix/kkk.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤮", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
