"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const templates = [
  {
    title: "Blog Writer",
    prompt: "Write a detailed blog about technology trends.",
  },
  {
    title: "YouTube Script",
    prompt: "Write a YouTube video script about productivity.",
  },
  {
    title: "Instagram Caption",
    prompt: "Write an engaging Instagram caption for travel.",
  },
  {
    title: "Email Generator",
    prompt: "Write a professional email for job application.",
  },
];

export default function DashboardPage() {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  // Load history on page refresh
  useEffect(() => {

    const savedHistory = localStorage.getItem("ai-history");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }

  }, []);

  const generateContent = async () => {

    if (!prompt) return;

    try {

      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      setResult(data.content);

      // Save history
      const updatedHistory = [data.content, ...history];

      setHistory(updatedHistory);

      localStorage.setItem(
        "ai-history",
        JSON.stringify(updatedHistory)
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

return (
  <div className="flex bg-black text-white">

    <Sidebar />

    <div className="flex-1 p-10 min-h-screen">

      {/* Heading */}
      <h1 className="text-5xl font-bold">
        AI Content Generator ✨
      </h1>

      <p className="text-gray-400 mt-4">
        Choose a template or write your own prompt.
      </p>

      {/* Templates */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">

        {templates.map((template, index) => (

          <div
            key={index}
            onClick={() => setPrompt(template.prompt)}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-blue-500 transition"
          >

            <h2 className="text-xl font-bold">
              {template.title}
            </h2>

          </div>

        ))}

      </div>

      {/* Input Section */}
      <div className="mt-10">

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt here..."
          className="w-full h-40 bg-gray-900 border border-gray-800 rounded-2xl p-5 outline-none resize-none"
        />

        <button
          onClick={generateContent}
          disabled={loading}
          className="mt-6 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center gap-3 disabled:opacity-70"
        >

          {loading && (
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
          )}

          {loading ? "Generating..." : "Generate Content"}

        </button>

      </div>

      {/* AI Result */}
      {result && (

        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              AI Response
            </h2>

            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
            >
              Copy
            </button>

          </div>

          <p className="text-gray-300 whitespace-pre-wrap">
            {result}
          </p>

        </div>

      )}

      {/* History Section */}
      {history.length > 0 && (

        <div className="mt-16">

          <div className="flex items-center justify-between mb-8">

  <h2 className="text-3xl font-bold">
    History
  </h2>

  <button
    onClick={() => {
      localStorage.removeItem("ai-history");
      setHistory([]);
    }}
    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
  >
    Clear History
  </button>

</div>

          <div className="space-y-6">

            {history.map((item, index) => (

              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >

                <p className="text-gray-300 whitespace-pre-wrap">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
    </div>
  );
}