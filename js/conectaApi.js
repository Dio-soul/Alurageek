async function listaProdutos(){
    const conexao = await fetch ("http://localhost:3000/Produtos")
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;

}

async function inserirProduto(nome, valor, imagem){
    const conexao = await fetch ("http://localhost:3000/Produtos", { 
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })

    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {

    listaProdutos,
    inserirProduto,
    

}