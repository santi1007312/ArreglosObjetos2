// 10.Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
// debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
// con un ejemplo.
// a. Lista de colores favoritos.
// b. Información completa de un estudiante.
// c. Precios de diferentes camisetas.
// d. Descripción de un computador portátil.

// a. Lista de colores favoritos: Se debe usar un arreglo, ya que es una colección de elementos del mismo tipo (colores) y no se requiere asociar cada color con una clave específica.

import PromptSync from "prompt-sync";

const prompt=PromptSync({sigint:true});

let coloresFavoritos=[];

for (let i=0; i<5; i++){
    coloresFavoritos.push(prompt("Ingrese su color favorito "+(i+1)+": "));
}
console.log("\nColores favoritos:");
for (let i in coloresFavoritos){
    console.log("Color "+(parseInt(i)+1)+": "+coloresFavoritos[i]);
}

// b. Información completa de un estudiante: Se debe usar un objeto, ya que la información de un estudiante puede incluir diferentes propiedades (nombre, edad, grado, etc.) que se asocian con claves específicas.

let estudiante={nombre:"",edad:"",grado:""};


for (let t in estudiantes){
    estudiantes[t]=prompt("ingrese el "+t+" del  estudiante :")
}

console.log("\nInformación del estudiante:");
for (let i in estudiante){
    console.log(i+": "+estudiante[i]);
}

// c. Precios de diferentes camisetas: Se debe usar un arreglo, ya que es una colección de elementos del mismo tipo (precios) y no se requiere asociar cada precio con una clave específica.

let preciosCamisetas=[];

for (let i=0; i<5; i++){
    preciosCamisetas.push(prompt("Ingrese el precio de la camiseta "+(i+1)+": "));
}
console.log("\nPrecios de camisetas:");
for (let i in preciosCamisetas){
    console.log("Precio de la camiseta "+(parseInt(i)+1)+": "+preciosCamisetas[i]);
}

// d. Descripción de un computador portátil: Se debe usar un objeto, ya que la descripción de un computador portátil puede incluir diferentes propiedades (marca, modelo, procesador, etc.) que se asocian con claves específicas.

let computadorPortatil={marca:"",modelo:"",procesador:""};


for (let t in computadorPortatil){
    computadorPortatil[t]=prompt("ingrese el/la "+t+" del computador portatil :")
}

console.log("\nDescripción del computador portátil:");
for (let i in computadorPortatil){
    console.log(i+": "+computadorPortatil[i]);
}

