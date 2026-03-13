"use client";

import Link from "next/link";

export default function DeploymentPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-600 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          🚀 Deployment & Production
        </h1>

        <p className="text-gray-400 max-w-3xl">
          Learn how to take your project from local machine to the real world.
          Understand hosting, CI/CD, domains, and production best practices.
        </p>

        {/* Hosting Platforms */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-orange-400">
            Hosting Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { name: "Vercel", desc: "Best for Next.js & frontend apps" },
              { name: "Render", desc: "Backend & full-stack deployment" },
              { name: "AWS / Azure", desc: "Enterprise-level cloud hosting" }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>

                <div className="mt-4 text-xs text-orange-300">
                  ▶ Deployment Tutorial  
                  📂 Live Deployment Example
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* CI/CD Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-400">
            CI / CD (Automation)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              { name: "GitHub Actions", desc: "Automatic build & deploy pipelines" },
              { name: "Docker", desc: "Containerize your application for production" }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>

                <div className="mt-4 text-xs text-indigo-300">
                  ▶ CI/CD Guide  
                  📂 Automation Example
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Domain & SSL */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-green-400">
            Domain & Security
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              { name: "Custom Domain", desc: "Connect your own domain name" },
              { name: "SSL / HTTPS", desc: "Secure your website with encryption" }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>

                <div className="mt-4 text-xs text-green-300">
                  ▶ Setup Guide  
                  📂 Production Example
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Now You're Ready to Build with AI
          </h2>

          <Link
            href="/build"
            className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Go to AI Project Builder
          </Link>
        </div>

      </div>
    </main>
  );
}
