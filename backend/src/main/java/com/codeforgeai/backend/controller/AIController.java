package com.codeforgeai.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
public class AIController {

    @PostMapping("/generate")
    public String generateCode() {
        return "AI generation will be implemented by Developer 2";
    }

}