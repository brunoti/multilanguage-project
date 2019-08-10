const validate = (zipcode) => {
  if (zipcode.length !== 8) {
    throw Error(`O CEP [${zipcode}] não é um CEP válido`);
  }

  return true;
};

export default validate;
