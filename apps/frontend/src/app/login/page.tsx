// app/login/page.tsx
'use client';

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow space-y-4 w-96">
        <h2 className="text-lg font-bold">Login</h2>
        <input type="text" placeholder="Email" className="border p-2 w-full" />
        <input type="password" placeholder="Password" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
