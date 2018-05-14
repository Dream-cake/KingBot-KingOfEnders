const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Need To `MENTION USER` Please Try Again :warning:**");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Can't TempMute A Member That Has A `Higher Role/Same` Role As You :warning:**");
  let muterole = message.guild.roles.find(`name`, "CBMuted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "CBMuted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send(":warning: Hey, `" + message.member.displayName + "` You Didn't Pick A Time To Mute The Member :warning:");

  await(tomute.addRole(muterole.id));
  message.channel.send(`**Hey, <@${tomute.id}> Has Been Muted For ${ms(ms(mutetime))} *(Moderator Must Have Pms Enabled Just For The Server or You Wont Know When The Member Is UnMuted)***`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.author.send(`**Hey, <@${tomute.id}> Has Been UnMuted**`);
  }, ms(mutetime));



//end of module
}

module.exports.help = {
  name: "tempmute"
}