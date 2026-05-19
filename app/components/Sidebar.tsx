import Link from "next/link";

export default function Sidebar() {

  return (
    <div className="w-20 md:w-64 min-h-screen bg-gray-950 border-r border-gray-800 p-4 md:p-6">

      <h1 className="hidden md:block text-3xl font-bold text-white mb-10">
        WriteFlow ✨
      </h1>

      <div className="space-y-4">

        <Link
          href="/dashboard"
          className="block bg-gray-900 hover:bg-gray-800 transition p-3 md:p-4 rounded-xl text-white font-medium text-center md:text-left"
        >
          🏠 <span className="hidden md:inline">Dashboard</span>
        </Link>

        <Link
          href="/"
          className="block bg-gray-900 hover:bg-gray-800 transition p-3 md:p-4 rounded-xl text-white font-medium text-center md:text-left"
        >
          🌐 <span className="hidden md:inline">Home</span>
        </Link>

      </div>

    </div>
  );
}