const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const king = message.content.split(" ").slice(1).join(" ");
    let bicon = bot.user.displayAvatarURL;
  
if (!king){
    let embed = new Discord.RichEmbed()
        .setAuthor("Hello User These Are My Commands")
        .setDescription("**`help [Command] To Show You What It Does`**")
        .setColor("#008080")
        .setThumbnail(bicon)
        // .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Original Prefix", "**`?`**")
        .addField("Main", "**`ping` <-> `serverinfo` <-> `userinfo` <-> `botinfo` <-> `vc`**")
        .addField("BotOwner", "**`setinv` <-> `seton` <-> `setdnd` <-> `setidle` <-> `eval` <-> `restart` <-> `todoList`**")
        .addField("Staff", "**`mute` <-> `unmute` <-> `clear` <-> `tempmute` <-> `addrole` <-> `removerole` <-> `announce` <-> `say` <-> `setPrefix` <-> `setName`**")
        .addField("Fun", "**`avatar` <-> `icon` <-> `google` <-> `urban` <-> `randomUrban`<-> `rps` <-> `8ball` <-> `mcfallout` <-> `roll` <-> `coin` <-> `meme`**")
        .addField("Special Events", "**`songs`**")
//         .addField("Commands Removed", "** **")
//         .addField("Work-In Progress Commands", "** **")
//         .addField("Commands Being Fixed", "** **")
        .addField("Contact", "**`Bugs/Spelling Contact Owner KingOfEnders#0143`**")
        .addField("Announcements", "**-> `New Looking Help Menu and Also Doesn't Send In Authors Messages (Pm/Dm It Means)` \n\-> `Updated The Bot`**")
    message.channel.send({embed: embed});
}
if (king === "8ball"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`8ball` <-> `8ball Will I Have School Tomorrow?`**");
    message.channel.send({embed: embed})
}
if (king === "addrole"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`addrole` <-> `addrole @KingOfEnders Members`**");
    message.channel.send({embed: embed})
}
if (king === "avatar"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`avatar` <-> ``*avatar @KingOfEnders*");
    message.channel.send({embed: embed})
} 
if (king === "ban"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`ban` <-> `ban @KingOfEnders Spamming/Annoying People`**");
    message.channel.send({embed: embed})
} 
if (king === "botinfo"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`botinfo` <-> `Shows The Info Of The Bot`**");
    message.channel.send({embed: embed})
}  
if (king === "clear"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`clear` <-> `clear 100`**");
    message.channel.send({embed: embed})
} 
if (king === "coin"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`coin` <-> `Coin Heads Or Tails?`**");
    message.channel.send({embed: embed})
}
if (king === "discord"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`discord` <-> `Sends You A Link To The Bot Discord Server`**");
    message.channel.send({embed: embed})
} 
if (king === "eval"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`eval` <-> `Sorry, Nothing To Help With and Only For BotOwner`**");
    message.channel.send({embed: embed})
} 
if (king === "google"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`google` <-> `google What Is The Weather Today?`**");
    message.channel.send({embed: embed})
}  
if (king === "icon"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`icon` <-> `Shows You The Server Icon`**");
    message.channel.send({embed: embed})
}
if (king === "invites"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`invites` <-> `Sends You Invites To Friends Servers`**");
    message.channel.send({embed: embed})
} 
if (king === "mcfallout"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`mcfallout` <-> `Falls out of the Minecraft World then Respawns as a new person`**");
    message.channel.send({embed: embed})
}  
if (king === "links"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`links` <-> `Shows Some Helpful Links That You Could Use`**");
    message.channel.send({embed: embed})
}  
if (king === "mute"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`mute` <-> `mute @KingOfEnders Sending Links/Spamming Not Nice Videos`**");
    message.channel.send({embed: embed})
}  
if (king === "ping"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`ping` <-> `Pong With The MS`**");
    message.channel.send({embed: embed})
}
if (king === "removerole"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`removerole` <-> `removerole @KingOfEnders Members`**");
    message.channel.send({embed: embed})
}  
//Stopped At RemoveRole Continue On Restart
if (king === "restart"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`restart` <-> `Restarts The Bot But Only For The BotOwner`**");
    message.channel.send({embed: embed})
}  
if (king === "roll"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`roll` <-> `roll 100`**");
    message.channel.send({embed: embed}) 
}  
if (king === "rps"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`rps` <-> `rps Rock, Paper, Scissors`**");
    message.channel.send({embed: embed})
}  
if (king === "say"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`say` <-> `say Hello This Is The Bot Talking`**");
    message.channel.send({embed: embed})
}  
if (king === "serverinfo"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`serverinfo` <-> `Shows The Info Of That Server`**");
    message.channel.send({embed: embed})
}  
if (king === "setdnd"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`setdnd` <-> `Sets The Bot Into Maintenance/Developing Mode Only For The BotOwner`**");
    message.channel.send({embed: embed})
}  
if (king === "setidle"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`setidle` <-> `Sets The Bot Into Idle Mode Only For The BotOwner`**");
    message.channel.send({embed: embed})
}  
if (king === "setinv"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`setinv` <-> `Sets The Bot Into Invisible Mode Only For The BotOwner`**");
    message.channel.send({embed: embed})
}  
if (king === "seton"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`seton` <-> `Sets The Bot Into Online Mode Only For The BotOwner`**");
    message.channel.send({embed: embed})
}  
if (king === "setPrefix"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`setPrefix` <-> `setPrefix KOE.`**");
    message.channel.send({embed: embed})
}  
if (king === "songs"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`songs` <-> `Shows 4 Songs Of Avicii The Singer That Died`**");
    message.channel.send({embed: embed})
}  
if (king === "tempmute"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`tempmute` <-> `tempmute @KingOfEnders 10m Sending Links/Spamming Not Nice Videos`**");
    message.channel.send({embed: embed}) 
}  
if (king === "unmute"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`unmute` <-> `unmute @KingOfEnders I Forgive You Don't Do It Again`**");
    message.channel.send({embed: embed})    
}  
if (king === "urban"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`urban` <-> `urban Mum`**");
    message.channel.send({embed: embed})
}  
if (king === "userinfo"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`userinfo` <-> `Shows The Info Of The User`**");
    message.channel.send({embed: embed})
}   
if (king === "meme"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`meme` <-> `Shows You Random Memes Could Be Anything`**");
    message.channel.send({embed: embed})
   
}
if (king === "announce"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`announce` <-> `announce [Message/Anything You Want The Message To Be]`**");
    message.channel.send({embed: embed})
   
}
if (king === "setName"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`setName` <-> `setName KingOfEnders`**");
    message.channel.send({embed: embed})
   
}
if (king === "vc"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`vc` <-> `Shows You Infomation About If Your Muted/Deafen Etc**");
    message.channel.send({embed: embed})
   
}
if (king === "botinfo"){
    let embed = new Discord.RichEmbed()
        // .setAuthor("")
        .setColor("#008080")
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Example", "**`botinfo` <-> `Shows The Info Of The Bot`**");
    message.channel.send({embed: embed})
   
}
  
}

module.exports.help = {
  name:"help"
}
