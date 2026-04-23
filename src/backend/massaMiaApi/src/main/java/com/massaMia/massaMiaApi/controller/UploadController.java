package com.MassaMia.MassaMiaApi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/upload")
@CrossOrigin("*")
public class UploadController {

    private final String UPLOAD_DIR = "C:/MassaMia/restaurant-massa-mia/src/backend/MassaMiaApi/uploads/";

    @PostMapping
    public ResponseEntity<String> uploadImagem(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        File destino = new File(UPLOAD_DIR + fileName);
        file.transferTo(destino);

        String url = "http://localhost:8080/imagens/" + fileName;

        return ResponseEntity.ok(url);
    }
}