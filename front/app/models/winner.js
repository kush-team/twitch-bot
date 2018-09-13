import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	prize: DS.belongsTo('prize'),
	charged: DS.attr('boolean'),
	channel: DS.belongsTo('channel')
});
