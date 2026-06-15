// -------------------------
// CARRINHO - BASE
// -------------------------

function obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function guardarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// -------------------------
// ADICIONAR AO CARRINHO
// -------------------------

function adicionarAoCarrinho(nome, preco) {
    let carrinho = obterCarrinho();

    carrinho.push({
        nome: nome,
        preco: preco
    });

    guardarCarrinho(carrinho);
    atualizarContador();
    alert("Produto adicionado ao cesto: " + nome);
}

// -------------------------
// CONTADOR NO MENU
// -------------------------

function atualizarContador() {
    let carrinho = obterCarrinho();
    let span = document.getElementById("contador");
    if (span) {
        span.textContent = carrinho.length;
    }
}

// -------------------------
// LISTAR ITENS NO CARRINHO
// (para carrinho.html / cesto.html)
// -------------------------

function listarCarrinho() {
    let carrinho = obterCarrinho();
    let lista = document.getElementById("lista-carrinho");
    let totalEl = document.getElementById("total-carrinho");

    if (!lista) return;

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.className = "item-carrinho";
        li.innerHTML = `
            <span>${item.nome}</span>
            <span>${item.preco}</span>
            <button onclick="removerItem(${index})">Remover</button>
        `;
        lista.appendChild(li);

        // tenta converter preço em número (se vier como "00.00 €" etc.)
        let precoNum = parseFloat(
            String(item.preco).replace("€", "").replace(",", ".")
        );
        if (!isNaN(precoNum)) {
            total += precoNum;
        }
    });

    if (totalEl) {
        totalEl.textContent = total.toFixed(2) + " €";
    }
}

// -------------------------
// REMOVER ITEM DO CARRINHO
// -------------------------

function removerItem(index) {
    let carrinho = obterCarrinho();
    carrinho.splice(index, 1);
    guardarCarrinho(carrinho);
    atualizarContador();
    listarCarrinho();
}

// -------------------------
// FINALIZAR COMPRA -> WHATSAPP
// -------------------------

function finalizarCompra() {
    let carrinho = obterCarrinho();

    if (carrinho.length === 0) {
        alert("O cesto está vazio.");
        return;
    }

    let mensagem = "Olá, quero finalizar a minha compra:%0A%0A";

    carrinho.forEach((item, i) => {
        mensagem += `${i + 1}. ${item.nome} - ${item.preco}%0A`;
    });

    let url = "https://wa.me/447747908758?text=" + mensagem;

    // limpa o carrinho depois de gerar a mensagem
    localStorage.removeItem("carrinho");
    atualizarContador();

    window.open(url, "_blank");
}

// -------------------------
// INICIALIZAÇÃO
// -------------------------

document.addEventListener("DOMContentLoaded", function () {
    atualizarContador();

    // se estiver na página do carrinho, lista os itens
    if (document.getElementById("lista-carrinho")) {
        listarCarrinho();
    }
});
