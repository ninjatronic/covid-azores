import Service from '@ember/service';

export default class ConstantsService extends Service {
  colors = {
    totals: '#AAA',
    saoMiguel: '#6610f2',
    santaMaria: '#6f42c1',
    faial: '#007401',
    terceira: '#00BD4E',
    pico: '#00982B',
    saoJorge: '#005100',
    graciosa: '#3FDA68',
    flores: '#0081CF',
    corvo: '#004F96',

    alert: {
      lowest: '#FD7E14',
      low: '#D25B00',
      mid: '#A83900',
      high: '#811200',
      highest: '#5E0000'
    }
  };
}
