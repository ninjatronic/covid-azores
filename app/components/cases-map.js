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

    var geoJson = this.geojson[this.args.mapKey];

    var width = element.children[0].getBoundingClientRect().width;
    var height = element.children[0].getBoundingClientRect().height;

    var center = d3.geoCentroid(geoJson)
    var scale  = 150;
    var offset = [width/2, height/2];

    var projection = d3.geoMercator()
      .scale(scale)
      .center(center)
      .translate(offset);

  	var path = d3
      .geoPath()
      .projection(projection);

  	var map = d3
      .select(`#${this.args.id} > svg`)

    var bounds  = path.bounds(geoJson);
    var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
    var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
    scale   = (hscale < vscale) ? hscale : vscale;
    offset  = [width - (bounds[0][0] + bounds[1][0])/2,
                      height - (bounds[0][1] + bounds[1][1])/2];

    projection = d3.geoMercator()
      .center(center)
      .scale(scale)
      .translate(offset);

  	path = d3
      .geoPath()
      .projection(projection);

    bounds  = path.bounds(geoJson);
    hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
    vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
    scale   = (hscale < vscale) ? hscale : vscale;
    offset  = [width - (bounds[0][0] + bounds[1][0])/2,
                      height - (bounds[0][1] + bounds[1][1])/2];

    var componentScale = this.args.scale;

    console.log(scale);
    console.log(componentScale);

    projection = d3.geoMercator()
      .center(center)
      .scale(componentScale*(scale - (scale/10)))
      .translate(offset);

  	path = d3
      .geoPath()
      .projection(projection);

    map.on("click", function() {
      var coords = d3.mouse(this);
      console.log(coords, projection.invert(coords));
    });

    map.append('g')
      .attr('fill', '#fff')
      .attr("fill-opacity", 0.2)
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .selectAll("circle")
      .data(geoJson.features)
      .join("circle")
        .attr("transform", d => `translate(${path.centroid(d)})`)
        .attr("r", d => {
          let key = `${d.properties.id}RunningTotal`;
          return this.radius(d.properties.id, this.latestUpdate[key]);
        });

		map.selectAll('path')
			.data(geoJson.features)
			.enter()
			.append('path')
			.attr('d', path)
			.attr('fill', d => `${this.constants.colors[d.properties.id]}`)
			.attr('fill-opacity', 1.0)

    map.append('text')
      .attr('stroke', '#FFF')
      .attr('stroke-width', 0.5)
      .attr('fill', '#FFF')
      .attr("fill-opacity", 1.0)
      .selectAll('tspan')
      .data(geoJson.features)
      .join('tspan')
      .attr('x', d => path.centroid(d)[0])
      .attr('y', d => path.centroid(d)[1]+18)
      .text(d => {
        return d.properties.name;
      });

  map.append('text')
    .attr('stroke', '#FFF')
    .attr('stroke-width', 0.5)
    .attr('fill', '#FFF')
    .attr("fill-opacity", 1.0)
    .selectAll('tspan')
    .data(geoJson.features)
    .join('tspan')
    .attr('x', d => path.centroid(d)[0])
    .attr('y', d => path.centroid(d)[1])
    .text(d => {
      let key = `${d.properties.id}RunningTotal`;
      return this.latestUpdate[key];
    });
  }
}
