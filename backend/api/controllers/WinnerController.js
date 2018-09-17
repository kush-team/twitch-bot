const SailsEmber = require('sails-ember-rest');
const controller = new SailsEmber.controller({
	paid: function (req, res) {
		Winner.update({id: req.param('winner')}).set({charged: true}).exec(function (err, winner) {
			winner = winner[0];		
			Prize.findOne({id: winner.prize}).populate('type').populate('channel').exec(function (err, prize) {
				if (prize.type.integration === 'streamelements' && prize.channel.streamElementsChannelId && prize.channel.streamElementsToken) {
					StreamElementsService.addPoints(prize.channel.streamElementsChannelId, winner.username, prize.stock, prize.channel.streamElementsToken, prize.channel.name);
				}
				if (prize.type.integration === 'streamlabs') {
					console.log('STREAM LABS')
				}
				res.ok({ winner: winner });
			})
		})
	},	

	repeat: function (req, res) {

		Winner.findOne({id: req.param('winner')}).exec(function (err, winner) {
			SpinWheelService.repeat(winner);
			res.ok({ winner: winner });
		})
	},
});

module.exports = controller;
