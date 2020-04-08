const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv; 

const encodeURL = encodeURI(argv.direccion);

const getInfo = async (encodeURL) => {

    try{

        const cord = await getLugarLatLng(encodeURL);
        const clima = await getClima(cord);
        return console.log(`El clima es de ${clima}`);

    }catch(e){
        return  console.error(e);
    }    
   
};

getInfo(encodeURL);

