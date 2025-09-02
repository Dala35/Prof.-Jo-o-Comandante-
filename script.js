function calcularArea() {
  const largura = parseFloat(document.getElementById("largura").value);
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  if (!largura || !comprimento || largura <= 0 || comprimento <= 0) {
    document.getElementById("resultado-area").innerText =
      "Por favor, insere valores válidos.";
    return;
  }
  const area = largura * comprimento;
  const caixas = Math.ceil(area);
  document.getElementById("resultado-area").innerText =
  `Área total: ${area.toFixed(2)} m². Estimativa: ${caixas} caixas de mosaico.`;
}
// Simulação de envio do formulário
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! (Simulação)");
  this.reset();
});


