import dotenv from 'dotenv'
dotenv.config()

import { leerInput,
            inquirerMenu,
            pausa,
            listarLugares, } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";

// process.env :: para acceder a las variables de entorno donde correo la app
//dotenv sirve para exportar las variables en archivos .env

const main = async() => {
    
    let opt = 0; 
    const busquedas = new Busquedas();

    do{
        opt = await inquirerMenu();

        switch( opt ){
            case 1:
                // Mostar msj
                const busqueda = await leerInput('Ciudad: ');
                // Buscar lugares
                const lugares = await busquedas.ciudad( busqueda );

                const id = await listarLugares(lugares);
                if( id === '0' ) continue;
                
                
                // Seleccionar el lugar
                const lugarSel = lugares.find( l => l.id === id );
                // Guardar DB
                busquedas.agregarHistorial( lugarSel.nombre );
                
                
                // Clima
                const climaLugar = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                // Mostarr resultado
                console.clear();
                console.log( '\nInformación de la ciudad\n'.green );
                console.log( 'Ciudad:', lugarSel.nombre.green );
                console.log( 'Lat:', lugarSel.lat );
                console.log( 'Lng:', lugarSel.lng );
                console.log( 'Temperatura:', climaLugar.temp );
                console.log( 'Minima:', climaLugar.min );
                console.log( 'Máxima:', climaLugar.max );
                console.log( 'Como esta el clima:', climaLugar.desc.green );
                
                
                break;
            case 2:
                busquedas.historialCapitalizado.forEach( ( lugar, i ) => {
                    const idx = `${ i + 1 }.`.green;
                    console.log( `${ idx } ${ lugar }` );
                    
                });
                break;
        }

        if( opt !== 0 ) await pausa();

    }while( opt !== 0 );
}

main();

