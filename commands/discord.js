const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.channel.send({embed:{
                color: 0xffb600,
                title: "ChatBot SupportServer",
                description: "" + message.member.displayName + " \n\[Join Discord](https://discord.gg/9DJNNRZ) \n\[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=437737030567329805&permissions=8&scope=bot) \n\[Website](https://prezi.com/view/GjBAq1mSYLiAxpMtKe5C/)"

            }
        });
}

module.exports.help = {
  name:"discordbot"
}
