function calcularJuros() {
    // Obtemos os valores das entradas
    const valorInicial = parseFloat(document.getElementById("valor-inicial").value);
    const taxaJuros = parseFloat(document.getElementById("taxa-juros").value) / 100;
    const numeroMeses = parseInt(document.getElementById("numero-meses").value);

    // Validando entradas
    if (isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(numeroMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calculando o total após os meses
    const montante = valorInicial * Math.pow(1 + taxaJuros, numeroMeses);

    // Atualizando o visor com o resultado
    document.getElementById("resultado-display").innerText = `R$ ${montante.toFixed(2)}`;
}
