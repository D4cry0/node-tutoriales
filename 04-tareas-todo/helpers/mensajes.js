import colors from 'colors';
import inquirer from 'inquirer';

// const mostrarMenu = () => {

//     return new Promise( (resolve, reject) => {
//         console.clear();
//         console.log('==========================='.green);
//         console.log('   SELECCIONE UNA OPCION   '.green);
//         console.log('===========================\n'.green);
    
    
//         console.log(`${'1.'.green} Crear una tarea`);
//         console.log(`${'2.'.green} Listar tareas`);
//         console.log(`${'3.'.green} Listar tareas completadas`);
//         console.log(`${'4.'.green} Listar tareas pendientes`);
//         console.log(`${'5.'.green} Completar tarea(s)`);
//         console.log(`${'6.'.green} Borrar tarea`);
//         console.log(`${'0.'.green} Salir \n`);
    
    
//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
    
//         readline.question('Seleccione una opcion: ', (opt) => {
//             readline.close();
//             resolve(opt);
//         });


//     });

// }

// //Cuando tienes varios readline de manera secuancial al momento de ejecutar
// // al final te quedan con el ultimo implementado

// const pausa = () => {

//     return new Promise( (resolve, reject) => {
//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
//             readline.close();
//             resolve();
//         });
//     });
// }


// export {
//     mostrarMenu,
//     pausa
// }