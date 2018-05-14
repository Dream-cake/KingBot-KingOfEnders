const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(message.channel.name !== "spam") return message.channel.send("**Hey, `" + message.member.displayName + "` That Command Only Works In The Bot Server!**")
        message.channel.send({embed:{
                color: 0x00ff15,
                description: "" + message.author + " SpammingYourName..."
            }
        });

        message.channel.send({embed:{
            color: 0xffb600,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x0099ff,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0xbe38f7,
                description: "" + message.author + ""
            }
        });

        message.channel.send({embed:{
            color: 0x055a8c,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x4f8c51,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x7c9609,
                description: "" + message.author + ""
            }
        });

        message.channel.send({embed:{
            color: 0xff00c3,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0xce5f5f,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0xdd9654,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x54dd56,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x017269,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x004672,
                description: "" + message.author + ""
            }
        });

        message.channel.send({embed:{
            color: 0xffb600,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x0099ff,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0xbe38f7,
                description: "" + message.author + ""
            }
        });

        message.channel.send({embed:{
            color: 0x055a8c,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x4f8c51,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x7c9609,
                description: "" + message.author + ""
            }
        });

        message.channel.send({embed:{
            color: 0xff00c3,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0xce5f5f,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0xdd9654,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x54dd56,
            description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x017269,
                description: "" + message.author + ""
            }
        });
        message.channel.send({embed:{
            color: 0x004672,
                description: "" + message.author + ""
            }
        });
}

module.exports.help = {
  name:"nameSpam"
}