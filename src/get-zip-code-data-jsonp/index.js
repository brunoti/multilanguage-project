import jsonp from 'jsonp';
import promisify from 'pify';
import makeUrl from '../via-cep-url';
import getZipCodeDataJsonp from './unbound';

export default getZipCodeDataJsonp.bind(null, { jsonp: promisify(jsonp), makeUrl });

