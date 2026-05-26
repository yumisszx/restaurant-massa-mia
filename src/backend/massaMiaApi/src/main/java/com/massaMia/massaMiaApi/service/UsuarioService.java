package com.MassaMia.MassaMiaApi.service;

import com.MassaMia.MassaMiaApi.usuario.Role;
import com.MassaMia.MassaMiaApi.usuario.Usuario;
import com.MassaMia.MassaMiaApi.usuario.UsuarioRepository;
import com.MassaMia.MassaMiaApi.usuario.UsuarioResponseDTO;
import com.MassaMia.MassaMiaApi.usuario.dtos.LoginRequestDTO;
import com.MassaMia.MassaMiaApi.usuario.dtos.RegisterRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UsuarioResponseDTO registro(RegisterRequestDTO data) {

        Usuario usuario = new Usuario();

        usuario.setNome_usuario(data.nome_usuario());
        usuario.setEmail(data.email());
        usuario.setSenha(passwordEncoder.encode(data.senha()));

        usuario.setRole(Role.USER);

        repository.save(usuario);

        return new UsuarioResponseDTO(usuario);
    }

    public UsuarioResponseDTO login(LoginRequestDTO data) {

        Usuario usuario = repository.findByEmail(data.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        boolean senhaCorreta = passwordEncoder.matches(
                data.senha(),
                usuario.getSenha()
        );

        if (!senhaCorreta) {
            throw new RuntimeException("Senha inválida");
        }

        return new UsuarioResponseDTO(usuario);
    }

    public List<UsuarioResponseDTO> findAll() {
        return repository.findAll()
                .stream()
                .map(UsuarioResponseDTO::new)
                .toList();
    }
}
