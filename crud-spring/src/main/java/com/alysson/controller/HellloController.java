package com.alysson.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/hello")


public class HellloController {
    
    @GetMapping
    public String hello() {
        return "Hello World!";
    }
}
