import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class UpdateModel extends Model {
  @attr('date') date;
  @attr('number') saoMiguel;
  @attr('number') santaMaria;
  @attr('number') faial;
  @attr('number') terceira;
  @attr('number') pico;
  @attr('number') saoJorge;
  @attr('number') graciosa;
  @attr('number') flores;
  @attr('number') corvo;

  @computed('saoMiguel', 'santaMaria')
  get easternGroup() {
    return this.saoMiguel + this.santaMaria;
  }

  @computed('faial', 'terceira', 'pico', 'saoJorge', 'graciosa')
  get centralGroup() {
    return this.faial + this.terceira + this.pico + this.saoJorge + this.graciosa;
  }

  @computed('flores', 'corvo')
  get westernGroup() {
    return this.flores + this.corvo;
  }

  @computed('easternGroup', 'centralGroup', 'westernGroup')
  get total() {
    return this.easternGroup + this.centralGroup + this.westernGroup;
  }
}
