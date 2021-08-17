(function () {
    'use strict';

    const verifyPang = document.querySelector('#form_pangrama');

    verifyPang.addEventListener('submit', function(evt){
        evt.preventDefault();

        let cadena = document.getElementById('texto').value;
        const resp = document.getElementById('resp');
        if(cadena === ''){
            resp.innerHTML = "Inserte un valor";
            return;
        }
        const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxyz";
        // Convertir a minúsculas
        cadena = cadena.toLowerCase();

        let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);

        // Recorrer alfabeto
        for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
            let letraActual = alfabetoComoArreglo[indice];
            // En caso de que la cadena NO contenga la letra, le decimos al usuario de una vez
            if (!cadena.includes(letraActual)) {
                resp.innerHTML = "No es Pangrama";
                return;
            };
        }
        // Se termina el ciclo y no se rompió arriba, ¡la cadena es pangrama!
        resp.innerHTML = "Si es Pangrama";
    });


})();