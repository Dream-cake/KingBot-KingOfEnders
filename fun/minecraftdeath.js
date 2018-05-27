exports.run = function(client, message) {
    message.channel.send(`**${message.member.displayName} Has Fell Out Of The Minecraft World.**`).then(Message => {
        setTimeout(() => { Message.edit("**Respawning...**", {files: ["./images/Loading....gif"]}); }, 1000);
        setTimeout(() => { Message.edit(`**Respawned Complete. Welcome Back, ${message.member.displayName}. Hope You Don't Fall Out Of The Void Again**`); }, 3000);
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
    name: "mcfallout",
    description: "Kill yourself with this command. Now comes with free revival!",
    usage: "",
    usageDelim: "",
};
