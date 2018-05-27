// const Discord = require("discord.js");

// exports.run = async (client, message) => {
//     const msg = await message.channel.send("Pinging...");
//     await msg.edit(`🎉 Pong! (Took: ${msg.createdTimestamp - message.createdTimestamp}ms.) 🎉`);
// };
  
// exports.conf = {
//   enabled: true,
//   runIn: ["text"],
//   aliases: ["p"],
//   permLevel: 0,
//   botPerms: [],
//   requiredFuncs: [],
// };
  
// exports.help = {
//   name: "ping",
// };

const Discord = require("discord.js");

exports.run = async (client, message) => {
    const msg = await message.channel.send("Pinging...");
    await msg.edit(`:GlitchedRealms:`);
};
  
exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["p"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};
  
exports.help = {
  name: "ping",
};

// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
//         message.channel.send({embed:{
//                 color: 0x00ff15,
//                 description: "" + message.author + " :ping_pong: Pong"

//             }
//         });
// }

// module.exports.help = {
//   name:"ping"
// }  
