'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const dummyResources = [
  { id: 1, name: "Shubham", role: "Developer", available: "60%", projects: 2 },
  { id: 2, name: "Priya", role: "QA", available: "80%", projects: 1 },
  { id: 3, name: "Rohan", role: "Lead", available: "40%", projects: 3 },
];

export default function ResourcesPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleAddResource = () => {
    setShowModal(true);
    console.log("Add Resource button clicked");
  };

  const handleGoToPlanner = () => {
    router.push("/dashboard/resources/planner");
    console.log("Go to planner button clicked");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-500">Resources</h1>
      <div className="mb-4 justify-around flex">
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          onClick={handleAddResource}
        >
          + Add Resource
        </button>
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          onClick={handleGoToPlanner}
        >
          Go to planner
        </button>
      </div>
      <table className="min-w-full bg-white border rounded shadow text-gray-600">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-left py-2 px-4">Role</th>
            <th className="text-left py-2 px-4">Availability</th>
            <th className="text-left py-2 px-4">Projects</th>
          </tr>
        </thead>
        <tbody>
          {dummyResources.map((res) => (
            <tr key={res.id} className="border-t">
              <td className="py-2 px-4">{res.name}</td>
              <td className="py-2 px-4">{res.role}</td>
              <td className="py-2 px-4">{res.available}</td>
              <td className="py-2 px-4">{res.projects}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[300px]">
            <h2 className="text-lg font-semibold mb-4">Add Resource</h2>
            <p>Modal content goes here.</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
