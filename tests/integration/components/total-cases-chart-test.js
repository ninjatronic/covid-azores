import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | total-cases-chart', function(hooks) {
  setupRenderingTest(hooks);

  let mockModel = [{
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
      corvo: 8,
      total: 9
    },{
      id: 2,
      date: new Date(),
      saoMiguel: 0,
      santaMaria: 1,
      faial: 2,
      terceira: 3,
      pico: 4,
      saoJorge: 5,
      graciosa: 6,
      flores: 7,
      corvo: 8,
      total: 9
    }];

  test('it renders correctly', async function(assert) {
    this.set('model', mockModel);
    await render(hbs`<TotalCasesChart @data={{this.model}}/>`);

    assert.equal(this.element.textContent.trim(), 'Total Cases');
    assert.ok(this.element.querySelector('canvas'));
  });
});
