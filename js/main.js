const $formulario = document.formulario;

$formulario.agregar.onclick = agregar;

$formulario.borrar.onclick = borrarUltimoNumero;

manejarCalculos();

$formulario.reiniciar.onclick = reiniciar;

function agregar() {
    const $numero = $formulario.querySelector('#casilla-numero input');
    
    crearNumero($numero.value);

    $numero.value = '';

    mostrarBotonesCalculos();
}

function crearNumero(numero) {
    const $numero = document.createElement('li');
    $numero.classList.add('list-group-item');
    $numero.classList.add('col-5');
    $numero.textContent = numero;

    $formulario.querySelector('#lista-numeros').appendChild($numero);
}

function borrarUltimoNumero() {
    const $listaNumeros = $formulario.querySelectorAll('#lista-numeros li');

    if (0 < $listaNumeros.length) {
        $listaNumeros[$listaNumeros.length - 1].remove();
    }
}

function manejarCalculos() {
    $formulario.querySelectorAll('.calculo').forEach(function($calculo) {
        $calculo.onclick = manejarCalculo;
    })
}

function manejarCalculo(event) {
    const $calculo = event.target;
    const $calculos = $formulario.querySelectorAll('.calculo');

    const $listaNumeros = $formulario.querySelectorAll('#lista-numeros li');

    const numeros = obtenerNumeros($listaNumeros);
    
    if ($calculos[0].id === $calculo.id) {
        obtenerRespuesta('promedio', obtenerPromedio(numeros).toFixed(2));
        mostrarRespuesta('promedio');

    } else {
        if($calculos[1].id === $calculo.id) {
            obtenerRespuesta('menor', obtenerNumeroMenor(numeros));
            mostrarRespuesta('menor');

        } else {
            if ($calculos[2].id === $calculo.id) {
                obtenerRespuesta('mayor', obtenerNumeroMayor(numeros));
                mostrarRespuesta('mayor');

            } else {
                obtenerRespuesta('frecuente', obtenerNumeroFrecuente(numeros));
                mostrarRespuesta('frecuente');
            }
        }
    }

    mostrarBotonReiniciar();
}

function obtenerNumeros($listaNumeros) {
    const numeros = [];

    for (let i = 0; i < $listaNumeros.length; i++) {
        numeros.push(Number($listaNumeros[i].textContent));
    }

    return numeros;
}

function obtenerRespuesta(tipo, valor) {
    $formulario.querySelector(`#numero-${tipo}`).textContent = valor;
}

function reiniciar() {
    borrarListaAnterior();
    ocultarRespuestas();
    ocultarBotonesCalculos();
    ocultarBotonReiniciar();
}

function borrarListaAnterior() {
    const $listaNumeros = $formulario.querySelectorAll('#lista-numeros li');

    for (let i = 0; i < $listaNumeros.length; i++) {
        $listaNumeros[i].remove();
    }
}

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
