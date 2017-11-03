function User (usuario, pass) {
  this.usuario = usuario;
  this.pass = pass;
}


var peticion = new Request(
  'http://localhost/mecaround/api/v1/auth/login',
  {
    method: 'POST',
    body: '{"email":"miguel@gmail.com","password":"1234"}'
  }
);

fetch(peticion)
    .then(function(response) {
        if(response.status == 200) {
          return response.json();
          console.log(response.json());
        } else {
          throw new Error('Something went wrong on api server!');
        }
    })
    .then(function(response) {
        console.debug(response);
        // ...
    })
    .catch(function(error) {
        console.error(error);
    });
