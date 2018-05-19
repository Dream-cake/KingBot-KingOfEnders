const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;

    let embed = new Discord.RichEmbed()
        .setAuthor("Hello User These Are My Commands")
        .setDescription("**`help [Command] To Show You What It Does`**")
        .setColor("#008080")
        .setThumbnail(bicon)
        // .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
        .setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By KingOfEnders`, `${message.guild.iconURL}`)
        .setTimestamp(new Date())
        .addField("Prefix", "**`?`**")
        .addField("Music", "**`play` <-> `stop` <-> `skip` <-> `leave` <-> `` <-> `queue` <-> `np` <-> `volume`**")
        .addField("Contact", "**`Bugs/Spelling Contact Owner KingOfEnders ◢ ◤#0143`**")
        .addField("Announcements", "**`New Looking Help Menu and Also Doesn't Send In Authors Messages (Pm/Dm It Means) \n\[+] setPrefix [+] New Help Menu [+] help [command]`**")
    message.channel.send({embed: embed});

}

module.exports.help = {
  name:"help2"
}

// exports.run = async (client, msg, [cmd]) => {
//     const method = client.user.bot ? "author" : "channel";
//     const help = this.buildHelp(client, msg);
//     const categories = Object.keys(help);
//     const helpMessage = [];
//     const prefix = msg.guildSettings.prefix || client.config.prefix;

//     if (cmd === undefined) {
//         for (let cat = 0; cat < categories.length; cat++) { helpMessage.push(`- ${categories[cat]}`); }
        
//         const embed = new client.methods.Embed()
//             .setColor("#4d5fd")
//             .setTitle(`${client.user.username}'s Command Categories`)
//             .setDescription("*Do " + `\`${prefix}help module <module name>\`` + " for category commands.*")
//             .addField("Categories:", helpMessage);
//         return msg.send({embed});
//     } if (cmd) {
//         cmd = msg.content.slice(prefix.length + 5).split(" ");
//         Array.from(cmd);

//         if (cmd[2]) { return msg.send("You have provided too many words. All categories are one word. Why do you give me two?"); }

//         if (cmd[0] === "categories" || cmd[0] === "modules" || cmd[0] === "category" || cmd[0] === "module") {
//             if (!cmd[1]) { return msg.send("You did not supply me with a category!"); }
    
//             for (let cat = 0; cat < categories.length; cat++) {
//                 if (categories[cat].toLowerCase() === cmd[1].toLowerCase()) {
//                     helpMessage.push(`**${categories[cat]} Commands**: \`\`\`asciidoc`);
//                     const subCategories = Object.keys(help[categories[cat]]);
//                     for (let subCat = 0; subCat < subCategories.length; subCat++) {
//                         helpMessage.push(`= ${subCategories[subCat]} =`, `${help[categories[cat]][subCategories[subCat]].join("\n")}\n`);
//                     }
//                     helpMessage.push("```");
    
//                     msg.send(helpMessage, { split: { char: "\u200b" } }); break;
//                 }
//                 if (Number(cat) + 1 === Number(categories.length)) { msg.send("The category you were looking for does not exist."); break; }
//             }
//         } else {
//             cmd = client.commands.get(cmd[0]) || client.commands.get(client.aliases.get(cmd[0]));
//             if (!cmd) { return msg.send("❌ | Unknown command, please run the help command with no arguments to get a list of categories."); }
    
//             if (!this.runCommandInhibitors(client, msg, cmd)) { return; }
            
//             if (cmd.conf.permLevel === 0) { var permissionLevel = "Level 0: Everyone"; }
//             if (cmd.conf.permLevel === 2) { var permissionLevel = "Level 2: Guild Moderators/Guild Moderator permissions "; }
//             if (cmd.conf.permLevel === 3) { var permissionLevel = "Level 3: Guild Admins/Guild Admin permissions"; }
//             if (cmd.conf.permLevel === 4) { var permissionLevel = "Level 4: Guild Owners/Guild owner permissions"; }
//             if (cmd.conf.permLevel === 9) { var permissionLevel = "Level 9: Toast & Butter"; }
//             if (cmd.conf.permLevel === 10) { var permissionLevel = "Level 10: Bot Owner"; }

//             const embed = new client.methods.Embed()
//                 .setColor("#4d5fd")
//                 .setTitle(cmd.help.name)
//                 .setDescription(cmd.help.description)
//                 .addField("Usage:", `\`${cmd.usage.fullUsage(msg)}\``)
//                 .addField("Permission level:", permissionLevel)
//                 .addField("Extended Help:", cmd.help.extendedHelp || "No extended help is available");
//             return msg.send({embed});
//         }
//     }
// };
  
// exports.conf = {
//     enabled: true,
//     runIn: ["text", "dm"],
//     aliases: ["commands"],
//     permLevel: 0,
//     botPerms: ["SEND_MESSAGES"],
//     requiredFuncs: [],
//     requiredSettings: [],
// };
  
// exports.help = {
//     name: "helps",
//     description: "Display help for a command.",
//     usage: "[command:str]",
//     usageDelim: "",
// };
  
// /* eslint-disable no-restricted-syntax, no-prototype-builtins */
// exports.buildHelp = (client, msg) => {
//     const help = {};
//     const prefix = msg.guildSettings.prefix || client.config.prefix;
  
//     const commandNames = Array.from(client.commands.keys());
//     const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  
//     for (const command of client.commands.values()) {
//       if (this.runCommandInhibitors(client, msg, command)) {
//         const cat = command.help.category;
//         const subcat = command.help.subCategory;
//         if (!help.hasOwnProperty(cat)) { help[cat] = {}; }
//         if (!help[cat].hasOwnProperty(subcat)) { help[cat][subcat] = []; }
//         help[cat][subcat].push(`\u00A0${prefix}${command.help.name.padEnd(longest)} :: ${command.help.description}`);
//       }
//     }
  
//     return help;
// };
  
// exports.runCommandInhibitors = (client, msg, command) => !client.commandInhibitors.some((inhibitor) => {
//     if (!inhibitor.conf.spamProtection && inhibitor.conf.enabled) { return inhibitor.run(client, msg, command); }
//     return false;
// });

// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
//         if(message.author.id !== "412374698987487242") return message.channel.send("**Hey, `" + message.author.username + "` That Command Only Works With The BotOwner!**") 
//         message.channel.send({embed:{
//                 color: 0x00ff15,
//                 description: "" + message.author + " **Check Your Preivate Messages For More Commands**"
//             }
//         });

//         message.channel.send({embed:{
//             color: 0xffb600,
//             description: "" + message.author + " **Make Sure You Have Server Private Messages On `Click The` :arrow_down: `Then Go To Private Settings` To Turn Them On and Then You Can Get My Commands**"
//             }
//         });
//         message.author.send({embed:{
//             color: 0x0099ff,
//                 title: "Bot Commands",
//                 description: "**__Here Are My Commands__** \n\n**__Main__** \n\?invites - Advertises Stuff For People! \n\?ping - :ping_pong: Pong \n\?links - Gives You Helpful Links \n\?news - Gives You News On What's Happening With ChatBot \n\?discord - Invites You To The ChatBot SupportServer      \n\n**__Owner__** \n\?setinv - Sets Status To `Invisible` \n\?seton - Sets Status To `Online` \n\?setdnd - Sets Status To `Dnd` \n\?setidle - Sets Status To `Idle`      \n\n**__Admin__** \n\?mute - Mutes The Mentioned Member \n\?unmute - UnMutes The Mentioned Member \n\?clear - Clears The Chat \n\?kick - Kicks The Mentioned Member \n\?ban - Bans The Mentioned Member \n\?tempmute - TempMutes The Mentioned Member ?addrole - Add A Role To The Mentioned Member \n\?removerole - Removes A Role From A Mentioned Member \n\?warn - Warns The Mentioned Member \n\?warnings - Shows The Mentioned Members Warns \n\?say - When You Write A Message If Makes The Bot Say It      \n\n**__Fun__** \n\**More New Fun Commands Coming Soon!** \n\?spam - Spams Words and Only A Command For Spam Channels \n\?nameSpam - Spams Your Name and Only A Command For Spam Channels \n\?hello - Says Hello To You! \n\?good - Makes You Say `I'm Good and You?` and The Bot Says `I'm Doing Good!` \n\?avatar - Generates Your Avatar \n\?icon - Generates The Server Icon If It has One      \n\n**__Special Events__** \n\?songs - **April 20, 2018** Singer **Avicii**, Swedish Musician, Age **28** and Died In Oman. May He Rest In Peace. \n\n**__Announcements__** \n\ChatBot SupportServer Is Now Opened Join It Here Today! https://discord.gg/9DJNNRZ \n\New Commands Menu Coming Soon (Expected By May 5th - 15th)"
//             }
//         });
// }

// module.exports.help = {
//   name:"helpbeta"
// }
