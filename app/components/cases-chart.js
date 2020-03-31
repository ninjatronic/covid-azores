import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CasesChartComponent extends Component {
  @service constants;
  @service intl

  options = {
    dataSets: {
      totals: 'total',
      saoMiguel: 'saoMiguel',
      santaMaria: 'santaMaria',
      terceira: 'terceira',
      faial: 'faial',
      pico: 'pico',
      saoJorge: 'saoJorge',
      graciosa: 'graciosa',
      flores: 'flores',
      corvo: 'corvo',
    }
  };

  constructor(...args) {
    super(...args);
    this.type = 'line';
  }

  @computed('this.args.data.@each.date')
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

  getDataSet(key, label, fill = false, borderColor = '#888', backgroundColor = '#1F1F1F') {
    let totalsData = [];
    this.sortedData.forEach((update, i) => {
      totalsData.push(update[key]);
    });
    return {
      label: label,
      data: totalsData,
      fill: fill,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      lineTension: 0.1
    }
  }

  @computed('this.sortedData.@each.total')
  get totalsDataSet() {
    return this.getDataSet(this.options.dataSets.totals, this.intl.t('total_cases'), false, this.constants.colors.totals);
  }

  @computed('this.sortedData.@each.saoMiguel')
  get saoMiguelDataSet() {
    return this.getDataSet(this.options.dataSets.saoMiguel, 'São Miguel', false, this.constants.colors.saoMiguel, this.constants.colors.saoMiguel);
  }

  @computed('this.sortedData.@each.santaMaria')
  get santaMariaDataSet() {
    return this.getDataSet(this.options.dataSets.santaMaria, 'Santa Maria', false, this.constants.colors.santaMaria, this.constants.colors.santaMaria);
  }

  @computed('this.sortedData.@each.faial')
  get faialDataSet() {
    return this.getDataSet(this.options.dataSets.faial, 'Faial', false, this.constants.colors.faial, this.constants.colors.faial);
  }

  @computed('this.sortedData.@each.terceira')
  get terceiraDataSet() {
    return this.getDataSet(this.options.dataSets.terceira, 'Terceira', false, this.constants.colors.terceira, this.constants.colors.terceira);
  }

  @computed('this.sortedData.@each.pico')
  get picoDataSet() {
    return this.getDataSet(this.options.dataSets.pico, 'Pico', false, this.constants.colors.pico, this.constants.colors.pico);
  }

  @computed('this.sortedData.@each.saoJorge')
  get saoJorgeDataSet() {
    return this.getDataSet(this.options.dataSets.saoJorge, 'São Jorge', false, this.constants.colors.saoJorge, this.constants.colors.saoJorge);
  }

  @computed('this.sortedData.@each.graciosa')
  get graciosaDataSet() {
    return this.getDataSet(this.options.dataSets.graciosa, 'Graciosa', false, this.constants.colors.graciosa, this.constants.colors.graciosa);
  }

  @computed('this.sortedData.@each.flores')
  get floresDataSet() {
    return this.getDataSet(this.options.dataSets.flores, 'Flores', false, this.constants.colors.flores, this.constants.colors.flores);
  }

  @computed('this.sortedData.@each.corvo')
  get corvoDataSet() {
    return this.getDataSet(this.options.dataSets.corvo, 'Corvo', false, this.constants.colors.corvo, this.constants.colors.corvo);
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
