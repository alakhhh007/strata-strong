export async function GET() {
    return Response.json([
      { id: 1, title: "Water Shutdown", date: "2025-05-10" },
      { id: 2, title: "AGM Notice", date: "2025-05-15" }
    ]);
  }
  