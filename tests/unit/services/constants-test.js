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
    assert.equal(service.colors.saoMiguel, '#6610f2');
  });

  test('it has the correct santaMaria color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.santaMaria, '#6f42c1');
  });

  test('it has the correct faial color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.faial, '#007401');
  });

  test('it has the correct terceira color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.terceira, '#00BD4E');
  });

  test('it has the correct pico color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.pico, '#00982B');
  });

  test('it has the correct saoJorge color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.saoJorge, '#005100');
  });

  test('it has the correct graciosa color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.graciosa, '#3FDA68');
  });

  test('it has the correct flores color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.flores, '#0081CF');
  });

  test('it has the correct corvo color', function(assert) {
    let service = this.owner.lookup('service:constants');
    assert.equal(service.colors.corvo, '#004F96');
  });
});
