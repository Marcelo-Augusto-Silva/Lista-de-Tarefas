const BotaoDeletar = (evento) => {
    const botao = document.createElement('button')
    botao.innerText = 'Deletar'
    // add a class
    botao.classList.add('buttom-deletar')

    botao.addEventListener('click', deletar )

    return botao
}

const deletar = (evento)=> {
    const botaoDeleta = evento.target // saber em qual objeto clickei

    const tarefaCompleta = botaoDeleta.parentElement  // elemento pai do botao q eu clickei

    tarefaCompleta.remove() // remover o elemento pai 

    return botaoDeleta
}

export default BotaoDeletar