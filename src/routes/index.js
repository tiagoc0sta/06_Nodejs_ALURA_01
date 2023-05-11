import express from 'express';
import livros from './livrosRoutes.js';
import routes from './routes/index.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de node' });
  });

  const app = express();

  app.use(express.json());

  routes(app);
};
