exports.run = function(client, message) {
    message.channel.send(`**${message.member.displayName} Has Fell Out Of The Minecraft World.**`).then(Message => {
//         setTimeout(() => { Message.edit("**Respawning...**"); }, 1000);
        setTimeout(() => { Message.edit("https://www.anime-planet.com/users/Mullen"); }, 2000);
        setTimeout(() => { Message.edit(`**Respawned Complete. Welcome Back, ${message.member.displayName}. How You Don't Fall Out Of The Void Again**`); }, 3000);
    });
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["kms"],
    permLevel: 0,
    botPerms: [],
};
      
exports.help = {
    name: "killme",
    description: "Kill yourself with this command. Now comes with free revival!",
    usage: "",
    usageDelim: "",
};
