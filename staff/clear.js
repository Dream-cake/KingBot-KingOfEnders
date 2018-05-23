const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send ("**Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To Clear Chats or You Need `Manage Messages/Staff Team Role`**")
        let author = message.member;
            if (!args[0]) {
                message.delete();
                message.channel.send({embed:{
                        color: 0xff0000,
                        description: "" + message.author + " No Arguments Given, Please Select From `1` - `100`"
                    }
                }).then(msg => {msg.delete(5000)});
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.channel.send({embed:{
                    color: 0xff0000,
                    description: "" + message.author + " Can't Clear Messages The Max Is `100` To Delete"
                }}).then(msg => {msg.delete(5000)});
                return;
            }

            message.delete();
            message.channel.bulkDelete(args[0]);
            message.channel.send({embed:{
                    color: 0x00ff15,
                    description: "" + message.author + " I Have Deleted `" + args[0] + "` Messages"
                }
            }).then(msg => {msg.delete(2500)});
            return;
        
}

module.exports.help = {
  name: "clear"
}



// const Discord = require("discord.js");
// const errors = require("../utils/errors.js");

// module.exports.run = async (bot, message, args) => {

//   if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
//   if(!args[0]) return message.channel.send("**Hey, `" + message.author.username + "` No Arguments Given, Please Select From `1` - `100`**");
//   message.channel.bulkDelete(args[0]).then(() => {
//     message.channel.send("**Hey, __" + message.author.username + `__ I Have Cleared ${args[0]} Messages.**`).then(msg => msg.delete(5000));
    
//   });
// }

// module.exports.help = {
//   name: "clear"
// }
