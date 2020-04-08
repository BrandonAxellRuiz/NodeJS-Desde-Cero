const axios = require('axios');

const getLugarLatLng = async ( dir ) => {
 
    const options = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
      headers: {
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "ffe992b354msh103b2b0c47b61cdp144ba0jsn09e78039d598",
      },
    });

    const resp = await options.get();

    if( resp.data.Results.length === 0 ) return console.log();
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
}