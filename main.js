const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require('node-cron');

client.on('ready', () => {
    client.user.setActivity("Aled");
    console.log("I'm ready");
    let generalChannel = client.channels.get("575964458741137411");
    cron.schedule('1 * * * * *', function(){
        generalChannel.send('Test message'); 
    });
});

bot_secret_token = "NTc2MDQ1MDA1MzIwMjI0Nzg3.XNQymw.KHwQ0lssTHgz1q4EjiLdinrTZIU";

client.login(bot_secret_token);