import express from 'express';
import tarefasRouter from './src/routes/tarefaRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tarefas', tarefasRouter);

app.listen(PORT, () => {
    console.log(`✨Arrasou divaaaa, ta rodando na porta ${PORT}`);
});