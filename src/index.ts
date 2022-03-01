import { Interface } from "readline";

/* VARIABLES Y CONSTANTES TIPO INFERIDO */
var color = 'amarillo'; //variable global 
let numero = 125; //variable de ámbito local 
const PI = 3.1415; //constante (por convención, van en mayúsculas)

/* VARIABLES Y CONSTANTES TIPO DECLARADO */
var ciudad: string = 'Barcelona'; //variable global
let edad: number = 35; //variable de ámbito local
const PAIS: string = "España" //constante

/* TIPOS DE CONCATENACIÓN */
console.log("El coche es de color: " + color);
console.log("El coche es de color: ", color);
console.log(`El coche es de color ${color}`);

/* ARRAYS O LISTAS */
let listaTareas = ['Tarea 1', 'Tarea 2'] //tipo inferido de tipo string
let listaTarea: string[] = ['Tarea 1', 'Tarea 2'];

let valores = ['Tarea 1', false, 56];
let valoress: (string | boolean | number)[] = ['Tarea 1', false, 56];

/* ENUM  */
enum Estados {
    'Completado' = 'C',
    'Incompleto' = 'I',
    'Pendiente' = 'P'
};



let estado: Estados = Estados.Pendiente;
console.log(estado); // estado = 'P'
enum PuestoCarrera {
    'Primero' = 1,
    'Segundo',
    'Quinto' = 5
};
let puesto1: PuestoCarrera = PuestoCarrera.Primero;
let puesto2: PuestoCarrera = PuestoCarrera.Segundo;
let puesto5: PuestoCarrera = PuestoCarrera.Quinto;
console.log(`Puesto 1: ${puesto1}`);
console.log(`Puesto 2: ${puesto2}`);
console.log(`Puesto 5: ${puesto5}`);

/* ENUM EN INTERFAZ */
interface Corredor {
    nombre: string,
    posicion: PuestoCarrera
}

/* CREAMOS VARIABLE QUE SIGA LA INTERFAZ CORREDOR */
let corredor1: Corredor = {
    nombre: 'Joaquín',
    posicion: PuestoCarrera.Primero
}
console.log(`nombre: ${corredor1.nombre}`);
console.log(`posición: ${corredor1.posicion}`);

/* CREACIÓN DE TIPO "Producto"*/
type Producto = {
    precio: number,
    nombreProd: string,
    anio: number
};

/* CREACIÓN DE VARIABLE CON TIPO "Producto" */
let coche1: Producto = {
    precio: 20000,
    nombreProd: "Seat Leon",
    anio: 2022
};
console.log(`Tu ${coche1.nombreProd} es del año
 ${coche1.anio} y vale ${coche1.precio} €`);