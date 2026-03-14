package com.codeforgeai.backend.dto;

import lombok.Data;

@Data
public class ProjectRequestDTO {

    private String projectTitle;
    private String stack;
    private String level;

}