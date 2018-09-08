export default Ember.Component.extend({
  twitchLoginUrl: Ember.computed(function () {
    return `https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=YOUR_CLIENT_ID&scope=user_read+channel_read&redirect_uri=http://localhost:4200/login`;
  }),

  actions: {
    authWithTwitch() {
      window.open(this.get('twitchLoginUrl'), '_self');
    }
  }
});