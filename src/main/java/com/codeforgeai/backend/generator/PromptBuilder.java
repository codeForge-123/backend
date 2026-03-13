package com.codeforgeai.backend.generator;

import org.springframework.stereotype.Component;

@Component
public class PromptBuilder {

    public String buildPrompt(String title, String stack, String level) {

        return "Generate a full stack project.\n"
                + "Project Title: " + title + "\n"
                + "Technology Stack: " + stack + "\n"
                + "Difficulty Level: " + level + "\n\n"
                + "Provide folder structure and full code files.";
    }
}