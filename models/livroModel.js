class LivroModel {
  constructor() {
    this.livros = [
      { id: 1, titulo: "Melhor Do que nos Filmes", autor: "Lian Parker"},
    ];
  }
  getAll = () => this.livros;

  create = (titulo, autor) => {
    const novoLivro = {
      id: this.livros.length + 1,
      titulo,
      autor,
    };
    this.livros.push(novoLivro);
    return novoLivro;
  };
  update = (id, autor) => {
    const livro = this.livros.find((t) => t.id === Number(id));
    if (livro) {
      livro.autor =
        autor !== undefined ? String(autor) : livro.autor;
      return livro;
    }
    return null;
  };
  delete = (id) => {
    const index = this.livros.findIndex((t) => t.id === Number(id));
    if (index !== -1) {
      this.livros.splice(index, 1);
      return true;
    }
    return false;
  };
}
export default new LivroModel();
