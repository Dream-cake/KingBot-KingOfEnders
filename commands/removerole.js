const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To Mute or You Need `Manage Messages/Staff Team Role`**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**Hey, `" + message.member.displayName + "` I Couldn't Find That Member Please Try Again**");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("**Hey, `" + message.member.displayName + "` You Didn't Pick A Role Name Please Try Again**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("**Hey, `" + message.member.displayName + "` I Couldn't Find That Role Please Try Again**");

  if(!rMember.roles.has(gRole.id)) return message.reply("**Hey, `" + message.member.displayName + "` They Don't Have That Role**");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send("**We Have Removed The `" + gRole.name + "` Role**")
  }catch(e){
    message.channel.send("**<@${rMember.id}>, We Removed `" + gRole.name + "` Role From You. We Tried To `PM` Them, But Their `PMs` Are Locked**")
  }
}

module.exports.help = {
  name: "removerole"
}