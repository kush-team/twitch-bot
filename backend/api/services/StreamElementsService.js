var Request = require("request");

module.exports = { 
    initialize (cb) {
        //
    },

    addPoints (channel, username, points, token, channelName) {
        Request.put({
            "headers": { "Authorization": "Bearer " +  token},
            "url": "https://api.streamelements.com/kappa/v2/points/" + channel + "/" + username + "/" + points,
        }, (error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            data = JSON.parse(body);
            BotService.say(channelName, data.message);
        });        
    },
}
