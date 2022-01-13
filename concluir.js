const BotaoConcluir = () => {
    const botao = document.createElement('button')
    botao.innerText = 'Concluido'
    botao.classList.add('buttom-concluir')

    botao.addEventListener('click', concluir
    )

    return botao
}

const concluir = (evento) => {
    const concluir = evento.target

    const concluido = concluir.parentElement
    concluido.classList.toggle('tarefa-concluida')
}

export default BotaoConcluir