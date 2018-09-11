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
			Scope.findOne({eventName: 'cheer'}).where({minAmount: { '>=': userstate.bits }, maxAmount: { '<=': userstate.bits }}).exec(function (err, scope) {
				if (scope) {
    				SpinWheelService.spin(channel, username, scope);
				}
			})
		});	

		client.on("hosted", function (channel, username, viewers, autohost) {

		});

		client.on("subscription", function (channel, username, method, message, userstate) {
			Scope.findOne({eventName: 'subcription'}).exec(function (err, scope) {
				if (scope) {
    				SpinWheelService.spin(channel, username, scope);
				}
			})
		});

		client.on("resub", function (channel, username, months, message, userstate, methods) {
			Scope.findOne({eventName: 'resub'}).where({minMonths: { '>=': months }, maxMonths: { '<=': months }}).exec(function (err, scope) {
				if (scope) {
    				SpinWheelService.spin(channel, username, scope);
				}
			});			
		});

		client.on("chat", function (channel, userstate, message, self) {
		    if (self) return;
		});		
	},
}
