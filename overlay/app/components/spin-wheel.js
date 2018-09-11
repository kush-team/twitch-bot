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
  channelId: null,

  init () {
    this._super();

    
    let socket = this.get('socket');
    let model = this.get('model');
    let _this = this;

    socket.subscribe('5b93ddeee3ac042998812d58');

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
  	let length = this.get('prizes.length');
  	
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

});
