



//callback es un una funcion como parametro a otra funcion
setTimeout( () => console.log('Hola mundo'), 1000);


const getUsuarioByID = (id, callback) => {

    //dejar el id asi sirve para eliminar la redundancia
    //en las variables de los objetos
    // id : id <- esta es el valor del argumento
    const usuario = {
        id,
        nombre: 'Arny'
    }

    setTimeout( () => {
        callback(usuario);
    }, 1500);
}

//en la funcion callback se ingresa el objeto como argumento para poder manipular
getUsuarioByID(15, ( usuario ) => {
    console.log(usuario);
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});