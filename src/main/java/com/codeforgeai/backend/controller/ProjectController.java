package com.codeforgeai.backend.controller;

import com.codeforgeai.backend.model.ProjectRequest;
import com.codeforgeai.backend.service.ProjectBuilderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectBuilderService projectBuilderService;

    @PostMapping("/generate")
    public String generateProject(@RequestBody ProjectRequest request) {

        try {

            String projectName = projectBuilderService.buildProject(request);

            return "Project generated successfully: " + projectName;

        } catch (Exception e) {

            e.printStackTrace();
            return "Error generating project";
        }
    }
}