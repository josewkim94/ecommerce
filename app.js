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

app.listen(3000,()=>{
 console.log("starting...");
});