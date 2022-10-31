import { valida } from "./valida.js";

const botaoSubmit = document.querySelector("[data-botao='submit']");
const botaoLogin = document.querySelector("[data-botao='login']");

const inputsFormulario = document.querySelectorAll("[data-formulario]");
const inputsLogin = document.querySelectorAll("[data-login]");

const inputsCadastro = document.querySelectorAll("[data-cadastro]");

botaoSubmit.addEventListener("click", (evento) => {
  inputsFormulario.forEach((input) => {
    if (!valida(input, input.dataset.formulario)) {
      evento.preventDefault();
    }
  });
});

botaoLogin.addEventListener("click", (evento) => {
  inputsLogin.forEach((input) => {
    if (!valida(input, input.dataset.login)) {
      evento.preventDefault();
    }
  });
});

inputsFormulario.forEach((input) => {
  input.addEventListener("blur", () => {
    valida(input, input.dataset.formulario);
  });
});

inputsLogin.forEach((input) => {
  input.addEventListener("blur", () => {
    valida(input, input.dataset.login);
  });
});
