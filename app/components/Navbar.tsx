import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">

      <Link href="/">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          WriteFlow ✨
        </h1>
      </Link>

      <div>
        {userId ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <button className="bg-white text-black px-5 py-2 rounded-lg">
              Sign In
            </button>
          </Link>
        )}
      </div>

    </nav>
  );
}