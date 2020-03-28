import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import UpdateModel from 'covid-azores/models/update'

module('Unit | Serializer | backendless', function(hooks) {
  setupTest(hooks);

  let sampleFindAllPayload = [{
    objectId: '0A798745-67CE-4321-FFCE-E2E988393400',
    ___class: 'updates',
    updateDate: 1584752400000,
    created: 1585412797000,
    ownerId: null,
    updated: null,
    sao_miguel: 1,
    santa_maria: 2,
    faial: 3,
    terceira: 4,
    pico: 5,
    sao_jorge: 6,
    graciosa: 7,
    flores: 8,
    corvo: 9
  },
  {
    objectId: '19444A6D-1114-FACC-FF72-539B4105BA00',
    ___class: 'updates',
    updateDate: 1584493200000,
    created: 1585412797000,
    ownerId: null,
    updated: null,
    sao_miguel: 10,
    santa_maria: 11,
    faial: 12,
    terceira: 13,
    pico: 14,
    sao_jorge: 15,
    graciosa: 16,
    flores: 17,
    corvo: 18
  }];

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('update');

    assert.ok(serializer);
  });

  test('it normalizes findAll responses correctly', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('update');

    let serialized = serializer.normalizeResponse(store, UpdateModel, sampleFindAllPayload, null, 'findAll');

    assert.ok(serialized.data);
    assert.equal(serialized.data.length, 2)

    assert.equal(serialized.data[0].id, '0A798745-67CE-4321-FFCE-E2E988393400');
    assert.equal(serialized.data[0].type, 'update');

    assert.ok(serialized.data[0].attributes);
    assert.deepEqual(serialized.data[0].attributes.date, new Date(1584752400000));
    assert.equal(serialized.data[0].attributes.saoMiguel, 1);
    assert.equal(serialized.data[0].attributes.santaMaria, 2);
    assert.equal(serialized.data[0].attributes.faial, 3);
    assert.equal(serialized.data[0].attributes.terceira, 4);
    assert.equal(serialized.data[0].attributes.pico, 5);
    assert.equal(serialized.data[0].attributes.saoJorge, 6);
    assert.equal(serialized.data[0].attributes.graciosa, 7);
    assert.equal(serialized.data[0].attributes.flores, 8);
    assert.equal(serialized.data[0].attributes.corvo, 9);

    assert.equal(serialized.data[1].id, '19444A6D-1114-FACC-FF72-539B4105BA00');
    assert.equal(serialized.data[1].type, 'update');

    assert.ok(serialized.data[1].attributes);
    assert.deepEqual(serialized.data[1].attributes.date, new Date(1584493200000));
    assert.equal(serialized.data[1].attributes.saoMiguel, 10);
    assert.equal(serialized.data[1].attributes.santaMaria, 11);
    assert.equal(serialized.data[1].attributes.faial, 12);
    assert.equal(serialized.data[1].attributes.terceira, 13);
    assert.equal(serialized.data[1].attributes.pico, 14);
    assert.equal(serialized.data[1].attributes.saoJorge, 15);
    assert.equal(serialized.data[1].attributes.graciosa, 16);
    assert.equal(serialized.data[1].attributes.flores, 17);
    assert.equal(serialized.data[1].attributes.corvo, 18);
  });
});
