import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GenderChartComponent extends Component {
  @service constants;
  @service intl;

  type = 'pie';

  options = {
    legend: {
      display: true,
      align: 'left',
      onClick: null
    }
  };

  @computed('args.latestUpdate.male', 'args.latestUpdate.female')
  get genderData() {
    if(this.args.latestUpdate) {
      return [this.args.latestUpdate.male, this.args.latestUpdate.female];
    }
  }

  @computed('genderData')
  get data() {
    return {
      datasets: [{
        data: this.genderData,
        backgroundColor: [
          this.constants.colors.corvo, this.constants.colors.saoMiguel
        ],
        label: this.intl.t('genders')
      }],
      labels: [
        this.intl.t('male'), this.intl.t('female')
      ]
    };
  }
}
