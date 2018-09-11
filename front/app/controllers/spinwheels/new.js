import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  store: service(),
  router: service(),

  init () {
    this._super();
    this.set('prizeList', this.get('store').query('prize', {channel: this.get('session').get('currentUser.channel')}));
    this.set('scopes', this.get('store').findAll('scope'));
  },


  actions: {
    save() {
      let model = this.get('model');
      let router = this.get('router');
      
      this.get('store').find('channel', this.get('session').get('currentUser.channel')).then(function (channel) {
      	model.set('channel', channel);
      	model.save().then(function () {
          router.transitionTo('spinwheels.index');
        });
      })
    },

    updateSelection (newSelection, value, operation) {
      console.log(newSelection, value, operation);
    }
  }    
});