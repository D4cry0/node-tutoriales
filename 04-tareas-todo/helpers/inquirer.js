import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];


const inquirerMenu = async() => {
    console.clear();
    console.log('==========================='.green);
    console.log('   SELECCIONE UNA OPCION   '.green);
    console.log('===========================\n'.green);
    
    // opcion por el valor que se le dio en name
    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() =>{
    const pausap = [
        {
            type: 'input',
            name: 'opcion',
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ];

    console.log('\n');
    await inquirer.prompt(pausap);
}


const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0) {
                    return 'Por favor ingresa un valor';
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const confirmar = async( mensaje ) => {

    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            mensaje
        }
    ];

    const { ok } = await inquirer.prompt(pregunta);
    return ok;
}

const mostrarListado = ( listado = [], listarCompletadas = null ) => {

    let i = 1;
    listado.forEach( ({desc,completadoEn}) => {

        //Si es null  :: listar todos
        //Si es true  :: listar completadas
        //Si es false :: listar pendientes
        if(listarCompletadas == null || listarCompletadas == (!!completadoEn)){
            console.log(`${ i + '.' }`.green         //Muestro el contador
                        + ` ${ desc } :: ${          //Muestro la descripcción de la tarea
                                completadoEn         //Si esta completada o no
                                    ? (listarCompletadas == null) ? 'Completada'.green : completadoEn.green
                                    : 'Pendiente'.red }`);
            i++;
        }
    });
}

const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${ i + 1 }.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;

}

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${ i + 1 }.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;

}



export {
    inquirerMenu,
    pausa,
    leerInput,
    mostrarListado,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}