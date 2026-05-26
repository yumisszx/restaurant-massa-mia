package com.MassaMia.MassaMiaApi.controller;

import com.MassaMia.MassaMiaApi.produto.ProdutoResponseDTO;
import com.MassaMia.MassaMiaApi.service.UsuarioService;
import com.MassaMia.MassaMiaApi.usuario.UsuarioRepository;
import com.MassaMia.MassaMiaApi.usuario.UsuarioResponseDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @GetMapping
    public List<UsuarioResponseDTO> getAll() {
        return service.findAll();
    }
}
