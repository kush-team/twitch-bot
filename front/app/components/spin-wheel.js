import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default Component.extend({
  socket: service(),
  winner: null,
  visible: false,
  currentPrize: null,
  timerRamdon: null,
  count: 0,
  visibleWinner: false,


  init () {
    this._super();

    if (this.get('testing'))
    	return;
    
    let socket = this.get('socket');
    let session = this.get('session');
    let store = this.get('store');
    let model = this.get('model');
    let _this = this;

    socket.on('channel', function (msg) {
    	_this.set('winner', {name: msg.username, prize: msg.prize});
    	_this.set('prizes', msg.prizes);
    	_this.start();
    });


  },


  start() {
  	this.set('visible', true);
  	this.set('count', 0);
  	this.ramdonPrize();
  },

  ramdonPrize () {
  	let prizes = this.get('prizes');
  	let length = this.get('prizes.length') || this.get('prizes.content.length');
  	
	this.set('currentPrize', prizes.objectAt(Math.floor(Math.random() * length)));
  	later(this, function() {
  		this.set('count', this.get('count') + 1);
  		if (this.get('count') < 50)
  			this.ramdonPrize();
  		else {
  		   this.set('visible', false);
  		   this.set('visibleWinner', true);
  		   later(this, function () {
  		   		this.set('visibleWinner', false);
  		   }, 2500);
  		}
	}, 300);
  },


 actions: {
 	test () {
    	this.set('prizes', this.get('spinwheel').get('prizes'));
    	this.set('winner', {name: 'Twitch-Bot', prize: this.get('spinwheel').get('prizes').objectAt(Math.floor(Math.random() * this.get('spinwheel').get('prizes.content.length')))});
    	this.start();
 	}
 }


});
