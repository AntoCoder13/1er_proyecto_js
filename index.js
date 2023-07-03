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

//ARRAY PARA MOSTRAR LOS TIPOS DE TURNOS QUE HAY
const sesionesDelSpa = [];
function mostrarSesiones() => {``}

//OBJETO CONSTRUCTOR PARA GUARDAR POR CADA PERSONA QUE PIDA UN TURNO ESTOS DATOS
function Persona(nombre, diaTurno, horarioTurno, turno){
    this.nombre = nombre;
    this.diaTurno = diaTurno;
    this.horarioTurno = horarioTurno;
    this.turno = turno;

    this.mostrar = function(){consonle.log(`${nombre} eligió su turno para el dia ${diaTurno} a las ${horarioTurno}hs para su sesión de ${turno} `)}
}

const persona[i] = new Persona("Mariane", "lunes", 12, "Capping");
persona[i].mostrar();
