import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | update', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('update', {});
    assert.ok(model);
  });

  test('it has the correct easternGroup value', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('update', {
      id: 1,
      date: new Date(),
      saoMiguel: 0,
      santaMaria: 1,
      faial: 2,
      terceira: 3,
      pico: 4,
      saoJorge: 5,
      graciosa: 6,
      flores: 7,
      corvo: 8
    });

    assert.equal(record.easternGroup, 1);
  });

  test('it has the correct centralGroup value', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('update', {
      id: 1,
      date: new Date(),
      saoMiguel: 0,
      santaMaria: 1,
      faial: 2,
      terceira: 3,
      pico: 4,
      saoJorge: 5,
      graciosa: 6,
      flores: 7,
      corvo: 8
    });

    assert.equal(record.centralGroup, 20);
  });

  test('it has the correct westernGroup value', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('update', {
      id: 1,
      date: new Date(),
      saoMiguel: 0,
      santaMaria: 1,
      faial: 2,
      terceira: 3,
      pico: 4,
      saoJorge: 5,
      graciosa: 6,
      flores: 7,
      corvo: 8
    });

    assert.equal(record.westernGroup, 15);
  });
});
