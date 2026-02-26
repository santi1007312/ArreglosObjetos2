// 7. Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
// arreglo usando for...of y muestre solo las edades mayores o iguales a 18.

import PromptSync from "prompt-sync";

const prompt=PromptSync({sigint:true});

let mayoresOigualesA18=[];

let edades=[];


for (let i=0;i<5;i++){
    let personas=parseInt(prompt("ingrese la edad de la persona "+(i+1)+" :"));
    edades.push(personas);
}

for (let j of edades){
    if (j>=18){
        mayoresOigualesA18.push(j);
    }
}

for (let t of mayoresOigualesA18){
    console.log(t);
    
}
