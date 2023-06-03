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


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    //se usa null para decir que no hay errores
    // en el else el err toma el valor de la cadena
    if( empleado )
        callback(null, empleado);
    else
        callback(`Empleado con id ${id} no existe`);
}

const getSalario = (id, callback) => {
    //Encadenamiento opcional u Optional Chaining Operator
    //Si es null o undefined lanza undefined pero no genera el error
    //de lo contrario lanza el dato que se pide con el punto
    const salario = salarios.find( s => s.id===id )?.salario;

    if(salario)
        callback(null, salario);
    else
        callback(`Salario con id ${id} no existe`);
}

id = 3;

getEmpleado( id, (err, empleado) => {
    if(err) {
        console.log('Error!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if(err){
            console.log('Error!');
            return console.log(err);
        }
    
        console.log('Empleado: ', empleado, 'con salario: ',salario);
    })
});

