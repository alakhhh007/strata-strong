export default function Home() {
  // Read environment variable for the site name
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Default Site";

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to {siteName}</h1>
      <p className="text-lg text-gray-300 mb-8">
        Manage building announcements, levies, meetings, and requests all in one place.
      </p>

      {/* Display image from public folder */}
      <img
        src="/building.jpg"
        alt="Building"
        className="w-full max-w-md rounded-lg mt-4"
      />

      <nav className="flex flex-col gap-2 mt-8">
        <a href="/announcements" className="text-blue-400 hover:underline">Announcements</a>
        <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
        <a href="/levies" className="text-blue-400 hover:underline">Levies</a>
        <a href="/meetings" className="text-blue-400 hover:underline">Meetings</a>
      </nav>
    </main>
  );
}
