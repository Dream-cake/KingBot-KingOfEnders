const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.channel.send({embed:{
                color: 0x1000ff,
                description: "**__Helpful Links__** \n\nhttps://www.youtube.com/ \n\https://www.google.ca/ \n\https://minecraft.net/en-us/ \n\https://github.com/ \n\https://glitch.com/ \n\https://www.spigotmc.org/ \n\https://www.spigotmc.org/resources/ \n\https://getbukkit.org/ \n\https://dev.bukkit.org/bukkit-plugins \n\https://htmlcolorcodes.com/"

            }
        });
}

module.exports.help = {
  name:"links"
}