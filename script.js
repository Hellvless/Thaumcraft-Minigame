const gridContainer = document.getElementById("grid-container");

// Configurações da grade
const rows = 6; // Número de linhas
const cols = 6; // Número de hexágonos por linha

const spacing = 1; // Espaçamento entre hexágonos (em pixels)
const hexSize = Math.min(
  (window.innerWidth - (cols - 1) * spacing) / (cols * 1.5),
  (window.innerHeight - (rows - 1) * spacing) / (rows * 1.5)
); // Ajuste proporcional considerando o espaçamento

const hexHeight = hexSize * 4 / 2; // Altura do hexágono
const hexWidth = hexSize; // Largura base do hexágono

// Atualiza o tamanho do contêiner da grade
gridContainer.style.width = `${cols * hexWidth * 0.75 + (cols - 1) * spacing}px`;
gridContainer.style.height = `${rows * hexHeight + (rows - 1) * spacing}px`;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const hex = document.createElement("div");
    hex.className = "hex";

    // Calcula a posição de cada hexágono
    const left = col * (hexWidth * 1.38); // Espaçamento horizontal
    const top = row * (hexHeight * 0.87 + spacing); // Espaçamento vertical para encostar as linhas

    // Ajuste para linhas ímpares
    if (row % 2 !== 0) {
      hex.style.left = `${left + hexWidth * 0.375}px`; // Deslocamento horizontal
    } else {
      hex.style.left = `${left}px`;
    }

    // Aplica as coordenadas
    hex.style.top = `${top}px`;

    // Adiciona o conteúdo (opcional)
    const content = document.createElement("div");
    content.className = "content";
    content.innerText = "?"; // Placeholder para cada célula
    hex.appendChild(content);

    gridContainer.appendChild(hex);
  }
}
