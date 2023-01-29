function validarDato($numero) {
    const error = validarNumero($numero.value);

    return manejarError(error, $numero);
}

function validarNumero(numero) {
    if ('' === numero) {
        return 'El campo número no puede estar vacio';
    }

    return '';
}

function manejarError(error, $numero) {
    let noHayError = true

    if (error) {
        noHayError = false;
        $numero.classList.add('error');

        if (!comprobarExisteError(error)) {
            crearError(error);
        }

    } else {
        $numero.classList.remove('error');
    }

    borrarError(error);

    return noHayError;
}

function crearError(error) {
    const $error = document.createElement('li');
    $error.className = 'list-group-item';
    $error.textContent = error;

    $formulario.querySelector('#errores').appendChild($error);
}

function borrarError(error) {
    const $errores = $formulario.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        if ($errores[i].textContent != error) {
            $errores[i].remove()
            break;
        }
    }
}

function comprobarExisteError(error) {
    const $errores = $formulario.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        if (error === $errores[i].textContent) {
            return true;
        }
    }
    
    return false;
}
