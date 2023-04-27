// Define as doze notas musicais e suas alterações (# para sustenido e b para bemol)
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Define a tonalidade atual como C
let currentTonalityIndex = 0;

// Obtém os elementos do DOM
const tonalityElement = document.getElementById("tonality");
const tonalityUpButton = document.getElementById("tonality-up");
const tonalityDownButton = document.getElementById("tonality-down");

// Define a função para mudar a tonalidade para cima
function increaseTonality() {
    currentTonalityIndex = (currentTonalityIndex + 1) % 12;
    tonalityElement.textContent = notes[currentTonalityIndex];
}

// Define a função para mudar a tonalidade para baixo
function decreaseTonality() {
    currentTonalityIndex = (currentTonalityIndex + 11) % 12;
    tonalityElement.textContent = notes[currentTonalityIndex];
}

// Adiciona os listeners de evento aos botões
tonalityUpButton.addEventListener("click", increaseTonality);
tonalityDownButton.addEventListener("click", decreaseTonality);
