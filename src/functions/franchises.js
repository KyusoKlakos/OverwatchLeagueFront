const ajax = require('./ajax.js');
const config = require('./../config/config_global.json');

module.exports = {
    franchises: function(receivedMessage, sentMessage) {
        const teams = ajax.get(config.api_endpoint + "/franchises",function (response){
            let data = JSON.parse(response);
            
            let teams_names_id = "";

            data.map(line => {
               teams_names_id += "**" + line.id + "**" + " : " + line.nom + '\n';
            });

            sentMessage.setTitle("Liste des équipes")
            sentMessage.setColor(data[0].couleur);
            sentMessage.setDescription(teams_names_id);

            receivedMessage.channel.send(sentMessage);
        });
    }
};