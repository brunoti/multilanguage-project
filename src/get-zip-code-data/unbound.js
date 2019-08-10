const getZipCodeData = async ({ axios, makeUrl }, zipcode) =>
    axios.get(makeUrl(zipcode))
      .then(response => response.data)
      .then((data) => {
        if (data.erro) {
          throw Error('Ocorreu um problema ao buscar o CEP. Provavelmente o CEP informado não existe. Verifique os dados e tente novamente por favor');
        }

        return data;
      })

export default getZipCodeData;
