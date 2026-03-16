"use client";

import Link from "next/link";

export default function DevelopmentPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-600 opacity-20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          💻 Development Learning Hub
        </h1>

        <p className="text-gray-400 max-w-3xl">
          Master frontend, backend, APIs, and databases.  
          Understand how each technology contributes to building a full-stack project.
        </p>

        {/* FRONTEND SECTION */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-blue-400">
            Frontend Technologies
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { name: "HTML", desc: "Structure of web pages" },
              { name: "CSS", desc: "Styling & layouts" },
              { name: "Bootstrap", desc: "Responsive design framework" },
              { name: "React", desc: "Dynamic UI building library" }
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>

                <div className="mt-4 text-xs text-blue-300">
                  ▶ Tutorial Video  
                  📂 Mini Project Example
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* BACKEND SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-green-400">
            Backend Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { name: "Node.js", desc: "JavaScript backend runtime" },
              { name: "Java", desc: "Enterprise backend language" },
              { name: "Spring Boot", desc: "Powerful Java backend framework" }
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>

                <div className="mt-4 text-xs text-green-300">
                  ▶ Tutorial Video  
                  📂 Backend Project Example
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* DATABASE SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-purple-400">
            Database
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              { name: "MySQL", desc: "Relational database system" },
              { name: "MongoDB", desc: "NoSQL document database" }
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>

                <div className="mt-4 text-xs text-purple-300">
                  ▶ Tutorial Video  
                  📂 Database Integration Example
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            After Development, Learn Deployment →
          </h2>

          <Link
            href="/deployment"
            className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Go to Deployment
          </Link>
        </div>

      </div>
    </main>
  );
}
