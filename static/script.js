document.getElementById("submitBtn").addEventListener("click", () => {
  const codepostale = document.getElementById("codepostaleInput").value;

function verifierCodePostal() {
    const codePostal = document.getElementById("codePostal").value;
    const message = document.getElementById("message");

    const regex = /^[0-9]{5}$/; // expression régulière pour un code postal à 5 chiffres

    if (regex.test(codePostal)) {
        message.textContent = "Code postal valide.";
        message.style.color = "green";
    } else {
        message.textContent = "Code postal invalide. Veuillez entrer 5 chiffres.";
        message.style.color = "red";
    }
}
  // Envoi la requête POST au backend Python
  fetch("/check-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("response").textContent = data.result;
    })
    .catch(() => {
      document.getElementById("response").textContent = "Erreur serveur.";
    });
});


                                                      
