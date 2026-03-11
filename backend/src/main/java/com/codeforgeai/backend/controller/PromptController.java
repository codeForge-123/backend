package com.codeforgeai.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.codeforgeai.backend.entity.Prompt;
import com.codeforgeai.backend.service.PromptService;

@RestController
@RequestMapping("/prompt")
public class PromptController {

    @Autowired
    private PromptService promptService;

    @PostMapping
    public Prompt savePrompt(@RequestBody Prompt prompt) {
        return promptService.savePrompt(prompt);
    }

}