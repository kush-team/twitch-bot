import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	channel: DS.belongsTo('channel'),
	prizes: DS.hasMany('prize', { async: true })
});
