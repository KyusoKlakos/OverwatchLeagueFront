const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/config_global.json');
const commands = require('./config/commands.json');
const franchises = require('./functions/franchises');

let sentMessage = new Discord.RichEmbed();

client.login(config.token);

client.on('ready', () => {
    client.user.setActivity("DevLOL");
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return 0;
    }

    if (receivedMessage.content.startsWith(commands.commands_prefix)) {
        if(receivedMessage.content === commands.commands_prefix + commands.commands[0]){
           franchises.franchises(receivedMessage, sentMessage);
        }
    }
});


//Cron
//let cron = require('node-cron');
 /*console.log("I'm ready");
    let generalChannel = client.channels.get("575964458741137411");
    cron.schedule('1 * * * * *', function(){
        generalChannel.send('Test message'); 
        let generalChannel = client.channels.get("575964458741137411");
    generalChannel.send('Bonjour'); 
    });*/

        /*if (receivedMessage.author == client.user) {
        return
    }*/
    /*ajax.get(config.api_endpoint + "/franchises",function (response){
        let data = JSON.parse(response);
        console.log(data);
    });*/
    /*if (receivedMessage.content.startsWith("!")) {
        console.log(receivedMessage);
    }*/