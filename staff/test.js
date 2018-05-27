const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

mention = message.mentions.users.first();
  message.delete();
  mentionMessage = message.content.slice (8);
  mention.sendMessage (mentionMessage);
  message.channel.send ("Done");
}

module.exports.help = {
  name: "send"
}
