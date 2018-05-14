const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.channel.send({embed:{
                color: 0x3498DB,
                description: "I'm Good and You?"
            }
        });

        message.channel.send({embed:{
            color: 0x138D75,
            description: "" + message.author +  "I'm Doing Good!"
            }
        });
}

module.exports.help = {
  name:"good"
}