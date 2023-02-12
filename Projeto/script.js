const personagens = [{nome: 'C3PO'}, 
                    {nome: 'R2D2'},
                    {nome: 'BB8'}]


class Botao {
    constructor(nome){
        this.nome= nome;
    }

    criarBotao() {
        let botao = document.createElement("button");        
        botao.setAttribute("class", "btn btn-efeito");
        botao.innerHTML = this.nome;
        document.querySelector(".container").appendChild(botao);
        botao.onclick = () => alert(this.nome);
    }
}

personagens.forEach(element => {
    
    const botao = new  Botao(element.nome)
    botao.criarBotao();
}
)



let header = document.createElement('div');
header.setAttribute("id", "nomeDoSite")
header.setAttribute("class", "perspective")
header.innerText = 'STARDEX';
document.querySelector('.cabecalho').appendChild(header);

let footer = document.createElement('div');
footer.innerText = 'STV &co. 2023 Copyright';

let imagem = document.createElement('img')
imagem.src = './c3po.png'
imagem.style.marginBottom = "15px"
document.querySelector('.rodape').appendChild(imagem)
document.querySelector('.rodape').appendChild(footer);


function alerta(nome){
  window.alert(nome);
}