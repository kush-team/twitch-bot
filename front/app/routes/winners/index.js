import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Route.extend(AuthenticatedRouteMixin, {
	store: service(),
	session: service(),

	model () {
		return this.get('store').query('winner', { channel: this.get('session').get('currentUser.channel'), limit: 25, sort: 'createdAt DESC', charged: false })
	}
});
