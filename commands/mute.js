const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("**Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To Mute or You Need `Manage Messages/Staff Team` Role**");


        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("**Hey, `" + message.member.displayName + "` You Need To `MENTION USER` Please Try Again**");

        if(toMute.id === message.author.id) return message.channel.send("**Hey, `" + message.member.displayName + "` You Can't Mute Yourself**");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("**Hey, `" + message.member.displayName + "` You Can't Mute A Member That Has A `Higher Role/Same` Role As You**");

        let role = message.guild.roles.find(r => r.name === "CBMuted");
        if(!role) {
            try{
               role = await message.guild.createRole({
                 name: "CBMuted",
                 color: "#000000",
                preissions: []
              });

              message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(role, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              });
          } catch(e) {
              console.log(e.stack);
          }
      }
       
          if(toMute.roles.has(role.id)) return message.channel.send("**Hey, `" + message.member.displayName + "` This User Is `ALREADY` Muted**");

          await toMute.addRole(role);
          message.channel.send("**Hey, `" + message.member.displayName + "` I Have `MUTED` Them**");
}

module.exports.help = {
  name:"mute"
}