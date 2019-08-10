import axios from 'axios';
import makeUrl from '../via-cep-url';
import getZipCodeData from './unbound';

export default getZipCodeData.bind(null, { axios, makeUrl });

