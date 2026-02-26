// Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
// número de páginas y género. Luego imprima un mensaje descriptivo usando estas
// propiedades, por ejemplo:
// "El libro '___' del autor ___ pertenece al género ___."

import PromptSync from "prompt-sync";

const prompt=PromptSync({sigint:true});

let libro={titulo:"",autor:"","numero de paginas":"",genero:""};

for (let i in libro){
    libro[i]=prompt("ingrese el "+i+" del libro :")
}
console.log("\n\n\n");


console.log("Elibro "+libro.titulo+" del autor "+libro.autor+" pertenece al genero "+libro.genero);


