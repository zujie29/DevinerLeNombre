// Génère un chiffre aléatoire entre 0 et 1000
const chiffreFixe = Math.floor(Math.random() * 1001);
let essaisRestants = 20;

function deviner() {
  const guessInput = document.getElementById("guess");
  const messageDiv = document.getElementById("message");
  const essaisRestantsDiv = document.getElementById("essais-restants");

  let essai = parseInt(guessInput.value);

  if (isNaN(essai) || essai < 0 || essai > 1000) {
    messageDiv.textContent = "Veuillez entrer un chiffre valide entre 0 et 1000.";
    return;
  }

  essaisRestants--;

  if (essai === chiffreFixe) {
    messageDiv.textContent = `Félicitations ! Vous avez trouvé le bon nombre : ${chiffreFixe}`;
    messageDiv.style.color = "green";
    essaisRestantsDiv.textContent = "";
    document.querySelector("button").disabled = true; // Désactive le bouton
    guessInput.disabled = true; // Désactive également le champ d'entrée
  } else if (essaisRestants > 0) {
    if (essai < chiffreFixe) {
      messageDiv.textContent = "Plus ! Essayez encore.";
      messageDiv.style.color = "blue";
    } else {
      messageDiv.textContent = "Moins ! Essayez encore.";
      messageDiv.style.color = "red";
    }
    essaisRestantsDiv.textContent = `Il vous reste ${essaisRestants} essais.`;
  } else {
    messageDiv.textContent = `Désolé, vous avez épuisé tous vos essais. Le bon nombre était : ${chiffreFixe}`;
    messageDiv.style.color = "red";
    essaisRestantsDiv.textContent = "";
    document.querySelector("button").disabled = true; // Désactive le bouton
    guessInput.disabled = true; // Désactive également le champ d'entrée
  }
}

// Ajoute un événement pour valider avec la touche "Entrée"
document.getElementById("guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    deviner(); // Appelle la fonction deviner
  }
});
