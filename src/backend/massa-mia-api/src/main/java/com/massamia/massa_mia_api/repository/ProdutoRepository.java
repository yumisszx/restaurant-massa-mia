package com.massamia.massa_mia_api.repository;

import com.massamia.massa_mia_api.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}