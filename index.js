//SELECCIONAR DÍA DE TURNO
function seleccionarDia() {
    let diaTurno = promtp("Ingrese el día del turno: ");

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
        alert("El día elegido no trabajamo.");
        break;
        case "domingo":
        alert("El día elegido no trabajamo.");
        break;
    }
}


//SELECCIONAR HORARIO PARA EL TURNO
function horarioTurno(){

    do{
        numero = promtp("Ingrese el horario en el que desea su turno: ");

        if (numero >= 10){
            alert("El horario elegido para su turno es a las: " + numero + "hs")
        } else if(horario <= 21) {
            alert("El horario elegido para su turno es a las: " + numero + "hs")
        } else {
            alert("En el horario elegido no trabajamos);
        }
    } while (parseInt(numero));
}

seleccionarDia(){
    alert("El día que seleccionaste es: " + díaTurno)
}
seleccionarHorario(){
    alert("El horario elegido para tu turno es a las: " + horarioTurno)
}


