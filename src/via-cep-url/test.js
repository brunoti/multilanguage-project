import test from 'ava';
import viaCepUrl from './';

test('function validation', t => {
  t.notThrows(
    () => {
      viaCepUrl(14400150);
      viaCepUrl('14400150');
      viaCepUrl('14400-150');
    },
    'should not throw when the zipcode is valid (even if it\'s a number)',
  );

  t.throws(
    () => {
      viaCepUrl(1440015);
      viaCepUrl('1440010');
      viaCepUrl('14400--0');
      viaCepUrl('');
      viaCepUrl('123');
      viaCepUrl('0000');
      viaCepUrl(0);
      viaCepUrl(1);
    },
    null,
    'should throw when the zipcode is invalid',
  );
});

test('function output', t => {
  const actual = viaCepUrl('14401-257');
  const expected = 'https://viacep.com.br/ws/14401257/json';
  t.is(actual, expected, 'viaCepUrl should return a valid request url');
});
