import { valida } from "./valida.js";

const inputs = document.querySelectorAll("[data-formulario]");
const submit = document.querySelector(".formulario__botao");

submit.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputs.forEach((input) => {
    valida(input);
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    valida(input);
  });
});
