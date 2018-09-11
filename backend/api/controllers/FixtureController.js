const scopes = [{
		name: 'New Subscribers min tier 1',
		eventName: 'subcription',
		minTier: 1	
	}, {
		name: 'Resubscribers min tier 1 2/5 months',
		eventName: 'resub',
		minMonths: 2,
		maxMonths: 5,
		minTier: 1,
	}, {
		name: 'Resubscribers min tier 1 6/11 months',
		eventName: 'resub',
		minMonths: 6,
		maxMonths: 11,
		minTier: 1,
	}, {
		name: 'Resubscribers min tier 1 12/120 months',
		eventName: 'resub',
		minMonths: 12,
		maxMonths: 120,
		minTier: 1,
	}, {
		name: 'Cheer min 100 bits',
		eventName: 'cheer',
		minAmount: 100,
		maxAmount: 1000000		
	}];


const SailsEmber = require('sails-ember-rest');
const controller = new SailsEmber.controller({
	load: function () {		
		Scope.createEach(scopes).exec(function (err, scopes) {
	
		});
	}
});

module.exports = controller;
