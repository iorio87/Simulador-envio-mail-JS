//variables
const btnEnviar = document.querySelector('#enviar')

//variables para campos
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')



eventListeners()
function eventListeners(){
    //cuando  arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp)

    //campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


//funciones
function validarFormulario(e) {
    if (e.target.value.length > 0) {
        console.log('si hay algo...');
    }else {
        //e.target.style.borderBottomColor = 'red' esta es una forma de agregar estilo directo en js
        e.target.classList.add('border', 'border-red-500') //agregando estilo de CSS
    }
}