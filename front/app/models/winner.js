import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

export default DS.Model.extend({
	username: DS.attr('string'),
	prize: DS.belongsTo('prize'),
	charged: DS.attr('boolean'),
	channel: DS.belongsTo('channel'),


	repeat: memberAction({ 
		path: 'repeat',
		type: 'post'
	}),	

	paid: memberAction({ 
		path: 'paid',
		type: 'post'
	}),		
});
