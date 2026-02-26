// 4. Características de un celular: Cree un objeto llamado celular con propiedades:
// marca, modelo, año y estado. Muestre cada propiedad en consola de manera
// individual.

// Se define un objeto constante llamado celular para agrupar propiedades relacionadas.
const celular={
    marca: "Motorola",
    modelo: "g86 porwer 5g",
    año: 2025,
    estado: "Nuevo"
}
// Se accede a la propiedad marca utilizando la notación de punto.
console.log("Marca: "+ celular.marca);
// Se concatena el texto descriptivo con el valor guardado en el modelo.
console.log("Modelo: "+ celular.modelo);
// Se extrae el valor numérico correspondiente al año de fabricación.
console.log("Año: "+ celular.año);
// Se muestra en consola la condición actual del dispositivo almacenada en el objeto.
console.log("Estado: "+ celular.estado);