const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
//     let icon = message.author.displayAvatarURL;
//     let embed = new Discord.RichEmbed()
//     .setDescription("**This Is Your Profile Picture " + message.member.displayName + "**")
//     .setImage(message.author.displayAvatarURL)
//     .setColor("#BF0747");
    let msg = await message.channel.send("**Generating Avatar...**")
    let target = message.mentions.users.first() || message.author

     message.channel.send({files: [
        {
           attachment: target.displayAvatarURL,
             name: "avatar.png"
        }
     ]});

//    message.channel.send({embed: embed});
    msg.delete();
}

module.exports.help = {
  name:"avatar"
}
