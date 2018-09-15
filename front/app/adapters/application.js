import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { isPresent } from '@ember/utils';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	session: Ember.inject.service('session'),

	namespace: 'api/v1',
  	coalesceFindRequests: true,
  	host: 'http://localhost:1337',


  authorize(xhr) {
    let token = this.get('session.data.authenticated.token');
    if (token) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    }
  }
});
