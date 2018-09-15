const SailsEmber = require('sails-ember-rest');
const controller = new SailsEmber.controller({
	paid: function (req, res) {


		Winner.findOne({id: req.param('winner')}).exec(function (err, winner) {
			Prize.findOne({id: winner.prize}).populate('type').populate('channel').exec(function (err, prize) {
				if (prize.type.integration === 'streamelements' && prize.channel.streamElementsChannelId && prize.channel.streamElementsToken) {
					//TO-DO Add point to streamelements points
					StreamElementsService.addPoints(prize.channel.streamElementsChannelId, winner.username, prize.stock, prize.channel.streamElementsToken, prize.channel.name);
				}
				if (prize.type.integration === 'streamlabs') {
					//TO-DO Add point to streamelements points
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
