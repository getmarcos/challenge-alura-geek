const buttonLogin = document.querySelector(".cabecalho__login");

buttonLogin.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  const produtos = document.querySelectorAll(".produtos");
  const login = document.querySelector(".login");
  banner.style.display = "none";
  produtos.forEach((produto) => {
    produto.style.display = "none";
  });
  login.style.display = "block";
  buttonLogin.style.display = "none";
});
