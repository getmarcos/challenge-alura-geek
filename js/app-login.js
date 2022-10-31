import { valida } from "./valida.js";
import { validaForm } from "./main.js";

const botaoLogin = document.querySelector("[data-botao='login']");
const inputsLogin = document.querySelectorAll("[data-login]");

botaoLogin.addEventListener("click", (evento) => {
  inputsLogin.forEach((input) => {
    valida(input, input.dataset.login);
  });
});

inputsLogin.forEach((input) => {
  input.addEventListener("blur", () => {
    valida(input, input.dataset.login);
  });
});

validaForm();
