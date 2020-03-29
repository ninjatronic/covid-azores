import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | geojson', function(hooks) {
  setupTest(hooks);

  test('it contains geoJson', function(assert) {
    let service = this.owner.lookup('service:geojson');
    assert.equal(service.data.type, 'FeatureCollection');
  });

});
