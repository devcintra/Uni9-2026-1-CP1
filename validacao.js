const form = document.getElementById("formulario");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    if (nome === "") {
        erro.textContent = "Nome não pode estar vazio";
        return;
    }

    if (!email.includes("@")) {
        erro.textContent = "Email inválido";
        return;
    }

    if (idade <= 0) {
        erro.textContent = "Idade deve ser maior que 0";
        return;
    }

    erro.textContent = "Formulário enviado com sucesso!";
});