
console.log("Script carregado!");

// Carregar produtos do ficheiro produtos.json
async function carregarProdutos() {
    try {
        const resposta = await fetch("produtos.json");
        const produtos = await resposta.json();

        const lista = document.getElementById("lista-produtos");
        lista.innerHTML = "";

        produtos.forEach(produto => {
            const card = document.createElement("div");
            card.className = "produto-card";

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">£${produto.preco}</p>
                <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
                    Adicionar ao cesto
                </button>
            `;

            lista.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
    }
}

// Carrinho simples
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    console.log("Carrinho:", carrinho);
    alert(nome + " foi adicionado ao cesto!");
}


