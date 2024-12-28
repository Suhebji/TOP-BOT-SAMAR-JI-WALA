const fs = require("fs");
module.exports.config = {
  name: "kabhir",
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
  if(react.includes("kabir") ||
     react.includes("@Kabir Shaikh") || react.includes("kabir shaikh") || react.includes("kabir ji") ||
react.includes("rudra Rani ka raja ❤️🌹🤍💚❤️❤️🌹❤️🤍🤍🤍🌹❤️🌹🌹") ||
react.includes("KABIR") ||     
react.includes("KABIR SHAKH")) {
    var msg = {
        body: `${name}𝐊𝐈𝐘𝐀 𝐊𝐀𝐀𝐌 𝐇𝐀𝐈 𝐀𝐏𝐊𝐎 𝐑𝐔𝐃𝐑𝐀𝐊𝐒𝐇𝐈 𝐓𝐈𝐖𝐀𝐑𝐈  𝐊𝐈 𝐉𝐀𝐀𝐍 𝐊𝐀𝐁𝐈𝐑 𝐒𝐇𝐀𝐈𝐊𝐇  𝐒𝐄💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/kabir.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
