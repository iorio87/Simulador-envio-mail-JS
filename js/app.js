//variables
const btnEnviar = document.querySelector('#enviar')
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail')

//variables para campos
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



eventListeners()
function eventListeners() {
    //cuando  arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp)

    //campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

    //reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario)

    //enviar email
    formulario.addEventListener('submit', enviarEmail)
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


//funciones
function validarFormulario(e) {

    if (e.target.value.length > 0) {
        //elimina los errores
        const error = document.querySelector('p.error')
        if (error) {
            error.remove()
        }


        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    } else {
        //e.target.style.borderBottomColor = 'red' esta es una forma de agregar estilo directo en js
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500') //agregando estilo de CSS
        mostrarError('Todos los campos son obligatorios')
    }

    if (e.target.type === 'email') {


        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error')
            if (error) {
                error.remove()
            }

            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')

        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')
            mostrarError('email no valido')
        }

    }

    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
    } 
}

function mostrarError(mensaje) {

    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('error', 'border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center')

    const errores = document.querySelectorAll('.error') // con queryselectorAll puedo acceder a la propiedad 'length'
    if (errores.length === 0) {
        formulario.appendChild(mensajeError)
    }

}

function enviarEmail(e) {
    e.preventDefault()
    
    //muestra el spinner
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex'

    //oculta el spinner
    setTimeout(() => {
        spinner.style.display = 'none'
        const enviado = document.createElement('p')
        enviado.textContent = 'Mensaje enviado correctamente!'
        enviado.classList.add('border', 'border-green-500', 'mb-5', 'text-green-500', 'text-center', 'p-3')
        formulario.insertBefore(enviado, spinner)
        setTimeout(() => {
            enviado.remove()
            resetearFormulario()
        }, 4000);
    }, 3000);
}

function resetearFormulario() {
    formulario.reset()
    iniciarApp()
}