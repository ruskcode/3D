package com.example.backend.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping("/api")
public class HelloController {

    public record HelloResponse(String message) {
    }
    
    @GetMapping("/hello")
    public  HelloResponse hello(){
        return new HelloResponse(
            "这里是java!!!"
        );
    }

    @GetMapping("/health")
    public Map<String,String> health(){
        return Map.of("status","ok");
    }
}
