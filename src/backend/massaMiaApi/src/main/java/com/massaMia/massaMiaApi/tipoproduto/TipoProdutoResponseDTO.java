package com.MassaMia.MassaMiaApi.tipoproduto;

public record TipoProdutoResponseDTO(Integer id, String nome) {
    public TipoProdutoResponseDTO(TipoProduto tipoProduto) {
        this(tipoProduto.getId(),tipoProduto.getNome());
    }
}
