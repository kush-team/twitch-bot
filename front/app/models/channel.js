import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	streamElementsToken: DS.attr('string'),
	streamLabsToken: DS.attr('string'),
	streamElementsChannelId: DS.attr('string'),
	streamLabsChannelId: DS.attr('string'),
});
