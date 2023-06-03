const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//cosas de npm
//npm install colors@1.0.0 -> instala esa verions
//npm update -> busca actualizaciones en los paquetes
//npm uninstall colors -> borra
//npm install nodemon --save-dev -> Dev Dependencies
// solo son necesarios para desarrollo

//1.0.0 semantica de versiones
//Semantic version
//Mayores.Addings.Bug Fixes


console.clear();

//destructure datos en la posicion 3 que son mis argumentos
//puse valor por defecto
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');


// console.log( argv );

// const base = 5;

crearArchivo(argv)
        .then( console.log )
        .catch( console.error );