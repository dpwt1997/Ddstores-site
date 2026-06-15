// ---------------------- LISTA DE PRODUTOS ----------------------

const produtos = [
    {
        nome: "Baccarat Rouge 540",
        preco: 120,
        imagem: "images/baccarat-rouge-540.jpg",
        categoria: "Perfumes"
    },
    {
        nome: "La Vie Est Belle L’Élixir",
        preco: 95,
        imagem: "images/la-vie-est-belle-elixir.jpg",
        categoria: "Perfumes"
    },
    {
        nome: "Acqua di Giò Profondo",
        preco: 85,
        imagem: "images/acquadigio.jpg",
        categoria: "Perfumes"
    }
];

// ---------------------- MOSTRAR PRODUTOS ----------------------

function carregarProdutos() {
    const container = document.getElementById("produtos-container");
    if (!container) return;

    container.innerHTML = "";

    produtos.forEach((p, index) => {
        const card = document.createElement("div");
        card.classList.add("produto-card");

        card.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p class="preco">${p.preco} €</p>
            <button onclick="adicionarAoCarrinho(${index})">Comprar</button>
        `;

        container.appendChild(card);
    });
}

// ---------------------- CARRINHO ----------------------

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(index) {
    carrinho.push(produtos[index]);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalSpan = document.getElementById("total");
    const contador = document.getElementById("contador");

    if (!lista) return;

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item-carrinho");

        div.innerHTML = `
            <p><strong>${item.nome}</strong> - ${item.preco} €</p>
            <button onclick="removerItem(${index})">Remover</button>
        `;

        lista.appendChild(div);
        total += item.preco;
    });

    if (totalSpan) totalSpan.textContent = total.toFixed(2);
    if (contador) contador.textContent = carrinho.length;
}

function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// ---------------------- FINALIZAR PEDIDO ----------------------

function finalizarPedido() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const morada = document.getElementById("morada").value;
    const postal = document.getElementById("postal").value;
    const telefone = document.getElementById("telefone").value;

    if (!nome || !email || !morada || !postal || !telefone) {
        alert("Por favor, preenche todos os campos.");
        return;
    }

    if (carrinho.length === 0) {
        alert("O cesto está vazio.");
        return;
    }

    let listaProdutos = "";
    carrinho.forEach(item => {
        listaProdutos += `- ${item.nome} (${item.preco} €)\n`;
    });

    const total = document.getElementById("total").textContent;

    const numeroWhatsApp = "+447747908758";

    const mensagem = 
`📦 NOVO PEDIDO DD STORES

👤 Cliente: ${nome}
📧 Email: ${email}
📞 Telefone: ${telefone}

🏠 Morada:
${morada}
${postal}

🛒 Produtos:
${listaProdutos}

💰 Total: ${total} €

⚠️ Enviar imediatamente.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    document.getElementById("mensagem-sucesso").style.display = "block";

    limparCarrinho();
}

// ---------------------- INICIAR ----------------------

carregarProdutos();
atualizarCarrinho();

