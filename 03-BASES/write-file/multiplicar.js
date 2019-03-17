const fs = require('fs'),
colors = require('colors');

const listFile = (base, limite = 10) => {   
    //return new Promise((resolve, reject => {
        console.log(`=======================================================================`.green);
        console.log(`========================= tabla del ${base} =================================`.green);
        console.log(`=======================================================================`.green);
        for(let i = 1; i <= limite; i++){
            console.log( `${base} * ${i} = ${base * i}\n`);
        }
    //}))


};

const createFile = (base, limite) => {   
    return new Promise ((resolve, reject) => {
        if(!Number(base)){
            return reject('No es un numero');
        }
        let data = '';
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`C:/laragon/www/NodeJS-Desde-Cero/03-BASES/write-file/tabla-del-${base}.txt`, data, (error) => {
            
            if (error) {
                throw error;
            }else{
                return resolve(`tabla-del-${base}.txt`);
            } 
        });
    })
}

module.exports = {
  createFile,
  listFile
} 
