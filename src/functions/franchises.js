const ajax = require('./ajax.js');
const fetch = require('./fetch.js');
const config = require('./../config/config_global.json');

module.exports = {
    franchises: async function(receivedMessage, sentMessage) {
        /*ajax.get(config.api_endpoint + "/franchises",function (response){
            let data = JSON.parse(response);
            
            let teams_names_id = "";

            data.map(line => {
               teams_names_id += "**" + line.id + "**" + " : " + line.nom + '\n';
            });

            sentMessage.setTitle("Liste des équipes")
            sentMessage.setColor(data[0].couleur);
            sentMessage.setDescription(teams_names_id);

            receivedMessage.channel.send(sentMessage);
        });*/
        let teams = await fetch.get(config.api_endpoint + "/franchises");

        let teams_names_id = "";

        teams.map(line => {
            teams_names_id += "**" + line.id + "**" + " : " + line.nom + '\n';
        });

        sentMessage.setTitle("Liste des équipes")
        sentMessage.setColor(teams[0].couleur);
        sentMessage.setDescription(teams_names_id);

        receivedMessage.channel.send(sentMessage);
    },
    
    franchise: function(receivedMessage,sentMessage,args){
        let [id] = args;
        ajax.get(config.api_endpoint + "/franchises/" + id, function (response){
            let data = JSON.parse(response);


            sentMessage.setThumbnail(data.imageUrl);
            sentMessage.setColor(data.couleur);
            sentMessage.setTitle(data.nom);

            let players = "";

             for(let i = 0; i<data.joueurs.length; i++ ){
                 ajax.get(config.api_server + data.joueurs[i], function (response){
                    let data_players = JSON.parse(response);
                    players += data_players.type + " : " + data_players.identiter + "/n";
                });
            }

            sentMessage.addField("Joueurs", players);


            receivedMessage.channel.send(sentMessage);
        });
    }
};