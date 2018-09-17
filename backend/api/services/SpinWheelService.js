module.exports = { 
	initialize (cb) {
		//
	},


	repeat (winner) {

		Channel.findOne({id: winner.channel}).exec(function (err, channel) {
			Spinwheel.findOne({id: winner.spinwheel}).populate('prizes').exec(function (err, spinwheel) {
				Prize.findOne({id: winner.prize}).exec(function (err, prize) {
					var data = {
						verb: 'spinwheel',
						username: winner.username,  
						prizes: spinwheel.prizes,
						prize: prize,
						spinwheel: spinwheel
					};
					var cId = channel.id;
					Channel.publish([cId], data);
				});
			});
		});
	},

	test (channel, username, spinwheel) {
		let prizes = spinwheel.prizes;
		let prize = prizes[Math.floor(Math.random() * prizes.length)];

		var data = {
			verb: 'spinwheel',
			username: username,  
			prizes: prizes,
			prize: prize,
			spinwheel: spinwheel
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

				Winner.create({username: username, channel: channelObject.id, prize: prize.id, spinwheel: spinwheel.id}).exec(function (err, winnerCreated) {
					var data = {
        				verb: 'spinwheel',
        				username: username,  
        				prizes: prizes,
        				prize: prize,
        				spinwheel: spinwheel
      				};
      				var cId = channelObject.id;
					Channel.publish([cId], data);
				});
			});
		});
	},
}
