const fs = requirerequire("fs");
module.exports.config = {
  name: "pva",
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
  if(react.includes("poha") ||
     react.includes("Poha") || react.includes("nasta") || react.includes("Nasta") ||
react.includes("breakfast") ||
react.includes("Breakfast") ||     
react.includes("NASTA")) {
    var msg = 
        body: `${name} 𝐋𝐨 𝐁𝐀𝐁𝐘  Ñ𝐀𝐒𝐓𝐀 𝐊𝐀𝐑À𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/pva.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }