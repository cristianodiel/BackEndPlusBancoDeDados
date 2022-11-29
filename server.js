const express = require("express")
// const dados = require("./db.json")
const fs = require('fs')
const app = express()

app.use(express.json())

let dados =[]

function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'))

}
function escreveDados (){
    fs.writeFileSync('./db.json', JSON.stringify(dados))

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
app.post("/users", function(req,res){
    const novoUsuario ={
        nome:req.body.nome,
        idade: req.body.idade
    }
    console.log(novoUsuario)
    getDados()
    //novoUsuario.id=???
    dados.push(novoUsuario)
    escreveDados()
    res.sendStatus(201)

})

app.listen(3000, function () {
    console.log("Servidor conectado")
})
// app.get('/',function (req, res){
//     res.send(dados)
// })
