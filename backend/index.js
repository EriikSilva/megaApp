const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const porta = 3000;

const app = express();

app.use(cors());
app.use(bodyparser.json());

//conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "megaappdb",
  port: 3306,
});

//checar a conexão
db.connect((err) => {
  if (err) {
    console.log("Houve um erro =>>>>>>>>>>", err);
  }

  console.log("sucesso ao conectar no banco de dados");
});

//GET
app.get("/usuarios", (req, res) => {
  let qr = `SELECT * FROM usuarios`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log("@@erro aqui =>", err);
    }
    res.send({
        message:"dados recuperados",
        data: result
    })

  });
});



//pegar somente um dado
app.get("/usuarios/:id", (req, res) => {
  // console.log('@@Um usuario aqui ->>>', req.params.id);

  let qID = req.params.id;

  let qr = `SELECT * FROM usuarios WHERE idUsuario = '${qID}' `;

  db.query(qr, (err, result) => {
    if (err) {
      console.log("@@Erro ao pegar o dado do usuario =>>>>>", err);
    }

    //console.log(result);

    //se tiver um resultado
    if (result.length > 0) {
      res.send({
        message: "catching a data",
        data: result,
      });
    } else {
      res.send({
        message: "dado não encontrado",
      });
    }
  });
});


//criando dado => POST
app.post("/usuarios", (req, res) => {
  // console.log("@@@@@AQUI ==>", req.body);

  let nomeDoUsuario = req.body.nomeUsuario;
  let sobrenomeDoUsuario = req.body.sobrenomeUsuario;
  let emailDoUsuario = req.body.emailUsuario;
  let senhaDoUsuario = req.body.senhaUsuario;


  let qr = `INSERT INTO usuarios(nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario) 
                          VALUES('${nomeDoUsuario}',
                                '${sobrenomeDoUsuario}',
                                '${emailDoUsuario}', 
                                '${senhaDoUsuario}')`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log("@@Erro ao Inserir", err);
    }

    res.send({
      message: "Dado Inserido",
    });
  });
});

//atualizado o dado => UPDATE
app.put("/usuarios/:id", (req, res) => {

    let uID = req.params.id;

    let nomeDoUsuario = req.body.nomeUsuario;
    let sobrenomeDoUsuario = req.body.sobrenomeUsuario;
    let emailDoUsuario = req.body.emailUsuario;
    let senhaDoUsuario = req.body.senhaUsuario;
    

    let qr = `UPDATE usuarios SET emailUsuario = '${emailDoUsuario}', 
                                senhaUsuario = ${senhaDoUsuario},
                                nomeUsuario = ${nomeDoUsuario},
                                sobrenomeUsuario = ${sobrenomeDoUsuario}
                            WHERE idUsuario = '${uID}'`

    db.query(qr, (err, result) => {
        if(err){
            console.log("Erro ao Atualizar => ", err);
        }

        res.send({
            message: "dado atualizado com sucesso"
        });
    });
});

//deletando o dado
app.delete("/usuarios/:id", (req, res) => {
    let uID = req.params.id;

    let qr = `DELETE FROM usuarios WHERE idUsuario = '${uID}'`

    db.query(qr, (err, result) => {
        if(err){
            console.log('@Erro ao deletar =>', err);
        }

        res.send({
            message: "dado deletado com sucesso"
        })
    });
});

app.listen(porta, () => {
  console.log("server ta rodando na porta =>", porta);
});
