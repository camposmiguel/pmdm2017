
let alumnos = ['Miguel','Juan','César','Jaime','Marta','Manuel'];

let divs = document.getElementsByTagName('div');

for(let i = 0; i<divs.length; i++) {
  console.log(`DIV: ${divs[i].innerHTML}`);
}
