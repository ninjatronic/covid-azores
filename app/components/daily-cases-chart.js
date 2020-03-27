import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class TotalCasesChartComponent extends Component {
  constructor(...args) {
    super(...args);
    this.type = 'line';
  }

  @computed('this.data.@each.date')
  get sortedData() {
    return this.args.data.sortBy('date');
  }

  @computed('this.sortedData.@each.date')
  get labels() {
    let labels = [];
    this.sortedData.forEach((update, i) => {
      let label = new moment(update.date).format('DD/MM');
      labels.push(label);
    });
    return labels;
  }

  getDataSet(key, label, fill = false) {
    let totalsData = [];
    this.sortedData.forEach((update, i) => {
      totalsData.push(update[key]);
    });
    return {
      label: label,
      data: totalsData,
      fill: fill,
      lineTension: 0.1
    }
  }

  @computed('this.sortedData.@each.total')
  get totalsDataSet() {
    return this.getDataSet('total', 'Total Cases', true);
  }

  @computed('this.sortedData.@each.saoMiguel')
  get saoMiguelDataSet() {
    return this.getDataSet('saoMiguel', 'Sao Miguel');
  }

  @computed('this.sortedData.@each.santaMaria')
  get santaMariaDataSet() {
    return this.getDataSet('santaMaria', 'Santa Maria');
  }

  @computed('this.sortedData.@each.faial')
  get faialDataSet() {
    return this.getDataSet('faial', 'Faial');
  }

  @computed('this.sortedData.@each.terceira')
  get terceiraDataSet() {
    return this.getDataSet('terceira', 'Terceira');
  }

  @computed('this.sortedData.@each.pico')
  get picoDataSet() {
    return this.getDataSet('pico', 'Pico');
  }

  @computed('this.sortedData.@each.saoJorge')
  get saoJorgeDataSet() {
    return this.getDataSet('saoJorge', 'Sao Jorge');
  }

  @computed('this.sortedData.@each.graciosa')
  get graciosaDataSet() {
    return this.getDataSet('graciosa', 'Graciosa');
  }

  @computed('this.sortedData.@each.flores')
  get floresDataSet() {
    return this.getDataSet('flores', 'Flores');
  }

  @computed('this.sortedData.@each.corvo')
  get corvoDataSet() {
    return this.getDataSet('corvo', 'Corvo');
  }

  @computed('this.labels', 'this.totalsDataSet', 'this.saoMiguelDataSet', 'this.santaMariaSataSet',
    'this.faialDataSet', 'this.terceiraDataSet', 'this.picoDataSet', 'this.saoJorgeDataSet',
    'this.graciosaDataSet', 'this.floresDataSet', 'this.corvoDataSet')
  get chartData() {
    return {
      labels: this.labels,
      datasets: [
        this.totalsDataSet,
        this.saoMiguelDataSet,
        this.santaMariaDataSet,
        this.faialDataSet,
        this.terceiraDataSet,
        this.picoDataSet,
        this.saoJorgeDataSet,
        this.graciosaDataSet,
        this.floresDataSet,
        this.corvoDataSet
      ]
    }
  }

  @computed()
  get options() {
    return {};
  }

}
