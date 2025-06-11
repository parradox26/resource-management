'use client';

import { useState } from 'react';
import FilterBar from '@/components/planner/FilterBar';
import PlanningTable from '@/components/planner/PlanningTable';
import { thisWeekDates } from '@/lib/date-utils';
import PlannerGrid from '@/components/planner/PlannerGrid';

const dummyResources = [
  { id: 'r1', name: 'Rohan', role: 'Lead', capacity: 40 },
  { id: 'r2', name: 'Shubham', role: 'Dev', capacity: 40 },
  { id: 'r3', name: 'Priya', role: 'QA', capacity: 40 },
];

const dummyAllocations = {
  r1: { Mon: 4, Tue: 6, Wed: 8, Thu: 2, Fri: 0 },
  r2: { Mon: 6, Tue: 4, Wed: 10, Thu: 16, Fri: 4 },
  r3: { Mon: 0, Tue: 2, Wed: 0, Thu: 2, Fri: 0 },
};

export default function PlannerPage() {
  const [filters, setFilters] = useState({ project: '', team: '', timeRange: 'This Week' });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-500">Resource Planner</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      {/* <PlanningTable resources={dummyResources} allocations={dummyAllocations} dates={thisWeekDates()} /> */}
      <PlannerGrid filters={filters}/>
    </div>
  );
}
