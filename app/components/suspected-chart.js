import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SuspectedChartComponent extends Component {
  @service constants;
  @service intl

  type = 'line';

  options = {
    legend: {
      display: true
    },
    dataSets: {
      totals: 'runningTotal',
      suspected: 'suspected',
      monitored: 'monitored'
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

  @computed('this.sortedData.@each.suspected')
  get suspectedDataSet() {
    return this.getDataSet(this.options.dataSets.suspected, this.intl.t('cases_suspected'), false, this.constants.colors.status.suspected, this.constants.colors.status.suspected);
  }

  @computed('this.sortedData.@each.monitored')
  get monitoredDataSet() {
    return this.getDataSet(this.options.dataSets.monitored, this.intl.t('cases_monitored'), false, this.constants.colors.status.monitored, this.constants.colors.status.monitored);
  }

  @computed('totalsDataSet', 'suspectedDataSet', 'monitoredDataSet', 'labels')
  get data() {
    return {
      labels: this.labels,
      datasets: [
        this.totalsDataSet,
        this.suspectedDataSet,
        this.monitoredDataSet
      ]
    };
  }
}
