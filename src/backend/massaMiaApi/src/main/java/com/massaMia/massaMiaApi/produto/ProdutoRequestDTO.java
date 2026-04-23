package com.MassaMia.MassaMiaApi.produto;

import com.MassaMia.MassaMiaApi.tipoproduto.TipoProduto;

public record ProdutoRequestDTO(
        String nome,
        String descricao,
        String imagem,
        float preco,
        TipoProduto tipo) {
}