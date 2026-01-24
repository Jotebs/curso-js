function carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const meuCarro = new carro('Toyota', 'Corolla', 2016);
const outroCarro = new carro('Honda', 'Civic', 2018);
console.log(meuCarro.modelo); // Output: Corolla

//no jeito mais complicado(abaixo) seria assim:

/*
const carro1 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2016
}

const carro2 = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2018
}

console.log(carro1.modelo); // Output: Corolla
*/