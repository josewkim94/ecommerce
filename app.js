const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> { // quando acessar o locahost:3000/
  res.sendFile(__dirname + "/views/index.html") //buscando arquivo index.html na pasta views
}) 


app.get('/paginaDeProduto', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/paginaDeProduto.html") //buscando arquivo paginaDeProduto.html na pasta views
})


app.get('/listagemdeprodutos', (req, res)=> { // quando acessar o locahost:3000/paginaDeProdutos
  res.sendFile(__dirname + "/views/listagemDeProdutos.html") //buscando arquivo paginaDeProdutos.html na pasta views
})

app.get('/carrinho', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/carrinho.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/checkoutendereco', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/checkoutEnderco.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/checkoutpagamento', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/checkoutPagamento.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/login', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/login.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/finalizacaodecompra', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/finalizacaoDeCompra.html") //buscando arquivo paginaDeProduto.html na pasta views
})

app.get('/painelusuario', (req, res)=> { // quando acessar o locahost:3000/paginaDeProduto
  res.sendFile(__dirname + "/views/painelUsuario.html") //buscando arquivo paginaDeProduto.html na pasta views
})
app.get('/home',(req,res)=>{
  res.sendFile(__dirname + "/views/home.html")
})

app.listen(3000,()=>{
 console.log("starting...");
});