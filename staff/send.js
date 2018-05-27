const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(message.author.id !== "412374698987487242") return message.channel.send("**Hey, `" + message.member.displayName + "` That Command Is Only For The BotOwner *For Now Coming Out Soon For Staff* :wink:**")

const sayMessage = args.join(` **You Have Just Gotten A Message | **`);
      message.delete();
   if(!message.member.hasPermission("READ_MESSAGES")) return;
     let USERM = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     USERM.send(sayMessage);
     message.channel.send ("**Hey, `" + message.member.displayName + "` I Sent The Message To The Person You Mentioned**");
}
// mention = message.mentions.users.first();
// if (mention == null) { return; }	
//   message.delete();
//   mentionMessage = message.content.slice (8);
//   mention.send (mentionMessage);
//   message.channel.send ("**Hey, `" + message.member.displayName + "` I Send The Message To Those People You Mentioned**");
// }

module.exports.help = {
  name: "send"
}
