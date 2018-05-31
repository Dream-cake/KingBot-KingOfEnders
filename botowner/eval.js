const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
      if(message.author.id !== "412374698987487242") return message.channel.send("**Hey, `" + message.member.displayName + "` That Command Is Only For The BotOwner But Nice Try :wink:**")
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

    try{
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string"){
        evaled = require("util").inspect(evaled);
      }

    if (evaled.includes(client.token)){
        evaled = evaled.replace(client.token, "that's a secret");
    }      

    let embed = new Discord.RichEmbed()
    .addField(`Input`, code, true)
    .addField(`Output`, "````evaled````,)
    .setColor("#1227AB")
    .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members`, `${message.guild.iconURL}`)
    .setTimestamp(new Date());
    
    message.channel.send({embed: embed});    
      
    } catch (err) {

    let errorEmbed = new Discord.RichEmbed()
    .addField("Error", clean(err))
    .setColor("#ff0000")
    .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members`, `${message.guild.iconURL}`)
    .setTimestamp(new Date());

    message.channel.send({embed: errorEmbed});
    }     
}
module.exports.help = {
    name: "eval"
}
