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

export const validaAdicionarProduto = () => {
  const botaoCadastro = document.querySelector("[data-botao='salvar']");
  const inputsCadastro = document.querySelectorAll("[data-cadastro]");

  botaoCadastro.addEventListener("click", (evento) => {
    evento.preventDefault();
    inputsCadastro.forEach((input) => {
      valida(input, input.dataset.cadastro);
    });
  });

  inputsCadastro.forEach((input) => {
    if (input.dataset.cadastro == "preco") {
      SimpleMaskMoney.setMask(input, {
        prefix: "R$ ",
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ",",
        thousandsSeparator: ".",
        cursor: "end",
      });
    }
    input.addEventListener("blur", () => {
      valida(input, input.dataset.cadastro);
    });
  });
};

validaForm();
