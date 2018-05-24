const Discord = require("discord.js");
const fs = require("fs");
const prefixes = require("../prefixes.json");

module.exports.run = async (client,message,args) => {
const ars = message.content.split(" ").slice(1).join(" ");
  
  if(!ars)return message.channel.send("please enter a new prefix");
const prefix = prefixes[message.guild.id].prefixes;

  if(!message.member.hasPermission("VIEW_AUDIT_LOG"))return message.channel.send("**Hey, `"+ message.member.displayName +"` You Do Not Have Enough Perms To SetPrefix**");

  prefixes[message.guild.id] = {
    prefixes: ars
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  message.channel.send('New prefix set to: '+ ars +'').then(msg => {msg.delete(10000)}); //10000 is 10 seconds
  console.log(`${message.member.displayName} set the prefix for ${message.guild} to: ${ars}`);
message.delete(10000);
  }
module.exports.help = {
  name: "setPrefix"
}
