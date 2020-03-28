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
    return this.store.findAll('update').then(function(results) {

      let saoMiguelRunningTotal = 0;
      let santaMariaRunningTotal = 0;
      let faialRunningTotal = 0;
      let terceiraRunningTotal = 0;
      let picoRunningTotal = 0;
      let saoJorgeRunningTotal = 0;
      let graciosaRunningTotal = 0;
      let floresRunningTotal = 0;
      let corvoRunningTotal = 0;

      let easternGroupRunningTotal = 0;
      let centralGroupRunningTotal = 0;
      let westernGroupRunningTotal = 0;

      let runningTotal = 0;

      results.sortBy('date').forEach((result, i) => {

        saoMiguelRunningTotal += result.saoMiguel;
        result.saoMiguelRunningTotal = saoMiguelRunningTotal;

        santaMariaRunningTotal += result.santaMaria;
        result.santaMariaRunningTotal = santaMariaRunningTotal;

        faialRunningTotal += result.faial;
        result.faialRunningTotal = faialRunningTotal;

        terceiraRunningTotal += result.terceira;
        result.terceiraRunningTotal = terceiraRunningTotal;

        picoRunningTotal += result.pico;
        result.picoRunningTotal = picoRunningTotal;

        saoJorgeRunningTotal += result.saoJorge;
        result.saoJorgeRunningTotal = saoJorgeRunningTotal;

        graciosaRunningTotal += result.graciosa;
        result.graciosaRunningTotal = graciosaRunningTotal;

        floresRunningTotal += result.flores;
        result.floresRunningTotal = floresRunningTotal;

        corvoRunningTotal += result.corvo;
        result.corvoRunningTotal = corvoRunningTotal;

        easternGroupRunningTotal += result.easternGroup;
        result.easternGroupRunningTotal = easternGroupRunningTotal;

        centralGroupRunningTotal += result.centralGroup;
        result.centralGroupRunningTotal = centralGroupRunningTotal;

        westernGroupRunningTotal += result.westernGroup;
        result.westernGroupRunningTotal = westernGroupRunningTotal;

        runningTotal += result.total;
        result.runningTotal = runningTotal;

      });
      return results;
    });
  }
}
