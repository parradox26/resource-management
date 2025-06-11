// app/dashboard/projects/[id]/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold text-red-600">Project not found</h2>
      <p className="text-gray-600 mt-2">Check the project ID and try again.</p>
    </div>
  );
}
