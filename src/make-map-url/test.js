import test from 'ava';
import makeMapUrl from './index';

test('function output', t => {
  const actual = makeMapUrl({
    logradouro: '1',
    bairro: '2',
    localidade: '3',
    uf: '4',
  });
  const expected = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURI(`1+2+3,+4`)}&zoom=20&scale=1&size=500x300&maptype=roadmap&key=AIzaSyC85M8Cnif7V8Eh1n9TkTSmK2dgr0MH_tI&format=png&visual_refresh=true`;

  t.is(actual, expected, 'output must be the expected google maps staticmap url');
});
