class GeradorDivComTexto {
    constructor(texto){
        this.texto = texto
        this._div = document.createElement('div');
    }

    getDiv() {
        return this._div;
      }
}

class GeradorDivComEstilizacao extends GeradorDivComTexto {
    constructor(texto) {
        super(texto)
    }

    adicionarEstilizacao() {
        this._div.classList
    }
}

const exemploTexto = new GeradorDivComTexto('Texto para testar o exercicio sobre textos');
const bodyDoHTML = document.getElementById('container');
bodyDoHTML.appendChild(exemploTexto.getTexto());