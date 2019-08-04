const Discord = require('discord.js');
const Client = new Discord.Client();
const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: '?'
});

Client.on('ready', () => {
    Client.user.setStatus('dnd');
    Client.user.setPresence({
        game: {
            name: "Watching pewdiepie",
            type: "STREAMING",
            url: "https://www.twitch.tv/pewdiepie"
        }
    });
});

Client.on('message', (message) => {
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;
 
    try {
        cmd.run(Client, message, args)
    }
    catch (e) {
        console.log(e)
    }
});

Client.login('YOUR_DISCORD_TOKEN');
