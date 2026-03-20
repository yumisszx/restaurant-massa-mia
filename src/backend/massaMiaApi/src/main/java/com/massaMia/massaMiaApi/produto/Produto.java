package com.MassaMia.MassaMiaApi.produto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "produtos")
@Entity(name = "produtos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "Id")
public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String nome;
    private String descricao;
    private String imagem;
    private float preco;

    public Produto(ProdutoRequestDTO data){
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.imagem = data.imagem();
        this.preco = data.preco();
    }
}
