import { clienteService } from "../service/cliente-service.js";
import { produtoService } from "../service/cria-produtos.js";
import { validaForm } from "../service/validadores.js";

// [botão adiciona novo produto]
const botaoNovoProduto = document.querySelector("[data-adicionar]");
botaoNovoProduto.addEventListener("click", () => {
  window.location.href = "../telas/adicionar-produto.html";
});

// [Lista todos os produtos (Por categoria ou não)]
const secaoProdutos = document.querySelector("[data-produtos]");
const listarProdutos = (produtos, categoria) => {
  const tituloCategoria = document.querySelector("[data-categoria]");
  tituloCategoria.innerText = `${categoria}`;

  const lista = document.createElement("ul");
  lista.classList.add("produtos__cards");

  produtos.forEach((produto) => {
    const novoProduto = produtoService.criaCardProduto(
      produto,
      produto.categoria
    );

    if (categoria == null) {
      tituloCategoria.innerText = `Todos os produtos`;
      lista.appendChild(novoProduto);
    } else if (categoria === produto.categoria.replace(" ", "")) {
      lista.appendChild(novoProduto);
    }
  });
  secaoProdutos.appendChild(lista);
};

const carregaProdutos = async () => {
  try {
    const produtos = await clienteService.pegaProdutos();
    const categoria = new URL(window.location).searchParams.get("categoria");
    listarProdutos(produtos, categoria);
  } catch (erro) {
    console.log(erro);
    window.location.href = "./telas/erro.html";
  }
};
carregaProdutos();

// [Remove produto]
const cardsProdutos = document.querySelector("[data-produtos]");
cardsProdutos.addEventListener("click", async (evento) => {
  const isBotaoRemove = evento.target.className === "card__lixeira";
  if (isBotaoRemove) {
    try {
      const produtos = await clienteService.pegaProdutos();
      const produto = evento.target.closest("[data-id]");
      const id = produto.dataset.id;
      const index = produtos.findIndex((produto) => {
        return produto.id === id;
      });
      await clienteService.removeProduto(index);
      window.location.reload();
    } catch (erro) {
      console.log(erro);
    }
  }
});

validaForm();
