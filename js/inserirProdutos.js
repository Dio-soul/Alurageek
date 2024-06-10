import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-produto]");

function constroiCard(nome, valor, imagem, id) {
    const produto  = document.createElement("li");
    produto.className = "estrutura__secao__lista__cards";

    produto.innerHTML = `<img class="img__lista" src="${imagem}" alt="Banner">
                                <div class="estrutura__secao__lista__titulo">
                                    <h3>${nome}</h3>
                                </div>
                                <div class="estrutura__secao__lista__preco">
                                    <p>$ ${valor}</p>
                                    <img data-excluir data-id="${id}" src="assets/lixo.png" alt="icone">
                                </div>`
    return produto;
                            
}

async function listaProdutos() {
    const listaApi = await fetch("http://localhost:3000/Produtos").then(response => response.json());
    lista.innerHTML = '';
    listaApi.forEach(elemento => {
        const produtoCard = constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id);
        lista.appendChild(produtoCard);
    });
    adicionarEventosExclusao();
}

function adicionarEventosExclusao(produtoid) {
    const botoesExcluir = document.querySelectorAll("[data-excluir]");
    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', () => {
            const produtoid = botao.getAttribute("data-id");
            deleteProduto(produtoid);
        });
    });
}

function deleteProduto(produtoid) {
    fetch(`http://localhost:3000/Produtos/${produtoid}`, {
        method: 'DELETE'
    })
}


listaProdutos();