package com.MassaMia.MassaMiaApi.produto;

import com.MassaMia.MassaMiaApi.tipoproduto.TipoProduto;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Table(name = "produtos")
@Entity(name = "produtos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "VARCHAR(36)")
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

    public void atualizarDados(ProdutoRequestDTO data, TipoProduto tipo) {
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.imagem = data.imagem();
        this.preco = data.preco();
        this.tipo = tipo;
    }
}
