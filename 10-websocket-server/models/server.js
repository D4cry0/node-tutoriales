import express from 'express';
import cors from 'cors';
import * as http from 'http';
import * as io from 'socket.io';

import { socketController } from '../sockets/controller.js';

class Server {
    // Revisar la documentación de socket.io para la configuración inicial con expres

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = http.createServer( this.app );
        // Sirve para manipular todos los sockets del servidor
        this.io = new io.Server( this.server );

        this.paths = {}


        // Conectar a base de datos
        // this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        // this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));

    }

    routes() {
        
        // this.app.use( this.paths.auth, require('../routes/auth'));  
    }

    sockets() {

        /* 
            La conección se mantiene vigente mientras no se refresque el navegador

            Una vez refrescado, genera una nueva conección.

            Si el servidor se cae de la red, el cliente intentara reconectarte en un intervalo de tiempo
            hasta cierto numero de intentos
        
        */


        this.io.on( "connection", socketController );
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




export {
    Server
};