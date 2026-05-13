const { soma, subtracao, multiplicacao, divisao } = require('./calculator')

const resultSoma = soma(2, 1)
const resultSubtracao = subtracao(2, 1)
const resultMulti = multiplicacao(2, 1)
const resultDivisao = divisao(2, 1)

console.log(`
    A soma de 2 + 1 = ${resultSoma}
    A subtração de 2 - 1 = ${resultSubtracao}
    A multiplicação de 2 * 1 = ${resultMulti}
    A divisão de 2 / 1 = ${resultDivisao}
    `)