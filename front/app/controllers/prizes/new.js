import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  store: service(),
  router: service(),

  init () {
    this._super()
    let _this = this;

    this.set('types', this.get('store').findAll('prizetype'));
    
    this.get('store').find('channel', this.get('session').get('currentUser.channel')).then(function (channel) { 
      _this.set('channel', channel);
    });
  },


  typesAvailable: Ember.computed('channel', 'types.@each', function () {
    return this.get('types');
  }),


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