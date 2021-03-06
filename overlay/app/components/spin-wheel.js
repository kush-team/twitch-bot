import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { later, next } from '@ember/runloop';
 

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

    
    let socket = this.get('socket');
    let model = this.get('model');
    let _this = this;

    socket.subscribe(this.get('channelId'));

    socket.on('channel', function (msg) {
      if (msg.verb === "spinwheel") {
      	_this.set('winner', {name: msg.username, prize: msg.prize, spinwheel: msg.spinwheel});

        msg.prizes.forEach(function (prize, index) {
          if (prize.name === msg.prize.name) {
            _this.set('prizeWinnerIndex', index)
          }
        });

      	_this.set('prizes', msg.prizes);
        _this.set('visible', true);
        later(_this, function () {
          _this.start()
        }, 400)
      }
    });

  },

  didInsertElement () {
    this._super();
  },


  start() {

  
    let el = document.querySelector('#machine');
    let _this = this;

    let machine = new SlotMachine(el, {
      active: 2,
      delay: 500,
      auto: false,
      randomize() {
        return _this.get('prizeWinnerIndex');
      }
    });
    
    machine.shuffle(5, function (param) {
      later(_this, function () {
        _this.set('visibleWinner', true);
        _this.$('#machine').addClass('flash')
        later(_this, function () {
          _this.$('.component').addClass('slideOutLeft')
          later(_this, function() {
            _this.set('visible', false);
            _this.set('visibleWinner', false);
          }, 1500);
        }, 2000)
      }, 200)      
    });
  },


});
