const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "437737030567329805") return message.channel.send("**Hey, `" + message.author.username + "` That Command Is Work In-Progress**") 
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**Hey, `" + message.author.username + "` You Need To `MENTION USER` Please Try Again**");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Hey, `" + message.author.username + "` You Do Not Have Enough Perms To Mute or You Need `Manage Messages/Staff Team Role`**");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("**Hey, `" + message.author.username + "` You Can't Kick A Member That Has A `Higher Role/Same Role` As You**");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kicked User")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("**Hey, `" + message.author.username + "` I Can't Find The Logs Channel**");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}