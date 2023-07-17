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