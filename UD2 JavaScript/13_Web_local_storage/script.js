function cambiarColor(color) {
  // Guardando en una variable con nombre 'colorFondo'
  // el valor del color
  localStorage.setItem('colorFondo', color);
  document.getElementById('cuerpo').setAttribute("style","background-color:"+color);
}

var colorF = localStorage.getItem('colorFondo');
if(colorF!=null) {
  document.getElementById('cuerpo').setAttribute("style","background-color:"+colorF);
}
