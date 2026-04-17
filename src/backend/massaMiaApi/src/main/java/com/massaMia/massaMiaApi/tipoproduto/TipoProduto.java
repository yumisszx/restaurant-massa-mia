package com.MassaMia.MassaMiaApi.tipoproduto;

import com.MassaMia.MassaMiaApi.produto.ProdutoRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "tipo_produtos")
@Entity(name = "tipo_produtos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")


public class TipoProduto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome; //BEBIDA,COMIDA,SOBREMESA

    public TipoProduto(TipoProdutoRequestDTO data){
        this.nome = data.nome();
    }
}
