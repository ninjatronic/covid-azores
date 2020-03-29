import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import config from 'covid-azores/config/environment';
import { inject as service } from '@ember/service';

export default class CasesMapComponent extends Component {
  @service geojson;

  @action
  renderMap(element) {
    var projection = d3
		.geoMercator()
		.scale(this.args.scale)
		.center([this.args.longitude, this.args.latitude]);

  	var path = d3
      .geoPath()
      .projection(projection);

  	var map = d3
      .select(`#${this.args.id} > svg`)

		map.selectAll("path")
			.data(this.geojson[this.args.mapKey].features)
			.enter()
			.append("path")
			.attr("d", path)
			.attr("fill", "green")
			.attr("fill-opacity", 0.5)
			.attr("stroke", "#222");
  }
}
