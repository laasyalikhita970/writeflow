"use client";

import { useState } from "react";

export default function DashboardPage() {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

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

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Content Generator ✨
      </h1>

      <p className="text-gray-400 mt-4">
        Enter a prompt and generate AI content instantly.
      </p>

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
          className="mt-6 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>

      </div>

      {/* AI Result */}
      {result && (
        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            AI Response
          </h2>

          <p className="text-gray-300 whitespace-pre-wrap">
            {result}
          </p>

        </div>
      )}

    </div>
  );
}