const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "jornada-fullstack-agosto-22";

//Declaração da função main
async function main() {

    //realizar a conexão com o MongoClient
    //MoongoClient  -> MongoDatabases  -> MongoCollection

    console.log("Conectando com o banco de dados .... ");

    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("pontuacoes");

    console.log("Banco de dados conectado com sucesso!!");

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
    // const lista = [
    //     {
    //         id: 1,
    //         nome: "Paulo",
    //         pontos: 90,
    //     },
    //     {
    //         id: 2,
    //         nome: "Daniel",
    //         pontos: 52,
    //     },
    //     {
    //         id: 3,
    //         nome: "Bia",
    //         pontos: 97,
    //     }
    // ];

    
    //Endpoint READ ALL - [GET] /pontuacoes
    app.get("/pontuacoes", async function (req, res){
        const itens = await collection
            .find()
            .sort({ pontos: -1 })
            .limit(10)
            .toArray();

        res.send(itens);
    });

    //Endpoint CREATE - [POST] /pontuacoes
    app.post("/pontuacoes", async function(req, res){
        const item = req.body;
        //console.log(item);

        //adicionar item na lista
        // lista.push({
        //     id: lista.length + 1,
        //     nome: item.nome,
        //     pontos: item.pontos,
        // });

        await collection.insertOne(item);

        res.send(item);
    });

    app.listen(3000);
}

//executamos a função main
main();