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
@EqualsAndHashCode(of = "Id")

public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID Id;
    private String nome;
    private String descricao;
    private String imagem;
    private float preco;

    @ManyToOne
    @JoinColumn(name = "idTipoProduto")
    private TipoProduto tipo;

    public Produto(ProdutoRequestDTO data, TipoProduto tipo) {
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.imagem = data.imagem();
        this.preco = data.preco();
        this.tipo = tipo;
    }
}
