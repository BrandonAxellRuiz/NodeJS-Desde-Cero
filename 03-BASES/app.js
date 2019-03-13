const { createFile } = require('./tablas/multiplicar');

createFile('100')
    .then(response => console.log(`Archivo creado ${response}`))
    .catch(error => console.error(error));
