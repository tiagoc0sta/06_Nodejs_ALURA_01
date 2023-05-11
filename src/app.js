import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/livro.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('conexao com o banco feita com sucesso');
});

const app = express();

app.use(express.json());

// const livros = [
//   { id: 1, titulo: 'Senhor dos Aneis' },
//   { id: 2, titulo: 'O Hobbit' },
// ];

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (err) {
    // handle the error
    res.status(500).json({ message: err.message });
  }
});

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

// criar novo livro
app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso');
});

//atualizar livro
app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id === id);
}

app.delete('/livros/:id', (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso!`);
});

export default app;
