const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To UnMute or You Need `Manage Messages/Staff Team` Role :warning:**");

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
        if(!toMute) return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Need To `MENTION USER` Please Try Again :warning:**")

          let role = message.guild.roles.find(r => r.name === "CBMuted");

          if(!role || !toMute.roles.has(role.id)) return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` This User Is `NOT` Muted :warning:**");

          await toMute.removeRole(role);
          let embed = new Discord.RichEmbed()
          message.channel.send("**:warning: Hey, `" + message.member.displayName + "` I Have `UNMUTED` Them :warning:**");
}

module.exports.help = {
  name:"unmute"
}