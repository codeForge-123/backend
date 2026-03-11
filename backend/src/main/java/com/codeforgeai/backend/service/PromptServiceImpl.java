package com.codeforgeai.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeforgeai.backend.entity.Prompt;
import com.codeforgeai.backend.repository.PromptRepository;

@Service
public class PromptServiceImpl implements PromptService {

    @Autowired
    private PromptRepository promptRepository;

    @Override
    public Prompt savePrompt(Prompt prompt) {
        return promptRepository.save(prompt);
    }
}