import test from 'ava';
import getZipCodeData from './unbound';

test('function output', async t => {
  const makeUrl = zipcode => zipcode;
  const jsonp = (url) => {
    t.is(
      url,
      'make_url_return',
      'the used url must be the return from makeUrl',
    );
    return Promise.resolve('actual_response');
  };

  const actual = await getZipCodeData({
    makeUrl,
    jsonp,
  }, 'make_url_return');
  const expected = 'actual_response';

  t.is(actual, expected, 'the output must be the response');
});

test('response validation', async t => {
  const makeUrl = zipcode => zipcode;
  const jsonp = {
    get: (url) => {
      t.is(
        url,
        'make_url_return',
        'the used url must be the return from makeUrl',
      );
      return Promise.resolve({ erro: true });
    },
  };

  await t.throwsAsync(() => getZipCodeData({
    makeUrl,
    jsonp,
  }, 'make_url_return'), null, 'should throw if the response cames with an "erro: true" property')
});
