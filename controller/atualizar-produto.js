import { clienteService } from "../service/cliente-service.js";

// [Editar produto]
(async () => {
  const pegaURL = new URL(window.location);
  const index = pegaURL.searchParams.get("produto");
  const editarProduto = async (index) => {
    const urlImagem = document.querySelector("[data-cadastro='url']");
    const categoria = document.querySelector("[data-cadastro='categoria']");
    const nome = document.querySelector("[data-cadastro='nome']");
    const preco = document.querySelector("[data-cadastro='preco']");
    const descricao = document.querySelector("[data-cadastro='descricao']");

    const produto = await clienteService.pegaProdutoUnico(index);

    urlImagem.value = produto.urlImagem;
    categoria.value = produto.categoria;
    nome.value = produto.nome;
    preco.value = produto.preco;
    descricao.value = produto.descricao;

    const botaoEditar = document.querySelector("[data-cadastro='editar']");
    botaoEditar.addEventListener("click", async (evento) => {
      evento.preventDefault();
      try {
        await clienteService.atualizaProduto(index, dadosProduto());
        window.location.href = "produtos.html?admin=true";
      } catch (erro) {
        console.log(erro);
        window.location.href = "telas/erro.html";
      }
    });
  };
  editarProduto(index);
})();

const dadosProduto = () => {
  const urlImagem = document.querySelector("[data-cadastro='url']");
  const categoria = document.querySelector("[data-cadastro='categoria']");
  const nome = document.querySelector("[data-cadastro='nome']");
  const preco = document.querySelector("[data-cadastro='preco']");
  const descricao = document.querySelector("[data-cadastro='descricao']");
  const dados = {
    id: `${Date.now()}`,
    urlImagem: urlImagem.value,
    categoria: categoria.value,
    nome: nome.value,
    preco: preco.value,
    descricao: descricao.value,
  };
  return dados;
};
