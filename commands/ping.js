module.exports = class ping {
    constructor(){
            this.name = 'ping',
            this.alias = ['p'],
            this.usage = '?ping'
    }
 
    async run(Client, message, args) {
        message.channel.send(`Pong! My ping: **${Math.round(Client.ping)}**`);
    }
}