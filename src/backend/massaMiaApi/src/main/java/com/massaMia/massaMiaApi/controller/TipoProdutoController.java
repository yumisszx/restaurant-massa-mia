package com.MassaMia.MassaMiaApi.controller;

import com.MassaMia.MassaMiaApi.tipoproduto.TipoProduto;
import com.MassaMia.MassaMiaApi.tipoproduto.TipoProdutoRepository;
import com.MassaMia.MassaMiaApi.tipoproduto.TipoProdutoRequestDTO;
import com.MassaMia.MassaMiaApi.tipoproduto.TipoProdutoResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.util.List;

@RestController
@RequestMapping("tipoproduto")
public class TipoProdutoController {

    @Autowired
    private TipoProdutoRepository repository;

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @PostMapping
    public void saveTipoProduto(@RequestBody TipoProdutoRequestDTO data){
        TipoProduto tipoprodutoData = new TipoProduto(data);
        repository.save(tipoprodutoData);
        return;
    }

    @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @GetMapping
    public List<TipoProdutoResponseDTO> getAll(){

        List<TipoProdutoResponseDTO> tipoprodutoList = repository.findAll().stream().map(TipoProdutoResponseDTO::new).toList();
        return tipoprodutoList;
    }
}
