const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(message.author.id !== "412374698987487242") return message.channel.send("**Hey, `" + message.member.displayName + "` That Command Is Only For The BotOwner But Nice Try :wink:**")
        message.author.send({embed:{
                color: 0xCF8D08,
                description: "**__TodoList__** \n\nFinish All The Error Messages \n\Add How Much Servers The Bot In \n\Fix Avatar Command \n\n**__By May 15th__**"
            }
        });

}

module.exports.help = {
  name:"todoList"
}
