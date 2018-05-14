module.exports.run = async (client,message,args) => {
  // var OGNICK = message.guild.members.find("id", "412374698987487242");
  // if (message.member !== OGNICK)return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Can't Set My NickName That's Only A `BotOwner` Command :warning:**");
  if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("**:warning: Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To Mute or You Need `View Audit Log/Staff Team Role` :warning:**");


    try {
      if (args.length > 0) {
        await message.guild.me.setNickname(args.join(' '));
  
        message.channel.send({
          embed: {
            description: `${client.user.username}'s nick is now set to **${args.join(' ')}** on this guild.`
          }
        }).catch(e => {
          console.log.error(e);
        });
      }
      else {
        await message.guild.me.setNickname('');
  
        message.channel.send({
          embed: {
            
            description: `${client.user.username}'s nick has been reset on this guild.`
          }
        }).catch(e => {
          console.log.error(e);
        });
      }
    }
    catch (e) {
      console.log.error(e);
    }
  };
  

  
  exports.help = {
    name: 'setName'

  };