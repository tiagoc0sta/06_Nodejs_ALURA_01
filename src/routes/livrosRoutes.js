import express from 'express';
import livroController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/livros', livroController.listarLivros)
  .post('./livros', LivroController.cadastrarLivro);

export default router;
