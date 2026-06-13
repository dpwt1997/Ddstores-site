// Carregar produtos por categoria ou todos
function carregarProdutos(categoria = null) {
    fetch("produtos.json")
        .then(r => r.json())
        .then(produtos => {
            const lista = document.getElementById("lista-produtos");
            if (!lista) return;

            lista.innerHTML = "";

            produtos
                .filter(p => !categoria || p.categoria === categoria)
                .forEach(produto => {
                    const card = document.createElement("div");
                    card.className = "produto-card";

                    card.innerHTML = `
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <h3>${produto.nome}</h3>
                        <p class="preco">£${produto.preco}</p>
                        <button class="btn-add">Adicionar ao carrinho</button>
                    `;

                    // Abrir página do produto ao clicar na imagem ou nome
                    card.querySelector("img").onclick = () => {
                        window.location.href = "produto.html?id=" + produto.id;
                    };

                    card.querySelector("h3").onclick = () => {
                        window.location.href = "produto.html?id=" + produto.id;
                    };

                    // Botão adicionar ao carrinho
                    card.querySelector(".btn-add").onclick = () => {
                        adicionarAoCarrinho(produto);
                    };

                    lista.appendChild(card);
                });
        });
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

    const existente = carrinho.find(item => item.id === produto.id);

    if (existente) {
        existente.qty += 1;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            qty: 1
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContador();
    alert("Produto adicionado ao carrinho!");
}

// Atualizar contador do carrinho no menu
function atualizarContador() {
    const contador = document.getElementById("contador");
    if (!contador) return;

    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
    contador.textContent = carrinho.length;
}

// Atualiza o contador automaticamente ao carregar qualquer página
document.addEventListener("DOMContentLoaded", atualizarContador);
