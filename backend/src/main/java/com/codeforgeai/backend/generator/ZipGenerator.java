package com.codeforgeai.backend.generator;

import org.springframework.stereotype.Component;

import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Component
public class ZipGenerator {

    public String createZip(String projectPath) {

        String zipFilePath = projectPath + ".zip";

        try {

            FileOutputStream fos = new FileOutputStream(zipFilePath);
            ZipOutputStream zipOut = new ZipOutputStream(fos);

            File sourceFolder = new File(projectPath);

            zipFolder(sourceFolder, sourceFolder.getName(), zipOut);

            zipOut.close();
            fos.close();

            System.out.println("✅ ZIP created at: " + zipFilePath);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return zipFilePath;
    }

    private void zipFolder(File file, String fileName, ZipOutputStream zipOut) throws IOException {

        if (file.isHidden()) {
            return;
        }

        if (file.isDirectory()) {

            File[] children = file.listFiles();

            if (children == null) return;

            for (File child : children) {
                zipFolder(child, fileName + "/" + child.getName(), zipOut);
            }

            return;
        }

        FileInputStream fis = new FileInputStream(file);

        ZipEntry zipEntry = new ZipEntry(fileName);
        zipOut.putNextEntry(zipEntry);

        byte[] buffer = new byte[1024];
        int length;

        while ((length = fis.read(buffer)) > 0) {
            zipOut.write(buffer, 0, length);
        }

        fis.close();
    }
}