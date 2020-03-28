import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class SnapshotComponent extends Component {
  getAggregate(key) {
    let total = 0;
    this.args.data.forEach((update, i) => {
      total += update[key];
    });
    return total;
  }

  @computed('this.data.@each.total')
  get total() {
    return this.getAggregate('total');
  }

  @computed('this.data.@each.saoMiguel')
  get saoMiguel() {
    return this.getAggregate('saoMiguel');
  }

  @computed('this.data.@each.santaMaria')
  get santaMaria() {
    return this.getAggregate('santaMaria');
  }

  @computed('this.data.@each.faial')
  get faial() {
    return this.getAggregate('faial');
  }

  @computed('this.data.@each.terceira')
  get terceira() {
    return this.getAggregate('terceira');
  }

  @computed('this.data.@each.pico')
  get pico() {
    return this.getAggregate('pico');
  }

  @computed('this.data.@each.saoJorge')
  get saoJorge() {
    return this.getAggregate('saoJorge');
  }

  @computed('this.data.@each.graciosa')
  get graciosa() {
    return this.getAggregate('graciosa');
  }

  @computed('this.data.@each.flores')
  get flores() {
    return this.getAggregate('flores');
  }

  @computed('this.data.@each.corvo')
  get corvo() {
    return this.getAggregate('corvo');
  }
}
