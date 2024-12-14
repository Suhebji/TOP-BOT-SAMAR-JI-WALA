const fs = require("fs");
module.exports.config = {
  name: "bhaiya",
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
  if(react.includes("bhaiya") ||
     react.includes("bhaiya ji") || react.includes("Bhaya") || react.includes("bhai") ||
react.includes("BHAI") ||
react.includes("BHAIYA") ||     
react.includes("BRO")) {
    var msg = {
        body: `${name} 𝐏𝐋𝐙 𝐀𝐈𝐒𝐀 𝐍𝐀 𝐊𝐈𝐘𝐀 𝐊𝐀𝐑𝐎 𝐋𝐀𝐃𝐊𝐈𝐘𝐎💐 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁✿`,attachment: fs.createReadStream(__dirname + `/noprefix/bhaiya.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
