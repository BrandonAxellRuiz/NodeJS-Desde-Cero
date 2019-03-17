const colors = require('colors/safe'), 
    argv = require('./config/yargs').argv, 
    { listFile, createFile } = require('./write-file/multiplicar');

switch(argv._[0]){
    
    case 'listar' : 
        listFile(argv.base, argv.limite);
    break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(response => console.log(`Archivo creado `, colors.green(response)))
            .catch(error => console.error(error));
    break;

    default:
        console.error('Comando no reconocido!');
    break;

}


