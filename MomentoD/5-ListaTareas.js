// 5. Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
// utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado.


// Se importa la función promptSync para permitir la entrada de datos desde la consola.
import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
// Se declara un arreglo vacío llamado tareas para almacenar las actividades 
// ingresadas por el usuario.
let tareas=[];
// Se utiliza un bucle for para iterar tres veces, solicitando al usuario que 
// ingrese una actividad cada vez.
for (let i = 0; i < 3; i++) {
   // Se muestra un mensaje en la consola solicitando al usuario que ingrese una actividad
    let actividad = prompt(`Ingrese la actividad numero ${i+1} para realizar: `);
    // La actividad ingresada por el usuario se agrega al arreglo tareas utilizando 
    // el método push().
    tareas.push(actividad);

}
// Se elimina la última actividad agregada al arreglo tareas utilizando el método pop()
tareas.pop();
// Se muestra un mensaje en la consola de la lista de tareas 
console.log(`\nEsta es la lista de tareas: `);
// Se utiliza un bucle for...of para iterar sobre cada elemento del arreglo tareas, mostrando
// cada actividad en la consola de manera individual.
for (const i of tareas) {
    console.log(i);
}
// Se imprime una línea en blanco para mejorar la legibilidad de la salida en la consola.
console.log();