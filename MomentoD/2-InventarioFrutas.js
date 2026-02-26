let frutas = ["Manzana", "Pera", "Uva"];
console.log("Inventario inicial:", frutas);

// Creamos un nuevo arreglo con "Banano" primero y luego el resto de frutas
frutas = ["Banano", ...frutas];
console.log("Después de agregar Banano al inicio:", frutas);

// Le decimos que el largo del arreglo ahora es uno menos que el actual
frutas.length = frutas.length - 1;
console.log("Después de retirar el último elemento:", frutas);

// 4. Recorrer el arreglo final con for...of
console.log("Recorriendo el inventario final:");
for (const fruta of frutas) {
    console.log("- " + fruta);
}