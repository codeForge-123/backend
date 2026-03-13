package com.codeforgeai.backend.service.ai;

import org.springframework.stereotype.Service;

@Service
public class AICodeGenerator {

    public String generateReactComponent(String name) {

        return "import React from 'react';\n\n" +
                "function " + name + "() {\n" +
                "  return (\n" +
                "    <div>\n" +
                "      <h2>" + name + " Component</h2>\n" +
                "    </div>\n" +
                "  );\n" +
                "}\n\n" +
                "export default " + name + ";";
    }

    public String generateSpringController(String name) {

        return "package backend;\n\n" +
                "import org.springframework.web.bind.annotation.GetMapping;\n" +
                "import org.springframework.web.bind.annotation.RequestMapping;\n" +
                "import org.springframework.web.bind.annotation.RestController;\n\n" +
                "@RestController\n" +
                "@RequestMapping(\"/api\")\n" +
                "public class " + name + " {\n\n" +
                "    @GetMapping(\"/test\")\n" +
                "    public String test() {\n" +
                "        return \"API working\";\n" +
                "    }\n\n" +
                "}";
    }
}