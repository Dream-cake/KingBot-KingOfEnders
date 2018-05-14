const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(message.guild.id !== "443063799692656640") return message.channel.send("**Hey, `" + message.member.displayName + "` That Command Does Not Work In This Server Sorry**") 
const king = message.content.split(" ").slice(1).join(" ");
    let sicon = message.guild.iconURL;
  
if (!king){
    let embed = new Discord.RichEmbed()
        .setAuthor("Welcome To The Server Rules")
        .setDescription("These Are Made By MinecraftBoss1")
        .setColor("#51FF00")
        .setThumbnail(sicon)
        // .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
        .setFooter(`${message.guild.name} | Made By MinecraftBoss1`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField(":warning: Rules :warning:", "\n\These rules are must to be followed, violating these rules will result in a punishment. \n\n**__Chat Rules__** \n\Rule #1   | No Use Of Curse Words, Racial Slurs, Or Sexual Slurs. \n\Rule #2  | No Abuse Of Administrative Powers. \n\Rule #3  | No Advertising. \n\Rule #4  | No Harassment. \n\Rule #5  |  No Death Threats. \n\Rule #6  | Listen To Staff.")
    message.channel.send({embed: embed});
}
  
}

module.exports.help = {
  name:"rules"
}

// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
//         message.channel.send({embed:{
//                 color: 0x51FF00,
//                 description: ":warning: **__Rules__** :warning: \n\These rules are must to be followed, violating these rules will result in a punishment. \n\n**__Chat Rules__** \n\Rule #1   | No Use Of Curse Words, Racial Slurs, Or Sexual Slurs. \n\Rule #2  | No Abuse Of Administrative Powers. \n\Rule #3  | No Advertising. \n\Rule #4  | No Harassment. \n\Rule #5  |  No Death Threats. \n\Rule #6  | Listen To Staff."
//             }
//         });
// }

// module.exports.help = {
//   name:"rules"
// }