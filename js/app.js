import { valida, validaLogin } from "./valida.js";

const inputsFormulario = document.querySelectorAll("[data-formulario]");
const submitFormulario = document.querySelector("[data-botao='submit']");

const inputsLogin = document.querySelectorAll("[data-login]");
const submitLogin = document.querySelector("[data-botao='login']");

submitFormulario.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputsFormulario.forEach((input) => {
    valida(input);
  });
});

inputsFormulario.forEach((input) => {
  input.addEventListener("blur", () => {
    valida(input);
  });
});

submitLogin.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputsLogin.forEach((input) => {
    validaLogin(input);
  });
});

inputsLogin.forEach((input) => {
  input.addEventListener("blur", () => {
    validaLogin(input);
  });
});
