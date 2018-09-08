import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | prizes/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:prizes/edit');
    assert.ok(route);
  });
});
