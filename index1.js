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



// Crea una función que tome un arreglo de objetos que representen libros. 
// Cada libro tiene un título, un autor y un año. Retorna todos los libros 
// que fueron publicados después del año 2000 y que tienen más de 300 páginas.


const libros = [
    { titulo: "Libro 1", autor: "martin", año: 2002, paginas: 320 },
    { titulo: "Libro 2", autor: "catalina", año: 1992, paginas: 150 },
    { titulo: "Libro 3", autor: "valentina", año: 2010, paginas: 400 },
    { titulo: "Libro 4", autor: "santiago", año: 1890, paginas: 280 },
    { titulo: "Libro 5", autor: "andres", año: 2005, paginas: 350 }
];

function librosPublicados(libros) {
    return libros.filter((libro) => libro.año > 2000 && libro.paginas > 300);
}

const librosFiltrados = librosPublicados(libros);
console.log(librosFiltrados);




// Cree una función que tome un arreglo de objetos que representan productos. 
// Cada producto tiene un nombre y un precio. Retorna el producto con el precio más alto.


const frutas = [
    { nombre: "manzana", precio: 2 },
    { nombre: "pera", precio: 3 },
    { nombre: "banano", precio: 5 },
    { nombre: "naranja", precio: 1 }
];

function productoMasCaro(productos) {
    return productos.reduce((max, producto) => (producto.precio > max.precio ? producto : max), productos[0]);
}

const frutaMasCara = productoMasCaro(frutas);
console.log(frutaMasCara);




// Cree una función capaz de recibir un arreglo de objetos que 
//  evaluaciones de estudiantes. Cada objeto tiene un nombre y 
//  una nota. Retorna la media de las notas.


const evaluaciones = [
    { nombre: "Juan", nota: 8 },
    { nombre: "Daniel", nota: 6 },
    { nombre: "Camilo", nota: 9 },
    { nombre: "David", nota: 7 },
    { nombre: "Santiago", nota: 5 }
];

function calcularMediaNotas(estudiantes) {
    const sumaTotal = estudiantes.reduce((suma, estudiante) => suma + estudiante.nota, 0);
    const media = sumaTotal / estudiantes.length;
    return media;
}

const mediaNotas = calcularMediaNotas(evaluaciones);
console.log(mediaNotas); // Salida esperada: 7



// Cree una función capaz de recibir arreglo de nombres de frutas. 
// Retorna un objeto que cuente cuántas veces aparece cada fruta en el arreglo

function contarFrutas(frutass) {
    return frutass.reduce((contador, fruta) => {
        // Si la fruta ya está en el objeto contador, incrementa su valor
        if (contador[fruta]) {
            contador[fruta]++;
        } else {
            // Si la fruta no está en el objeto contador, inicializa su valor a 1
            contador[fruta] = 1;
        }
        return contador;
    }, {}); // El segundo argumento de reduce es el valor inicial del acumulador (un objeto vacío)
}

const frutass = ["manzana", "pera", "banano", "manzana", "naranja", "pera", "pera", "banano"];

const conteoDeFrutas = contarFrutas(frutass);
console.log(conteoDeFrutas);



// Crea una función que tome un arreglo de objetos que representen tareas. 
// Cada tarea tiene un id, una descripción y un estado (ya sea 'pendiente' 
// o 'completada'). Retorna un nuevo arreglo con el estado de todas las 
// tareas con id impar a 'completada'.

const tareas = [
    { id: 1, descripcion: "historia", estado: "completada"},
    { id: 2, descripcion: "historia", estado: "completada"},
    { id: 3, descripcion: "historia", estado: "pendiente"},
    { id: 4, descripcion: "historia", estado: "pendiente"},
    { id: 5, descripcion: "historia", estado: "completada"},
];

function actualizarTareas(tareas) {
    return tareas.map(tarea => {
        if (tarea.id % 2 !== 0) {
            return { ...tarea, estado: "completada" };
        }
        return tarea;
    });
}

const nuevasTareas = actualizarTareas(tareas);
console.log(nuevasTareas);

// Se usa la sintaxis { ...tarea, estado: "completada" } para crear 
// un nuevo objeto con todas las propiedades de la tarea original, pero con el estado cambiado.




// Cree una función que tome un arreglo de objetos que representan productos. 
// Cada producto tiene un nombre y un precio. Retorna el producto con el precio más alto.

const verduras = [
    { nombre: "brocoli", precio: 2 },
    { nombre: "pepino", precio: 3 },
    { nombre: "zanahoria", precio: 5 },
    { nombre: "tomate", precio: 1 }
];

function productoConPrecioMasAlto(verduras) {
    return verduras.reduce((productoMaximo, productoActual) => {
        if (productoActual.precio > productoMaximo.precio) {
            return productoActual;
        }
        return productoMaximo;
    });
}

const productoCaro = productoConPrecioMasAlto(verduras);
console.log(productoCaro); 



// Cree una función capaz de recibir un arreglo de objetos que representan evaluaciones 
// de estudiantes. Cada objeto tiene un nombre y una nota. Retorna la media de las notas.

const calificaciones =[
    {nombre: "sara", nota: 5},
    {nombre: "isabel", nota: 4},
    {nombre: "sofia", nota: 5},
    {nombre: "laura", nota: 2},
    {nombre: "sol", nota: 3}
]

const sumaDeNotas = calificaciones.reduce((total, calificacion) => total + calificacion.nota, 0)
console.log(sumaDeNotas)
   
const mediaDeNotas = sumaDeNotas / calificaciones.length;
 
console.log(mediaDeNotas);


// Cree una función capaz de recibir un arreglo de objetos que representan transacciones. 
// Cada objeto tiene una categoría y un monto. Retorna el cálculo del monto total agrupado por categoría

