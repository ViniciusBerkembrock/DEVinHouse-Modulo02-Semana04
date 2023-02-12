
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

let nomeJogadoresSelecao94 = []
jogadoresSelecao94.map(function(jogadores){
    nomeJogadoresSelecao94.push(jogadores.nome)
})

console.log(nomeJogadoresSelecao94)