import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | constants', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.ok(service);
  });

  test('it has the correct totals color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.totals, '#AAA');
  });

  test('it has the correct saoMiguel color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.saoMiguel, '#2E5EAA');
  });

  test('it has the correct santaMaria color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.santaMaria, '#416CB1');
  });

  test('it has the correct faial color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.faial, '#775D77');
  });

  test('it has the correct terceira color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.terceira, '#866F86');
  });

  test('it has the correct pico color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.pico, '#684B68');
  });

  test('it has the correct saoJorge color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.saoJorge, '#593959');
  });

  test('it has the correct graciosa color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.graciosa, '#513451');
  });

  test('it has the correct flores color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.flores, '#76B041');
  });

  test('it has the correct corvo color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.corvo, '#82B752');
  });
});
