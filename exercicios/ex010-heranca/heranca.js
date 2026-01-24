class Usuario {
    logar(){console.log(`${this.nome} logado`)}
    deslogar(){console.log(`Usuário deslogado`)}

}

class Admin extends Usuario {
    nome = 'Admin'

    mandarEmail(){console.log(`${this.nome} enviou um email para o usuário`)}
}

class Cliente extends Usuario {
    nome = 'Cliente'

    comprar(){console.log('Compra realizada com sucesso')}
}

const admin = new Admin()
const cliente = new Cliente()

admin.mandarEmail() 
cliente.comprar()
