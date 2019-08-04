const Discord = require('discord.js');

module.exports = class info {
    constructor(){
        this.name = 'info',
        this.alias = ['i'],
        this.usage = '?info'
    }

    async run(Client, message, args) {
        const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setDescription('Open-source Discord self-Bot created by: **Plot#6865**.\nDownload: **https://github.com/Plot6865/DiscordSelfBot**')
        .setTimestamp()
        .setFooter('Plot#6865', 'https://media.discordapp.net/attachments/549008324876828701/606068718983708674/avatar_119412.gif');

        message.channel.send(embed);
    }
}
