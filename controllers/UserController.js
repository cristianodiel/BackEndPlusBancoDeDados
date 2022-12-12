const fs = require('fs')
const banco = require('../dbConfig')
let dados = []
function getDados() {


}

function obterDados(req, res) {
    const query = `SELECT * FROM cadastro`
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            //console.log(result)
        }
    })
}

function obterPorId(req, res) {//obter por Id
    const id = req.params.id
    const query = `SELECT * FROM cadastro WHERE id = ${id}`
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    })

}

function postarDados(req, res) {

    const query = `INSERT INTO cadastro (nome, idade) 
    VALUES('${req.body.nome}',${req.body.idade})`
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.sendStatus(201)

        }
    })


}

function deletarUsuario(req, res) {
    const id = req.params.id
    query = `DELETE FROM cadsatro WHERE id = &{id}`
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.sendStatus(201)

        }
    })
}
function updateUsuario(req, res) {
    const id = req.params.id
    const query = `UPDATE cadastro
    SET (nome = '${req.body.nome}', idade = ${res.body.idade})
    WHERE id = ${id}`
    banco.query(query, function (err, result) {


    })
}
module.exports = { obterDados, obterPorId, postarDados, deletarUsuario }