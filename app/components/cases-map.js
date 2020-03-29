import Component from '@glimmer/component';
import { action } from '@ember/object';
import config from 'covid-azores/config/environment';
import { inject as service } from '@ember/service';

export default class CasesMapComponent extends Component {
  @service geojson;

  @action
  renderMap(element) {
    var projection = d3
		.geoMercator()
		.scale(5500)
		.center([-26.7, 38.324]);

  	var path = d3
      .geoPath()
      .projection(projection);　

  	var map = d3
      .select("#map > svg")

		map.selectAll("path")
			.data(this.geojson.data.features)
			.enter()
			.append("path")
			.attr("d", path)
			.attr("fill", "green")
			.attr("fill-opacity", 0.5)
			.attr("stroke", "#222");
  }
}
