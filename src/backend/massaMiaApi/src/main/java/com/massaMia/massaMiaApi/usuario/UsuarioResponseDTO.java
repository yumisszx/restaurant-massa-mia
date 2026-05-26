package com.MassaMia.MassaMiaApi.usuario;

public record UsuarioResponseDTO(Integer id, String nome_usuario, String email, String role) {
    public UsuarioResponseDTO(Usuario usuario) {
        this(usuario.getId(), usuario.getNome_usuario(), usuario.getEmail(), usuario.getRole().name());
    }
}
