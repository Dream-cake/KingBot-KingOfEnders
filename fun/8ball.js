exports.run = async (client, message, [args]) => {
    // message.delete();
    let response = ["Yes", "Maybe", "No", "Try again later", "Possibly", "Absolutely"];

    message.channel.send(`${response[~~(Math.random() * response.length)]}, ${message.member.displayName}.`);   
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};
      
exports.help = {
    name: "8ball",
    description: "Ask the magic 8ball wizard for an answer!",
    usage: "[args:str][...]",
    usageDelim: "",
};
