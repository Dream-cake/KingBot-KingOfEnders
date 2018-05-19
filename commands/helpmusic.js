const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;

    let embed = new Discord.RichEmbed()
        .setAuthor("Hello User These Are My Commands")
        .setDescription("**`help [Command] To Show You What It Does`**")
        .setColor("#008080")
        .setThumbnail(bicon)
        // .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Prefix", "**`?`**")
        .addField("Music", "**`play` <-> `stop` <-> `skip` <-> `leave` <-> `queue` <-> `np` <-> `volume`**")
        .addField("Contact", "**`Bugs/Spelling Contact Owner KingOfEnders ◢ ◤#0143`**")
  
    message.channel.send({embed: embed});

}

module.exports.help = {
  name:"helpmusic"
}
