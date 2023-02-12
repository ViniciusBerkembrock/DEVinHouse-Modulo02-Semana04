
const alunos = [
    {
      nome: `Luis Carlos Elias`,
      mediaFinal: 7.0,
    },
    {
      nome: `Juliana Silva`,
      mediaFinal: 8.5,
    },
    {
      nome: `Pedro Pascal`,
      mediaFinal: 5.5,
    },
    {
      nome: `Ana Santos`,
      mediaFinal: 6.5,
    }
  ];

let alunosAprovados = []
alunosAprovados = alunos.filter(alunos => alunos.mediaFinal >= 7)
console.log("Alunos Aprovados:")
alunosAprovados.forEach(aluno =>  console.log(`Nome: ${aluno.nome}`))
