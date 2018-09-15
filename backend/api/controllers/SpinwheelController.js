const SailsEmber = require('sails-ember-rest');
const controller = new SailsEmber.controller({
	test (req, res) {
		let username = "TestingName";
		let spinwheelId = req.param('spinwheel');
		if (username && spinwheelId) {
			Spinwheel.findOne({_id: spinwheelId}).populate('channel').populate('prizes').exec(function (err, spinwheel) {
				if (err) res.ok('');
				res.ok({result: true});
				SpinWheelService.test(spinwheel.channel, username, spinwheel);
			});
		} else {
			res.ok('');
		}
	}
});

module.exports = controller;
