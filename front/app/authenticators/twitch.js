
import Base from 'ember-simple-auth/authenticators/base';
import { run } from '@ember/runloop';

export default Base.extend({
  store: Em.inject.service(),
  session: Em.inject.service(),

  authenticate(data) {
    let session = this.get('session');
    return new Promise((resolve, reject) => {
      return Ember.$.ajax({
        url: 'http://192.168.0.200:1337/auth/twitch',
        type: 'POST',
        data: {access_token: data.token}
      }).done(function (user) {
          session.set('currentUser', user);      
          run(null, resolve, data);
      }).catch((error) => run(null, reject, error));;           
    });
  },
  restore(data) {
    let session = this.get('session');
    return new Promise((resolve, reject) => {
      return Ember.$.ajax({
        url: 'http://192.168.0.200:1337/auth/twitch',
        type: 'POST',
        data: {access_token: data.token}
      }).done(function (user) {
          session.set('currentUser', user);      
          run(null, resolve, data);
      }).catch((error) => run(null, reject, error));;           
    });
  }
});