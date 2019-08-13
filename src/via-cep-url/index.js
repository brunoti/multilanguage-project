const viaCepUrl = (zipcode) => {
  const clearZipcode = zipcode
    ? zipcode.toString().replace('-', '')
    : null;

  if (!clearZipcode) {
    throw Error(`O CEP é obrigatório para a criação da URL`);
  }

  if (clearZipcode.length !== 8) {
    throw Error(`O CEP [${clearZipcode}] não é um CEP válido`);
  }

  return `https://viacep.com.br/ws/${clearZipcode}/json`;
};

export default viaCepUrl;
