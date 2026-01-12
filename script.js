// Sombra dinâmica no header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.boxShadow =
    window.scrollY > 30 ? "0 4px 20px rgba(0,0,0,0.08)" : "none";
});

// Exemplo de ação do botão
document.querySelectorAll(".primary").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Aqui você será redirecionado para o agendamento.");
  });
});
