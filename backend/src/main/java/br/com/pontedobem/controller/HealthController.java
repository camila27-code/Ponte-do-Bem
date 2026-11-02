package br.com.pontedobem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.Operation;

import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @Operation(
        summary = "Checando aplicação",
        description = "Verifica se a aplicação esta funcionando"
    )
    @GetMapping
    public Map<String, String> health(){
        return Map.of(
            "Status", "OK",
            "application", "ponte-do-bem"
        );
    }
}
