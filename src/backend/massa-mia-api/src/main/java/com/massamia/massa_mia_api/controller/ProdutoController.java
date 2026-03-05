package com.massamia.massa_mia_api.controller;

import com.massamia.massa_mia_api.model.Produto;
import com.massamia.massa_mia_api.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*")

public class ProdutoController {
    private final ProdutoRepository repository;

    public ProdutoController(ProdutoRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<Produto> listar(){
        return repository.findAll();
    }

    @PostMapping
    public Produto salvar(@RequestBody Produto produto){
        return repository.save(produto);
    }
}
