export async function POST(req: Request) {
    const formData = await req.formData();
    const name = formData.get("name");
    const message = formData.get("message");
  
    console.log("Contact form submitted:", { name, message });
  
    return new Response("Success", {
      status: 302,
      headers: {
        Location: "/thank-you",
      },
    });
  }
  
  