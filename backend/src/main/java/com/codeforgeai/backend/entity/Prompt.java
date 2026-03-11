package com.codeforgeai.backend.entity;

import jakarta.persistence.*;

@Entity
public class Prompt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String prompt;

    @Column(length = 5000)
    private String response;

    // getters and setters
}