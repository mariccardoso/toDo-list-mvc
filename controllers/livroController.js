import livroModel from '../models/livroModel.js';

class LivroController {
  getAll = (req, res) => {
    const livros = livroModel.getAll();
    res.json(livros);
  };

  create = ({ body: { titulo, autor } }, res) => {
    if (!titulo) {
      return res.status(400).json({ erro: "Titulo é obrigatório" });
    }
    const novoLivro = livroModel.create(titulo, autor);
    res.status(201).json(novoLivro);
  };

  update = ({ params: { id }, body: { autor } }, res) => {
    const livroAtualizado = livroModel.update(id, autor);
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.json(livroAtualizado);
  };

  delete = ({ params: { id } }, res) => {
    const sucesso = livroModel.delete(id);
    if (!sucesso) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.status(204).send();
  };
}
export default new LivroController();