module.exports = class say {
    constructor(){
            this.name = 'say',
            this.alias = ['s'],
            this.usage = '?say'
    }
 
    async run(Client, message, args) {
        message.channel.send(`${message.author} told me to say: ${message.content.replace(`${args[0]} `, null)}`);
    }
}