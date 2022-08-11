const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});

//Criar lista com as pontuações
const lista = [
    {
        id: 1,
        nome: "Paulo",
        pontos: 90
    },
    {
        id: 2,
        nome: "Daniel",
        pontos: 52
    },
    {
        id: 3,
        nome: "Bia",
        pontos: 97
    }
];
//Endpoint READ ALL - [GET] /pontuacoes
app.get("/pontuacoes", function (req, res){
    res.send("Ler todas as pontuações");
});
//Endpoint CREATE - [POST] /pontuacoes
//Endpoint CREATE - [POST] /pontuacoes

app.listen(3000);
//console.log("Executando no sevidor localhost:3000");