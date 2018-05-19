const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const king = message.content.split(" ").slice(1).join(" ");
    let bicon = bot.user.displayAvatarURL;
  
if (!king){
    let embed = new Discord.RichEmbed()
        .setAuthor("Hello User These Are My Commands")
        .setDescription("**`help [Command] To Show You What It Does`**")
        .setColor("#008080")
        .setThumbnail(bicon)
        // .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Prefix", "**`?`**")
        .addField("Music", "**`play` <-> `stop` <-> `skip` <-> `leave` <-> `` <-> `queue` <-> `np` <-> `volume`**")
        .addField("Contact", "**`Bugs/Spelling Contact Owner KingOfEnders ◢ ◤#0143`**")
        .addField("Announcements", "**`New Looking Help Menu and Also Doesn't Send In Authors Messages (Pm/Dm It Means) \n\[+] setPrefix [+] New Help Menu [+] help [command]`**")
    message.channel.send({embed: embed});
}
if (king === "8ball"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`8ball` <-> `8ball Will I Have School Tomorrow?`**");
    message.channel.send({embed: embed})
}
