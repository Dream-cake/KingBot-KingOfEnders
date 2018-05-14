const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.channel.send({embed:{
                color: 0xffb600,
                description: "" + message.author + " **April 20, 2018** Singer **Avicii**, Swedish Musician, Age **28** and Died In Oman. Here are some Famous Songs from Him. \n\n\[Wake Me Up](https://www.youtube.com/watch?v=IcrbM1l_BoI) \n\[Hey Brother](https://www.youtube.com/watch?v=6Cp6mKbRTQY) \n\[The Nights](https://www.youtube.com/watch?v=UtF6Jej8yb4) \n\[Levels](https://www.youtube.com/watch?v=_ovdm2yX4MA)"

            }
        });
}

module.exports.help = {
  name:"songs"
}
