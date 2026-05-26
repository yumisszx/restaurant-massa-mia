package com.MassaMia.MassaMiaApi.controller;

import com.MassaMia.MassaMiaApi.produto.ProdutoResponseDTO;
import com.MassaMia.MassaMiaApi.service.UsuarioService;
import com.MassaMia.MassaMiaApi.usuario.UsuarioResponseDTO;
import com.MassaMia.MassaMiaApi.usuario.dtos.LoginRequestDTO;
import com.MassaMia.MassaMiaApi.usuario.dtos.RegisterRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UsuarioService service;

    public AuthController(UsuarioService service) {
        this.service = service;
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @PostMapping("/registro")
    public ResponseEntity<UsuarioResponseDTO> registro(
            @RequestBody RegisterRequestDTO data
    ) {
        UsuarioResponseDTO response = service.registro(data);
        return ResponseEntity.status(201).body(response);
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity<UsuarioResponseDTO> login(
            @RequestBody LoginRequestDTO data
    ) {
        UsuarioResponseDTO response = service.login(data);
        return ResponseEntity.ok(response);
    }

}
