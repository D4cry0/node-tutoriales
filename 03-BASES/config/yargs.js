// yargs sirve para los argumentos en consola de comandos
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type:  'number',
            demandOption: true,
            describe: 'Base de la multiplicacion'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Listar en consola la multiplicación'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Rango de la multiplicacion'
        })
        .check( (argv, options) => {
            if( isNaN( argv.b ) ){
                throw 'La base tiene que se un numero';
            }
            if( typeof argv.l !== 'boolean' ){
                throw 'Listar no lleva valores';
            }
            if( isNaN(argv.h) ){
                throw 'Hasta tiene que se un numero';
            }
            if( argv.h <= 0 ){
                throw 'Hasta tiene que ser mayor a 0';
            }
            return true;
        })
        .argv;


module.exports = argv;