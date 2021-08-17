(function () {
    'use strict';

    const vector = document.querySelector('#form_unicos');

    vector.addEventListener('submit', function (evt) {
        evt.preventDefault();

        let resp = document.getElementById("resp");
        const entrada = document.getElementById("datos").value.split(" ");
        if (entrada == '') {
            resp.innerHTML = "Inserte un valor";
            return;
          }
        unicos(entrada);        
        resp.innerHTML = `El arreglo queda: {${entrada}}`;

    })

    function unicos(x) {
        let repetido = false;
        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < x.length; j++) {
                if (i >= 0) {
                    if (i != j) {
                        if (x[i] == x[j]) {
                            repetido = true;
                        }
                    }
                }
            }
            if (repetido == false) {
                x.splice(i, 1);
                i = -1;
            } else {
                repetido = false;
            }
        }
    }
})();