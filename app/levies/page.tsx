export default function LeviesPage() {
    return (
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Levy Statements</h1>
  
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Unit 201</td>
              <td className="border px-4 py-2">2025-05-31</td>
              <td className="border px-4 py-2">$1,200</td>
              <td className="border px-4 py-2 text-green-600">Paid</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Unit 305</td>
              <td className="border px-4 py-2">2025-05-31</td>
              <td className="border px-4 py-2">$1,150</td>
              <td className="border px-4 py-2 text-red-600">Unpaid</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  