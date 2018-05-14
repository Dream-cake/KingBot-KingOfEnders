exports.run = function(client, message) {
    message.channel.send(`${message.member.displayName} has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.member.displayName}`); }, 3000);
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