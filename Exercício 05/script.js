class Aluno {
    constructor(nome, cpf, codigo) {
        this.nome = nome;
        this.cpf = cpf;
        this.codigo = codigo
    }

    get _nome() {return this.nome}
    get _cpf() {return this.cpf}
    get _codigo() {return this.codigo}

    imprimeDados(){
        console.log(`Nome Aluno: ${this.nome} \nCPF: ${this.cpf} \nCódigo Turma: ${this.codigo}`)
    }
    
}

let vinicius = new Aluno("Vinicius", 11255893966, 1095)
console.log(vinicius._nome)
console.log(vinicius._cpf)
console.log(vinicius._codigo)
vinicius.imprimeDados()