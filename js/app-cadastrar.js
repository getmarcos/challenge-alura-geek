import { valida } from "./valida.js";
import { validaForm } from "./main.js";

const botaoCadastro = document.querySelector("[data-botao='salvar']");
const inputsCadastro = document.querySelectorAll("[data-cadastro]");

botaoCadastro.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputsCadastro.forEach((input) => {
    valida(input, input.dataset.cadastro);
  });
});

inputsCadastro.forEach((input) => {
  input.addEventListener("blur", () => {
    valida(input, input.dataset.cadastro);
  });
});

validaForm();