package com.codeforgeai.backend.generator;

import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Component
public class ProjectStructureGenerator {

    public String generateProjectStructure(String projectTitle, String code) {

        try {

            String basePath = System.getProperty("user.dir") + "/generated-projects/" +
                    projectTitle.replaceAll(" ", "_");

            // MAIN PROJECT FOLDER
            File projectDir = new File(basePath);
            projectDir.mkdirs();

            // BACKEND FOLDERS
            new File(basePath + "/backend/src/main/java").mkdirs();
            new File(basePath + "/backend/src/main/resources").mkdirs();

            // FRONTEND FOLDERS
            new File(basePath + "/frontend/pages").mkdirs();
            new File(basePath + "/frontend/components").mkdirs();
            new File(basePath + "/frontend/styles").mkdirs();

            // CREATE FILES
            writeFile(basePath + "/backend/pom.xml",
                    "<project>\n<modelVersion>4.0.0</modelVersion>\n</project>");

            writeFile(basePath + "/backend/src/main/java/Application.java",
                    "public class Application {\n" +
                    " public static void main(String[] args){\n" +
                    "  System.out.println(\"Spring Boot App\");\n" +
                    " }\n}");

            writeFile(basePath + "/frontend/package.json",
                    "{ \"name\": \"nextjs-app\", \"version\": \"1.0.0\" }");

            writeFile(basePath + "/frontend/pages/index.js",
                    "export default function Home(){\n" +
                    " return <h1>Welcome to CodeForgeAI</h1>\n}");

            writeFile(basePath + "/README.txt", code);

            System.out.println("✅ Full project created at: " + basePath);

            return basePath;

        } catch (Exception e) {
            e.printStackTrace();
            return "Error generating project";
        }
    }

    private void writeFile(String path, String content) throws IOException {

        File file = new File(path);

        if (!file.exists()) {
            file.createNewFile();
        }

        FileWriter writer = new FileWriter(file);
        writer.write(content);
        writer.close();
    }
}