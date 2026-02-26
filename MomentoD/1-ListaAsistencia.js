let aprendices = ["Juan", "Marta", "Pedro", "Lucía", "Carlos"];
console.log("Lista inicial:", aprendices);

// Usamos la posición que sigue al último elemento (que es igual al largo del arreglo)
aprendices[aprendices.length] = "Andrés"; 
console.log("Después de agregar al final:", aprendices);

const [, ...restoDeAprendices] = aprendices;
aprendices = restoDeAprendices; 
console.log("Después de eliminar el primero:", aprendices);

// 4. Mostrar la cantidad total
console.log("Cantidad total de nombres:", aprendices.length);