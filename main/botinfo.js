const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
    let bicon = Client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
    .addField("Bot Name", Client.user.username)
    .addField("Created On", Client.user.createdAt)
    .addField("Servers In", `${Client.user.username} Is Online On ${Client.guilds.size} Servers!`);
//     .addField("Channels Loaded", `${Client.channels.size} Channels`)
//     .addField("Users Loaded", `${Client.users.size} Users`)  

}

module.exports.help = {
  name:"botinfo"
}
