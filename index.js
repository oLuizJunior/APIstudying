const express = require('express'); // chamando o express

const app = express() // inicializando o express

app.listen('3000'); // criando server

// app.route('/').get( (req, res) => res.send('Hello World'))
// app.route('/sobre').get( (req, res) => res.send('Sobre mim'))

// midleware: ponte entre as requisições
// app.use(express.json())

// app.route('/').post( (req, res) => res.send(req.body))

app.use(express.json())
let author = "Junior"

app.route('/').get((req, res) => res.send(author))

app.route('/').put( (req, res) => {
  author = req.body.author
  res.send(author)
})
// o put edita uma informação na api.

app.route('/:identificador').delete( (req,res) =>{
  author = ""
  res.send(req.params.identificador + ' apagado') 
})