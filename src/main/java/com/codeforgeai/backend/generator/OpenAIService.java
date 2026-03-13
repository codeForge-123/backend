package com.codeforgeai.backend.generator;

import org.springframework.stereotype.Service;

@Service
public class OpenAIService {

    public String generateCode(String prompt) {

        // Temporary simulation
        return "AI Generated Project Code for: " + prompt;

    }
}