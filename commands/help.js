const Discord = require('discord.js');

module.exports = class help {
    constructor(){
        this.name = 'help',
        this.alias = ['h'],
        this.usage = '?help'
    }

    async run(Client, message, args) {
        const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('All of my cmds:')
        .addField('?help', 'Get a list of cmds')
        .addField('?btc', 'Get the current BTC. price')
        .addField('?info', 'Get info about this self-bot')
        .addField('?ping', 'Get my ping')
        .addField('?say', 'Make me say anything')
        .setTimestamp()
        .setFooter('Plot#6865', 'https://media.discordapp.net/attachments/549008324876828701/606068718983708674/avatar_119412.gif');

        message.channel.send(embed);
    }
}
