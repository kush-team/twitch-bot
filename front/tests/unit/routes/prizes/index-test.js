import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | prizes/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:prizes/index');
    assert.ok(route);
  });
});
