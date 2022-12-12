const express = require("express")
const banco = require("./dbConfig.js")
// const dados = require("./db.json")
//const fs = require('fs')//ja esta definido no outro arquivo
const app = express()
//enviado para o router.js
//const userController = require('./controllers/userController.js')
const Router = require('./routes/Router.js')

app.use(express.json())


//let dados =[]

// function getDados(){
//     dados = JSON.parse(fs.readFileSync('./db.json'))
// }
// function escreveDados (){
//     fs.writeFileSync('./db.json', JSON.stringify(dados))
// }
//enviado para Router.js
//app.get('/users', userController.obterDados)




// app.get('/users',function(req,res){
//     const dados = fs.readFileSync('./db.json')
    
//     res.send(JSON.parse(dados))
// })//receber todos os usuarios

//enviado para Router.js
//app.get('/users/:id',userController.obterPorId)


// app.post("/users", function(req,res){
//     const novoUsuario ={
//         nome:req.body.nome,
//         idade: req.body.idade
//     }
//     console.log(novoUsuario)
//     getDados()
//     //novoUsuario.id=???
//     dados.push(novoUsuario)
//     escreveDados()
//     res.sendStatus(201)
// })
//enviado para Router.js
//app.post("/users", userController.postarDados)

function conectarBanco(){
    banco.connect(function (err,result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
}


app.use('/users', Router)

app.listen(3000, function () {
    conectarBanco()
    console.log("Servidor conectado")
})

//alt+shift+f pra formatar dados no json
