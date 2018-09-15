import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

export default DS.Model.extend({
	name: DS.attr('string'),
	channel: DS.belongsTo('channel'),
	prizes: DS.hasMany('prize', { async: true }),
	scope: DS.belongsTo('scope'),

	test: memberAction({ 
		path: 'test',
		type: 'post'
	}),
});
