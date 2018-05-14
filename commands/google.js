const Discord = require("discord.js");
const google = require('google-it');


module.exports.run = async (client,message,args) => {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title:** ${results[0].title}\n***Link:*** ${results[0].link}\n**Description:** ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});


}
module.exports.help = {
    name: "google"
}