const gridContainer = document.getElementById("grid-container");

// Configurações da grade
const rows = 5; // Número de linhas
const cols = 8; // Número de hexágonos por linha

const spacing = 1; // Espaçamento entre hexágonos (em pixels)
const hexWidth = (gridContainer.offsetWidth - (cols - 1) * spacing) / (cols * 0.75); // Ajuste horizontal
const hexHeight = (gridContainer.offsetHeight - (rows - 1) * spacing) / rows; // Ajuste vertical

// Determina o tamanho mínimo entre o hexWidth e hexHeight para que os hexágonos caibam
const hexSize = Math.min(hexWidth, hexHeight); // O menor valor entre largura e altura

gridContainer.style.width = "800px";  // Largura fixada do contêiner
gridContainer.style.height = "600px"; // Altura fixada do contêiner

// Caso o número de linhas seja maior que 6, ajustamos o hexSize para diminuir proporcionalmente
if (rows > 6) {
  // Ajusta o hexSize para diminuir conforme o número de linhas
  const scaleFactor = 6 / rows; // Reduz o tamanho baseado no número de linhas
  hexSize = hexSize * scaleFactor;
}


// Atualiza o tamanho do hexágono
const hexHeightFinal = hexSize * 4 / 2; // Altura final do hexágono
const hexWidthFinal = hexSize; // Largura final do hexágono


// Atualiza o tamanho do contêiner da grid
gridContainer.style.width = `${(cols * hexWidthFinal + (cols - 1) * spacing)}px`;
gridContainer.style.height = `${rows * (hexHeightFinal - 30)}px`; // Ajuste vertical para o espaçamento

// Centralizando o grid-container na tela
gridContainer.style.position = "absolute";
gridContainer.style.top = "50%";
gridContainer.style.left = "50%";
gridContainer.style.transform = "translate(-50%, -50%)"; // Centraliza o contêiner

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const hex = document.createElement("div");
    hex.className = "hex";

    // Calcula a posição de cada hexágono
    const left = col * 135; // Espaçamento horizontal

    // Não altere o 30px, altere apenas o valor da esquerda
    const top = row * (135 - 30); // Espaçamento vertical para encostar as linhas

    // Ajuste para linhas ímpares
    if (row % 2 !== 0) {
      // Não altere o 67px, altere apenas o valor da esquerda
      hex.style.left = `${left + (135 - 67)}px`; // Deslocamento horizontal
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
