const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// Objeto de Cita
const citaObj = {
    paciente: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Eventos
pacienteInput.addEventListener('change', (e) => {
    citaObj.paciente = e.target.value;    
    console.log(citaObj);
});

propietarioInput.addEventListener('change', (e) => {
    citaObj.propietario = e.target.value;    
    console.log(citaObj);
});
