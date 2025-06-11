'use client';

function getLoadColor(percent: number) {
  if (percent >= 90) return 'text-red-600';
  if (percent >= 70) return 'text-yellow-600';
  return 'text-green-600';
}

function getDailyLoadColor(daily: number) {
  if (daily > 8) return 'text-red-600';
  if (daily >= 6) return 'text-green-600';
  return 'text-yellow-600';
} 
interface Resource {
  id: string;
  name: string;
  role: string;
  capacity: number;
}
interface Allocation {
  [key: string]: number;
}
interface Allocations {
  [key: string]: Allocation;
}
interface PlanningTableProps {
  resources: Resource[];
  allocations: Allocations;
  dates: string[];
}

export default function PlanningTable({ resources, allocations, dates }: PlanningTableProps) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white border rounded shadow">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="text-left py-2 px-4">Resource</th>
            {dates.map((d: string) => (
              <th key={d} className="text-left py-2 px-4">{d}</th>
            ))}
            <th className="text-left py-2 px-4">Total</th>
            <th className="text-left py-2 px-4">Load</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((r) => {
            const daily = allocations[r.id] || {};
            const total = Object.values(daily).reduce((sum, h) => sum + h, 0);
            const load = Math.round((total / r.capacity) * 100);
            return (
              <tr key={r.id} className="border-t">
                <td className="py-2 px-4 font-medium text-gray-500">{r.name}</td>
                {dates.map((d) => (
                  <td key={d} className={`py-2 px-4 ${getDailyLoadColor(daily[d])}`}>{daily[d] ?? '-'}</td>
                ))}
                <td className="py-2 px-4 font-semibold">{total}h</td>
                <td className={`py-2 px-4 font-semibold ${getLoadColor(load)}`}>{load}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
