const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To Mute or You Need `Manage Messages/Staff Team Role`**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("**Hey, `" + message.member.displayName + "` I Couldn't Find That Member Please Try Again**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**Hey, `" + message.member.displayName + "` You Didn't Pick A Role Name Please Try Again**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**Hey, `" + message.member.displayName + "` I Couldn't Find That Role Please Try Again**");

  if(rMember.roles.has(gRole.id)) return message.channel.send("**Hey, `" + message.member.displayName + "` They Already Have That Role**");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send("**We Have Added The `" + gRole.name + "` Role**")
  }catch(e){
    message.channel.send("**" + rMember.id + ", We Added The `" + gRole.name + "` Role To You. We Tried To `PM` Them, But Their `PMs` Are Locked**")
  }
}

module.exports.help = {
  name: "addrole"
}
