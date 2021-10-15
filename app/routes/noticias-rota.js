//var dbConnection = require('../../config/dbConnection');
var mysql = require('mysql');

module.exports = function(server) {

    server.get('/noticias', function(req, res) {

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });
    
        connection.query('select * from noticias', function(error, result){
            //res.send(result)
            res.render("noticias-diretorio/noticias-view", {listaDeNoticias : result});
        });               
    });
     //   res.render("noticias/noticias");

     server.get('/noticias/:id', function(req, res) {

        console.log(req.params);
        var connection = server.config.dbConnection();
    
        connection.query(`select * from noticias where id_noticia = ${req.params.id}`, function(error, result){
            //res.send(result)
            res.send(result);
        });               
    });
    server.post('/noticias', function(req, res) {
        var connection = mysql.createConnection({
            host : "localhost",
            user: "root",
            password: "1234",
            database: "portal_noticias"
        })

        var comandoSql = `INSERT INTO noticias (titulo, noticia) VALUES ('${req.body.titulo}', '${req.body.descricao}')`
        connection.query(comandoSql, function(error, result) {
            console.log(error)
            res.send(result);
        });
    });
}



