import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api/v1',
  	coalesceFindRequests: true,
  	host: 'http://localhost:1337',
});
