import Link from 'next/link'
import FeatureLinks from './components/FeatureLinks'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
            NextFace AI OS
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
            Created by Djibril Julien Bourouno
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
            Free chat + paid tools
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight md:text-7xl">
              The AI operating system for model growth, portfolio discipline,
              and verified career decisions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              One independent AI workspace with free limited chat, paid model
              programs, research, portfolio tools, visual coaching, reports,
              and creator growth features.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/features/ai-chat"
                className="rounded-2xl bg-white px-6 py-4 font-bold text-black"
              >
                Start free chat
              </Link>

              <a
                href="#features"
                className="rounded-2xl border border-white/15 px-6 py-4 font-bold text-white"
              >
                View tools
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black">Access system</h2>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                MVP
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-bold text-white">Free</p>
                <p className="mt-1 text-sm text-white/60">
                  Limited AI chat access only.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-bold text-white">Starter / Pro</p>
                <p className="mt-1 text-sm text-white/60">
                  Unlock style advisor, research, visual coach, agency match,
                  casting simulation and PDF reports.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-bold text-white">Premium</p>
                <p className="mt-1 text-sm text-white/60">
                  Unlock app builder, portfolio builder and media kit tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="features">
        <FeatureLinks />
      </div>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          Pricing
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Free chat, paid advanced tools.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black">Free</h3>
            <p className="mt-2 text-white/60">Limited AI chat only.</p>
            <p className="mt-6 text-4xl font-black">€0</p>
            <Link
              href="/features/ai-chat"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
            >
              Try chat
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black">Pro</h3>
            <p className="mt-2 text-white/60">
              Programs, research, visual coaching and reports.
            </p>
            <p className="mt-6 text-4xl font-black">Coming</p>
            <Link
              href="/features/model-journey"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
            >
              View Pro tools
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black">Premium</h3>
            <p className="mt-2 text-white/60">
              Portfolio builder, media kit and AI app builder.
            </p>
            <p className="mt-6 text-4xl font-black">Coming</p>
            <Link
              href="/features/portfolio-builder"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
            >
              View Premium tools
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        Created by Djibril Julien Bourouno · NextFace AI OS · @djibriljulienbouroun
      </footer>
    </main>
  )
}
