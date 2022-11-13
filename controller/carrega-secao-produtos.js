import { validaForm } from "../service/validadores.js";
import { clienteService } from "../service/cliente-service.js";
import { pegaCategoria } from "../service/pega-categorias.js";
import { produtoService } from "../service/cria-produtos.js";

try {
  const $produtos = document.querySelector("[data-produtos]");
  const produtos = await clienteService.pegaProdutos();
  const categorias = pegaCategoria(produtos);

  categorias.forEach((categoria) => {
    const secao = produtoService.criaSecao(categoria);
    $produtos.appendChild(secao);
    const lista = document.querySelector(`[data-list='${categoria}']`);

    produtos.forEach((produto) => {
      if (produto.categoria === categoria) {
        const produtoNovo = produtoService.criaCardProduto(produto, categoria);
        lista.appendChild(produtoNovo);
      }
    });
  });
} catch (erro) {
  console.log(erro);
  window.location.href = "../telas/erro.html";
}

validaForm();
