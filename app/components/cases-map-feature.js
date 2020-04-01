import MapFeatureComponent from 'covid-azores/components/map-feature';
import { computed } from '@ember/object'

export default class CasesMapFeatureComponent extends MapFeatureComponent {

  @computed('args.feature')
  get feature() {
    return this.args.feature;
  }

  @computed('feature.centroid')
  get centroid() {
    return this.feature.centroid;
  }

  @computed('args.selected', 'feature.properties.id')
  get isSelected() {
    return !this.args.selected || (this.args.selected == this.feature.properties.id);
  }

  @computed('isSelected')
  get selectedClass() {
    if(this.isSelected) {
      return 'selected';
    } else {
      return 'unselected';
    }
  }

  @computed('args.latestUpdate', 'args.maxCases',
    'feature.properties.id', 'selectedClass')
  get circleClass() {

    var latestUpdate = this.args.latestUpdate;
    var maxCases = this.args.maxCases;

    let key = `${this.feature.properties.id}RunningTotal`;
    let islandCases = latestUpdate[key];
    let ratio = islandCases/maxCases;

    let rank = 'lowest';

    if(ratio < 0.4) {
      rank = 'low';
    } else if(ratio < 0.6) {
      rank = 'mid';
    } else if(ratio < 0.8) {
      rank = 'high';
    } else {
      rank = 'highest';
    }

    return this.selectedClass + ' ' + rank;
  };

  @computed('args.latestUpdate', 'args.bubbleRadius', 'feature.properties.id')
  get circleRadius() {
    let scale = d3.scaleSqrt()
      .domain([0, this.args.maxCases])
      .range([0, this.args.bubbleRadius]);
    return scale(this.args.latestUpdate[`${this.feature.properties.id}RunningTotal`]);
  };

  @computed('centroid')
  get circleTransform() {
    if(this.centroid) {
      return `translate(${this.centroid})`;
    }
    else {
      return 'translate(0,0)';
    }
  }

  @computed('args.latestUpdate', 'feature.properties.id')
  get caseCount() {
    return this.args.latestUpdate[`${this.feature.properties.id}RunningTotal`];
  }

  @computed('feature.centroidY')
  get offsetCentroidY() {
    return this.feature.centroidY + 25;
  }
}
