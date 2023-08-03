//BOTON PARA CAMBIAR EL FONDO DE COLOR
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for( let i=0; i<6; i++){
        let indiceAleatorio = Math.floor(Math.random() *16); 
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}


boton.addEventListener('click', function(){
    let colorAleatorio = generarColorAleatorio(); 
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
});

// Obtener referencias a los elementos del formulario y el div de la lista de turnos
const form = document.getElementById('appointment-form');
const nameInput = document.getElementById('name');
const serviceInput = document.getElementById('service');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const appointmentList = document.getElementById('appointment-list');

// Agregar un evento de envío de formulario
    form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores ingresados por el usuario
    const name = nameInput.value;
    const service = serviceInput.value;
    const date = dateInput.value;
    const time = timeInput.value;

    // Guardar los datos en localStorage
    const appointmentData = { name, service, date, time };
    localStorage.setItem('appointmentData', JSON.stringify(appointmentData));

    // Crear un elemento de turno
    const appointment = document.createElement('div');
    appointment.classList.add('appointment');
    appointment.innerHTML = `
        <h3>${name}</h3>
        <p>Servicio: ${service}</p>
        <p>Fecha: ${date}</p>
        <p>Hora: ${time}</p>
    `;

    // Agregar el elemento de turno a la lista
    appointmentList.appendChild(appointment);

    // Limpiar los campos del formulario
    form.reset();
});

// Cargar los datos guardados en localStorage al cargar la página (opcional)
window.addEventListener('load', function() {
    const savedData = localStorage.getItem('appointmentData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        nameInput.value = parsedData.name;
        serviceInput.value = parsedData.service;
        dateInput.value = parsedData.date;
        timeInput.value = parsedData.time;
    }
});

document.getElementById('boton_submit').addEventListener('click', () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
      })
      swalWithBootstrapButtons.fire({
        title: 'Estás segur@ de tu turno?',
        text: "Si lo aceptás quedará asignado!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, lo quiero!',
        cancelButtonText: 'No, lo pensaré mejor!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Aceptado!',
            'Te esperamos para tu turno, gracias por elegirnos',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Intenta de nuevo la próxima!',
            'error'
          )
        }
      })
}))