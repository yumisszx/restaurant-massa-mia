package com.MassaMia.MassaMiaApi.controller;

import com.MassaMia.MassaMiaApi.produto.Produto;
import com.MassaMia.MassaMiaApi.produto.ProdutoRepository;
import com.MassaMia.MassaMiaApi.produto.ProdutoRequestDTO;
import com.MassaMia.MassaMiaApi.produto.ProdutoResponseDTO;
import com.MassaMia.MassaMiaApi.tipoproduto.TipoProduto;
import com.MassaMia.MassaMiaApi.tipoproduto.TipoProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("produto")
public class ProdutoController {

    @Autowired
    private final ProdutoRepository repository;
    private final TipoProdutoRepository tipoRepository;

    public ProdutoController(ProdutoRepository repository, TipoProdutoRepository tipoRepository) {
        this.repository = repository;
        this.tipoRepository = tipoRepository;
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @PostMapping
    public void saveProduto(@RequestBody ProdutoRequestDTO data) {
        TipoProduto tipo = tipoRepository.findById(data.tipo().getId())
                .orElseThrow(() -> new RuntimeException("Tipo não encontrado"));

        Produto produtoData = new Produto(data, tipo);
        repository.save(produtoData);
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @GetMapping
    public List<ProdutoResponseDTO> getAll(){

        List<ProdutoResponseDTO> produtosList = repository.findAll().stream().map(ProdutoResponseDTO::new).toList();
        return produtosList;
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public String deleteProduto(@PathVariable UUID id){

        repository.deleteById(id);
        return "Produto deletado com sucesso";
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public void updateProduto(
            @PathVariable UUID id,
            @RequestBody ProdutoRequestDTO data
    ) {
        Produto produto = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        TipoProduto tipo = tipoRepository.findById(data.tipo().getId())
                .orElseThrow(() -> new RuntimeException("Tipo não encontrado"));

        produto.atualizarDados(data, tipo);

        repository.save(produto);
    }
}