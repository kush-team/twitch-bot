import Ember from 'ember';

export default Ember.Route.extend({
  session: Em.inject.service(),
  
  model(params, transition) {
    let tokenHash = document.location.hash.substr(1);
    let tokenValue = tokenHash.substr(tokenHash.indexOf('access_token=')).split('&')[0].split('=')[1];
    this.get('session')
      .authenticate('authenticator:twitch', {token: tokenValue})
      .then(() =>  {
        this.transitionTo('index');
      })
      .catch(function(error) { console.log("error", error);});
  }
});