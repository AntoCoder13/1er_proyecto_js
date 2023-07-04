const registroPersonas = [];

console.log("MOMENTO DE ELEGIR EL SERVICIO QUE DESEÁS REALIZAR CON NOSOTROS!!")
//ARRAY CON OBJETO DE TODOS LOS TURNOS DISPONIBLES 2 - agregar servicios
const turnosDisponibles = [
    {nombreTurno: "Capping",
    precio: 3500,
    tiempoDeRealizacion: 2,
    categoria: "Uñas"},

    {nombreTurno: "Service Capping",
    precio: 1900,
    tiempoDeRealizacion: 1.30,
    categoria: "Uñas"},

    {nombreTurno: "Alargamiento",
    precio: 4000,
    tiempoDeRealizacion: 2.30,
    categoria: "Uñas"},

    {nombreTurno: "Manicuría Rusa/Francesa",
    precio: 2000,
    tiempoDeRealizacion: 0.45,
    categoria: "Uñas"},

    {nombreTurno: "Radiofrecuencia",
    precio: 2500,
    tiempoDeRealizacion: .45,
    categoria: "Aparatología"},

    {nombreTurno: "Cavitación",
    precio: 2500,
    tiempoDeRealizacion: .45,
    categoria: "Aparatología"},

    {nombreTurno: "Termoterapia",
    precio: 2000,
    tiempoDeRealizacion: .30,
    categoria: "Aparatología"},

    {nombreTurno: "Microdermoabrasión",
    precio: 2500,
    tiempoDeRealizacion: .30,
    categoria: "Aparatología"},

    {nombreTurno: "Descontracturante",
    precio: 2000,
    tiempoDeRealizacion: .45,
    categoria: "Masaje"},

    {nombreTurno: "Relajante",
    precio: 2000,
    tiempoDeRealizacion: 1,
    categoria: "Masaje"},

    {nombreTurno: "Reductor",
    precio: 2000,
    tiempoDeRealizacion: 1,
    categoria: "Masaje"},
]

//FUNCIÓN PARA MOSTRAR TODOS LOS SERVICIOS
function mostrarListado(){
    let mensaje = '';

    turnosDisponibles.forEach((categoria) => {
    mensaje += `Dentro de la sección: ${categoria.categoria} tenemos los siguientes servicios disponibles: \n ${categoria.nombreTurno} => ${categoria.precio} => ${categoria.tiempoDeRealizacion}`;
    })
    alert(mensaje);
}

mostrarListado()

console.log("MOMENTO DE ELEGIR EL DÍA Y EL HORARIO!!")
//SELECCIONAR DÍA DE TURNO
function seleccionarDia() {
    let diaTurno = prompt("Ingrese el día del turno (sin tildes): ");

    switch (diaTurno) {
        case 'Lunes' || 'Martes' || 'Miercoles' || 'Jueves' || 'Viernes':
        alert("El día elegido para tu turno es: " + diaTurno);
        break;

        case 'Sabado' || 'Domingo':
        alert("El día elegido no trabajamos.");
        break;

        default:
        diaTurno = prompt("Ha ingresado un día inválido. Ingrese el día del turno (sin tildes):");
    }
}

//SELECCIONAR HORARIO PARA EL TURNO
function horarioTurno() {
    do {
        numero = prompt("Ingrese el horario en el que desea su turno (con punto . EJ 12.15): ");

        if ((numero >= 10) && (numero <= 21)) {
            alert("El horario elegido para su turno es a las: " + numero + "hs")
            break;
        } else {
            alert("En el horario elegido no trabajamos");
        }
    } while (parseFloat(numero));
}

//EJECUTAR FUNCIONES MOSTRANDO EL RESULTADO DEL TURNO ELEGIDO
seleccionarDia()
horarioTurno()

/* //ARRAY CON OBJETO DE TODOS LOS TURNOS DISPONIBLES
const turnosDisponibles = {
    categoría: "UÑAS",
    subCategoria: [servicio: "CAPPING", precio: "2500"]

}; */

//AGREGAR PERSONAS CON TURNO
let confirmacion = confirm("¿Desea agregar un cliente?");
while (confirmacion){
  const dia = seleccionarDia();
  const person = new Persona(dia);
  registroPersonas.push(person);
  confirmacion = confirm("¿Desea agregar otro cliente?");
}

/* function turnosDisponiblesOrdenados(nombreTurno, precio, tiempoDeRealizacion){
    this.nombreTurno = nombreTurno;
    this.precio = precio;
    this.tiempoDeRealizacion = tiempoDeRealizacion;
} */

//OBJETO CONSTRUCTOR PARA GUARDAR POR CADA PERSONA QUE PIDA UN TURNO ESTOS DATOS
function Persona(nombre, diaTurno, horarioTurno, turno){
    this.nombre = nombre;
    this.diaTurno = diaTurno;
    this.horarioTurno = horarioTurno;
    this.turno = turno;

    this.mostrar = function(){consonle.log(`${nombre} eligió su turno para el dia ${diaTurno} a las ${horarioTurno}hs para su sesión de ${turno} `)}
}

const persona[0] = new Persona("Mariane", "lunes", 12, "Capping");
const persona[i] = new Persona(nombre, diaTurno, horarioTurno, turnoElegido);

persona[i].mostrar();

/* //Declaración de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 200;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let nombres = prompt("Ingrese su nombre: ");
   listaNombres.push(nombres.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaListaNombres = listaNombres.concat(nombres);
//Salida con salto de línea usando join
alert(nuevaListaNombres.join("\n"));  */