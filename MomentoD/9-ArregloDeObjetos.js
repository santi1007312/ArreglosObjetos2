// Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
// tres objetos. Cada objeto debe representar un producto con propiedades como
// nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
// cada producto.

import PromptSync from "prompt-sync";

const prompt=PromptSync({sigint:true});

let productos=[{},{},{}];

for (let i in productos){
    productos[i].nombre=prompt("Ingrese el nombre del producto "+(parseInt(i)+1)+": ");
    productos[i].precio=prompt("Ingrese el precio del producto "+(parseInt(i)+1)+": ");
    productos[i].disponibilidad=prompt("Ingrese la disponibilidad del producto "+(parseInt(i)+1)+": ");
}

for (let i in productos){
    console.log("Nombre del producto "+(parseInt(i)+1)+": "+productos[i].nombre);
}