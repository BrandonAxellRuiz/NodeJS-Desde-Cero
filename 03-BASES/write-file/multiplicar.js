const fs = require('fs');
const createFile = (base) => {   
    return new Promise ((resolve, reject) => {
        if(!Number(base)){
            return reject('No es un numero');
        }
        let data = '';
        for(let i = 1; i <= 10; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`C:/laragon/www/NodeJS-Desde-Cero/03-BASES/tablas/tabla-del-${base}.txt`, data, (error) => {
            
            if (error) {
                throw error;
            }else{
                return resolve(`tabla-del-${base}.txt`);
            } 
        });
    })
}

module.exports = {
  createFile
} 
