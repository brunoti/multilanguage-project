import test from 'ava';
import getZipCodeData from './unbound';

test('function output', async t => {
  const makeUrl = zipcode => zipcode;
  const axios = {
    get: (url) => {
      t.is(
        url,
        'make_url_return',
        'the used url must be the return from makeUrl',
      );
      return Promise.resolve({ data: 'actual_response' });
    },
  };

  const actual = await getZipCodeData({
    makeUrl,
    axios,
  }, 'make_url_return');
  const expected = 'actual_response';

  t.is(actual, expected, 'the output must be the real response and not axios object');
  t.notDeepEqual(actual, { data: 'actual_response' }, 'the output must be the real response and not axios object');
});

test('response validation', async t => {
  const makeUrl = zipcode => zipcode;
  const axios = {
    get: (url) => {
      t.is(
        url,
        'make_url_return',
        'the used url must be the return from makeUrl',
      );
      return Promise.resolve({ data: { erro: true } });
    },
  };

  await t.throwsAsync(() => getZipCodeData({
    makeUrl,
    axios,
  }, 'make_url_return'), null, 'should throw if the response cames with an "erro: true" property')
});
