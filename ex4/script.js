let nome = "";
let sobrenome = "";

while (nome === "") {
    nome = prompt("Digite o primeiro nome:");
}

while (sobrenome === "") {
    sobrenome = prompt("Digite o sobrenome:");
}
alert("Nome completo: " + nome + " " + sobrenome);
