export const pegaCategoria = (produtos) => {
  const categorias = [];
  console.log(produtos)
  produtos.forEach((produto) => {
    if (categorias.indexOf(produto.categoria) == -1) {
      categorias.push(produto.categoria);
    }
  });
  return categorias;
};
