import http from 'http';

// Response es lo que el servidor del responde al cliente
// Request es lo que se esta solicitando URL, HEADER, ARGS ETC
http.createServer( (req, res) => {
    // res.write('Hola Mundoaaaa');

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    // application/json
    // text/plain
    
    res.write('id, nombre\n');
    res.write('1, Juan\n');
    res.write('2, Roberto\n');
    res.write('3, Juana\n');
    res.write('4, Rosa\n');
    res.write('5, Diana\n');
    res.write('6, Arny\n');
    res.write('7, Pedro\n');
    res.write('8, Otro\n');    

    res.end();
})
.listen( 8080 );


console.log('EScuchando el puerto 8080');