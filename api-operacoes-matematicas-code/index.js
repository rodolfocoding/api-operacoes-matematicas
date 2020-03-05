const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//USADO COMO EXMEPLO PARA EXECUTAR UM POST
const numbers = [];

//USADO PARA FAZER AS OPERAÇÕES AO ACIONAR O GET
const numbersGet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//SOMA DE VETOR
const total = numbersGet.reduce(function(total, number) {
  return total + number;
}, 0);
//RETORNA O TAMANHO DO ARRAY
const sizeArray = numbersGet.length;
const average = total / sizeArray;

//ADICIONA NÚMEROS AO ARRAY, VIA JSON
const addNumber = function(number) {
  numbers.push({
    number: number
  });

  return {
    number: number
  };
};

const getSum = function() {
  return total;
};

app.post("/sum", (req, res) => {
  res
    .status(201)
    .json(addNumber(req.body.number))
    .send("Vetor enviado com sucesso!");
});

app.get("/sum", (req, res) => {
  res.status(200).json(getSum());
});

app.get("/average", (req, res) => {
  res.status(200).json(average);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = { app, addNumber, getSum, total };
