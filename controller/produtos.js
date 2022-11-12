import { validaForm } from "../service/validadores.js";
import { clienteService } from "../service/cliente-service.js";
import { produtoService } from "../service/cria-produtos.js";
import { valida } from "../service/valida.js";

//
// [Lista todos os produtos (Por categoria ou não)]
const secaoProdutos = document.querySelector("[data-produtos]");
const listarProdutos = (produtos, categoria) => {
  const tituloCategoria = document.querySelector("[data-categoria]");
  tituloCategoria.innerText = `Produtos ${categoria}`;

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
  window.location.href = "../telas/erro.html";
}

//
// [Adiciona novo produto ao servidor]
const botaoNovoProduto = document.querySelector("[data-adicionar]");
botaoNovoProduto.addEventListener("click", () => {
  const produtos = document.querySelector(".produtos");
  const adicionarProduto = document.querySelector(".adicionar-produto");
  produtos.style.display = "none";
  adicionarProduto.style.display = "block";
});

const botaoAdicionar = document.querySelector("[data-cadastro='salvar']");
botaoAdicionar.addEventListener("click", async (evento) => {
  evento.preventDefault();
  
  const inputsCadastro = document.querySelectorAll("[data-cadastro]");
  let isValid = true;
  inputsCadastro.forEach((input) => {
    if (!valida(input, input.dataset.cadastro)) {
      isValid = false;
    }
  });

  if (isValid) {
    try {
      await clienteService.criaProduto(dadosProduto());
      window.location.href = "../telas/produtos.html";
    } catch (erro) {
      console.log(erro);
      window.location.href = "../telas/erro.html";
    }
  }
});

const dadosProduto = () => {
  const urlImagem = document.querySelector("[data-cadastro='url']").value;
  const categoria = document.querySelector("[data-cadastro='categoria']").value;
  const nome = document.querySelector("[data-cadastro='nome']").value;
  const preco = document.querySelector("[data-cadastro='preco']").value;
  const descricao = document.querySelector("[data-cadastro='descricao']").value;

  const dados = {
    id: produtos.length + 1,
    urlImagem,
    categoria,
    nome,
    preco,
    descricao,
  };
  return dados;
};

validaForm();
