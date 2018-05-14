const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let icon = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setDescription("**This Is Your Server Icon \n\ " + message.member.displayName + "**")
    .setImage(message.guild.iconURL);
    let msg = await message.channel.send("**Generating Icon...**")
    
    if(!message.guild.iconURL) return msg.edit("**Hey, `" + message.member.displayName + "` No Server Icon**");

    // message.channel.send({files: [
    //    {
    //       attachment: message.guild.iconURL,
    //       name: "avatar.png"
    //    }
    // ]});

    message.channel.send({embed: embed});
    msg.delete();
}

module.exports.help = {
  name:"icon"
}