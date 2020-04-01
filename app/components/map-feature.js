import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MapFeatureComponent extends Component {

  @action
  click(event) {
    this.args.onClick(this.args.feature.properties.id);
    event.stopPropagation();
  }
}
