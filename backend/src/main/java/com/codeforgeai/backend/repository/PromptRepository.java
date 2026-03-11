package com.codeforgeai.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.codeforgeai.backend.entity.Prompt;

public interface PromptRepository extends JpaRepository<Prompt, Long> {

}