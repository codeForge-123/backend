package com.codeforgeai.backend.generator;

public class CodeTemplateGenerator {

    public String generateJavaTemplate(String className) {

        return "public class " + className + " {\n\n" +
               "    public static void main(String[] args) {\n" +
               "        System.out.println(\"Hello World\");\n" +
               "    }\n" +
               "}";
    }
}