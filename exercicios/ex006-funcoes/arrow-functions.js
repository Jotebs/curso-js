/*
const hello = function(name){
    console.log('hello', name)
}
hello('world')*/

//JEITO MAIS FÁCIL COM ARROW FUNCTION

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const quadrados = numeros.map((element) => Math.pow(element, 2));
const cubos = numeros.map(element => Math.pow(element, 3)); //quando tem só um parâmetro, pode tirar o parênteses
const numerosPares = numeros.filter((element) => element % 2 === 0);
const somaTotal = numeros.reduce((acumulador, element) => acumulador + element, 0);

console.log(quadrados);
console.log(cubos);
console.log(numerosPares);
console.log(somaTotal);