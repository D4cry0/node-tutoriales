import { Tarea } from './tarea.js';


/**
 * 
 * _listado:
 *       {'uuid-12355123-1231252-2': {id:uuid-12355123-1231252-2, desc:asd, completadoEn:944323}}
 * 
 */

class Tareas {
    // con guion bajo dices que el listado es privado
    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));
        // return Object.values(this._listado);

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id = '' ){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach(tarea => this._listado[tarea.id] = tarea);
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }

}

export {
    Tareas
}