// components/Sidebar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Projects', path: '/dashboard/projects' },
  { label: 'Resources', path: '/dashboard/resources' },
  { label: 'Reports', path: '/dashboard/reports' },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

  // return (
  //   <aside className="w-64 bg-white shadow-md p-4 h-screen sticky top-0">
  //     {/* <h2 className="text-xl font-bold mb-6 text-gray-700">Resource Manager</h2> */}
  //     <nav className="space-y-3">
  //       {navItems.map(({ label, path }) => (
  //         <Link key={path} href={path} className="block text-gray-700 hover:text-black">
  //           {label}
  //         </Link>
  //       ))}
  //     </nav>
  //   </aside>
  // );
return (
    <aside
      className={`bg-white shadow-md p-4 h-screen sticky top-0 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="w-full flex items-center justify-between mb-4">
        {!collapsed && (
          <span className="text-xl font-bold text-gray-700">Resource Manager</span>
        )}
        <button
          className="p-2 rounded hover:bg-gray-100 focus:outline-none ml-auto"
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <span>&#9654;</span> // ▶
          ) : (
            <span>&#9664;</span> // ◀
          )}
        </button>
      </div>
      <nav className="space-y-3">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            href={path}
            className={`block text-gray-700 hover:text-black transition-all duration-200 ${
              collapsed ? 'text-xs text-center' : ''
            }`}
          >
            {collapsed ? label[0] : label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
