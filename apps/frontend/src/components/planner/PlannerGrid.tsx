"use client";

import TimelineHeader from "./TimelineHeader";
import ResourceBlock from "./ResourceBlock";
import { Filter } from "./FilterBar";
import moment from "moment";

const dummyResources = [
  {
    id: "r1",
    name: "Rohan",
    allocations: [
      { id: "a1", projectName: "Smart Lighting", start: 1, end: 3, },
      { id: "a2", projectName: "City WiFi", start: 4, end: 6 },
    ],
  },
  {
    id: "r2",
    name: "Shubham",
    allocations: [
      { id: "a3", projectName: "Smart Lighting", start: 2, end: 5 },
    ],
  },
];

interface PlannerGridProps {
  filters?: Filter;
}

const setDays = (filter: Filter) => {
  // Function to set filters
  console.log(filter);
  switch (filter.timeRange) {
    case "This Week":
      const startOfWeek = moment().startOf("week").add(1, "day"); // Monday
      const daysOfWeek = Array.from({ length: 5 }, (_, i) => {
        const d = startOfWeek.clone().add(i, "days");
        return [d.format("DD"), d.format("ddd")];
      });
      return daysOfWeek;
    case "Next Week":
        const startOfNextWeek = moment().add(1, "week").startOf("week").add(1, "day"); // Monday
        const daysOfNextWeek = Array.from({ length: 5 }, (_, i) => {
            const d = startOfNextWeek.clone().add(i, "days");
            return [d.format("DD"), d.format("ddd")];
        });
        return daysOfNextWeek;
    case "This Month":
        const startOfMonth = moment().startOf("month");
        const daysOfMonth = Array.from({ length: moment().daysInMonth() }, (_, i) => {
            const d = startOfMonth.clone().add(i, "days");
            return [d.format("DD"), d.format("ddd")];
        }
        );
        return daysOfMonth;
    default:
        const startOfDefault = moment().startOf("week").add(1, "day"); // Monday
        const daysOfDefault = Array.from({ length: 5 }, (_, i) => {
            const d = startOfDefault.clone().add(i, "days");
            return [d.format("DD"), d.format("ddd")];
        }
        );
        return daysOfDefault;       
  }
};
export default function PlannerGrid({ filters }: PlannerGridProps) {
  const defaultFilters: Filter = {timeRange: "This Month", project: "", team: ""};
  const days = setDays(filters || defaultFilters);
  console.log("days", moment());
  

  return (
    <div className="w-full border rounded bg-white shadow overflow-auto text-gray-700">
      <TimelineHeader days={days} />
      <div>
        {dummyResources.map((res) => (
          <ResourceBlock key={res.id} resource={res} days={days} />
        ))}
      </div>
    </div>
  );
}
