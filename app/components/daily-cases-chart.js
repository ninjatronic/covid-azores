import CasesChartComponent from 'covid-azores/components/cases-chart'

export default class TotalCasesChartComponent extends CasesChartComponent {
  options = {
    legend: {
      display: false
    },
    dataSets: {
      totals: 'total',
      saoMiguel: 'saoMiguel',
      santaMaria: 'santaMaria',
      terceira: 'terceira',
      faial: 'faial',
      pico: 'pico',
      saoJorge: 'saoJorge',
      graciosa: 'graciosa',
      flores: 'flores',
      corvo: 'corvo',
    }
  };
}
