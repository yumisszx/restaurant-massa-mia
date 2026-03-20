package com.MassaMia.MassaMiaApi.tipoproduto;

public record TipoProdutoResponseDTO(String nome) {
    public TipoProdutoResponseDTO(TipoProduto tipoProduto) {
        this(tipoProduto.getNome());
    }
}
