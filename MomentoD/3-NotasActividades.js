// 1. Creamos el arreglo con seis notas numéricas
let notas = [4.5, 3.8, 5.0, 2.5, 4.2, 3.0];
console.log("Notas registradas:", notas);

let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i]; // Vamos sumando cada nota a la variable 'suma'
}

// El promedio es la suma total dividida entre la cantidad de elementos (length)
let promedio = suma / notas.length;

console.log("La suma total es: " + suma);
console.log("El promedio de las notas es: " + promedio.toFixed(2));