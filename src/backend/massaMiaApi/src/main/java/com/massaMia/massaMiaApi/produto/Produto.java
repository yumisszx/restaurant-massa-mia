package com.MassaMia.MassaMiaApi.produto;

import com.MassaMia.MassaMiaApi.tipoproduto.TipoProduto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Table(name = "produtos")
@Entity(name = "produtos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String nome;
    private String descricao;
    private String imagem;
    private Float preco;

    @ManyToOne
    @JoinColumn(name = "id_tipo", nullable = false)
    private TipoProduto tipo;

    public Produto(ProdutoRequestDTO data, TipoProduto tipo) {
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.imagem = data.imagem();
        this.preco = data.preco();
        this.tipo = tipo;
    }
}
