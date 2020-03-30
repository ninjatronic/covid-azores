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

  @computed('latestUpdate.saoMiguelRunningUpdate', 'latestUpdate.santaMariaRunningUpdate', 'latestUpdate.faialRunningUpdate',
  'latestUpdate.picoRunningUpdate', 'latestUpdate.saoJorgeRunningUpdate', 'latestUpdate.terceiraRunningUpdate',
  'latestUpdate.graciosaRunningUpdate', 'latestUpdate.floresRunningUpdate', 'latestUpdate.corvoRunningUpdate')
  get maxCases() {
    let max=0;
    this.args.data.forEach((data) => {
      if(data.saoMiguelRunningTotal > max) {
        max = data.saoMiguelRunningTotal;
      }
      if(data.santaMariaRunningTotal > max) {
        max = data.santaMariaRunningTotal;
      }
      if(data.faialRunningTotal > max) {
        max = data.faialRunningTotal;
      }
      if(data.picoRunningTotal > max) {
        max = data.picoRunningTotal;
      }
      if(data.saoJorgeRunningTotal > max) {
        max = data.saoJorgeRunningTotal;
      }
      if(data.terceiraRunningTotal > max) {
        max = data.terceiraRunningTotal;
      }
      if(data.graciosaRunningTotal > max) {
        max = data.graciosaRunningTotal;
      }
      if(data.floresRunningTotal > max) {
        max = data.floresRunningTotal;
      }
      if(data.corvoRunningTotal > max) {
        max = data.corvoRunningTotal;
      }
    });
    return max;
  }

  radius(key, value) {
    let scale = d3.scaleSqrt()
      .domain([0, this.latestUpdate['runningTotal']])
      .range([0, 120]);
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

    projection = d3.geoMercator()
      .center(center)
      .scale(componentScale*(scale - (scale/10)))
      .translate(offset);

  	path = d3
      .geoPath()
      .projection(projection);

  	var map = d3
      .select(`#${this.args.id} > svg`)

    var latestUpdate = this.latestUpdate;
    var alertColors = this.constants.colors.alert;
    var maxCases = this.maxCases;

    var circleColor = function(d) {
      let key = `${d.properties.id}RunningTotal`;
      let islandCases = latestUpdate[key];
      let totalCases = latestUpdate.runningTotal;
      let ratio = islandCases/maxCases;
      if(ratio < 0.2) {
        return `${alertColors.lowest}`;
      } else if(ratio < 0.4) {
        return `${alertColors.low}`;
      } else if(ratio < 0.6) {
        return `${alertColors.mid}`;
      } else if(ratio < 0.8) {
        return `${alertColors.high}`;
      } else {
        return `${alertColors.highest}`;
      }
    };

    map.append('g')
      .selectAll("circle")
      .data(geoJson.features)
      .join("circle")
        .attr('fill', d => circleColor(d))
        .attr("fill-opacity", 0.8)
        .attr("stroke", d => circleColor(d))
        .attr("stroke-width", 0.8)
        .attr("transform", d => `translate(${path.centroid(d)})`)
        .attr("r", d => {
          let key = `${d.properties.id}RunningTotal`;
          return this.radius(d.properties.id, latestUpdate[key]);
        });

		map.selectAll('path')
			.data(geoJson.features)
			.enter()
			.append('path')
			.attr('d', path)
			.attr('fill', d => `${this.constants.colors[d.properties.id]}`)
			.attr('fill-opacity', 1.0)

    map.append('text')
      .attr('stroke', '#D9E5D6')
      .attr('stroke-width', 0.5)
      .attr('fill', '#D9E5D6')
      .attr("fill-opacity", 1.0)
      .attr("font-size", '1.2em')
      .selectAll('tspan')
      .data(geoJson.features)
      .join('tspan')
      .attr('x', d => path.centroid(d)[0])
      .attr('y', d => path.centroid(d)[1]+36)
      .text(d => {
        return d.properties.name;
      });

  map.append('text')
    .attr('stroke', '#FFF')
    .attr('stroke-width', 0.5)
    .attr('fill', '#FFF')
    .attr("fill-opacity", 1.0)
    .attr("font-size", '2.8em')
    .selectAll('tspan')
    .data(geoJson.features)
    .join('tspan')
    .attr('x', d => path.centroid(d)[0])
    .attr('y', d => path.centroid(d)[1])
    .text(d => {
      let key = `${d.properties.id}RunningTotal`;
      let total = latestUpdate[key];
      if(total > 0) {
        return latestUpdate[key];
      }
    });
  }
}
