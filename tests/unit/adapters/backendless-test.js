import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | backendless', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:backendless');
    assert.ok(adapter);
  });

  test('it has the correct host', function(assert) {
    let adapter = this.owner.lookup('adapter:backendless');
    assert.equal(adapter.host, 'https://api.backendless.com');
  });

  test('it has the correct namespace', function(assert) {
    let adapter = this.owner.lookup('adapter:backendless');
    assert.equal(adapter.namespace, 'backendlessAppID/backendlessAPIKey/data');
  });

  test('it gives the correct findAll URL', function(assert) {
    let adapter = this.owner.lookup('adapter:backendless');
    let result = adapter.urlForFindAll('update', null)
    assert.equal(result, 'https://api.backendless.com/backendlessAppID/backendlessAPIKey/data/updates?pageSize=100');
  });
});
