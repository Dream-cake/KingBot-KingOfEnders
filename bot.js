const Discord = require("discord.js");
const fs = require("fs");
var TOKEN = process.env.TOKEN;

const Client = new Discord.Client({disableEveryone: true});

Client.commands = new Discord.Collection();

const prefixes = require("./prefixes.json");

// const prefix = prefixes[message.guild.id].prefixes;

fs.readdir("./staff/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./staff/${f}`);
    console.log(`${f} loaded!`);
    Client.commands.set(props.help.name, props);
  });
 
});

fs.readdir("./fun/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./fun/${f}`);
    console.log(`${f} loaded!`);
    Client.commands.set(props.help.name, props);
  });
 
});

fs.readdir("./help/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./help/${f}`);
    console.log(`${f} loaded!`);
    Client.commands.set(props.help.name, props);
  });
 
});

fs.readdir("./botowner/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./botowner/${f}`);
    console.log(`${f} loaded!`);
    Client.commands.set(props.help.name, props);
  });
 
});

// Client.on("guildMemberAdd", async member => {
  

//   let welcomechannel = member.guild.channels.find(`name`, "general");
//   welcomechannel.send(`Welcome ${member}!`);
// });



// Client.on("guildMemberRemove", async member => {
  


//   let welcomechannel = member.guild.channels.find(`name`, "general");
//   welcomechannel.send(`Cya ${member}`);

// });




// Client.on("guildMemberAdd", member => {
  
//   console.log("User " + member.user.username + " Has Joined The Serevr")
  
//   var role = member.guild.roles.find("name", "Member")
  
//   member.addRole(role)
// });

Client.on("ready", async () => {  
 console.log(`${Client.user.username} is online on ${Client.guilds.size} servers!`);
     try {
       let link = await Client.generateInvite(["ADMINISTRATOR"]);
       console.log(link);
   } catch(e) {
       console.log(e.stack);
   }
    Client.user.setActivity(`In ${Client.guilds.size} Servers`, { type: "WATCHING" });
    setTimeout(game2, 30000)
});

function game1() {
    Client.user.setActivity("Type ?help", { type: "PLAYING" });
    setTimeout(game2, 30000)
}

function game2() {
    Client.user.setActivity("KingBot Ready", { type: "PLAYING" });
    setTimeout(game3, 30000)
}

function game3() {
    Client.user.setActivity("My King", {type: "WATCHING"});
    setTimeout(game4, 30000)
}

function game4() {
    Client.user.setActivity(`In ${Client.guilds.size} Servers`, {type: "WATCHING"});
    setTimeout(game1, 30000)
}

client.on('message', async message => { 
	if (message.author.bot) return undefined;
	if (message.content.startsWith("<prefix>") && message.channel.type !== "text")return mesage.reply("Please use my commands in a server");
	
	
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "<prefix>"
    };
  }

Client.on('message', async message => { 

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "?"
    };
  }

    if(message.author.bot) return;
    if(message.content.startsWith("?") && message.channel.type !== "text")return message.reply("Please use my commands in a server");
    if(message.content.startsWith("?") && Client.user.presence.status === "dnd"){
    if(message.author.id !== "412374698987487242")return message.channel.send("**Hey, `" + message.member.displayName + "` The Bot Is Currently Under `Maintenance/Developing Mode`**").then(msg => {msg.delete(4000)});
}
    
const prefix = prefixes[message.guild.id].prefixes;     

exports.conf = {  //idk what this is for
    enabled: true,
    ignoreBots: false,
    ignoreSelf: false
};
  
if(message.content == "<@437737030567329805>"){
        message.channel.send({embed:{
                color: 0x00FF74,
                description: `**Hey, ${message.author.username} My Prefix Is: ${prefix}**`

            }
        });
}
  
if (message.author.bot)return;  
if(message.content.toLowerCase() === "hello")
      message.channel.send("Hey, " + message.member.displayName + " How Are You Today?");
  
if(message.content.toLowerCase() === "im doing good")
      message.channel.send("Test")
        
  if(!message.content.startsWith(prefix))return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = Client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(Client,message,args);  

});  

Client.login(TOKEN);
  
