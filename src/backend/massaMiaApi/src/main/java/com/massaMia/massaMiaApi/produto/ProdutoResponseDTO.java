package com.MassaMia.MassaMiaApi.produto;

import java.util.UUID;

public record ProdutoResponseDTO(UUID id, String nome, String descricao, String imagem, float preco, Integer idTipoProduto) {
    public ProdutoResponseDTO(Produto produto){
        this(produto.getId(), produto.getNome(), produto.getDescricao(), produto.getImagem(), produto.getPreco(), produto.getTipo().getId());
    }
}