module.exports = { 
	initialize (cb) {
		//
	},

	test (channel, username, spinwheel) {
		let prizes = spinwheel.prizes;
		let prize = prizes[Math.floor(Math.random() * prizes.length)];

		var data = {
			verb: 'spinwheel',
			username: username,  
			prizes: prizes,
			prize: prize
		};

		var cId = channel.id;
		Channel.publish([cId], data);
	},

	spin (channel, username, scope) {
		
		Channel.findOne({name: channel}).exec(function (err, channelObject) {
			Spinwheel.findOne({channel: channelObject.id, scope: scope.id}).populate('prizes').exec(function (err, spinwheel) {
				
				if (!spinwheel) 
					return;

				let prizes = spinwheel.prizes;
				let prize = prizes[Math.floor(Math.random() * prizes.length)];
				//TO-DO

				Winner.create({username: username, channel: channelObject.id, prize: prize.id}).exec(function (err, winnerCreated) {
					var data = {
        				verb: 'spinwheel',
        				username: username,  
        				prizes: prizes,
        				prize: prize
      				};
      				var cId = channelObject.id;
					Channel.publish([cId], data);
				});
			});
		});
	},
}
