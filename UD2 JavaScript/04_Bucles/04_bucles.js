
function contador() {
  for(var i=0; i<=10; i++) {

  }

  console.log('Resultado: '+ i + '');
  console.log(`Resultado: ${i} >> mejor así `);
}


let btn = document.getElementById('btncalcular');

btn.addEventListener('click', function(e) {
  contador();
  console.log(e);
});


// Evento enlace
let enlace = document.getElementById('enlace');

enlace.addEventListener('click', function(e) {
  // Eliminar el comportamiento por defecto que haría
  // que el scrollo de la página se fuera hacia arriba
  e.preventDefault();
  alert('Hola');
});
