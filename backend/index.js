const express = require("express");
const app = express();

//Sinaliza para o express que estamos usando JSON no body das requisiçoes
app.use(express.json());

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
    res.send(lista);
});

//Endpoint CREATE - [POST] /pontuacoes
app.post("/pontuacoes", function(req, res){
    const item = req.body;
    //console.log(item);

    //adicionar item na lista
    lista.push({
        id: lista.length + 1,
        nome: item.nome,
        pontos: item.pontos,
    })

    res.send("Criar uma pontuação")
});

app.listen(3000);