import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class UpdateModel extends Model {
  @attr('date') date;

  @attr('number') total;
  @attr('number') saoMiguel;
  @attr('number') santaMaria;
  @attr('number') faial;
  @attr('number') terceira;
  @attr('number') pico;
  @attr('number') saoJorge;
  @attr('number') graciosa;
  @attr('number') flores;
  @attr('number') corvo;

  @attr('number') runningTotal;
  @attr('number') saoMiguelRunningTotal;
  @attr('number') santaMariaRunningTotal;
  @attr('number') faialRunningTotal;
  @attr('number') terceiraRunningTotal;
  @attr('number') picoRunningTotal;
  @attr('number') saoJorgeRunningTotal;
  @attr('number') graciosaRunningTotal;
  @attr('number') floresRunningTotal;
  @attr('number') corvoRunningTotal;

  @attr('number') male;
  @attr('number') female;

  @attr('number') ageZeroToNine;
  @attr('number') ageTenToNineteen;
  @attr('number') ageTwentyToTwentynine;
  @attr('number') ageThirtyToThirtynine;
  @attr('number') ageFortyToFortynine;
  @attr('number') ageFiftyToFiftynine;
  @attr('number') ageSixtyToSixtynine;
  @attr('number') ageSeventyToSeventynine;
  @attr('number') ageEightyPlus;
  @attr('number') ageNd;

}
