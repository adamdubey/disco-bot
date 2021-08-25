const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

require('dotenv').config();

// Client Init
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log("I am ready!");
});


client.on("message", (message) => {
  // Ping Test
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

// Client Login
client.login(process.env.DISCORD_BOT_TOKEN);

