(function(){
    'use strict';

    const verifyRoma = document.querySelector('#form_romanos');

    verifyRoma.addEventListener('submit', function(evt){
        evt.preventDefault();

        const num = document.getElementById('numero').value;
        let resp = document.getElementById('resp');
        if(num === ''){
            resp.innerHTML = "Inserte un valor";
            return;
        }
        const valor = romanizar(num);
        resp.innerHTML = `El numero ${num} es ${valor}`;
    });

    function romanizar(num){
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
	for ( i in lookup ) {
	  while ( num >= lookup[i] ) {
		roman += i;
		num -= lookup[i];
	  }
	}
	return roman;
    }

})();