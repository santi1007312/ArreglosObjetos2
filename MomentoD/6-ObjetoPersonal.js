// 6. Describiendo un objeto personal: Cree un objeto que represente algo que lleve
// consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
// propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
// Object.entries().


// Se define un objeto constante llamado audifonos para representar un objeto personal con varias propiedades.
const audifonos={
    marca: "Sony",
    color:"Negro",
    modelo:"WH-CH510",
    estado:"Funcionando",
    valor:"$20.000"
}
// Se muestra un mensaje en la consola para describir el objeto personal que se va a detallar.
console.log("\nDescripcion de mis audifonos: ");
// Se utiliza un ciclo for...of junto con Object.entries() para iterar sobre las claves y valores del objeto audifonos.
for (const [clave, valor] of Object.entries(audifonos)) {
    console.log(`${clave}: ${valor}`)
}
// Se imprime una línea en blanco para mejorar la legibilidad de la salida en la consola.
console.log();
