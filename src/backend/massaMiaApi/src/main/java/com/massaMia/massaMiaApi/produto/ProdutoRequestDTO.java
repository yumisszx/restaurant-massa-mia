package com.MassaMia.MassaMiaApi.produto;

public record ProdutoRequestDTO(String nome, String descricao, String imagem, float preco, int idTipoProduto) {
}