import { NextResponse } from "next/server";
import { createZip } from "@/lib/zip";

export async function POST(req: Request) {
  const body = await req.json();

  const zipBlob = await createZip(body);

  return new NextResponse(zipBlob, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=project.zip"
    }
  });
}
