package com.codeforgeai.backend.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectDownloadController {

    @GetMapping("/download/{projectName}")
    public ResponseEntity<InputStreamResource> downloadProject(
            @PathVariable String projectName) throws Exception {

        String zipPath = "generated-projects/" + projectName + ".zip";

        File file = new File(zipPath);

        if (!file.exists()) {
            throw new RuntimeException("Project ZIP not found");
        }

        InputStreamResource resource =
                new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=" + projectName + ".zip")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(file.length())
                .body(resource);
    }
}