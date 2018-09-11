const SailsEmber = require('sails-ember-rest');
const controller = new SailsEmber.controller({
	test (req, res) {
		let channeId = req.body.channel;
		let username = req.body.username;
		let spinwheelId = req.body.spinwheel;

		if (channeId && username && spinwheelId) {
			Channel.findOne({_id: channeId}).exec(function (err, channel) {
				if (err) res.ok('');
				Spinwheel.findOne({_id: spinwheelId}).populate('prizes').exec(function (err, spinwheel) {
					if (err) res.ok('');
					res.ok({result: true, msg: 'Spinwheel-test'});
					SpinWheelService.test(channel, username, spinwheel);
				});
			});
		} else {
			res.ok('');
		}
	}
});

module.exports = controller;
