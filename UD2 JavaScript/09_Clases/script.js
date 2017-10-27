

class Persona() {
  constructor(n,e) {
    this.nombre = n;
    this.edad = e;
  }

  imprimeNombre() {
    console.log(this.nombre);
  }
}

let p = new Persona('Miguel',33);
p.imprimeNombre();
