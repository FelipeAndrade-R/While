let contador = 0;
let soma = 0;
let compra;

while (compra !== 0) {
    compra = Number(prompt("Digite o valor do produto (ou 0 para encerrar):"));

    if (compra > 0) {
        soma = soma + compra;
        contador = contador + 1;
    } else if (compra < 0) {
        alert("Valor inválido! Digite um número positivo.");
    }
}
if (contador > 0) {
    alert("A soma total foi: R$ " + soma.toFixed(2) + "\nQuantidade de itens: " + contador);
} else {
    alert("Nenhuma compra foi registrada.");
}