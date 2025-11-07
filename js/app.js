const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

// Objeto de Cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

// Eventos
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
    e.preventDefault();

    // some va a verificar que al menos un campo del objeto este vacio
    if (Object.values(citaObj).some(campo => campo.trim() === '')) {
        new Notificacion({
            mensaje: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    console.log('Cita creada');
}

class Notificacion {
    constructor({ mensaje, tipo }) {
        this.mensaje = mensaje;
        this.tipo = tipo;
        this.mostrar();
    }

    mostrar() {
        // Crear el div
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        // Eliminar alertas duplicadas
        // const alertasExistentes = document.querySelectorAll('.alert');
        // alertasExistentes.forEach(alerta => alerta.remove());
        const alertaPrevia = document.querySelector('.alert');
        // Optional chaining: Verifica si alertaPrevia existe antes de llamar al metodo remove
        alertaPrevia?.remove();

        // Si es de tipo error, agrega una clase, si no, otra clase
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // Mensaje de error
        alerta.textContent = this.mensaje;

        // insertBefore toma dos argumentos: 1. que elemento quiero insertar, 2. antes de que elemento lo quiero insertar
        formulario.parentElement.insertBefore(alerta, formulario);

        // Quitar la alerta despues de 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}