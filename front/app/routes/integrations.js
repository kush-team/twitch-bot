import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session: service(),
	store: service(),

	model () {
		return this.get('store').find('channel', this.get('session.currentUser.channel'));
	}
});
