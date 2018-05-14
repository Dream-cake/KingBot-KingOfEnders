const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
        message.member.voiceChannel.join()
            
}

module.exports.help = {
  name:"join"
}
