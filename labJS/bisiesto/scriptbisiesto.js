(function () {
  'use strict';

  const veryfyBis = document.querySelector('#form_calendar');

  veryfyBis.addEventListener('submit', function (evt) {
    evt.preventDefault();

    const anno = document.getElementById('anno').value;
    const resp = document.getElementById('resp');
    if (anno === '') {
      resp.innerHTML = "Inserte un valor";
      return;
    }
    if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
      resp.innerHTML = "Es bisiesto";
    } else {
      resp.innerHTML = "No es biciesto";
    }
  });

})();