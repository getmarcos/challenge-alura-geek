const criaSecao = (categoria) => {
  const secao = document.createElement("section");
  secao.classList = `${categoria} categorias`;
  secao.innerHTML = `
      <div class="produtos__titulo">
        <h3 class="titulo__texto">${categoria}</h3>
        <a href="./telas/produtos.html?categoria=${categoria.replace(
          " ",
          ""
        )}" class="titulo__verMais">Ver mais
          <img
            src="./assets/img/seta.svg"
            alt="Seta do link ver mais"
            class="verMais__seta"
          />
        </a>
      </div>
      <ul class="produtos__cards" data-list='${categoria}'>
      </ul>
  `;
  return secao;
};

function validaURL(produto) {
  let urlImagem = produto.urlImagem;
  if (
    window.location.href.includes("index.html") &&
    urlImagem.includes("./assets/img/")
  ) {
    urlImagem = urlImagem.replace(".", "");
  }
  return urlImagem;
}

const criaCardProduto = (produto, categoria) => {
  const novoProduto = document.createElement("li");
  let conteudo;
  const urlImagem = validaURL(produto);
  if (window.location.href.includes("/telas/produtos.html")) {
    novoProduto.className = "card__item todos__produtos";
    novoProduto.dataset.id = produto.id;

    conteudo = `<img
        src="${urlImagem}"
        alt="Produto ${categoria}"
        class="card__imagem"
      />
      <p class="card__titulo">${produto.nome}</p>
      <p class="card__preco">${produto.preco}</p>
      <a href="" class="card__link">Ver produto</a>
      <button class="card__botao card-botao-lixeira data-excluir">
        <img src="../assets/css/produtos/lixeira.svg" class="card__lixeira">
      </button>
      <button class="card__botao card-botao-caneta data-editar">
        <img src="../assets/css/produtos/caneta.svg" class="card__caneta">
      </button>`;
  } else {
    novoProduto.classList.add("card__item");
    conteudo = `<img
        src="${urlImagem}"
        alt="Produto ${categoria}"
        class="card__imagem"
      />
      <p class="card__titulo">${produto.nome}</p>
      <p class="card__preco">${produto.preco}</p>
      <a href="" class="card__link">Ver produto</a>`;
  }

  novoProduto.innerHTML = conteudo;
  return novoProduto;
};

export const produtoService = {
  criaSecao,
  criaCardProduto,
};
