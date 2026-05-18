import Link from "next/link";

export default function Sidebar() {

  return (
    <div className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 p-6">

      <h1 className="text-3xl font-bold text-white mb-10">
        WriteFlow ✨
      </h1>

      <div className="space-y-4">

        <Link
          href="/dashboard"
          className="block bg-gray-900 hover:bg-gray-800 transition p-4 rounded-xl text-white font-medium"
        >
          Dashboard
        </Link>

        <Link
          href="/"
          className="block bg-gray-900 hover:bg-gray-800 transition p-4 rounded-xl text-white font-medium"
        >
          Home
        </Link>

      </div>

    </div>
  );
}