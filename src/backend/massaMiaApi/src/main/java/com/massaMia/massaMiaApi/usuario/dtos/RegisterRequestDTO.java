package com.MassaMia.MassaMiaApi.usuario.dtos;

public record RegisterRequestDTO(
        String nome_usuario,
        String email,
        String senha
) {
}
