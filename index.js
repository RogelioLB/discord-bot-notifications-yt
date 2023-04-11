// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;
const {io} = require("socket.io-client")
const socket = io("https://pushnotificationsyt.rogelio98.repl.co/")

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const channel_id = "787102754950086700"


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	const channel = client.channels.cache.get(channel_id)

	socket.on("new",({video})=>{
		channel.send("Hey @everyone eh subido un nuevo video. Miralo justo ahora. \n"+video.link)
	})
});

// Log in to Discord with your client's token
client.login(token);
