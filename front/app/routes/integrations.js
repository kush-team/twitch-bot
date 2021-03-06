import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Route.extend(AuthenticatedRouteMixin, {
	session: service(),
	store: service(),

	model () {
		return this.get('store').find('channel', this.get('session.currentUser.channel'));
	}
});
