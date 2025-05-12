export default function MeetingsPage() {
    return (
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Upcoming Meetings</h1>
  
        <ul className="space-y-4">
          <li className="border p-4 rounded shadow-sm">
            <strong>AGM (Annual General Meeting)</strong><br />
            Date: 25 May 2025<br />
            Time: 6:00 PM<br />
            Location: Community Hall, Level 1
          </li>
  
          <li className="border p-4 rounded shadow-sm">
            <strong>Fire Safety Briefing</strong><br />
            Date: 5 June 2025<br />
            Time: 4:00 PM<br />
            Location: Online (Zoom link to be emailed)
          </li>
        </ul>
      </div>
    );
  }
  