const fetch = require("node-fetch");

module.exports = {
    get: async function(url){
        return await fetch(url).then((reponse)=> reponse.json()).catch((error) => console.error(error));
    },
}