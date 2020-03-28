import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from './config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${config.rootURL}/${super.buildURL(...args)}.json`;
  }
}
