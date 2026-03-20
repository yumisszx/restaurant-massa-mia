package com.MassaMia.MassaMiaApi.produto;

public record ProdutoResponseDTO(Integer Id, String nome, String descricao, String imagem, float preco) {
    public ProdutoResponseDTO(Produto produto){
        this(produto.getId(), produto.getNome(), produto.getDescricao(), produto.getImagem(), produto.getPreco());
    }
}
