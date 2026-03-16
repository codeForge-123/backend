import JSZip from "jszip";

export async function createZip(projectData: any) {
  const zip = new JSZip();

  zip.file("README.md", `# ${projectData.projectName}`);

  zip.folder("frontend")?.file("index.html", "<h1>Frontend Ready</h1>");
  zip.folder("backend")?.file("server.js", "console.log('Backend Ready')");

  return await zip.generateAsync({ type: "blob" });
}
