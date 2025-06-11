// components/Topbar.tsx
export default function Topbar() {
  return (
    <div className="h-16 flex items-center px-6 bg-white shadow-sm justify-end">
      {/* <span className="text-lg font-medium text-gray-900">
        Resource Management
      </span> */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Logged in as Admin</span>
      </div>
    </div>
  );
}
