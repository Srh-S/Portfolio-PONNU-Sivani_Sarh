// Animation de machine à écrire pour le message d'accueil
const text = "> Bienvenue dans mon portfolio ! Access granted...";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".terminal-prompt").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Lancement au chargement de la page
window.onload = () => {
  const prompt = document.querySelector(".terminal-prompt");
  if (prompt) {
    prompt.innerHTML = ""; // On vide pour l'animation
    typeWriter();
  }
};
