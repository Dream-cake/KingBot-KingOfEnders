const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(message.author.id !== "437737030567329805") return message.channel.send("**Hey, `" + message.member.displayName + "` That Command Is Work In-Progress**") 
        message.channel.send({embed:{
                color: 0x00ff15,
                description: "" + message.author + " Check Your Private Messages For More Info"
            } 
        });

        //message.channel.send({embed:{
            //color: 0xffb600,
            //description: ""
            //}
        //});
        message.author.send({embed:{
            color: 0x0099ff,
                title: "Avertising For Friends",
                description: "**__ZothBot__** \n\**Hey,** There is a new bot out if you wanna give it a try invite it to your discord server [Invite Bot To Your Server](https://discordapp.com/api/oauth2/authorize?client_id=415384977686003712&permissions=8&scope=bot) it is the best bot better then any out there it has Customizable, Punishments Logs, Command Logs and Ofc Logs. The best and better thing is **There is not Website** it's all done on discord `!config` or event `Mention config`. Wanna know how to add blocked works? do `!allowbypass` all these are in `!help`. If you don't wan't to make your server that you are making announcements use `!sendMessage`. That's all the rest you can find out in `!help`. If you need support go to this **Discord Server:** [Support Discord](https://discord.gg/HwYxyF6) \n- KingOfEnders :heart: **HOPE YOU ENOJOY THE BOT AND GIVE IT A VOTE AT:** [Vote For The Bot](https://discordbots.org/bot/415384977686003712) \n\n**__TidalHost__** \n\**Hey,** Need a Minecraft host? Well join this Minecraft Hosting [TidalHost](https://discord.gg/6pKHuqG) and you can aslo visit there Website [TidalHost Website](https://tidal.host/) Hope you enjoy Hosting Your Minecraft Servers \n\n**__RiverRain123 Community__** \n\**Hey,** Join this YouTubers Discord Server it is a amazing place to be and very Welcoming [RiverRain123 Discord](https://discord.io/riverrain) \n\n**Y__ouTube Advertising__** \n\**Hey,** KingOfEnders YouTube Channel [BotOwnersChannel](https://www.youtube.com/channel/UCGhuVKRVJLlLLxU0mQ6XGTA)"
          
            }
        });
}

module.exports.help = {
  name:"invites"
}
