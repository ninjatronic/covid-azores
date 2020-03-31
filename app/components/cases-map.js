import MapComponent from 'covid-azores/components/map';

export default class CasesMapComponent extends MapComponent {

  updateLabels(path, map) {

    var latestUpdate = this.args.latestUpdate;

    map.append('text')
      .selectAll('tspan')
      .data(this.geoJson.features)
      .join('tspan')
      .attr('x', d => path.centroid(d)[0])
      .attr('y', d => path.centroid(d)[1]+36)
      .text(d => {
        return d.properties.name;
      });

    map.append('text')
    .selectAll('tspan')
    .data(this.geoJson.features)
    .join('tspan')
    .attr('class', 'large')
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

  circleClass(d) {

    var latestUpdate = this.args.latestUpdate;
    var maxCases = this.args.maxCases;

    let key = `${d.properties.id}RunningTotal`;
    let islandCases = latestUpdate[key];
    let ratio = islandCases/maxCases;
    if(ratio < 0.2) {
      return 'lowest';
    } else if(ratio < 0.4) {
      return 'low';
    } else if(ratio < 0.6) {
      return 'mid';
    } else if(ratio < 0.8) {
      return 'high';
    } else {
      return 'highest';
    }
  };

  radius(key, value) {
    let scale = d3.scaleSqrt()
      .domain([0, this.args.latestUpdate['runningTotal']])
      .range([0, this.args.bubbleRadius]);
    return scale(value);
  };

  beforeUpdate(path, map) {
    map.append('g')
      .selectAll("circle")
      .data(this.geoJson.features)
      .join("circle")
        .attr('class', d => this.circleClass(d))
        .attr("stroke", d => this.circleClass(d))
        .attr("transform", d => `translate(${path.centroid(d)})`)
        .transition()
        .ease(d3.easeLinear)
        .duration(500)
        .attr("r", d => {
          let key = `${d.properties.id}RunningTotal`;
          return this.radius(d.properties.id, this.args.latestUpdate[key]);
        });
  };

}
