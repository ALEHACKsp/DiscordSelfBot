const Discord = require('discord.js');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const http = new XMLHttpRequest();

var BTC_Price = 'N/A';
var LAST_UPDATED = 'N/A';

http.onreadystatechange = function() {
    if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
    }
};

http.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
http.send();

function parseJson(json) {
    LAST_UPDATED = json["time"]["updated"];
    BTC_Price =  json["bpi"]["USD"]["rate"];
}

module.exports = class btc {
    constructor(){
        this.name = 'btc',
        this.alias = ['b'],
        this.usage = '?btc'
    }

    async run(Client, message, args) {
        const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('BTC Price')
        .setDescription(`USD: $${BTC_Price}\nUpdated: ${LAST_UPDATED}`)
        .setTimestamp()
        .setFooter('Plot#6865', 'https://media.discordapp.net/attachments/549008324876828701/606068718983708674/avatar_119412.gif');

        message.channel.send(embed);
    }
}
