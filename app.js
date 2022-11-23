const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> { // quando acessar o locahost:3000/
  res.sendFile(__dirname + "/views/index.html") //buscando arquivo index.html na pasta views
}) 

app.get('/header', (req, res)=> { // quando acessar o locahost:3000/header
    res.sendFile(__dirname + "/views/header.html") //buscando arquivo header.html na pasta views
}) 

app.get('/footer', (req, res)=> { // quando acessar o locahost:3000/footer
   res.sendFile(__dirname + "/views/footer.html") //buscando arquivo footer.html na pasta views
})

app.get('/paginaDeProduto', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaDeProduto.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/home', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/home.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/listagemdeprodutos', (req, res)=> { // quando acessar o locahost:3000/paginaDeProdutos
  res.sendFile(__dirname + "/views/listagemDeProdutos.html") //buscando arquivo paginaDeProdutos.html na pasta views
})

app.get('/carrinho', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaDeCarrinho.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/paginaDeCheckoutEndereco', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaDeCheckoutEnderco.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/paginaDeCheckoutPagamento', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaDeCheckoutPagamento.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/login', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/login.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/paginaDeFinalizacaoDeCompra', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaDeFinalizacaoDeCompra.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/paginaPainelDoUsuario', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaPainelDoUsuario.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.listen(3000,()=>{
 console.log("starting...");
});