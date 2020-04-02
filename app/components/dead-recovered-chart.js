import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DeadRecoveredChartComponent extends Component {
  @service constants;
  @service intl

  type = 'line';

  options = {
    legend: {
      display: false
    },
    dataSets: {
      totals: 'runningTotal',
      infected: 'infected',
      dead: 'dead',
      recovered: 'recovered'
    }
  };

  @computed('args.data.@each.date')
  get sortedData() {
    return this.args.data.sortBy('date');
  }

  @computed('sortedData.@each.date')
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

  @computed('totalsDataSet', 'deadDataSet', 'recoveredDataSet')
  get infectedDataSet() {
    let infectedData = [];
    this.totalsDataSet.data.forEach((update, i) => {
      infectedData.push(this.totalsDataSet.data[i]-this.deadDataSet.data[i]-this.recoveredDataSet.data[i])
    });
    return {
      label: this.intl.t('cases_infected'),
      data: infectedData,
      fill: false,
      borderColor: this.constants.colors.status.infected,
      backgroundColor: this.constants.colors.status.infected,
      lineTension: 0.1
    }
  }

  @computed('this.sortedData.@each.dead')
  get deadDataSet() {
    return this.getDataSet(this.options.dataSets.dead, this.intl.t('cases_dead'), false, this.constants.colors.status.dead, this.constants.colors.status.dead);
  }

  @computed('this.sortedData.@each.recovered')
  get recoveredDataSet() {
    return this.getDataSet(this.options.dataSets.recovered, this.intl.t('cases_recovered'), false, this.constants.colors.status.recovered, this.constants.colors.status.recovered);
  }

  data = {
    labels: this.labels,
    datasets: [
      this.totalsDataSet,
      this.infectedDataSet,
      this.deadDataSet,
      this.recoveredDataSet
    ]
  };
}
