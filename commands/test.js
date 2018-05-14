const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let icon = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        // .setAuthor(message.author.username)
        // .setDescription("This Is " + message.author.username + " User Infomation")
        // .setColor("#5499C7")
        .setThumbnail(icon)
        .addField("Channel Name", message.channel.name)
        .addField("Channel Deletable", message.channel.deletable)
        .addField("Channel Muted", message.channel.muted)
        .addField("Channel Position", message.channel.position)
        .addField("Channel Calculated Position", message.channel.calculatedPosition)
        .addField("Channel Created", message.channel.createdAt)
      
    message.channel.send({embed: embed});
}

module.exports.help = {
  name:"test"
}





// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {

//     let embed = new Discord.RichEmbed()
//         .setColor("#FF0000")
//         .addField("Link", "[YouTube](http://www.youtube.com)");
        
//     message.channel.send({embed: embed});
      
// }

// module.exports.help = {
//   name:"test" 
// }