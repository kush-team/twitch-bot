import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | spinwheels/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:spinwheels/new');
    assert.ok(route);
  });
});
