package com.massamia.massa_mia_api.model;

import jakarta.persistence.*;

@Entity
public class Produto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private Double preco;
}
