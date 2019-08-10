const makeMapUrl = (data) => {
  const center = encodeURI(
    `${data.logradouro} ${data.bairro} ${data.localidade}, ${data.uf}`.replace(/\s/g, '+'),
  );
  return `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=20&scale=1&size=500x300&maptype=roadmap&key=AIzaSyC85M8Cnif7V8Eh1n9TkTSmK2dgr0MH_tI&format=png&visual_refresh=true`;
};

export default makeMapUrl;
