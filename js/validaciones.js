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

