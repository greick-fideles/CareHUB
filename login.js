document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login realizado com sucesso (simulado)");
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Simula login bem-sucedido
  window.location.href = "index.html";
});


// Botão Google (placeholder)
document.querySelector(".google").addEventListener("click", () => {
  alert("Login com Google será integrado com Firebase");
});
