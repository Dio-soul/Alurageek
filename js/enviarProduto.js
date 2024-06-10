import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function enviarProduto(evento) {
    

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.inserirProduto(nome, valor, imagem);

}

formulario.addEventListener("submit", evento => enviarProduto(evento));

