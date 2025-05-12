export default function ContactPage() {
    return (
      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
  
        <form method="POST" action="/api/contact" className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
  
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
  
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  