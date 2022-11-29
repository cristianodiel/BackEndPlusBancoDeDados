const express = require("express")
// const dados = require("./db.json")
const fs = require('fs')
const app = express()

let dados =[]

function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'))

}

app.get('/users',function(req,res){
    const dados = fs.readFileSync('./db.json')
    
    res.send(JSON.parse(dados))
})//receber todos os usuarios

app.get('/users/:id',function(req,res){
    const id = req.params.id
    getDados()
    const usuario = dados.filter(function(item){
        return id==item.id
    })
    res.send(usuario)
    
})
app.listen(3000, function () {
    console.log("Servidor conectado")
})
// app.get('/',function (req, res){
//     res.send(dados)
// })
