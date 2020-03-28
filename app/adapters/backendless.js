import JSONAPIAdapter from '@ember-data/adapter/json-api'
import config from 'covid-azores/config/environment';

export default class BackendlessAdapter extends JSONAPIAdapter {

  host = 'https://api.backendless.com';
  namespace = `${config.backendless.appID}/${config.backendless.apiKey}/data`;

}
