const mysql = require('mysql2')

const banco = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "aula"
})

    banco.connect(function(err,result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
    function createDatabase(nome){
        const query = `CREATE DATABASE ${nome}`
        banco.query(query), function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        }
    }
    function dropDatabase(nome){
        const query = `DROP DATABASE ${nome}`
        banco.query(query), function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        }
    }
    

    // banco.query(`CREATE TABLE cadastro (
    //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     nome VARCHAR(50) NOT NULL,
    //     idade INT NOT NULL)`)
    
    function insertCadastro(nome, idade){
        banco.query(`INSERT INTO cadastro (nome, idade)
    VALUES("${nome}", ${idade})`)

    }
    insertCadastro("fulano",32)
    
    
    