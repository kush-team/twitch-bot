const SailsEmber = require('sails-ember-rest');
const controller = new SailsEmber.controller({
	update: function (req, res) {
		Prize.findOne({id: req.body.winner.prize}).populate('type').populate('channel').exec(function (err, prize) {
			if (prize.type.integration === 'streamelements' && prize.channel.streamElementsChannelId && prize.channel.streamElementsToken) {
				//TO-DO Add point to streamelements points
				StreamElementsService.addPoints(prize.channel.streamElementsChannelId, req.body.winner.username, prize.stock, prize.channel.streamElementsToken, prize.channel.name);
			}
			if (prize.type.integration === 'streamlabs') {
				//TO-DO Add point to streamelements points
				console.log('STREAM LABS')
			}
		})

		return new SailsEmber.controller().update(req, res);
	},	
});

module.exports = controller;
