package com.MassaMia.MassaMiaApi.controller;

import com.MassaMia.MassaMiaApi.produto.Produto;
import com.MassaMia.MassaMiaApi.produto.ProdutoRepository;
import com.MassaMia.MassaMiaApi.produto.ProdutoRequestDTO;
import com.MassaMia.MassaMiaApi.produto.ProdutoResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("produto")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @PostMapping
    public void saveProduto(@RequestBody ProdutoRequestDTO data){
        Produto produtoData = new Produto(data);
        repository.save(produtoData);
        return;
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @GetMapping
    public List<ProdutoResponseDTO> getAll(){

        List<ProdutoResponseDTO> produtosList = repository.findAll().stream().map(ProdutoResponseDTO::new).toList();
        return produtosList;
    }

}