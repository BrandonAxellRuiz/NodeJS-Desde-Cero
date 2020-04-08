const axios = require('axios');

const getClima = async (infoCordinate) => {
  const { lat, lng } = infoCordinate;
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=32f843d833c38373032f825c4a92418a`
  );
  return resp.data.main.temp;
};

module.exports = {
    getClima
};