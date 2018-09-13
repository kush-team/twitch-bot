import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  router: service(),
  
  actions: {
  	save () {
  		let router = this.get('router');

  		this.get('model').save().then(function () {
  			router.transitionTo('index');
  		});
  	},

  	testStreamElements () {
  		let model = this.get('model');
  		let token = model.get('streamElementsToken');
  		//
		Ember.$.ajax({
			url: 'https://api.streamelements.com/kappa/v2/channels/me',
			type: 'GET',
			beforeSend: function (xhr) {
			    xhr.setRequestHeader ("Authorization", "Bearer " + token);
			}
		}).done(function (result) {
		  model.set('streamElementsChannelId', result._id);
		}).catch((error) => run(null, reject, error));;   		
  	}
  }    
});