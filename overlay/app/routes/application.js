import Route from '@ember/routing/route';

export default Route.extend({
	setupController (controller, model) {
		let channelId = document.location.search.split('=')[1];
		controller.set('channelId', channelId);
		this._super(controller, model);
	}
});
