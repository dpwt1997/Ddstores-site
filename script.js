// Carregar carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Atualizar contador no menu
function atualizarContador() {
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = carrinho.length;
    }
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContador();
    alert(nome + " foi adicionado ao carrinho!");
}

// Atualizar contador ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarContador);
