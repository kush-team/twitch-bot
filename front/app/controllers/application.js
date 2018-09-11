import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  socket: service(),

  init () {
  	this.get('socket').init();
  	if (this.get('session').get('isAuthenticated')) {
  		this.get('socket').subscribe(this.get('session').get('currentUser.channel'));
  	}
  },

  subscribe: Ember.observer('session.isAuthenticated', function () {
  	if (this.get('session').get('isAuthenticated')) {
  		this.get('socket').subscribe(this.get('session').get('currentUser.channel'));
  	}
  }),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }  
});