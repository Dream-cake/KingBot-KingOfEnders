const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let icon = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This Is " + message.author.username + " User Infomation")
        .setColor("#5499C7")
        .setThumbnail(icon)
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .addField("Full Username", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Test", ":GlitchedRealms:")
        .addField("Account Created", message.author.createdAt)
        .addField("Kickable", message.member.kickable)
        .addField("Bannable", message.member.bannable)
        .addField("Hex Color", message.member.displayHexColor);
      
    message.channel.send({embed: embed});
}

module.exports.help = {
  name:"userinfo"
}
