import tarefaModel from '../models/tarefaModel.js';

class TarefaController {
    getAll = (req, res) => {
        const tarefas = tarefaModel.getAll();
        res.json(tarefas);
    };
    create = ({body: {descricao}}, res) => {
        if (!descricao) {
            res.status(400).json({message: 'A descrição é obrigatória'});
            return;
        }
        const novaTarefa = tarefaModel.create(descricao);
        res.status(201).json(novaTarefa);
    };
    update = ({params : {id} , body: {concluida} }, res) => {
        const tarefaAtualizada = tarefaModel.update(id, concluida);
        if (!tarefaAtualizada) {
            return res.status(404).json({message: 'Tarefa não encontrada'});
        }
        res.json(tarefaAtualizada);
    };
    delete = ({params: {id}}, res) => {
        const tarefaDeletada = tarefaModel.delete(id);
        if (!tarefaDeletada) {
            return res.status(404).json({message: 'Tarefa não encontrada'});
        }
        res.json(tarefaDeletada);
    };
}

export default new TarefaController();
    
