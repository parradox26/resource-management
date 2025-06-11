'use client';

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="font-medium text-gray-700 mb-2">Team Utilization</h2>
          <p className="text-sm text-gray-500">Avg Utilization: 65%</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="font-medium text-gray-700 mb-2">Overloaded Resources</h2>
          <p className="text-sm text-red-600">2 resources above 90%</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="font-medium text-gray-700 mb-2">Available Bench</h2>
          <p className="text-sm text-green-600">3 resources with &lt 20% allocation</p>
        </div>
      </div>
    </div>
  );
}
