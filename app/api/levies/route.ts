export async function GET() {
    return Response.json([
      { unit: "201", amount: 1200, status: "Paid" },
      { unit: "305", amount: 1150, status: "Unpaid" }
    ]);
  }
  