
let botonesNumeros = ["numero0","numero1","numero2","numero3","numero4","numero5"];
let botonesOperadores = ["operadorSuma"];
let pantallaCalc = document.getElementById('pantalla');
let botonIgual = document.getElementById('igual');
let operador;
let operando1 = 0;
let borrar = false;
var variables = Array();

botonesNumeros.forEach(function(v){
    let elem = document.getElementById(v);
    elem.addEventListener('click', function(e) {
        let id = e.srcElement.id;
        if(id!=null && id!=undefined) {
          let numero = document.getElementById(id).value;
          console.log(`Has hecho click en ${numero}`);

          // Gestion pantalla calculadora
          let textoPantalla = pantallaCalc.textContent;
          if(textoPantalla.startsWith('0') || borrar) {
              pantallaCalc.innerHTML = numero;
              borrar = false;
          } else {
              pantallaCalc.innerHTML = textoPantalla+numero;
          }

        }
    });
    variables.push(elem);
});

botonesOperadores.forEach(function(v){
    let elem = document.getElementById(v);
    elem.addEventListener('click', function(e) {
        operador = e.srcElement.id;
        operando1 = parseInt(pantallaCalc.textContent,10);
        borrar = true;
    });
  });

  botonIgual.addEventListener('click', function(e) {
      let operando2 = parseInt(pantallaCalc.textContent,10);

      if(operador=="operadorSuma") {
        // Se selección la operación de suma
        let resultado = operando1+operando2;
        pantallaCalc.innerHTML = resultado;
      }

  });
