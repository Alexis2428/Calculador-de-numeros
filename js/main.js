const $formulario = document.formulario;

$formulario.agregar.onclick = agregar;

$formulario.borrar.onclick = borrarUltimoNumero;

manejarCalculos();

$formulario.reiniciar.onclick = reiniciar;

function agregar() {
    const $numero = $formulario.querySelector('#casilla-numero input');

    const esValido = validarDato($numero)

    if (esValido) {
        crearNumero($numero.value);
        $numero.value = '';

        mostrarBotonesCalculos();

    } else {
        mostrarErrores();
    }
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
    if (1 === $listaNumeros.length) {
        ocultarBotonesCalculos();
        ocultarRespuestas();
        borrarErroresAnteriores();
        $formulario.querySelector('#obtener-numero-frecuente').classList.remove('error');
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
    
    if ($calculos[0].id === $calculo.id) {                                  // Obtener promedio
        obtenerRespuesta('promedio', obtenerPromedio(numeros).toFixed(2));
        mostrarRespuesta('promedio');

    } else {
        if($calculos[1].id === $calculo.id) {                               // Obtener número menor
            obtenerRespuesta('menor', obtenerNumeroMenor(numeros));
            mostrarRespuesta('menor');

        } else {
            if ($calculos[2].id === $calculo.id) {                          // Obtener número mayor
                obtenerRespuesta('mayor', obtenerNumeroMayor(numeros));
                mostrarRespuesta('mayor');

            } else {                                                        // Obtener número frecuente
                const error = 'Debe tener minimo 2 números iguales para obtener el más frecuente';

                const numeroFrecuente = obtenerNumeroFrecuente(numeros);

                if ((1 < numeros.length) && (undefined !== numeroFrecuente)) {
                    const $errores = $formulario.querySelectorAll('#errores li');

                    for (let i = 0; i < $errores.length; i++) {
                        if (error === $errores[i].textContent) {
                            $errores[i].remove();
                        }
                    }
                    $formulario.querySelector('#obtener-numero-frecuente').classList.remove('error');

                    obtenerRespuesta('frecuente', numeroFrecuente);
                    mostrarRespuesta('frecuente');

                } else {
                    if (!comprobarExisteError(error)) {
                        crearError(error);
                    }
                    $formulario.querySelector('#obtener-numero-frecuente').classList.add('error');
                    mostrarErrores();
                    $formulario.querySelector(`#respuesta-numero-frecuente`).classList.add('oculto');
                }
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
    borrarErroresAnteriores();
    ocultarRespuestas();
    ocultarErrores();
    ocultarBotonesCalculos();
    ocultarBotonReiniciar();
    $formulario.querySelector('#obtener-numero-frecuente').classList.remove('error');
}

function borrarListaAnterior() {
    const $listaNumeros = $formulario.querySelectorAll('#lista-numeros li');

    for (let i = 0; i < $listaNumeros.length; i++) {
        $listaNumeros[i].remove();
    }
}

function borrarErroresAnteriores() {
    const $errores = $formulario.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        $errores[i].remove();
    }

    $formulario.querySelector('#casilla-numero input').classList.remove('error');
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

function mostrarErrores() {
    $formulario.querySelector('#errores').classList.remove('oculto');
}

function ocultarErrores() {
    $formulario.querySelector('#errores').classList.add('oculto');
}
