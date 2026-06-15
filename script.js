// ---------------------- CARRINHO ----------------------

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalSpan = document.getElementById("total");
    const contador = document.getElementById("contador");

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
        total += parseFloat(item.preco);
    });

    totalSpan.textContent = total.toFixed(2);
    contador.textContent = carrinho.length;
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

    // Criar mensagem com os produtos
    let listaProdutos = "";
    carrinho.forEach(item => {
        listaProdutos += `- ${item.nome} (${item.preco} €)\n`;
    });

    const total = document.getElementById("total").textContent;

    // ---------------------- WHATSAPP AUTOMÁTICO ----------------------

    const numeroWhatsApp = "+447747908758"; // TEU NÚMERO

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

    // Abre o WhatsApp automaticamente
    window.open(url, "_blank");

    // Mostra mensagem de sucesso no site
    document.getElementById("mensagem-sucesso").style.display = "block";

    // Limpa o carrinho
    limparCarrinho();
}

// ---------------------- INICIAR ----------------------
atualizarCarrinho();


