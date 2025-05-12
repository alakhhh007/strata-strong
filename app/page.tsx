
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 max-w-4xl mx-auto space-y-10">

      {/* 🔗 Navigation Bar */}
      <nav className="flex flex-wrap gap-6 justify-center text-blue-600 underline text-lg">
        <Link href="/">Home</Link>
        <Link href="/announcements">Announcements</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/levies">Levies</Link>
        <Link href="/meetings">Meetings</Link>
      </nav>

      {/* 🏠 Homepage Content */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Strata Manager</h1>
        <p className="text-gray-700 text-lg">
          Your platform for managing building announcements, resident queries, levy payments, and meeting schedules.
        </p>
      </section>
      
    </div>
  );
}



