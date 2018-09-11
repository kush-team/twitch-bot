import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    test(spinwheel) {
      Ember.$.ajax({
        url: 'http://localhost:1337/api/v1/spinwheels/test',
        type: 'POST',
        data: {username: 'Testing', channel: this.get('session.currentUser.channel'), spinwheel: spinwheel.get('id')}
      }).done(function (result) {
          console.log(result);
      }).catch((error) => run(null, reject, error));;           
    },
  }    
});