function obtenerPromedio(numeros) {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    return (sumaTotal / numeros.length);
}

function obtenerNumeroMenor(numeros) {
    let numeroMenor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeroMenor > numeros[i]) {
            numeroMenor = numeros[i];
        }
    }

    return numeroMenor;
}

function obtenerNumeroMayor(numeros) {
    let numeroMayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeroMayor < numeros[i]) {
            numeroMayor = numeros[i];
        }
    }

    return numeroMayor;
}

function obtenerNumeroFrecuente(numeros) {
    let numeroMasFrecuente;
    let cantidadRepetido = 0;

    for (let i = 0; i < numeros.length; i++) {
        let repetido = 0;

        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                repetido++;
            }
        }
        if (cantidadRepetido < repetido) {
            numeroMasFrecuente = numeros[i];
            cantidadRepetido = repetido;
        }
    }
    return numeroMasFrecuente;
}
