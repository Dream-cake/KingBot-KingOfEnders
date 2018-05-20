const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let icon = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Your Voice Channel Settings")
        .setColor("#5499C7")
        .setThumbnail(icon)
        .addField("Server Mute", message.member.serverMute)
        .addField("Server Deafen", message.member.serverDeaf)
        .addField("Self Mute", message.member.selfMute)
        .addField("Self Deafen", message.member.selfDeaf)
        .addField("Speaking", message.member.speaking)
      
    message.channel.send({embed: embed});
}

module.exports.help = {
  name:"vcs"
}
