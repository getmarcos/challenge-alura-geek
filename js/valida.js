export function valida(input) {
  const tipoDeInput = input.dataset.formulario;

  if (input.validity.valid) {
    input.parentElement.classList.remove("formulario__campo--invalido");
    input.parentElement.querySelector("span").innerHTML = "";
  } else {
    input.parentElement.classList.add("formulario__campo--invalido");
    input.parentElement.querySelector(".mensagem__erro").innerHTML =
      mostraMensagem(tipoDeInput, input);
  }
}

export function validaLogin(input) {
  const tipoDeInput = input.dataset.login;
  if (input.validity.valid) {
    input.parentElement.classList.remove("formulario__campo--invalido");
    input.parentElement.querySelector("span").innerHTML = "";
  } else {
    input.parentElement.classList.add("formulario__campo--invalido");
    input.parentElement.querySelector(".mensagem__erro").innerHTML =
      mostraMensagem(tipoDeInput, input);
  }
}

const tiposDeErro = ["valueMissing", "typeMismatch", "patternMismatch"];

const mensagensDeErro = {
  nome: {
    valueMissing: "Campo nome é obrigatório.",
  },
  email: {
    valueMissing: "Campo e-mail é obrigatório.",
    typeMismatch: "Informe um endereço de e-mail válido.",
    patternMismatch: "Exemplo de e-mail válido: seuemail@dominio.com.",
  },
  senha: {
    valueMissing: "Campo senha é obrigatório.",
    patternMismatch:
      "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não símbolos",
  },
  mensagem: {
    valueMissing: "Campo mensagem é obrigatório.",
  },
};

function mostraMensagem(tipoDeInput, input) {
  let mensagem = "";
  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  });
  return mensagem;
}
