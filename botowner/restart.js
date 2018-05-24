const Discord = require("discord.js");
const botsettings = require('./botsettings.json'); //calls the botsettings file

module.exports.run = async (client,message,args) => {

const token = botsettings.token;//gets the token from the botsettings file

if (message.author.id !== "412374698987487242")return;

message.channel.send('Restarting...')//sends message
    client.destroy()//destroys client(logs out)
    .then(() => client.login(token))//logs client back in
    .then(() => message.channel.send("Restarted"))//lets you know its restarted in chat
    .then(() => console.log("Restarted"));//logs that it's restarted

}
module.exports.help = {
    name: "restart"
}



// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
//       if(message.author.id !== "412374698987487242") return message.channel.send("Hey, `" + message.member.displayName + "` You Can't Restart Me Only The `BotOwner` Can:**")
//  await message.channel.send("**<@437737030567329805> Is Restarting Please Wait 5 Seconds For Files To Load Up**")
//   process.exit()
  
// }

// module.exports.help = {
//   name:"restart"
// }
