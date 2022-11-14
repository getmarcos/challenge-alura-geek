import { clienteService } from "../service/cliente-service.js";
import { produtoService } from "../service/cria-produtos.js";
import { validaForm } from "../service/validadores.js";

const secaoProdutos = document.querySelector("[data-produtos]");

// [botão adiciona novo produto]
const BotaoAdicionarProduto = (secaoProdutos) => {
  const botaoAdicionarProduto = document.createElement("a");
  botaoAdicionarProduto.classList = "botao botao--azul";
  botaoAdicionarProduto.href = "../telas/adicionar-produto.html";
  botaoAdicionarProduto.setAttribute("data-adicionar", "");
  botaoAdicionarProduto.innerText = "Adicionar produto";

  if (window.location.href.includes("produtos.html?admin=true")) {
    const divTitulo = secaoProdutos.querySelector("div");
    divTitulo.appendChild(botaoAdicionarProduto);
  }
};
BotaoAdicionarProduto(secaoProdutos);

// [Lista todos os produtos]
const listarProdutos = (produtos, categoria) => {
  const tituloCategoria = document.querySelector("[data-categoria]");
  tituloCategoria.innerText = `Todos os produtos`;
  const lista = document.createElement("ul");
  lista.classList.add("produtos__cards");

  produtos.forEach((produto) => {
    const novoProduto = produtoService.criaCardProduto(
      produto,
      produto.categoria
    );
    if (categoria == null) {
      lista.appendChild(novoProduto);
    } else if (categoria === produto.categoria.replace(" ", "")) {
      lista.appendChild(novoProduto);
      tituloCategoria.innerText = produto.categoria;
    }
  });
  secaoProdutos.appendChild(lista);
};

// [Carrega produtos]
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
  const isBotaoEdita = evento.target.className === "card__caneta";
  try {
    const produtos = await clienteService.pegaProdutos();
    const produto = evento.target.closest("[data-id]");
    const id = produto.dataset.id;
    const index = produtos.findIndex((produto) => {
      return produto.id === id;
    });
    if (isBotaoRemove) {
      await clienteService.removeProduto(index);
      window.location.reload();
    } else if (isBotaoEdita) {
      window.location.href = `/telas/atualizar-produto.html?produto=${index}`;
    }
  } catch (erro) {
    console.log(erro);
  }
});

// [Edita produtos]

validaForm();
