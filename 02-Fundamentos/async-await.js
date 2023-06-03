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

//con async() se transforma en una funcion asincrona
const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${ empleado } es ${salario}`;
    } catch (err) {
        //ojo con el return en el catch se considera que si se ejecuto bien si error
        //return err;
        //para manejar el catch en las promesas mejor usar throw
        throw err;
    }
}

const id = 3;

getInfoUsuario(id)
    .then (msg => console.log(msg))
    .catch( err => console.log('Error:',err));