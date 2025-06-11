
// export default function Home() {
//   return (
//     <div className="text-gray-600">My React App</div>
//   );
// }


// app/page.tsx
import { redirect } from 'next/navigation';

export default async function HomePage() {
  
  const isLoggedIn = true; // mock or real logic
  return redirect(isLoggedIn ? '/dashboard' : '/login');
}
