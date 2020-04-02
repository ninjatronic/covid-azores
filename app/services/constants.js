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
      group1: '#6443BC',
      group2: '#5E44BB',
      group3: '#5645B7',
      group4: '#4647B2',
      group5: '#3649AB',
      group6: '#274AA5',
      group7: '#1B4CA0',
      group8: '#0C4E9B',
      group9: '#004F96'
    },

    status: {
      dead: '#811200',
      recovered: '#00982B',
      infected: '#A83900',
      suspected: '#6610f2',
      monitored: '#00982B'
    }
  };
}
