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
    muted: '#888',

    alert: {
      lowest: '#FD7E14',
      low: '#D25B00',
      mid: '#A83900',
      high: '#811200',
      highest: '#5E0000'
    },

    age: {
      group1: '#66B2E2',
      group2: '#4CA6DD',
      group3: '#3399D8',
      group4: '#198CD3',
      group5: '#0080CF',
      group6: '#0073BA',
      group7: '#0066A5',
      group8: '#005990',
      group9: '#004C7C'
    }
  };
}
