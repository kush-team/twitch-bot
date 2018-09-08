import DS from 'ember-data';

export default DS.Model.extend({
	twitch_id: DS.attr('string'),
	channel: DS.attr('string'),
	display_name: DS.attr('string'),
	avatar: DS.attr('string')
});
