const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#BD1A78")
    .setThumbnail(sicon)
    .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size)
    .addField("Roles", message.guild.roles.size)
    .addField("Channels", message.guild.channels.size)
    .addField("Server Region", message.guild.region)
    .addField("Server Owner", message.guild.owner.displayName);
    inline: true

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
