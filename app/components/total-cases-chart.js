import CasesChartComponent from 'covid-azores/components/cases-chart'

export default class TotalCasesChartComponent extends CasesChartComponent {
  options = {
    dataSets: {
      totals: 'runningTotal',
      saoMiguel: 'saoMiguelRunningTotal',
      santaMaria: 'santaMariaRunningTotal',
      terceira: 'terceiraRunningTotal',
      faial: 'faialRunningTotal',
      pico: 'picoRunningTotal',
      saoJorge: 'saoJorgeRunningTotal',
      graciosa: 'graciosaRunningTotal',
      flores: 'floresRunningTotal',
      corvo: 'corvoRunningTotal',
    }
  };
}
