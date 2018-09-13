import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	stock: DS.attr('number'),
	channel: DS.belongsTo('channel'),
	type: DS.belongsTo('prizetype')
});
