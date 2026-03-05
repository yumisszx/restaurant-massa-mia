package com.massamia.massa_mia_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/teste")
    public String testeApi() {
        return "API Massa Mia funcionando!";
    }

}