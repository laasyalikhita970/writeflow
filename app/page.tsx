import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32">

        <h1 className="text-6xl md:text-7xl font-extrabold max-w-5xl leading-tight">
          Generate AI Content Instantly ✨
        </h1>

        <p className="text-gray-400 text-lg mt-8 max-w-2xl">
          Create blogs, captions, emails, social posts, and more
          using the power of artificial intelligence.
        </p>

        <div className="flex gap-4 mt-10">

          <a
  href="/dashboard"
  className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
>
  Start Writing
</a>

          <button className="border border-gray-700 px-8 py-4 rounded-xl hover:bg-gray-900 transition">
            Explore Features
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 mt-40 pb-20">

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            Blog Generator
          </h2>

          <p className="text-gray-400">
            Generate complete AI-powered blogs in seconds.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            Social Media Content
          </h2>

          <p className="text-gray-400">
            Create engaging Instagram, Twitter, and LinkedIn posts.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            Email Writer
          </h2>

          <p className="text-gray-400">
            Write professional emails instantly with AI assistance.
          </p>
        </div>

      </section>

    </div>
  );
}