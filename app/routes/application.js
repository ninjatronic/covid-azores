import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store
  @service intl

  beforeModel() {
    this._super(...arguments);
    return this.intl.setLocale('pt_pt');
  }

  async model() {
    return this.store.findAll('update');
  }
}
