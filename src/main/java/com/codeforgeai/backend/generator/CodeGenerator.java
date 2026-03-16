package com.codeforgeai.backend.generator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CodeGenerator {

    @Autowired
    private PromptBuilder promptBuilder;

    @Autowired
    private OpenAIService openAIService;

    public String generateProject(String title, String stack, String level) {

        String prompt = promptBuilder.buildPrompt(title, stack, level);

        return openAIService.generateCode(prompt);
    }
}