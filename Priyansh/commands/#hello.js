const fs = require("fs");
module.exports.config = {
  name: "hello",
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
  if(react.includes("hello") ||
     react.includes("Hlo") || react.includes("HELLO") || react.includes("hello") ||
react.includes("HELO") ||
react.includes("hello") ||     
react.includes("hello")) {
    var msg = {
        body: `${name} 𝐇𝐈𝐈 𝐇𝐄𝐋𝐋𝐎 𝐂𝐇𝐎𝐑 𝐏𝐀𝐍𝐈 𝐋𝐀𝐊𝐄 𝐃𝐄 𝐅𝐀𝐒𝐆𝐀𝐘𝐀 𝐇𝐔𝐍😭✿`,attachment: fs.createReadStream(__dirname + `/noprefix/hello.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }