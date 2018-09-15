import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  store: service(),
  socket: service(),


  init () {
    
    let socket = this.get('socket');
    let session = this.get('session');
    let store = this.get('store');
    let model = this.get('model');
    let _this = this;

    socket.on('channel', function (msg) {
      store.query('winner', { channel: session.get('currentUser.channel'), limit: 25, sort: 'createdAt DESC' }).then(function (winners) {
        _this.set('model', winners);
      })
    });

    this._super();

  },

  actions: {
    paid (winner) {
      winner.paid();
    },

    repeat (winner) {

      winner.repeat();
    }
  }

   
});