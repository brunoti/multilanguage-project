const getZipCodeDataJsonp = async ({ jsonp, makeUrl }, zipcode) =>
  jsonp(makeUrl(zipcode))
      .then((data) => {
        if (data.erro) {
          throw Error('Ocorreu um problema ao buscar o CEP. Provavelmente o CEP informado não existe. Verifique os dados e tente novamente por favor');
        }

        return data;
      })

export default getZipCodeDataJsonp;
