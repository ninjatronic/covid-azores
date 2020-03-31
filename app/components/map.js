import Component from '@glimmer/component';
import { action, computed } from '@ember/object';

export default class MapComponent extends Component {

  @computed('this.args.geoJson')
  get geoJson() {
    return this.args.geoJson;
  }

  /*
   * Refines the current map scale to fit all features in the viewport
   */
  refineScale(path, geoJson, width, height, scale) {
    var bounds  = path.bounds(geoJson);
    var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
    var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
    return (hscale < vscale) ? hscale : vscale;
  };

  /*
   * Refines the current map offset to include all features in the viewport
   */
  getOffset(path, geoJson, width, height) {
      var bounds = path.bounds(geoJson);
      var offsetX = width - (bounds[0][0] + bounds[1][0])/2;
      var offsetY = height - (bounds[0][1] + bounds[1][1])/2;
      return [offsetX, offsetY];
  };

  /*
   * Creates a projection of the specified type with the given center, scale and offset
   */
  getProjection(projection, center, scale, offset) {
    return d3[projection]()
      .center(center)
      .scale(scale)
      .translate(offset);
  };

  /*
   * Creates a geoPath from the given projection
   */
  getPath(projection) {
    return d3
      .geoPath()
      .projection(projection);
  };

  beforeUpdate(path, map) {

  };

  updateFeatures(path, map) {
		var features = map
      .selectAll('path')
			.data(this.geoJson.features)
			.enter();

    features
			.append('path')
      .merge(features)
			.attr('d', path)
      .each((d, i, el) => {
        for(var key in d.properties) {
          el[i][key] = d.properties[key];
        }
      });

    features
      .exit()
      .remove();
  }

  updateLabels(path, map) {
    var labelKeys = this.args.labelKeys;
		var labels = map
        .append('text')
        .selectAll('tspan')
  			.data(this.geoJson.features)
        .enter();

    labels = labels
        .append('tspan')
        .merge(labels);

    labels
      .text(d => d.properties.name)
      .attr('x', d => path.centroid(d)[0])
      .attr('y', d => path.centroid(d)[1])

    labels
      .exit()
      .remove();
  }

  updateMap(path, map) {
      this.beforeUpdate(path, map);
      this.updateFeatures(path, map);
      this.updateLabels(path, map);
  };

  @action
  renderMap(element) {
    var width = element.getBoundingClientRect().width;
    var height = element.getBoundingClientRect().height;

    var center = d3.geoCentroid(this.geoJson)
    var scale  = 150;
    var offset = [width/2, height/2];

    var projection = this.getProjection('geoMercator', center, scale, offset);
    var path = this.getPath(projection);

    // refine fit
    scale   = this.refineScale(path, this.geoJson, width, height, scale);
    offset  = this.getOffset(path, this.geoJson, width, height);
    projection = this.getProjection('geoMercator', center, scale, offset);
    path = this.getPath(projection);

    // refine fit again including component scale
    var componentScale = this.args.scale;
    scale   = this.refineScale(path, this.geoJson, width, height, scale) * componentScale;
    offset  = this.getOffset(path, this.geoJson, width, height);
    projection = this.getProjection('geoMercator', center, scale, offset);
    path = this.getPath(projection);

    // create svg element and expand to fill component
    var map = d3.select(`#${this.args.id}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    this.updateMap.call(this, path, map);
  }
}
