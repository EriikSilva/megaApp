const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const porta = 3000;

const app = express();

app.use(cors())
app.use(bodyparser.json());

//conexão com o banco de dados
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "megaappdb",
    port: 3306
})

//checar a conexão
db.connect((err) => {
    if(err){
        console.log('Houve um erro =>>>>>>>>>>', err)
    }

    console.log('sucesso ao conectar no banco de dados')
})

//GET
app.get('/usuarios', (req, res) => {
    let qr = `SELECT * FROM usuarios`;

    db.query(qr, (err, result) => {
        if(err){
            console.log('@@erro aqui =>', err)
        }
        console.log('@@O que temos no GET', result)
    });
});


//pegar somente um dado
app.get('/usuario/:id', (req, res) => {

    // console.log('@@Um usuario aqui ->>>', req.params.id);

    let qID =  req.params.id;

    let qr = `SELECT * FROM usuarios WHERE idUsuario = '${qID}' `

    db.query(qr, (err, result) =>{
        if(err){
            console.log('@@Erro ao pegar o dado do usuario =>>>>>', err);
        }

        //console.log(result);

        //se tiver um resultado
        if(result.length > 0){
            res.send({
                message: "catching a data",
                data: result
            });
        }else{
            res.send({
                message: "dado não encontrado"
            })
        }
    });
  

});

//criando dado

//atualizado o dado

//deletando o dado








app.listen(porta, () => {
    console.log('server ta rodando :)')
})

