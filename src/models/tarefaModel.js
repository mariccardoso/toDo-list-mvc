class TarefaModel {
    constructor() {
        this.tarefas = [
        {id: 1, descricao: 'Estudar Node.js', finalizada: false},
        ];
    }
    getAll = () => this.tarefas;
    create = descrição => {
        const novaTarefa = {
            id: this.tarefas.length + 1,
            descrição,
            finalizada: false,
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    };
    update = (id, descrição) => {
        const tarefa = this.tarefas.find((t) => t.id === id);
        if(tarefa) {
            tarefa.finalizada =
            finalizada !== undefined ? finalizada : tarefa.finalizada;
            return tarefa;
        }
        return null;
    };
    delete = id => {
        const index = this.tarefas.findIndex(t => t.id === id);
        if(index !== -1) {
            this.tarefas.splice(index, 1);
            return true;
        }
        return false;
    };
}

export default new TarefaModel; 