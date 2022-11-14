import { valida } from "../service/valida.js";
import { validaForm } from "../service/validadores.js";

const botaoLogin = document.querySelector("[data-login]");

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

validaForm();
