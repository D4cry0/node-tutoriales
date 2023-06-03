import path from 'path';

import hbs from 'hbs'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
// con dotenv si nosotros no especificamos el puerto
// el toma el que el hosting este dando
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( path.resolve() + '/views/partials', (err) => {});

// Middleware de express
// SErvir contenido statico

// La carpeta public es vista por todo los usuarios
// todo contenido estatico debe de ir ahi
// index.html lo toma por default
app.use( express.static('public') );


// Las app de REact y Angular no necesitan la renderizada de hbs
// entonces estos paths pueden removerse y solo
// dejar el express.static('public') para que se cargue el index

app.get('/', (req, res) => {
    // pagina y arugmentos en llaves
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'D4cry0'
    });
});

app.get('/generic', (req, res) => {
    res.render( 'generic', {
        titulo: 'Curso de Node',
        nombre: 'D4cry0'
    } );
});

app.get('/elements', (req, res) => {
    res.render( 'elements', {
        titulo: 'Curso de Node',
        nombre: 'D4cry0'
    } );
});

app.get('*', (req, res) => {
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'D4cry0'
    });
});

app.listen(port, () => {
    console.log(`MI app corre en el puerto:${ port }`);
});