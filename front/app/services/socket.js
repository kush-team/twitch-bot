import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
	socket: null,
	store: service(),

	init () {
		this._super(...arguments);
		let socket = io.sails.connect('http://localhost:1337');	
		this.set('socket', socket);
	},

	subscribe (channel) {
		let socket = this.get('socket');
		let store = this.get('store');
		let _this = this;
		socket.get('/socket/subscribe', { channel: channel}, function (data){
			_this.set('isSubscribe', true);
		});
	},

	on (modelName, handler) {

		let socket = this.get('socket');
		socket.on(modelName, handler);
	}

});
