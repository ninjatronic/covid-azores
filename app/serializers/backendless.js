import JSONAPISerializer from '@ember-data/serializer/json-api';
import { singularize, pluralize } from 'ember-inflector';
import { camelize, dasherize } from '@ember/string';

export default class BackendlessSerializer extends JSONAPISerializer {
  primaryKey = 'objectId';

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.forEach((item, i) => {
      item.attributes = item;
      for(var key in item.attributes) {
        item.attributes[dasherize(key)] = item.attributes[key];
      }
      item.type = singularize(item.attributes.___class);
      item.objectId = item.attributes.objectId;
    });

    payload = {
      data: payload
    };

    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
 }

}
