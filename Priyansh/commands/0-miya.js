const fs = require("fs");
module.exports.config = {
  name: "Miya",
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
  if(react.includes("miya") ||
     react.includes("MIYA") || react.includes("MIYA KHALIFA") || react.includes("Miya khalifa") ||
react.includes("miya") ||
react.includes("xxx") ||     
react.includes("miya khalifa")) {
    var msg = {
        body: `${name} 𝐃𝐇𝐄𝐊𝐇 𝐃𝐇𝐄𝐊𝐇 𝐓𝐔 𝐎𝐑 𝐓𝐄𝐑𝐄 𝐃𝐎𝐒𝐓 🤣🤣🤣🤣🤣  💐 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁✿`,attachment: fs.createReadStream(__dirname + `/noprefix/miya.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
