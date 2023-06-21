//SELECCIONAR DÍA DE TURNO
function seleccionarDia() {
    let diaTurno = prompt("Ingrese el día del turno (SIN TILDES): ");

    switch(diaTurno) {
        case "lunes":
        alert("El día elegido para tu turno es: " + diaTurno);
        break;
        case "martes":
        alert("El día elegido para tu turno es: " + diaTurno);
        break;
        case "miercoles":
        alert("El día elegido para tu turno es: " + diaTurno);
        break;
        case "jueves":
        alert("El día elegido para tu turno es: " + diaTurno);
        break;
        case "viernes":
        alert("El día elegido para tu turno es: " + diaTurno);
        break;

        case "sabado":
        alert("El día elegido no trabajamos.");
        break;
        case "domingo":
        alert("El día elegido no trabajamos.");
        break;
    }
    alert("El día que seleccionaste es: " + diaTurno)
}

//SELECCIONAR HORARIO PARA EL TURNO
function horarioTurno(){
    do{
        numero = prompt("Ingrese el horario en el que desea su turno (con coma (,) EJ 12,15): ");

        if  ((numero >= 10) && (numero <= 21)){
        alert("El horario elegido para su turno es a las: " + numero + "hs")

        } else {
        alert("En el horario elegido no trabajamos");
    } 
    } while (parseFloat(numero));
    
    alert("El horario elegido para tu turno es a las: " + numero)
}

//EJECUTAR FUNCIONES MOSTRANDO EL RESULTADO DEL TURNO ELEGIDO
seleccionarDia()
horarioTurno()



