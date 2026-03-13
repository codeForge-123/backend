package com.codeforgeai.backend.generator;

import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Component
public class AIProjectGenerator {

    public void generateFrontend(String basePath, String projectName) throws IOException {

        String frontendPath = basePath + "/frontend";

        File folder = new File(frontendPath);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        createFile(frontendPath + "/App.jsx",
                "export default function App(){ return <h1>" + projectName + " Frontend</h1>; }");

        createFile(frontendPath + "/Dashboard.jsx",
                "export default function Dashboard(){ return <h2>Dashboard Page</h2>; }");

        createFile(frontendPath + "/Login.jsx",
                "export default function Login(){ return <h2>Login Page</h2>; }");
    }

    public void generateBackend(String basePath, String projectName) throws IOException {

        String backendPath = basePath + "/backend";

        File folder = new File(backendPath);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        createFile(backendPath + "/ProjectController.java",
                "public class ProjectController { }");

        createFile(backendPath + "/ProjectService.java",
                "public class ProjectService { }");
    }

    public void generateDatabase(String basePath, String projectName) throws IOException {

        String dbPath = basePath + "/database";

        File folder = new File(dbPath);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        createFile(dbPath + "/schema.sql",
                "-- Database schema for " + projectName + "\nCREATE TABLE users(id INT PRIMARY KEY);");
    }

    private void createFile(String path, String content) throws IOException {

        File file = new File(path);

        FileWriter writer = new FileWriter(file);

        writer.write(content);

        writer.close();
    }
}