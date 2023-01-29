
function mostrarRespuesta(tipo) {
    $formulario.querySelector(`#respuesta-numero-${tipo}`).classList.remove('oculto');
}

function ocultarRespuestas() {
    $formulario.querySelector(`#respuesta-numero-promedio`).classList.add('oculto');
    $formulario.querySelector(`#respuesta-numero-menor`).classList.add('oculto');
    $formulario.querySelector(`#respuesta-numero-mayor`).classList.add('oculto');
    $formulario.querySelector(`#respuesta-numero-frecuente`).classList.add('oculto');
}

function mostrarBotonesCalculos() {
    $formulario.querySelector('#botones-calculos').classList.remove('oculto');
}

function ocultarBotonesCalculos() {
    $formulario.querySelector('#botones-calculos').classList.add('oculto');
}

function mostrarBotonReiniciar() {
    $formulario.reiniciar.classList.remove('oculto');
}

function ocultarBotonReiniciar() {
    $formulario.reiniciar.classList.add('oculto');
}
