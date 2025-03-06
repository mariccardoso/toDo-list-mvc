import express from 'express';
import livroRoutes from './routes/livroRoutes.js';
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/itens', livroRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Olá, está é a minha rota de mensagem'});
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});