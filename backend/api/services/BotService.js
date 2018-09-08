const tmi = require("tmi.js");


const client = new tmi.client({
    identity: {
        username: sails.config.custom.username,
        password: "oauth:" + sails.config.custom.password
    },
    channels: []
});

module.exports = { 
	initialize (cb) {
		var _this = this;

		client.connect();

		client.on("connected", function (address, port) {
			Channel.find(function (err, channels) {
				for (var i = 0, len = channels.length; i < len; i++) {
				  	var channel = channels[i];
				  	client.join(channel.name);
				}			
			});			
		});

		client.on("join", function (channel, username, self) {
			if (self) {
				//client.say(channel, 'MoncaBot al servicio!');
			} else {
				/*
				Greeting.find({username: username, channel: channel}).exec(function (err, greeting) {
					if (!err)
					client.say(channel, greeting.message);
				});
				*/
			}
		});		

		client.on("part", function (channel, username, self) {

		});			


		client.on("cheer", function (channel, userstate, message) {

		});	

		client.on("hosted", function (channel, username, viewers, autohost) {
		    console.log(username, viewers, autohost);
		});

		client.on("subscription", function (channel, username, method, message, userstate) {
    		BotService.turnTheWheel(channel, username);
		});

		client.on("resub", function (channel, username, months, message, userstate, methods) {
    		BotService.turnTheWheel(channel, username);
		});

		client.on("chat", function (channel, userstate, message, self) {
		    if (self) return;
		});		
	},


	join (channel) {
		client.join(channel)
	},


	turnTheWheel (channel, username) {
		Channel.findOne({name: channel}).exec(function (err, channelObject) {
			Spinwheel.findOne({channel: channelObject.id}).populate('prizes').exec(function (err, spinwheel) {
				let arr = spinwheel.prizes;
				let prize = arr[Math.floor(Math.random() * arr.length)];

				Winner.create({username: username, channel: channelObject.id, prize: prize.id}).exec(function (err, winnerCreated) {
					client.say(channel, username + ' has won ' + prize.name);
				});
			});
		});

	},
}
