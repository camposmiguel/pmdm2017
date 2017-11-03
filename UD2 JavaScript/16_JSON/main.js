function Usuario (usuario, pass) {
  this.usuario = usuario;
  this.pass = pass;
}

let u = new Usuario("miguel@gmail.com","1234");

let json = JSON.stringify(u);
