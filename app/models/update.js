import Model, { attr } from '@ember-data/model';

export default class UpdateModel extends Model {
  @attr('date') date;
  @attr('number') saoMiguel;
  @attr('number') santaMaria;
  @attr('number') faial;
  @attr('number') terceira;
  @attr('number') pico;
  @attr('number') saoJorge;
  @attr('number') graciosa;
  @attr('number') flores;
  @attr('number') corvo;
}
