import '@babel/polyfill';
import masker from 'vanilla-masker';
import './styles';
import getZipCodeData from './get-zip-code-data';
import makeMapUrl from './make-map-url';

const zipcodeInput = document.querySelector('.form__input');
const zipcodeDataContainer = document.querySelector('.zipcode');
const errorContainer = document.querySelector('.error');
const btn = document.getElementById('submit-button');
const streetContainer = document.getElementById('zipcode-street');
const neighborhoodContainer = document.getElementById('zipcode-neighborhood');
const cityContainer = document.getElementById('zipcode-city');
const map = document.getElementById('zipcode-map');
const zipcodeContainer = document.getElementById('zipcode-itself');
masker(zipcodeInput).maskPattern('99999-999');

btn.addEventListener('click', (event) => {
  const zipcode = zipcodeInput.value;

  if (btn.classList.contains('is-loading') || !zipcode) {
    return false;
  }

  btn.classList.add('is-loading');
  zipcodeDataContainer.classList.remove('is-active');
  errorContainer.classList.remove('is-active');
  map.src = null;
  getZipCodeData(zipcode)
    .then((data) => {
      streetContainer.innerText = data.logradouro;
      neighborhoodContainer.innerText = data.bairro;
      cityContainer.innerText = `${data.localidade} - ${data.uf}`;
      zipcodeContainer.innerText = data.cep;
      zipcodeDataContainer.classList.add('is-active');
      map.src = makeMapUrl(data);
    })
    .catch((error) => {
      console.error(error);
      errorContainer.innerText = error.message || 'Não foi possível realizar busca do CEP inserido. Verifique se o CEP está válido e tente novamente.';
      errorContainer.classList.add('is-active');
      zipcodeDataContainer.classList.remove('is-active');
    })
    .finally(() => btn.classList.remove('is-loading'))
});
