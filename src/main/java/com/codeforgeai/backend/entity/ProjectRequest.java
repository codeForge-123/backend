package com.codeforgeai.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProjectRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectTitle;

    private String stack;

    private String level;

    private String downloadLink;

}