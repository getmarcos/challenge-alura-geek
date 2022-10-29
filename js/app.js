import { valida } from "./valida.js";

const inputsFormulario = document.querySelectorAll("[data-formulario]");
const submitFormulario = document.querySelector("[data-botao='submit']");

const inputsLogin = document.querySelectorAll("[data-login]");
const submitLogin = document.querySelector("[data-botao='login']");

submitFormulario.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputsFormulario.forEach((input) => {
    if (input.hasAttribute("data-formulario")) {
      valida(input, input.dataset.formulario);
    } else {
      valida(input, input.dataset.login);
    }
  });
});

inputsFormulario.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.hasAttribute("data-formulario")) {
      valida(input, input.dataset.formulario);
    } else {
      valida(input, input.dataset.login);
    }
  });
});

submitLogin.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputsLogin.forEach((input) => {
    if (input.hasAttribute("data-formulario")) {
      valida(input, input.dataset.formulario);
    } else {
      valida(input, input.dataset.login);
    }
  });
});

inputsLogin.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.hasAttribute("data-formulario")) {
      valida(input, input.dataset.formulario);
    } else {
      valida(input, input.dataset.login);
    }
  });
});