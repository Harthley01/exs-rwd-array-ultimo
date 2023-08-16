const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector('.list-tasks')
let minhaListaDeRotina = []




function adicionarNovaTarefa() {
    minhaListaDeRotina.push({
        tarefa: input.value,
        conclusao: false
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ''

    // ['comprar cafe', 'estudar programacao']

    minhaListaDeRotina.forEach((item, posicao) => {
        novaLi = novaLi + `
        
            <li class="task ${item.conclusao && "done"}">
                <img src="./img/checked.png" onclick="conclusaoTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="trash-na-tarefa" onclick="deletarItem(${posicao})">
            </li>
       
        
        `
    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaListaDeRotina))


}

function conclusaoTarefa(posicao) {
    minhaListaDeRotina[posicao].conclusao = !minhaListaDeRotina[posicao].conclusao

    mostrarTarefas()

}

function deletarItem(posicao) {
    minhaListaDeRotina.splice(posicao, 1)

    mostrarTarefas()

}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if (tarefasDoLocalStorage) {
    minhaListaDeRotina = JSON.parse(tarefasDoLocalStorage)
        console.log(tarefasDoLocalStorage)

    }

    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)