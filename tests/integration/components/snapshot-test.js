import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { A } from '@ember/array';

module('Integration | Component | snapshot', function(hooks) {
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
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('model', mockModel);

    await render(hbs`<Snapshot @data={{this.model}}/>`);

    assert.equal(this.element.textContent.trim().replace(/\s\s+/g, " "),
    'Total São Miguel Santa Maria Faial Terceira Pico São Jorge Graciosa Flores Corvo 18 0 2 4 6 8 10 12 14 16');

    console.log(this.element.querySelector('td'))
  });
});
