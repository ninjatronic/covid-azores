import JSONAPISerializer from '@ember-data/serializer/json-api';
import { singularize, pluralize } from 'ember-inflector';
import { camelize, dasherize } from '@ember/string';

export default class BackendlessSerializer extends JSONAPISerializer {
  primaryKey = 'objectId';

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var newPayload = [];

    console.log(this.keyForAttribute('age1019', 'deserialize'))

    payload.forEach((item, i) => {
      var newItem = {
        attributes: {}
      };
      for(var key in item) {
        newItem.attributes[dasherize(key)] = item[key];
      }
      newItem.attributes.date = item.updateDate;
      newItem.type = singularize(item.___class);
      newItem.objectId = item.objectId;
      newPayload.push(newItem);
    });

    payload = {
      data: newPayload
    };

    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
 }

}
