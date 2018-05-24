const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
  if (!args[0])return message.channel.send("please enter a new prefix");

  const prefixes = require("../prefixes.json");

  const prefix = prefixes[message.guild.id].prefixes;

  if(!message.member.hasPermission("VIEW_AUDIT_LOG"))return message.channel.send("**Hey, `" + message.member.displayName + "` You Do Not Have Enough Perms To SetPrefix or You Need `View Audit Log/Staff Team` Role**");

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  message.delete(10000);
  message.channel.send('New prefix set to: '+ args[0] +'').then(msg => {msg.delete(10000)}); //10000 is 10 seconds
  console.log(`${message.member.displayName} set the prefix for ${message.guild} to: ${args[0]}`);

  }
module.exports.help = {
  name: "setPrefix"
}
