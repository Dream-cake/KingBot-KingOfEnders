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
        .addField("Original Prefix", "**`?`**")
        .addField("Main", "**`invites` <-> `ping` <-> `links` <-> `news` <-> `discordbot` <-> `serverinfo` <-> `userinfo` <-> `botinfo` <-> `vc`**")
        .addField("BotOwner", "**`setinv` <-> `seton` <-> `setdnd` <-> `setidle` <-> `eval` <-> `restart` <-> `todoList`**")
        .addField("Staff", "**`mute` <-> `unmute` <-> `clear` <-> `tempmute` <-> `addrole` <-> `removerole` <-> `announce` <-> `say` <-> `setPrefix` <-> `setName`**")
        .addField("Fun", "**`avatar` <-> `icon` <-> `google` <-> `urban` <-> `randomUrban`<-> `rps` <-> `8ball` <-> `mcfallout` <-> `roll` <-> `coin` <-> `meme`**")
        .addField("Special Events", "**`songs`**")
        .addField("Commands Removed", "**`warn` <-> `warnings` <-> `steve` <-> `spam` <-> `kick` <-> `ban` <-> `nameSpam` <-> `hello` <-> `good` <-> `steve`**")
//         .addField("Work-In Progress Commands", "**`invites` <-> `discord`**")
//         .addField("Commands Being Fixed", "**`roll` <-> `rps` <-> `killme` <-> `coin` <-> `8ball`**")
        .addField("Contact", "**`Bugs/Spelling Contact Owner KingOfEnders#0143`**")
        .addField("Announcements", "**-> `New Looking Help Menu and Also Doesn't Send In Authors Messages (Pm/Dm It Means)` \n\-> `Updated The Bot`**")
    message.channel.send({embed: embed});
}

module.exports.help = {
  name:"commands"
}
