//objeto
const personaje = {
    nombre: 'rapido',
    animal: 'caballo',
    otro: 'corre',

    getNombre() {
        return `${ this.nombre } ${ this.animal }`;
    }
}

console.log(personaje.getNombre());

//desestructuracion de objetos
//{} todo esta en las llaves pueden ir a una funcion o una asignacion

//en esta forma los nombres del argument deben ser igual a las variables en el objeto
const { nombre,animal,otro } = personaje;

console.log(nombre,animal,otro);

const imprime = ({ nombre, animal, otro, patas = 4 }) => {
    nombre = "corre como el viento";
    console.log(nombre, animal, otro, patas);
}

imprime(personaje);


//Desestructuracion de arreglos
const personaj = ['RAPIDO', 'FAT', 'OTRO'];

const [h1,h2,h3] = personaj;
const [, , p3] = personaj;

console.log(h1,h2,h3);
console.log(p3);

const imprimeA = ([ y1, y2, y3]) => {
    console.log(y1,y2,y3);
}

imprimeA(personaj);