import { validaAdicionarProduto } from "./main.js";
import { validaForm } from "./main.js";

const botaoAdd = document.querySelector("[data-botao='adicionar']");

botaoAdd.addEventListener("click", () => {
  const produtos = document.querySelector(".produtos");
  const adicionarProduto = document.querySelector(".adicionar-produto");
  produtos.style.display = "none";
  adicionarProduto.style.display = "block";
});

validaAdicionarProduto();
validaForm();
