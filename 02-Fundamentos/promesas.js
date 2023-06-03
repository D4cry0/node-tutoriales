const empleados = [
    {
        id: 1,
        nombre: 'Fer'
    },
    {
        id: 2,
        nombre: 'Diana'
    },
    {
        id: 3,
        nombre: 'Alex'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id) => {
    //resolve es algo que se llama cuando todo esta OK
    //reject es algo que se va llamar cuando algo falla
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado) ? resolve( empleado ) : reject(`No existe el empleado ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) ? resolve( salario ) : reject(`No existe el salario con ${id}`);
    })
}

const id = 3;
// getEmpleado(id)
//     .then( empleado => console.log(empleado))
//     .catch( err => console.log(err));

// getSalario(id)
//     .then( salario => console.log(salario))
//     .catch( err => console.log(err));

// getEmpleado(id)
//     .then( empleado => {
//         getSalario(id)
//             .then( salario => {
//                 console.log('El empleado:',empleado,' tiene salario:',salario);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

//promesas en cadena
//como no se puede acceder al valor desde el segundo then se usa esto
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        //el return es necesario aqui para poder encadenar el siguiente then
        return getSalario(id);
    })
    .then( salario => console.log('El empleado:',nombre,' tiene salario:',salario))
    .catch(err => console.log(err));


