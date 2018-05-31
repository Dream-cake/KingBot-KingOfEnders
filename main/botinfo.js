const Discord = require("discord.js");
const parseime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var years = Math.floor(days/365); hours %= 24;
    var written = false;
    return(years?(written=true,years+" years"):"")+(written?", ":"")
      +(days?(written=true,days+" days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" seconds"):"")+(written?" ":"");
};
// parsetime(758678567856785678)

module.exports.run = async (Client, message, args) => {
    let bicon = Client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
    .addField("Bot Name", Client.user.username)
    .addField("Servers In", `${Client.guilds.size} Servers!`)
    .addField('uptime:', `${parseTime(Client.uptime)}`)
    .addField("Channels Loaded", `${Client.channels.size} Channels`)
    .addField("Users Loaded", `${Client.users.size} Users`)  
    .addField("Created On", Client.user.createdAt);
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}
