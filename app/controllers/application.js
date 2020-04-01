import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service geojson;

  @tracked selected;

  @computed('selected', 'latestUpdate')
  get selectedTotal() {
    return this.latestUpdate[`${this.selected}RunningTotal`];
  }

  @computed('geojson.westernGroup')
  get westernGroupGeoJson() {
    return this.geojson.westernGroup;
  }

  @computed('geojson.centralGroup')
  get centralGroupGeoJson() {
    return this.geojson.centralGroup;
  }

  @computed('geojson.easternGroup')
  get easternGroupGeoJson() {
    return this.geojson.easternGroup;
  }

  @computed('model[]')
  get latestUpdate() {
    let max=0;
    let retval = null;
    this.model.forEach((data) => {
      if(data.runningTotal > max) {
        max = data.runningTotal;
        retval = data;
      }
    });
    return retval;
  }

  @computed('latestUpdate.saoMiguelRunningTotal')
  get maxCases() {
    let latestUpdate = this.latestUpdate;
    let max=0;
    if(latestUpdate.saoMiguelRunningTotal > max) {
      max = latestUpdate.saoMiguelRunningTotal;
    }
    if(latestUpdate.santaMariaRunningTotal > max) {
      max = latestUpdate.santaMariaRunningTotal;
    }
    if(latestUpdate.faialRunningTotal > max) {
      max = latestUpdate.faialRunningTotal;
    }
    if(latestUpdate.picoRunningTotal > max) {
      max = latestUpdate.picoRunningTotal;
    }
    if(latestUpdate.saoJorgeRunningTotal > max) {
      max = latestUpdate.saoJorgeRunningTotal;
    }
    if(latestUpdate.terceiraRunningTotal > max) {
      max = latestUpdate.terceiraRunningTotal;
    }
    if(latestUpdate.graciosaRunningTotal > max) {
      max = latestUpdate.graciosaRunningTotal;
    }
    if(latestUpdate.floresRunningTotal > max) {
      max = latestUpdate.floresRunningTotal;
    }
    if(latestUpdate.corvoRunningTotal > max) {
      max = latestUpdate.corvoRunningTotal;
    }
    return max;
  }

  @action
  select(id) {
    this.selected = id;
  }

  @action
  clearSelection() {
    this.selected = undefined;
  }
}
