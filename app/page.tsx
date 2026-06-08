import Link from 'next/link'
import AIWorkspace from './components/AIWorkspace'
import FunctionalTools from './components/FunctionalTools'

const principles = [
  {
    title: 'AI-first',
    text: 'NextFace AI OS is built around a real AI assistant, not only static pages. Users can ask questions, get plans, write emails, prepare agencies and improve step by step.'
  },
  {
    title: 'Model-focused',
    text: 'The system is specialized for modelling, portfolio growth, grooming, style, castings, agencies, contracts and personal presentation.'
  },
  {
    title: 'Research-backed',
    text: 'The goal is to use online research, sources and citations for current agencies, fashion news, opportunities and industry updates.'
  },
  {
    title: 'Safe improvement',
    text: 'NextFace focuses on realistic, professional and safe improvement. It does not promise fake transformations or medical results.'
  },
  {
    title: 'Progress over time',
    text: 'Users should be able to return, update photos, track progress, improve their score and receive weekly guidance.'
  },
  {
    title: 'Creator ownership',
    text: 'This is an independent AI workspace created by Djibril Julien Bourouno for models, creators and ambitious beginners.'
  }
]

const modules = [
  'General AI Chat',
  'Model Coach',
  'Agency Finder',
  'Agency Email Writer',
  'Online Research',
  'Image Analyzer',
  'Contract Helper',
  '90-Day Program',
  'Portfolio Builder',
  'Casting Simulator',
  'Style Advisor',
  'Progress Updates'
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
            NextFace AI OS
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
            Created by Djibril Julien Bourouno
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
            Independent AI workspace
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-5xl text-5xl font-black leading-none tracking-tight md:text-7xl">
              The AI operating system for modelling, agencies, portfolio growth
              and personal evolution.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              NextFace AI OS is a real AI workspace built for models and
              creators. Ask anything like ChatGPT or Gemini, then switch into
              specialized modes for modelling, agency research, emails,
              contracts, image improvement, casting preparation and 90-day
              growth plans.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#ai-workspace"
                className="rounded-2xl bg-white px-6 py-4 font-bold text-black"
              >
                Open AI Workspace
              </a>

              <a
                href="#functional-tools"
                className="rounded-2xl border border-white/15 px-6 py-4 font-bold text-white"
              >
                Open real tools
              </a>

              <a
                href="#principles"
                className="rounded-2xl border border-white/15 px-6 py-4 font-bold text-white"
              >
                Read principles
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black">What it does</h2>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                Core AI
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="font-bold text-white">Ask anything</p>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  General AI chat for questions, explanations, planning and
                  advice.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="font-bold text-white">Real AI functions</p>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Generate agency emails, 90-day plans, portfolio structures,
                  casting simulations, contract checks and style advice.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="font-bold text-white">Free limited access</p>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Free users get limited chat access. Advanced tools will later
                  unlock with payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          Principles
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          The principles behind NextFace AI.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          NextFace AI OS is designed to be useful, honest and practical. It is
          not about fake promises. It is about helping users understand their
          current level, improve their presentation and take smarter action.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-2xl font-black">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          AI Modules
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          One app. Multiple AI abilities.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          Every module is designed to become functional inside the same AI
          workspace. Instead of sending users to empty locked pages, the system
          gives them active AI modes that can guide, write, plan and analyze.
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
          {modules.map((module) => (
            <div
              key={module}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-white/80"
            >
              {module}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
            90-Day Program
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Build a 90-day plan around your direction.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
            When a user starts the 90-day program, NextFace asks them to choose
            a direction before generating the plan. This makes the coaching more
            personal and focused.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Natural Appeal</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Focus on harmony, clean skin presentation, hair, style,
                confidence, natural beauty, photos and soft model presence.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Masculine Edge</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Focus on stronger presence, posture, grooming, sharper style,
                discipline, confidence and masculine visual energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="ai-workspace">
        <AIWorkspace />
      </div>

      <div id="functional-tools">
        <FunctionalTools />
      </div>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          Access
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Free chat first. Advanced features later.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          The first goal is to make the AI workspace functional. Then we add
          accounts, usage limits, image upload, online research with citations,
          saved updates and payment unlock.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black">Free</h3>
            <p className="mt-2 text-white/60">
              Limited AI chat and basic guidance.
            </p>
            <p className="mt-6 text-4xl font-black">€0</p>
            <a
              href="#ai-workspace"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
            >
              Start free
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black">Pro</h3>
            <p className="mt-2 text-white/60">
              Advanced coaching, research, image analysis, agency matching and
              reports.
            </p>
            <p className="mt-6 text-4xl font-black">Coming</p>
            <a
              href="#functional-tools"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
            >
              Use real tools
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black">Premium</h3>
            <p className="mt-2 text-white/60">
              Portfolio builder, media kit, app builder and premium launch
              tools.
            </p>
            <p className="mt-6 text-4xl font-black">Coming</p>
            <Link
              href="/features/portfolio-builder"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
            >
              View roadmap
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs leading-6 text-white/40">
        Created by Djibril Julien Bourouno · NextFace AI OS · @djibriljulienbouroun
      </footer>
    </main>
  )
}
