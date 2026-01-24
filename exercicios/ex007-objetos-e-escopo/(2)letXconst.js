let idade = 20
idade = 21
console.log(`com o let, a idade é ${idade}`) // let: pode mudar o valor

const pessoa = {nome: 'João',}
pessoa.nome = 'Pedro'
console.log(`com o const, o nome é ${pessoa.nome}`) // const: só posso mudar as características internas do objeto, mas não posso reatribuir o objeto inteiro
                                                    //pessoa = {nome: 'Ana'} // ERRO! Não posso reatribuir o objeto inteiro