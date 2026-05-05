let nota = 0;
let soma = 0;
let contador = 0;
while (nota >= 0) {
    nota = Number(prompt("Digite uma nota (De 0 a 10):"));
    if (nota >= 0) {
        soma = soma + nota;
        contador = contador + 1;
    }
}
if (contador > 0) {
    let media = soma / contador;
    alert("A soma total foi: " + soma + "\nQuantidade de notas: " + contador + "\nA média é: " + media.toFixed(2));
} else {
    alert("Nenhum dado existente.");
}