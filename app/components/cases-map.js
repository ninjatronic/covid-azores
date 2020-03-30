import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import config from 'covid-azores/config/environment';
import { inject as service } from '@ember/service';

export default class CasesMapComponent extends Component {
  @service geojson;
  @service constants;

  @computed('data[]')
  get latestUpdate() {
    let max=0;
    let retval = null;
    this.args.data.forEach((data) => {
      if(data.runningTotal > max) {
        max = data.runningTotal;
        retval = data;
      }
    });
    return retval;
  }

  radius(key, value) {
    let scale = d3.scaleSqrt()
      .domain([0, this.latestUpdate['runningTotal']])
      .range([0, 100]);
    return scale(value);
  };

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

		map.selectAll('path')
			.data(this.geojson[this.args.mapKey].features)
			.enter()
			.append('path')
			.attr('d', path)
			.attr('fill', d => `${this.constants.colors[d.properties.id]}`)
			.attr('fill-opacity', 1.0)

    map.append('g')
      .attr('fill', 'red')
      .attr("fill-opacity", 0.5)
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .selectAll("circle")
      .data(this.geojson[this.args.mapKey].features)
      .join("circle")
        .attr("transform", d => `translate(${path.centroid(d)})`)
        .attr("r", d => {
          let key = `${d.properties.id}RunningTotal`;
          return this.radius(d.properties.id, this.latestUpdate[key]);
        });

    map.append('text')
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .selectAll('tspan')
      .data(this.geojson[this.args.mapKey].features)
      .join('tspan')
      .attr('x', d => path.centroid(d)[0])
      .attr('y', d => path.centroid(d)[1]+18)
      .text(d => {
        return d.properties.name;
      });

  map.append('text')
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.5)
    .attr('fill', '#fff')
    .attr("fill-opacity", 1.0)
    .selectAll('tspan')
    .data(this.geojson[this.args.mapKey].features)
    .join('tspan')
    .attr('x', d => path.centroid(d)[0])
    .attr('y', d => path.centroid(d)[1])
    .text(d => {
      let key = `${d.properties.id}RunningTotal`;
      return this.latestUpdate[key];
    });
  }
}
