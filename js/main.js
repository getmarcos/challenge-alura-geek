import { valida } from "./valida.js";

const botaoSubmit = document.querySelector("[data-botao='submit']");
const inputsFormulario = document.querySelectorAll("[data-formulario]");

export const validaForm = () => {
  botaoSubmit.addEventListener("click", (evento) => {
    evento.preventDefault();
    inputsFormulario.forEach((input) => {
      valida(input, input.dataset.formulario);
    });
  });

  inputsFormulario.forEach((input) => {
    input.addEventListener("blur", () => {
      valida(input, input.dataset.formulario);
    });
  });
};

validaForm();
