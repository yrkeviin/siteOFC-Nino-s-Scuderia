function mostrarTexto(idDiv){
    const conteudos = document.getElementById('conteudos').children
    for (let texto of conteudos){
        texto.classList.remove('invisivel')
        if(texto.id !== idDiv){
            texto.classList.add('invisivel')
        }
    }
    const botoes = document.getElementById('sprintbotoes').children
    for (let botao of botoes){
        botao.classList.remove('botao-ativo')
        if(botao.classList.contains(`botao-${idDiv}`)){
            botao.classList.add('botao-ativo')
        }
    }
}

