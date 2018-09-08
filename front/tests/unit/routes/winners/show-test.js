import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | winners/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:winners/show');
    assert.ok(route);
  });
});
