export async function generateProjectAI(title: string, stack: string, level: string) {
  return {
    projectName: title,
    architecture: {
      frontend: ["components/", "pages/", "styles/"],
      backend: ["controllers/", "routes/", "models/"],
      database: "schema.sql"
    },
    features: [
      "Authentication",
      "CRUD",
      "Responsive UI",
      "REST API"
    ]
  };
}
