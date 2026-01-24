/*
const numeros = [1, 2, 3];
const soma = numeros.reduce((acumulado, numero) => acumulado + numero);

console.log(soma); // 6
*/

const produtos = [
    { nome: 'Notebook', preco: 3000 },
    {nome: 'Mouse', preco: 20 },
    {nome: 'Teclado', preco: 100 },  //valor total: 4120
    {nome: 'Monitor', preco: 1000 }
]

const total = produtos.reduce((acc, p) => acc + p.preco, 0); //criam-se o acc e o p para representar o acumulado e o produto atual

console.log(total); // 4120