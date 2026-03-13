package com.codeforgeai.backend.controller;

import com.codeforgeai.backend.model.ProjectRequest;
import com.codeforgeai.backend.service.ProjectBuilderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectBuilderService projectBuilderService;

    @PostMapping("/generate")
    public String generateProject(@RequestBody ProjectRequest request) {

        String prompt = request.getPrompt();

        projectBuilderService.buildProject(prompt);

        return "Project generated successfully";
    }

    @GetMapping("/download/{projectName}")
    public ResponseEntity<InputStreamResource> downloadProject(@PathVariable String projectName) throws Exception {

        File zipFile = new File("generated-projects/" + projectName + ".zip");

        InputStreamResource resource = new InputStreamResource(new FileInputStream(zipFile));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + zipFile.getName())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }
}