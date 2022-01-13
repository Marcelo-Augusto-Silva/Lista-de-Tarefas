import BotaoConcluir from "./componentes/concluir.js"
import BotaoDeletar from "./componentes/deletar.js"

    const criarTarefa = (evento) => {
        evento.preventDefault()
        // input 
        const input = document.querySelector('[data-form-input]')
        //list
        const list = document.querySelector('[data-list]')


        // criar elemento li 
        const tarefa = document.createElement('li')
        tarefa.classList.add('list-tarefa')

        // conteudo q vai dentro do li 
        const conteudo = `<p class="tarefa"> ${input.value}</p>`

        // adicionar o conteudo na li 
        tarefa.innerHTML = conteudo

        list.appendChild(tarefa)
        tarefa.appendChild(BotaoDeletar())
        tarefa.appendChild(BotaoConcluir())
        input.value = ' '
    }


const buttom = document.querySelector('[data-form-buttom]')


buttom.addEventListener('click', criarTarefa)