import { valida, validaForm } from "../service/validador.js";

const botaoLogin = document.querySelector("[data-login='loggar']");

botaoLogin.addEventListener("click", (evento) => {
  evento.preventDefault();

  let formularioValido = true;
  const inputsLogin = document.querySelectorAll("[data-input]");

  inputsLogin.forEach((input) => {
    const isValid = valida(input, input.dataset.input);
    if (!isValid) {
      formularioValido = false;
    }
  });

  inputsLogin.forEach((input) => {
    input.addEventListener("blur", () => {
      const isValid = valida(input, input.dataset.input);
      if (!isValid) {
        formularioValido = false;
      }
    });
  });

  if (formularioValido) {
    window.location.href = "produtos.html?admin=true";
  }
});

const botaoSubmit = document.querySelector("[data-botao='submit']");
const inputsFormulario = document.querySelectorAll("[data-formulario]");
inputsFormulario.forEach((input) => {
  validaForm(botaoSubmit, input);
});
