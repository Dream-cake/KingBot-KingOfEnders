const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
var kitty = message.guild.members.find("id", "412374698987487242");
	if (message.member !== kitty)return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Can't Set My Status To `Invisile` Only The `BotOwner` Can :warning:**");
	if (kitty) {
	Client.user.setStatus("invisible");
	message.channel.send("**My `BotOwner` Set My Status To `Invisible`**");
	console.log("You Set My Status To Invisible");
	}
}

module.exports.help = {
  name:"setinv"
}