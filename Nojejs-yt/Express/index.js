const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', (req, res) => {
  res.send('Minha Page sobre');
});

app.get('/blog', function (req, res) {
  res.sendFile(__dirname + '/html/index2.html');
});

app.get('/vitor', (req, res) => {
  res.send('Vitor');
});

app.get('/Ola/:nome/:cargo', function (req, res) {
  res.send(
    'Olá ' + req.params.nome + '\n' + 'Seu cargo é : ' + req.params.cargo,
  );
});

app.listen(8081, () => {
  console.log('Servidor Rodando na url http://localhost:8081');
});
