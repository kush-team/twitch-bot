import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	eventName: DS.attr('string'),
	minTier: DS.attr('number'),
	minMonths: DS.attr('number'),
	maxMonths: DS.attr('number'),
	minAmount: DS.attr('number'),
	maxAmount: DS.attr('number')	
});
