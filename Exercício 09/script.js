const jogadoresSelecao94 = [
    {
        nome: 'Taffarel',
        posicao: 'Goleiro',
    },
    {
        nome: 'Jorginho',
        posicao: 'Lateral Direito',
    },
    {
        nome: 'Ricardo Rocha',
        posicao: 'Zagueiro',
    },
    {
        nome: 'Mauro Silva',
        posicao: 'Volante',
    },
    {
        nome: 'Bebeto',
        posicao: 'Atacante',
    },
    {
        nome: 'Romário',
        posicao: 'Atacante',
    },
    {
        nome: 'Dunga',
        posicao: 'Volante',
    },
];

// console.table(jogadoresSelecao94)

let tabela = document.getElementById("tabela")

function adicionarLinha(elemento, nome, posicao){

    let novaLinha = document.createElement('tr')
    let celulaNome =  document.createElement('td')
    let celulaPosicao =  document.createElement('td')

    celulaNome.innerText = nome
    celulaPosicao.innerText = posicao

    novaLinha.appendChild(celulaNome)
    novaLinha.appendChild(celulaPosicao)

    elemento.appendChild(novaLinha)
}

jogadoresSelecao94.forEach(function(jogador) {

    adicionarLinha(tabela, jogador.nome, jogador.posicao)

    console.log(jogador)
})




