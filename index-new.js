const appointmentArray = []

function Appointment(nombre, servicio, fecha, hora) {
  this.nombre = nombre;
  this.servicio = servicio;
  this.fecha = fecha;
  this.hora = hora;
}

//APP DEL CLIMA
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'a7ea9e19a59b579f90a33f1fbfefc87e'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  ciudad ? fetchDatosClima(ciudad) : Swal.fire('Por favor ingrese ciudad');
})



function fetchDatosClima(ciudad){
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
  .then(data => data.json())
  .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML=''

  const ciudadNombre = data.name
  const paisNombre = data.sys.country
  const temperatura = data.main.temp
  const humedad = data.main.humidity
  const descripcion = data.weather[0].description
  const icono = data.weather[0].icon

  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`
  
  const humedadInfo = document.createElement('p')
  humedadInfo.textContent = `La humedad es: ${humedad}%`

  const iconoInfo = document.createElement('img')
  iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

  const descripcionInfo = document.createElement('p')
  descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(humedadInfo)
  divDatosClima.appendChild(iconoInfo)
  divDatosClima.appendChild(descripcionInfo)
}

//BOTON PARA CAMBIAR EL FONDO DE COLOR
const boton = document.getElementById('boton_color');
const color = document.getElementById('color');

function generarColorAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
}

boton.addEventListener('click', function () {
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
  const appointmentData = new Appointment(name, service, date, time);
  appointmentArray.push(appointmentData);
  localStorage.setItem('appointmentData', JSON.stringify(appointmentArray));

  // Crear un elemento de turno
  appointmentArray.forEach( (e) => {

    const appointment = document.createElement('div');
    appointment.classList.add('appointment');
    appointment.innerHTML = `
          <h3>${e.nombre}</h3>
          <p>Servicio: ${e.servicio}</p>
          <p>Fecha: ${e.fecha}</p>
          <p>Hora: ${e.hora}</p>`;
  
    // Agregar el elemento de turno a la lista
    appointmentList.appendChild(appointment);
  })
  // Limpiar los campos del formulario
  form.reset();
});

// Cargar los datos guardados en localStorage al cargar la página (opcional)
window.addEventListener('load', function () {
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
})
