package br.com.pontedobem.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    
    @Bean
    public OpenAPI customOpenAPI(){
        return new OpenAPI()
                .info(new Info()
                        .title("Ponte do Bem API")
                        .version("1.0.0")
                        .description("Documentação da API do Ponte do Bem"));
    }
}
