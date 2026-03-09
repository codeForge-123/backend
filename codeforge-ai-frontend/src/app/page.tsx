"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-semibold tracking-wide">
            CodeForge AI
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300 text-sm">
            <Link href="/design" className="hover:text-white transition">Design</Link>
            <Link href="/development" className="hover:text-white transition">Development</Link>
            <Link href="/deployment" className="hover:text-white transition">Deployment</Link>
            <Link href="/build" className="hover:text-white transition">Build</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        
        <div className="mb-6 px-4 py-1 text-sm bg-white/10 border border-white/20 rounded-full text-gray-300">
          🚀 AI Powered Project Builder
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Generate Complete Full-Stack Projects  
          <span className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            From Idea to Deployment
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          Learn Design. Master Development. Launch with Confidence.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            href="/build"
            className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Start Building
          </Link>

          <Link
            href="/design"
            className="px-8 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
          >
            Explore Learning
          </Link>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <Link href="/design">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">🎨 Design</h3>
              <p className="text-gray-400 text-sm">
                UI/UX tools, Figma, Canva, tutorials & project demos.
              </p>
            </div>
          </Link>

          <Link href="/development">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">💻 Development</h3>
              <p className="text-gray-400 text-sm">
                Frontend, Backend, APIs, Database & real-world projects.
              </p>
            </div>
          </Link>

          <Link href="/deployment">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">🚀 Deployment</h3>
              <p className="text-gray-400 text-sm">
                Cloud hosting, CI/CD, domain setup & production guide.
              </p>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}
