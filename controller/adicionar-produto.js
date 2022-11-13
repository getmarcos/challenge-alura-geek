import { clienteService } from "../service/cliente-service.js";
import { valida } from "../service/valida.js";
import { validaForm } from "../service/validadores.js";

const botaoAdicionar = document.querySelector("[data-cadastro='salvar']");
const produtos = await clienteService.pegaProdutos();

botaoAdicionar.addEventListener("click", async (evento) => {
  evento.preventDefault();

  const inputsCadastro = document.querySelectorAll("[data-cadastro]");
  let isValid = true;
  inputsCadastro.forEach((input) => {
    if (!valida(input, input.dataset.cadastro)) {
      isValid = false;
    }
  });

  if (isValid) {
    try {
      await clienteService.criaProduto(dadosProduto());
      window.location.href = "/telas/produtos.html";
    } catch (erro) {
      console.log(erro);
      window.location.href = "/telas/erro.html";
    }
  }
});

const dadosProduto = () => {
  const urlImagem = document.querySelector("[data-cadastro='url']").value;
  const categoria = document.querySelector("[data-cadastro='categoria']").value;
  const nome = document.querySelector("[data-cadastro='nome']").value;
  const preco = document.querySelector("[data-cadastro='preco']").value;
  const descricao = document.querySelector("[data-cadastro='descricao']").value;
  const dados = {
    id: produtos.length + 1,
    urlImagem,
    categoria,
    nome,
    preco,
    descricao,
  };
  return dados;
};

validaForm();
