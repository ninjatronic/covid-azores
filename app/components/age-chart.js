import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GenderChartComponent extends Component {
  @service constants;
  @service intl;

  type = 'bar';

  options = {
    legend: {
      display: false
    }
  };

  @computed('args.latestUpdate.ageZeroToNine', 'args.latestUpdate.ageTenToNineteen',
    'args.latestUpdate.ageTwentyToTwentynine', 'args.latestUpdate.ageThirtyToThirtynine',
    'args.latestUpdate.ageFortyToFortynine', 'args.latestUpdate.ageFiftyToFiftynine',
    'args.latestUpdate.ageSixtyToSixtynine', 'args.latestUpdate.ageSeventyToSeventynine',
    'args.latestUpdate.ageEightyPlus')
  get ageData() {
    return [
      this.args.latestUpdate.ageZeroToNine,
      this.args.latestUpdate.ageTenToNineteen,
      this.args.latestUpdate.ageTwentyToTwentynine,
      this.args.latestUpdate.ageThirtyToThirtynine,
      this.args.latestUpdate.ageFortyToFortynine,
      this.args.latestUpdate.ageFiftyToFiftynine,
      this.args.latestUpdate.ageSixtyToSixtynine,
      this.args.latestUpdate.ageSeventyToSeventynine,
      this.args.latestUpdate.ageEightyPlus
    ];
  }

  @computed('ageData')
  get data() {
    return {
      datasets: [{
        data: this.ageData,
        backgroundColor: [
          this.constants.colors.age.group1,
          this.constants.colors.age.group2,
          this.constants.colors.age.group3,
          this.constants.colors.age.group4,
          this.constants.colors.age.group5,
          this.constants.colors.age.group6,
          this.constants.colors.age.group7,
          this.constants.colors.age.group8,
          this.constants.colors.age.group9,
        ],
        borderColor: [this.constants.colors.muted]
      }],
      labels: [
        '0-9',
        '10-19',
        '20-29',
        '30-39',
        '40-49',
        '50-59',
        '60-69',
        '70-79',
        '80+',
      ]
    };
  }
}
