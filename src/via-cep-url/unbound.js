const viaCepUrl = ({ validate }, zipcode) => {
  const clearZipcode = zipcode.toString().replace('-', '');

  validate(clearZipcode);

  return `https://viacep.com.br/ws/${clearZipcode}/json`;
};
export default viaCepUrl;
