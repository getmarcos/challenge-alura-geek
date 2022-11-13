import { clienteService } from "../service/cliente-service.js";
import { produtoService } from "../service/cria-produtos.js";
import { validaForm } from "../service/validadores.js";

// [Lista todos os produtos (Por categoria ou não)]
const secaoProdutos = document.querySelector("[data-produtos]");
const listarProdutos = (produtos, categoria) => {
  const tituloCategoria = document.querySelector("[data-categoria]");
  tituloCategoria.innerText = `${categoria}`;

  const lista = document.createElement("ul");
  lista.classList.add("produtos__cards");

  produtos.forEach((produto) => {
    if (categoria == null) {
      tituloCategoria.innerText = `Todos os produtos`;
      lista.appendChild(
        produtoService.criaCardProduto(produto, produto.categoria)
      );
    } else if (categoria === produto.categoria.replace(" ", "")) {
      lista.appendChild(
        produtoService.criaCardProduto(produto, produto.categoria)
      );
    }
  });
  secaoProdutos.appendChild(lista);
};

try {
  const produtos = await clienteService.pegaProdutos();
  const categoria = new URL(window.location).searchParams.get("categoria");
  listarProdutos(produtos, categoria);
} catch (erro) {
  console.log(erro);
  window.location.href = "./telas/erro.html";
}

//
// [Adiciona novo produto ao servidor]
const botaoNovoProduto = document.querySelector("[data-adicionar]");
botaoNovoProduto.addEventListener("click", () => {
  window.location.href = "../telas/adicionar-produto.html";
});

validaForm();
