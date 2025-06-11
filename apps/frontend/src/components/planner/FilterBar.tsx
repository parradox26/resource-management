"use client";

import { Dispatch } from "react";

export interface Filter {
  project: string;
  team: string;
  timeRange: string;
}

interface FilterBarProps {
  filters: Filter;
  setFilters: Dispatch<React.SetStateAction<Filter>>;
}
// FilterBar component to filter resources based on project, team, and time range

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-indigo-600">
      <select
        className="border px-3 py-2 rounded"
        value={filters.project}
        onChange={(e) => setFilters((f) => ({ ...f, project: e.target.value }))}
      >
        <option value="">All Projects</option>
        <option value="Smart Lighting">Smart Lighting</option>
        <option value="Water Monitoring">Water Monitoring</option>
      </select>

      <select
        className="border px-3 py-2 rounded"
        value={filters.team}
        onChange={(e) => setFilters((f) => ({ ...f, team: e.target.value }))}
      >
        <option value="">All Teams</option>
        <option value="IoT">IoT</option>
        <option value="QA">QA</option>
      </select>

      <select
        className="border px-3 py-2 rounded"
        value={filters.timeRange}
        onChange={(e) =>
          setFilters((f) => ({ ...f, timeRange: e.target.value }))
        }
      >
        <option>This Week</option>
        <option>Next Week</option>
        <option>This Month</option>
      </select>
    </div>
  );
}
