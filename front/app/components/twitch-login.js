export default Ember.Component.extend({
  twitchLoginUrl: Ember.computed(function () {
    return `https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=kr2lyd6vjap0nmoxlmrx0316klx8an&scope=user_read+channel_read&redirect_uri=http://localhost:4200/login`;
  }),

  actions: {
    authWithTwitch() {
      window.open(this.get('twitchLoginUrl'), '_self');
    }
  }
});