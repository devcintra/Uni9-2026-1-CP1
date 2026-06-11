let contador = 0;

const numero = document.getElementById("numero");

document.getElementById("inc").addEventListener("click", () => {
    contador++;
    atualizar();
});

document.getElementById("dec").addEventListener("click", () => {
    contador--;
    atualizar();
});

document.getElementById("zerar").addEventListener("click", () => {
    contador = 0;
    atualizar();
});

function atualizar() {
    numero.textContent = contador;

    if (contador > 0) {
        numero.style.color = "green";
    } else if (contador < 0) {
        numero.style.color = "red";
    } else {
        numero.style.color = "black";
    }
}