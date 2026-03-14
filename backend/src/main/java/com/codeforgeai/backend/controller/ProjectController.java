package com.codeforgeai.backend.controller;

import com.codeforgeai.backend.model.ProjectRequest;
import com.codeforgeai.backend.service.ProjectBuilderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;

import java.io.*;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectBuilderService projectBuilderService;

    @PostMapping("/generate")
    public String generateProject(@RequestBody ProjectRequest request) throws Exception {

        return projectBuilderService.buildProject(request);
    }

    @GetMapping("/download/{projectName}")
    public ResponseEntity<Resource> downloadProject(@PathVariable String projectName) throws IOException {

        String zipPath = "generated-projects/" + projectName + ".zip";

        File file = new File(zipPath);

        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName())
                .contentLength(file.length())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }
}