const chai = require("chai");
const http = require("chai-http"); // Extensão da lib chai p/ simular requisições http
const subSet = require("chai-subset"); // Extensao da lib chai p/ verificar objetos

const index = require("../index"); // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

// O atributo do objeto será testado para verificar se ele existe
// O atributo recebe uma função, e ela deve retornar true para o teste passar
const numberSchema = {
  number: number => number
};

describe("Teste das funcoes", () => {
  it("addNumber", () => {
    const numbers = index.addNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Verifica se as caracteristicas do objeto aluno é igual ao numberSchema
    chai.expect(numbers).to.containSubset(numberSchema);
  });

  it("getSum", () => {
    index.addNumber([1]);
    index.addNumber([2]);
    index.addNumber([3]);
    index.addNumber([4]);
    index.addNumber([5]);
    index.addNumber([6]);
    index.addNumber([7]);
    index.addNumber([8]);
    index.addNumber([9]);
    const numbers = index.getSum();

    chai.expect(numbers.length).to.be.equals(9);
    // Primeiro se verifica se está retornando um array
    // Verifica se as caracteristicas dos objetos no array é igual ao numberSchema
    chai.expect(numbers).to.containSubset([numberSchema]);
  });
});
