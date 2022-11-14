const pegaProdutos = () => {
  return fetch("http://localhost:3000/produtos").then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Não foi possível carregar os produtos.");
  });
};

const criaProduto = ({ id, urlImagem, categoria, nome, preco, descricao }) => {
  return fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      urlImagem: urlImagem,
      categoria: categoria,
      nome: nome,
      preco: preco,
      descricao: descricao,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Não foi possível criar um novo produto.");
  });
};

const removeProduto = (id) => {
  return fetch(`http://localhost:3000/produtos/${id}`, {
    method: "DELETE",
  }).then((response) => {
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
