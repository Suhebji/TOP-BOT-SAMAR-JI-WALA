module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐈𝐒𝐒𝐄 𝐃𝐔𝐁𝐀𝐑𝐀 𝐀𝐃𝐃 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑 𝐏𝐀𝐘𝐀 🥺 ${name} 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈𝐍  :( `, event.threadID)
   } else api.sendMessage(`𝐁𝐇𝐀𝐆 𝐊𝐄 𝐉𝐀𝐀𝐍𝐄 𝐊𝐀 𝐍𝐀𝐇𝐈 , ${name} 𝐁𝐀𝐁𝐘, 𝐃𝐇𝐄𝐊𝐇𝐎 𝐏𝐇𝐈𝐑 𝐒𝐄 𝐀𝐃𝐃 𝐊𝐀𝐑𝐃𝐈𝐘𝐀 𝐀𝐏𝐊𝐎 `, event.threadID);
  })
 }
}
