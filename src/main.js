const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.on('ready', () => {
    client.user.setActivity("DevLOL");
    let generalChannel = client.channels.get("575964458741137411");
    generalChannel.send('Bonjour'); 
});

client.login(config.token);


//Cron
//let cron = require('node-cron');
 /*console.log("I'm ready");
    let generalChannel = client.channels.get("575964458741137411");
    cron.schedule('1 * * * * *', function(){
        generalChannel.send('Test message'); 
    });*/