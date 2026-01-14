let task = document.getElementById('tarefa')
let res = document.getElementById('res')
let todo = document.getElementById('todo')

function adicionar() {
    if (task.value.length == 0) { //validação para campo vazio
        res.innerHTML = 'Por favor, insira uma tarefa!'
    }else{
        let item = document.createElement('option') //cria um elemento option
        item.text = task.value
        todo.appendChild(item)
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
