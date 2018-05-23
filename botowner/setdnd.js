const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
var kitty = message.guild.members.find("id", "412374698987487242");
	if (message.member !== kitty)return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Can't Set My Status To `Dnd` Only The `BotOwner` Can :warning:**");
	if (kitty) {
	Client.user.setStatus("dnd");
	message.channel.send("**My `BotOwner` Set My Status To `Dnd` That Means This Is The Mode I Go Into `Maintenance/Developing Mode` GoodBye See You Soon**");
	console.log("You Set My Status To Dnd");
	}
}

module.exports.help = {
  name:"setdnd"
}
