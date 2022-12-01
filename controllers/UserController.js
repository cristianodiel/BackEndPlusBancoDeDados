const fs = require('fs')
let dados =[]
function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'))

}
function escreveDados (){
    fs.writeFileSync('./db.json', JSON.stringify(dados))

}

function obterDados(req,res){
    getDados()
    
    res.send(dados)
}

function obterPorId(req,res){//obter por Id
    getDados()
    const id = req.params.id
    const usuario = dados.filter(function(item){
        return id==item.id
    })
    res.send(usuario)
}

function postarDados(req,res){
    console.log(req.body)
    const novoUsuario ={
        nome:req.body.nome,
        idade: req.body.idade

    }
    
    getDados()
    novoUsuario.id = dados.length+1

    dados.push(novoUsuario)
    escreveDados()
    res.sendStatus(201)

}
module.exports = {obterDados, obterPorId, postarDados}