const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.channel.send({embed:{
                color: 0x138D75,
                description: "Hello, " + message.author + " How Are You?",
                timestamp: new Date()

            }
        });
}

module.exports.help = {
  name:"hello"
}