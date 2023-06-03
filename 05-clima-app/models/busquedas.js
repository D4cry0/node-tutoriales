import * as fs from 'fs';

import axios from 'axios';

class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    constructor() {
        this.historial = this.leerDB();
    }

    get historialCapitalizado() {
        return this.historial.map( ( lugar, i ) => {
            let palabras = lugar.split(' ');
            palabras = palabras.map( str => str[0].toUpperCase() + str.substring(1));
            return palabras.join(' ');
        })
    }

    get paramsMapBox(){
        return {
            'access_token'  : process.env.MAPBOX_KEY,
            'limit'         : 5,
            'language'      : 'es'
        };
    }

    get paramsOpenWeather(){
        return {
            'appid' : process.env.OPENWEATHER_KEY,
            'units' : 'metric',
            'lang'  : 'es'
        }
    }

    async ciudad( lugar = '' ){
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name_es,
                lng: lugar.center[0], // estas posiciones asi estan definidas en JSON
                lat: lugar.center[1],
            }));

        } catch ( err ){
            return [];
        }
    }

    async climaLugar( lat, lon ){
        try {
            
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather, lat, lon }
            })

            const resp = await instance.get();
            const { weather, main } = resp.data;

            return {
                desc: weather[0].description, // estas posiciones asi estan definidas en JSON
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch ( err ) {
            return {};
        }
    }

    agregarHistorial( lugar = '' ){

        if( this.historial.includes(lugar.toLowerCase() )){
            return;
        }
        //para mantener solo 6 lugares
        this.historial = this.historial.splice(0,5);

        // Unshift los coloca en la primera posicion del arreglo
        this.historial.unshift( lugar.toLowerCase() );
        //Grabar DB
        this.guardarDB();
    }

    guardarDB(){

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) );

    }

    leerDB(){

        if(!fs.existsSync( this.dbPath )) return [];

        const info = fs.readFileSync( this.dbPath, {encoding: 'utf-8'});
        return JSON.parse( info ).historial;

    }

}


export {
    Busquedas
}
