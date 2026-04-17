package com.MassaMia.MassaMiaApi.produto;

import com.MassaMia.MassaMiaApi.tipoproduto.TipoProdutoResponseDTO;

import java.util.UUID;

public record ProdutoResponseDTO(UUID id, String nome, String descricao, String imagem, float preco, TipoProdutoResponseDTO tipo) {
    public ProdutoResponseDTO(Produto produto){
        this(produto.getId(), produto.getNome(), produto.getDescricao(), produto.getImagem(), produto.getPreco(), produto.getTipo() != null
                ? new TipoProdutoResponseDTO(produto.getTipo())
                : null);
    }
}