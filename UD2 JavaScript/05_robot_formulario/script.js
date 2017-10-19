let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
let res = document.getElementById('resultado');
let btn = document.getElementById('btncomprobar');
let rnd1;
let rnd2;

function aleatorios() {
  rnd1 = Math.floor(Math.random() * (10 - 1) + 1);
  rnd2 = Math.floor(Math.random() * (10 - 1) + 1);
  rnd2 += rnd1;
  num1.innerHTML = rnd1;
  res.innerHTML = rnd2;

}

aleatorios();

btn.addEventListener('click', function(e) {
  let numero2 = parseInt(num2.value,10);
  let suma = rnd1 + numero2;
  if(suma === rnd2) {
    alert('Enhorabuena humano');
  } else {
    alert('Vete a meter SPAM en otro lado');
  }
});
