// Reto de buscar propiedad máxima:
// Crea una función que tome un array de objetos, donde cada 
// objeto representa un producto con propiedades "nombre" y "precio". 
//  función debe devolver el objeto del producto con el precio más alto.


const productos = [
    { nombre: "lapiz", precio: 2 },
    { nombre: "borrador", precio: 3 },
    { nombre: "sacapuntas", precio: 5 },
    { nombre: "marcador", precio: 1 }
];

function obtenerMayor(arreglo) {
    let mayor = arreglo[0];
    for (let elemento of arreglo) {
        if (elemento.precio > mayor.precio) {
            mayor = elemento;
        }
    }
    return mayor;
}

let productoMayor = obtenerMayor(productos);
console.log(productoMayor);



// Crea una función que tome un array de objetos, donde cada objeto 
// representa una persona con propiedades "nombre" y "edad". La función 
// debe devolver el número de personas que tienen una edad mayor a 18.


const personas = [
    { nombre: "laura", edad: 12 },
    { nombre: "sara", edad: 30 },
    { nombre: "camila", edad: 50 },
    { nombre: "valeria", edad: 18 },
    { nombre: "silvana", edad: 19 }
];

function mayoresDeEdad (personas) {
    let cantidad = 0; 
    for (elemento of personas){
        if (elemento.edad > 18) {
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = mayoresDeEdad (personas);
console.log(resultado)





// Crea una función que tome un array de objetos, donde cada objeto 
// representa un estudiante con propiedades "nombre" y "calificación". 
// La función debe devolver un nuevo array donde cada objeto tenga 
// una propiedad adicional "aprobado" que sea true si la calificación 
// es mayor o igual a 60, y false en caso contrario.


const estudiantes = [
    { nombre: "juan", calificacion: 8 },
    { nombre: "daniel", calificacion: 30 },
    { nombre: "camilo", calificacion: 90 },
    { nombre: "david", calificacion: 68 },
    { nombre: "santiago", calificacion: 19 }
];

const estudianteAprobados = (array) => {
    return array.map((element) => {
        // Creamos un nuevo objeto basado en el elemento original
        return {
            ...element, // Copia todas las propiedades del objeto original
            aprobado: element.calificacion >= 60 // Agrega la nueva propiedad 'aprobado'
        };
    }).filter(element => element.aprobado); // Filtramos los elementos aprobados
};

console.log(estudianteAprobados(estudiantes));





// function estudianteAprobados = (array) => {
//     let newArray =[];

//     array.forEach((element) => {
//         if (element.calificacion >= 60) newArray.push(element);
//     });
// return newArray;

// function truestudents (array )
//      { for (let element of estudiantes) {
//         element["aprobado"] = true;}
// }

// };
// console.log(estudianteAprobados(newArray))


// function estudiantesAprobados (estudiantes) {

//     estudiantes.forEach((element) => {
//         if(element.calificacion >= 60) {
//             element.aprobado = "true";
//         }
//         else {}
//     })
// }
// estudiantesAprobados(estudiantes)






// Crea una función que tome un array de objetos, donde cada objeto 
// representa una persona con propiedades "nombre" y "edad". La función 
// debe devolver un objeto donde las claves sean las edades y los valores 
// sean arrays con los nombres de las personas que tienen esa edad.


const niños = [
    { nombre: "laura", edad: 12 },
    { nombre: "sara", edad: 30 },
    { nombre: "camila", edad: 50 },
    { nombre: "valeria", edad: 18 },
    { nombre: "silvana", edad: 19 }
];

const soloNombres = niños.map(niño => {
    return { nombre: niño.nombre };
});

console.log(soloNombres);






