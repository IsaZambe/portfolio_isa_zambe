const projetos = [
  {
    titulo: "Modelo Meteora",
    descricao: "Site de uma loja de roupas, com framework responsivo ",
    imagem: "./assets/montagem-familia.png",
    link: "https://github.com/IsaZambe/calculadora"
  }
  // Adiciona mais projetos aqui se quiser
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  projetos.forEach(projeto => {
    container.innerHTML += `
      <div class="col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm">
          <img src="${projeto.imagem}" class="card-img-top w-100" alt="${projeto.titulo}">
          <div class="card-body">
            <h5 class="card-title">${projeto.titulo}</h5>
            <p class="card-text">${projeto.descricao}</p>
            <a href="${projeto.link}" class="btn btn-outline-primary w-100" target="_blank">Visitar</a>
          </div>
        </div>
      </div>
    `;
  });
});
