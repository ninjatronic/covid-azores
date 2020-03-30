import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class TotalCasesLabelComponent extends Component {
  @computed('data[]')
  get latestUpdate() {
    let max=0;
    let retval = null;
    this.args.data.forEach((data) => {
      if(data.runningTotal > max) {
        max = data.runningTotal;
        retval = data;
      }
    });
    return retval;
  }

  @computed('latestUpdate.total')
  get total() {
    return this.latestUpdate.runningTotal;
  }

}
