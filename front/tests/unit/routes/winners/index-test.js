import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | winners/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:winners/index');
    assert.ok(route);
  });
});
