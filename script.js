document.addEventListener("DOMContentLoaded", () => {
  const btnIncrease = document.getElementById("increase-font");
  const btnReset = document.getElementById("reset-font");
  const htmlElement = document.documentElement; // On cible <html>

  // 1. Vérifier si le mode "Zoom" était actif sur la page précédente
  if (localStorage.getItem("fontZoom") === "active") {
    htmlElement.classList.add("large-font");
  }

  // 2. Écouteur pour augmenter
  if (btnIncrease) {
    btnIncrease.addEventListener("click", () => {
      htmlElement.classList.add("large-font");
      localStorage.setItem("fontZoom", "active"); // On enregistre le choix
    });
  }

  // 3. Écouteur pour réinitialiser
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      htmlElement.classList.remove("large-font");
      localStorage.setItem("fontZoom", "inactive"); // On efface le choix
    });
  }

  // --- Garde ici ton code pour le menu actif et le typewriter ---
  const currentLocation = location.pathname.split("/").slice(-1)[0];
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });
});

// Fonction pour appliquer le zoom au chargement
function applyZoom() {
  const htmlElement = document.documentElement;
  if (localStorage.getItem("fontZoom") === "active") {
    htmlElement.classList.add("large-font");
  }
}

// On l'exécute immédiatement avant même que le DOM soit fini de charger pour éviter le flash
applyZoom();

document.addEventListener("DOMContentLoaded", () => {
  const btnIncrease = document.getElementById("increase-font");
  const btnReset = document.getElementById("reset-font");
  const htmlElement = document.documentElement;

  if (btnIncrease) {
    btnIncrease.addEventListener("click", () => {
      htmlElement.classList.add("large-font");
      localStorage.setItem("fontZoom", "active");
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      htmlElement.classList.remove("large-font");
      localStorage.setItem("fontZoom", "inactive");
    });
  }

  // --- TON CODE MACHINE À ÉCRIRE (uniquement pour l'index) ---
  const terminalElement = document.getElementById("terminal-text");
  if (terminalElement) {
    const message = "> Bienvenue dans mon portfolio ! Accès autorisé...";
    let index = 0;
    terminalElement.textContent = "";
    function typeEffect() {
      if (index < message.length) {
        terminalElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
      }
    }
    typeEffect();
  }

  // --- MISE EN AVANT DU LIEN ACTIF ---
  const currentLocation =
    location.pathname.split("/").slice(-1)[0] || "index.html";
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });
});
