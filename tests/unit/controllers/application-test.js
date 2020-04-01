import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  let mockModel = [{
      id: 1,
      date: new Date('15/3/2020'),
      saoMiguel: 0,
      santaMaria: 1,
      faial: 2,
      terceira: 3,
      pico: 4,
      saoJorge: 5,
      graciosa: 6,
      flores: 7,
      corvo: 8,
      total: 9,
      saoMiguelRunningTotal:20,
      santaMariaRunningTotal:21,
      faialRunningTotal:22,
      terceiraRunningTotal:23,
      picoRunningTotal:24,
      saoJorgeRunningTotal:25,
      graciosaRunningTotal:26,
      floresRunningTotal:27,
      corvoRunningTotal:28,
      runningTotal: 400
    },{
      id: 2,
      date: new Date('18/3/2020'),
      saoMiguel: 0,
      santaMaria: 1,
      faial: 2,
      terceira: 3,
      pico: 4,
      saoJorge: 5,
      graciosa: 6,
      flores: 7,
      corvo: 8,
      total: 9,
      saoMiguelRunningTotal:30,
      santaMariaRunningTotal:31,
      faialRunningTotal:32,
      terceiraRunningTotal:33,
      picoRunningTotal:34,
      saoJorgeRunningTotal:35,
      graciosaRunningTotal:36,
      floresRunningTotal:37,
      corvoRunningTotal:38,
      runningTotal: 800
    }];

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  test('it exposes the correct geoJson objects', function(assert) {
    let controller = this.owner.lookup('controller:application');
    let geoJson = this.owner.lookup('service:geojson');
    assert.equal(controller.westernGroupGeoJson, geoJson.westernGroup);
    assert.equal(controller.centralGroupGeoJson, geoJson.centralGroup);
    assert.equal(controller.easternGroupGeoJson, geoJson.easternGroup);
  });

  test('it exposes the correct latestUpdate object', function(assert) {
    let controller = this.owner.lookup('controller:application');
    let geoJson = this.owner.lookup('service:geojson');
    controller.model = mockModel;
    assert.equal(controller.latestUpdate.runningTotal, 800);
  });

  test('it exposes the correct maxCases count', function(assert) {
    let controller = this.owner.lookup('controller:application');
    let geoJson = this.owner.lookup('service:geojson');
    controller.model = mockModel;
    assert.equal(controller.latestUpdate.corvoRunningTotal, controller.maxCases);
  });

});
