import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  store: service(),
  router: service(),


  actions: {
    save() {
  	  let router = this.get('router');
      let model = this.get('model');

      this.get('store').find('channel', this.get('session').get('currentUser.channel')).then(function (channel) {
        model.set('channel', channel);
        model.save().then(function () {
          router.transitionTo('prizes.index');
        });
      })
    }
  }    
});