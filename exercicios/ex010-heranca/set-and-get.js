/*
class Rectangle{
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    set largura(novaLargura) {
        if(novaLargura > 0) {
            this._largura = novaLargura
        }else{
            console.log('a largura deve ser um NÚMERO MAIOR QUE 0')
        }
    }

    set altura(novaAltura) {
        if(novaAltura > 0) {
            this._altura = novaAltura
        }else{
            console.log('a altura deve ser um NÚMERO MAIOR QUE 0')
        }
    }

    get largura() {
        return this._largura
    }

    get altura() {
        return this._altura
    }

    get area(){
        return this._largura * this._altura
    }
}

const retangulo = new Rectangle(3, 4);

console.log(retangulo.largura);
console.log(retangulo.altura);
console.log(retangulo.area);
*/

class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    set nome(novoNome){
        if(typeof novoNome === 'string' && novoNome.length > 0){
            this._nome = novoNome;
        }else{
            console.log('O nome deve ser uma STRING VÁLIDA');
        }
    }

    set sobrenome(novoSobrenome){
        if(typeof novoSobrenome === 'string' && novoSobrenome.length > 0){
            this._sobrenome = novoSobrenome;
        }else{
            console.log('O sobrenome deve ser uma STRING VÁLIDA');
        }
    }

    set idade(novaIdade){
        if(typeof novaIdade === 'number' && novaIdade >= 0){
            this._idade = novaIdade;
        }else{
            console.log('A idade deve ser um NÚMERO VÁLIDO');
        }
    }

    get nome(){
        return this._nome;
    }
    //OBS: o sobrenome não possui get de propósito, para ser demonstrado que não é obrigatório ter get para todos os atributos, pode-se usar o ._ para acessar o atributo diretamente
    get idade(){
        return this._idade;
    }
}

const pessoa1 = new Pessoa('Bob esponja', 'Calça Quadrada', 20);

console.log(pessoa1.nome);
console.log(pessoa1._sobrenome); //usa-se ._ pois o get não foi implementado 
console.log(pessoa1.idade); //se o get for implementado, não precisa usar o ._