const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "437737030567329805") return message.channel.send("**:warning: Hey, `" + message.author.username + "` That Command Is Work In-Progress :warning:**") 
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**:warning: Hey, `" + message.author.username + "` You Need To `MENTION USER` Please Try Again :warning:**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**:warning: Hey, `" + message.author.username + "` You Do Not Have Enough Perms To Mute or You Need `Manage Messages/Staff Team Role` :warning:**");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("**:warning: Hey, `" + message.author.username + "` You Can't Kick A Member That Has A `Higher Role/Same Role` As You :warning:**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}