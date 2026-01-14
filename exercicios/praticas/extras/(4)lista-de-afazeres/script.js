let task = document.getElementById('tarefa')
let res = document.getElementById('res')
let todo = document.getElementById('todo')
let text = document.getElementById('text')

function adicionar() {
    if (task.value.length == 0) { //validação para campo vazio
        res.innerHTML = 'Por favor, insira uma tarefa!'
    }else{

        let existe = false //variável de controle para verificar se a tarefa já existe

        for(let i = 0; i < todo.length; i++) { //percorre o select
            if (todo.options[i].text == task.value) { //se o texto de alguma option for igual ao valor inserido
                existe = true                         //existe passa a ser true e quebra o loop
                break
            }
        }

        if (existe) {   //se a tarefa já existe, mostra essa mensagem
            text.innerHTML = 'Tarefa já existe na lista!'
        }else{
            let item = document.createElement('option') //se não existir, prossegue com a criação do item
            item.text = task.value
            todo.appendChild(item)
            text.innerHTML = '' //limpa a mensagem de tarefa existente        
        }

    }
}

function remover() {
    todo.remove(todo.selectedIndex) //remove o item selecionado(aqui nao usa colchete pq só precisa da posição)
}

function concluir() {
    let item = todo.options[todo.selectedIndex] //seleciona o item escolhido(aqui usa colchete pq precisa do elemento completo)
    if (item) {
        item.style.backgroundColor = 'lightgreen'
    }
}
