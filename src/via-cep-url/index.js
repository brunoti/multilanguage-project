import viaCepUrl from './unbound';
import validate from '../validate-zipcode';

export default viaCepUrl.bind(null, { validate });
