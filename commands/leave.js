const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
        message.member.voiceChannel.leave()
  
}

module.exports.help = {
  name:"leave"
}
