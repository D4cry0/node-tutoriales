const fs = require('fs');
const Colors = require('colors');

const crearArchivo = async( {base,listar,hasta} ) => {
    let salida = '';
    let consola = '';

    try{
        
        for(let i = 1; i <= hasta; i++){
            consola += `${ base } ${Colors.magenta('x')} ${ i } ${Colors.magenta('=')} ${ base * i }\n`;
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if( listar ){
            console.log('====================='.bold.brightMagenta);
            console.log(`Tabla del: ${Colors.bold.brightYellow(base)}`);
            console.log('====================='.bold.brightMagenta);
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`.bold.red;
        
    }catch( err ){
        throw err;
    }
}

module.exports = {
    crearArchivo
}