const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {  
var kitty = message.guild.members.find("id", "412374698987487242");
	if (message.member !== kitty)return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Can't Set My Status To `Online` Only The `BotOwner` Can :warning:**");
	if (kitty) {
	Client.user.setStatus("online");
	message.channel.send("**My `BotOwner` Set My Status To `Online`**");
	console.log("You Set My Status To Online");
	}
}

module.exports.help = {
  name:"seton"
}