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

  @computed('this.sortedData.@each.runningTotal')
  get totalsDataSet() {
    return this.getDataSet('runningTotal', 'Total Cases', true);
    // let totalsData = [];
    // this.sortedData.forEach((update, i) => {
    //   totalsData.push(update.runningTotal);
    // });
    // return {
    //   label: "Total Cases",
    //   data: totalsData,
    //   fill: true,
    //   lineTension: 0.1
    // }
  }

  @computed('this.sortedData.@each.saoMiguelRunningTotal')
  get saoMiguelDataSet() {
    return this.getDataSet('saoMiguelRunningTotal', 'Sao Miguel');
  }

  @computed('this.sortedData.@each.santaMariaRunningTotal')
  get santaMariaDataSet() {
    return this.getDataSet('santaMariaRunningTotal', 'Santa Maria');
  }

  @computed('this.sortedData.@each.faialRunningTotal')
  get faialDataSet() {
    return this.getDataSet('faialRunningTotal', 'Faial');
  }

  @computed('this.sortedData.@each.terceiraRunningTotal')
  get terceiraDataSet() {
    return this.getDataSet('terceiraRunningTotal', 'Terceira');
  }

  @computed('this.sortedData.@each.picoRunningTotal')
  get picoDataSet() {
    return this.getDataSet('picoRunningTotal', 'Pico');
  }

  @computed('this.sortedData.@each.saoJorgeRunningTotal')
  get saoJorgeDataSet() {
    return this.getDataSet('saoJorgeRunningTotal', 'Sao Jorge');
  }

  @computed('this.sortedData.@each.graciosaRunningTotal')
  get graciosaDataSet() {
    return this.getDataSet('graciosaRunningTotal', 'Graciosa');
  }

  @computed('this.sortedData.@each.floresRunningTotal')
  get floresDataSet() {
    return this.getDataSet('floresRunningTotal', 'Flores');
  }

  @computed('this.sortedData.@each.corvoRunningTotal')
  get corvoDataSet() {
    return this.getDataSet('corvoRunningTotal', 'Corvo');
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
