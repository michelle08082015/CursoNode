module.exports = function(server) {
    server.post('/cadastro-noticia', function(req, res){
        console.log(req.body)

        var connection = server.config.dbConnection();

        connection.query(`INSERT INTO noticias (titulo, noticia) VALUES ('${req.body.titulo}','${req.body.noticia}')` ,
         function(error, result){
            //res.send(result)
            
           console.log(result)
            res.send({ texto : "noticia criada com sucesso"})
        });   

       
    });
}

