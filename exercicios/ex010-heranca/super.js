
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

class Aluno extends Pessoa{
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }

    estudar(){
        console.log(`${this.nome} está estudando ${this.curso}`);
    }
}

const aluno1 = new Aluno('João', 'Programação');
aluno1.apresentar(); 
aluno1.estudar();


/*
class Animal{
    emitirSom(){
        console.log(`*som de animal*`);
    }
}

class Cachorro extends Animal{
    emitirSom(){
        super.emitirSom();
        console.log(`é um: Latido`);
    }
}

const cachorro = new Cachorro();
cachorro.emitirSom();
*/