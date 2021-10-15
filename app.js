var server = require('./config/server');

//Padrão CommonJs pd "executar" a function após o require eliminando assim cód desnecessário
var rotaHome = require('./app/routes/home-rota')(server);


//var rotaFormulario_inclusão = require('./app/routes/formulario_inclusao_noticia-rota')(server);
//exemplo caso não use o padrão CommonJs - rotaFormulario_inclusão(app);

var rotaNoticias = require('./app/routes/noticias-rota')(server);

var cadastroNoticia = require('./app/routes/cadastro-noticia')(server);


server.listen(3000,function(){
    console.log('Servidor ON');
});