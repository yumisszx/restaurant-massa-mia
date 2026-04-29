package com.MassaMia.MassaMiaApi.usuario;


import jakarta.persistence.*;
import lombok.*;


@Table (name = "usuarios")
@Entity (name = "usuarios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Usuario {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome_usuario;
    private String email;
    private String senha;

    @Enumerated(EnumType.STRING)
    private Role role;
}
