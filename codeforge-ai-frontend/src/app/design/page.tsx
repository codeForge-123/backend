"use client";

import Link from "next/link";

export default function DesignPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-600 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          🎨 Design Learning Hub
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Master UI/UX tools and design principles before building your project.
          Learn with tutorials, explore tools, and view real project examples.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-16 relative z-10">

        {/* Figma */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-4">🟣 Figma</h3>
          <p className="text-gray-400 text-sm mb-6">
            Design complete website layouts, wireframes, and prototypes using Figma.
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <p>• UI Components</p>
            <p>• Auto Layout</p>
            <p>• Responsive Design</p>
            <p>• Prototyping</p>
          </div>

          <div className="mt-6 text-sm text-purple-400">
            ▶ Tutorial Video Section  
            📂 Sample Web App Design Project
          </div>
        </div>

        {/* Canva */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-4">🔵 Canva</h3>
          <p className="text-gray-400 text-sm mb-6">
            Create quick UI mockups, social banners, and presentation visuals easily.
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <p>• Templates</p>
            <p>• Branding</p>
            <p>• Color Systems</p>
            <p>• UI Mockups</p>
          </div>

          <div className="mt-6 text-sm text-blue-400">
            ▶ Tutorial Video Section  
            📂 Design Sample Project
          </div>
        </div>

        {/* UI Principles */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-4">✨ UI/UX Principles</h3>
          <p className="text-gray-400 text-sm mb-6">
            Learn core design principles to build beautiful and user-friendly apps.
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <p>• Color Theory</p>
            <p>• Typography</p>
            <p>• Spacing & Layout</p>
            <p>• UX Flow</p>
          </div>

          <div className="mt-6 text-sm text-pink-400">
            ▶ Tutorial Video Section  
            📂 UI Design Example Project
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto mt-24 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6">
          After Designing, Move to Development →
        </h2>

        <Link
          href="/development"
          className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
        >
          Go to Development
        </Link>
      </div>

    </main>
  );
}
