const pegaProdutos = () => {
  return fetch(
    "https://challenge-ecommerce-alura-geek.herokuapp.com/produtos"
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Não foi possível carregar os produtos.");
  });
};

const criaProduto = ({ id, urlImagem, categoria, nome, preco, descricao }) => {
  return fetch(
    "https://challenge-ecommerce-alura-geek.herokuapp.com/produtos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        urlImagem,
        categoria,
        nome,
        preco,
        descricao,
      }),
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Não foi possível criar um novo produto.");
  });
};

const removeProduto = (id) => {
  return fetch(
    `https://challenge-ecommerce-alura-geek.herokuapp.com/produtos/${id}`,
    {
      method: "DELETE",
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Não foi possível remover o produto.");
    }
  });
};

export const clienteService = {
  pegaProdutos,
  criaProduto,
  removeProduto,
};
