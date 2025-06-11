// app/dashboard/projects/[id]/page.tsx
import { notFound } from 'next/navigation';

type Project = {
  id: string;
  name: string;
  status: string;
  manager: string;
  description: string;
};

const dummyProjects: Project[] = [
  {
    id: '1',
    name: 'Smart Lighting',
    status: 'Ongoing',
    manager: 'Rohan',
    description: 'Managing smart street lighting systems for urban areas.',
  },
  {
    id: '2',
    name: 'Water Monitoring',
    status: 'Planned',
    manager: 'Aditi',
    description: 'Monitoring and optimizing water distribution using IoT sensors.',
  },
];

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = dummyProjects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">{project.name}</h1>
      <p className="text-gray-500 mb-4">Managed by <strong>{project.manager}</strong></p>
      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
        {project.status}
      </span>
      <p className="text-gray-700">{project.description}</p>
    </div>
  );
}
