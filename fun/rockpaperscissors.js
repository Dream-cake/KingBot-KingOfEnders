exports.run = async (client, message, [choice, user]) => {  
    if (!user) { user = client.user; } 
    else {
        user = client.funcs.userSearch(client, message, user);
        if (user.username === null) { return; }  
    }

    var types = ["rock", "paper", "scissors"];
    var hand = types[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(1) + 1)) + Math.ceil(1)];

    if ((choice === "rock" && hand === "scissors") || (choice === "paper" && hand === "rock") || (choice === "scissors" && hand === "paper")) { var result = "" + message.author.username + " `Wins` :tada:"; } 
    if ((choice === "rock" && hand === "paper") || (choice === "paper" && hand === "scissors") || (choice === "scissors" && hand === "rock")) { var result = "" + user.username + " `Wins` :tada:"; }
    if (choice === hand) { var result = "Its A `Draw` :tada:"; }

    message.channel.send("**" + message.member.displayName + " Plays `" + choice + "` " + user.username + " Plays `" + hand + "` " + result + "**");
    // message.channel.send(`${message.author.username} plays ${choice}! ${user.username} plays ${hand}! ${result}`);
};
    
exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: ["userSearch"],
};
    
exports.help = {
    name: "rps"
};
