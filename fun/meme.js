const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// Assuming you already have your commands already set lets get started....

// Lets go ahead and predefine this... (we're going to use this later...)
const { get } = require('http');

// Before we do the actual command lets go ahead and make a function that grabs the memes...
function images() {
	return new Promise((resolve, reject) => {
		// We're grabbing it from an api so we don't have to use a package...
		get('http://api.imgflip.com/get_memes', res => {
			const { statusCode, statusMessage } = res;
			if (statusCode !== 200) reject(new Error(`Error on request: Code: ${statusCode}, Message: ${statusMessage}`));
			let data = '';
			res.on('data', rawData => { data += rawData; });
			res.on('end', () => {
				try {
					const response = JSON.parse(data);
					if (response.success === false) reject(new Error(`Error grabbing images...`));
					if (response.data.memes === undefined || response.data.memes.length <= 0) reject(new Error(`No images found...`));
					const links = [];
					for (const image of response.data.memes) {
						const obj = { name: image.name, url: image.url };
						links.push(obj);
					}
					resolve(links);
				} catch (error) {
					reject(error.message);
				}
			});
		}).on('error', err => {
			reject(err.message);
		});
	});
}

// Now let's actually start the command....

// Since the functions images return a promise...

images().then(imgs => {
    const { url, name } = imgs[Math.floor(Math.random() * imgs.length)];
    message.channel.send(`${name}\n${url}`);
});


// Remember you can either do method One (.then and .catch) or method Two (async/await)...
// After this we're finished... and hope that it works :D... 
}

module.exports.help = {
  name:"meme"
}
