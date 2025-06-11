'use client';

import Link from 'next/link';

const dummyProjects = [
  { id: 1, name: 'Smart Lighting', status: 'Ongoing', manager: 'Rohan', teamSize: 5 },
  { id: 2, name: 'Water Monitoring', status: 'Planned', manager: 'Aditi', teamSize: 3 },
  { id: 3, name: 'AI Survey Tool', status: 'Completed', manager: 'Raj', teamSize: 7 },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-600">Projects</h1>
      <div className="grid gap-4 text-gray-600">
        {dummyProjects.map((project) => (
          <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
            <div className="p-4 border rounded-md bg-white shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{project.name}</h2>
                <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-800">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Managed by <strong>{project.manager}</strong> • {project.teamSize} members
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
