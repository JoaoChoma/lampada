// 1. Localizamos os elementos do HTML pelo ID.
const imagemLampada = document.getElementById("imagemLampada");
const textoEstado = document.getElementById("textoEstado");
const btnAcender = document.getElementById("btnAcender");
const btnApagar = document.getElementById("btnApagar");

// 2. Criamos uma função para acender a lâmpada.
function acenderLampada() {
    imagemLampada.src = "imagens/lampada-acesa.png";
    imagemLampada.alt = "Lâmpada acesa";
    textoEstado.textContent = "Lâmpada acesa!";
}

// 3. Criamos uma função para apagar a lâmpada.
function apagarLampada() {
    imagemLampada.src = "imagens/lampada-apagada.png";
    imagemLampada.alt = "Lâmpada apagada";
    textoEstado.textContent = "Lâmpada apagada!";
}

// 4. Ligamos os cliques dos botões às funções.
btnAcender.addEventListener("click", acenderLampada);
btnApagar.addEventListener("click", apagarLampada);
