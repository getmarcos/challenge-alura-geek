import { valida } from "./valida.js";

export const validaForm = () => {
  const botaoSubmit = document.querySelector("[data-botao='submit']");
  const inputsFormulario = document.querySelectorAll("[data-formulario]");
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
