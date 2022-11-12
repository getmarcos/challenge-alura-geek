const pegaProdutos = () => {
  return fetch(`http://localhost:3000/produtos`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Não foi possível carregar os produtos.");
  });
};

const criaProduto = ({ id, urlImagem, categoria, nome, preco, descricao }) => {
  return fetch(`http://localhost:3000/produtos`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id,
      urlImagem,
      categoria,
      nome,
      preco,
      descricao,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Não foi possível criar um novo produto.");
  });
};

export const clienteService = {
  pegaProdutos,
  criaProduto,
};
