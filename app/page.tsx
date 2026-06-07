'use client'

import { useMemo, useState } from 'react'
import {
  Brain, Upload, Search, ShieldCheck, BarChart3, Camera, Shirt, FileText, Globe2,
  Trophy, CalendarCheck, Target, Users, Wand2, Trash2, Download, Sparkles, ExternalLink,
  CheckCircle2, AlertTriangle, Compass, BadgeCheck
} from 'lucide-react'
import { modes, productIdeas, journeyLevels, pricing, disclaimers, evidenceRules } from '@/lib/data'
import { creatorProfile } from '@/lib/creator'
import { generate90DayProgram, journeyLevel, exportUserData, requestDeletion, GoalPath } from '@/lib/program'
import { createMockResearchAnswer } from '@/lib/research'

function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`card p-5 ${className}`}>{children}</div>
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>
}

export default function Page() {
  const [goal, setGoal] = useState<GoalPath>('Appeal-focused')
  const [score, setScore] = useState(62)
  const [search, setSearch] = useState('')
  const [researchQuery, setResearchQuery] = useState('Find reliable modelling agencies in Paris for a 16-year-old and show sources.')
  const [researchAnswer, setResearchAnswer] = useState(createMockResearchAnswer(researchQuery))
  const program = useMemo(() => generate90DayProgram(goal), [goal])
  const level = journeyLevel(score)

  function downloadData() {
    const blob = new Blob([JSON.stringify(exportUserData(), null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'nextface-ai-os-user-export.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function deletionNotice() {
    alert(requestDeletion().message)
  }

  function pdfNotice() {
    alert('PDF report logic placeholder: production version should generate a branded monthly glow-up report with scores, milestones, portfolio progress, style notes, research sources, skin routine consistency, and next actions.')
  }

  function runResearchDemo() {
    setResearchAnswer(createMockResearchAnswer(researchQuery))
  }

  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black">NF</div>
            <div>
              <h1 className="text-xl font-black">NextFace AI OS</h1>
              <p className="text-sm text-white/55">{creatorProfile.creditLine} • Independent AI workspace MVP with research-backed answers</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill>AI Chat</Pill>
            <Pill>Online Research</Pill>
            <Pill>Citations</Pill>
            <Pill>Privacy-first</Pill>
          </div>
        </nav>

        <section className="grid gap-6 py-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Pill>Core AI chat</Pill>
              <Pill>Projects</Pill>
              <Pill>Library</Pill>
              <Pill>Deep Research</Pill>
              <Pill>Evidence System</Pill>
            </div>
            <h2 className="max-w-4xl text-5xl font-black leading-[.94] md:text-7xl">
              The AI operating system for model growth, portfolio discipline, and verified career decisions.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-white/65">
              One branded independent app with chat, uploads, specialized model modes, privacy controls, 90-day programs,
              scoring, reports, admin insights, style guidance, and internet research-backed answers with citations.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-white px-5 py-3 font-bold text-black">Start Workspace</button>
              <button className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold">Open Deep Research</button>
            </div>
          </div>

          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black">Onboarding</h3>
              <Sparkles className="text-cyan-300" />
            </div>
            <p className="mt-2 text-sm text-white/60">
              Choose a safe professional focus. Both paths are about presentation, confidence, style, grooming, and photography.
            </p>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as GoalPath)}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-black/30 p-3 outline-none"
            >
              <option>Appeal-focused</option>
              <option>PSL-focused</option>
            </select>

            <div className="mt-5 rounded-2xl bg-black/25 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/55">Serious readiness score</p>
                <Pill>{level}</Pill>
              </div>
              <input className="mt-3 w-full" type="range" min="0" max="100" value={score} onChange={(e) => setScore(Number(e.target.value))} />
              <p className="mt-2 text-3xl font-black">{score}/100</p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-2xl bg-white/10 p-3"><Trophy className="mx-auto mb-1" />Badges</div>
              <div className="rounded-2xl bg-white/10 p-3"><CalendarCheck className="mx-auto mb-1" />Streaks</div>
              <div className="rounded-2xl bg-white/10 p-3"><Target className="mx-auto mb-1" />Goals</div>
            </div>
          </Card>
        </section>

        <section className="py-4">
          <div className="card p-5">
            <p className="text-sm text-white/50">Founder / Creator</p>
            <h3 className="mt-1 text-3xl font-black">{creatorProfile.name}</h3>
            <p className="mt-1 text-sm text-white/60">{creatorProfile.handle} • Creator of NextFace AI OS</p>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[280px_1fr_340px]">
          <Card>
            <h3 className="mb-4 font-black">Workspace</h3>
            {['Conversations', 'Projects', 'Library', 'Tools', 'Deep Research', 'Reports', 'Admin'].map((x) => (
              <div key={x} className="mb-2 rounded-2xl bg-white/10 p-3 text-sm">{x}</div>
            ))}
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-black/30 p-3">
              <Search size={16} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search chats..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </Card>

          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-black">Core AI Chat</h3>
              <Brain className="text-violet-300" />
            </div>
            <div className="space-y-3">
              <div className="rounded-3xl bg-black/30 p-4">
                <p className="text-sm text-white/50">NextFace AI OS</p>
                <p>Upload photos, files, goals, agency notes, outfit ideas, or casting questions. When facts may change, I research online and justify answers with sources.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-sm text-white/50">Client</p>
                <p>I want a 90-day program with portfolio, posing, style, skincare routine consistency, casting practice, and verified agency research.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <button className="rounded-2xl border border-white/10 bg-white/10 p-3 text-left">
                <Upload className="mb-2" /> Image/file upload placeholder
              </button>
              <button onClick={pdfNotice} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-left">
                <FileText className="mb-2" /> PDF report + citations
              </button>
            </div>
          </Card>

          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-black">Creator/Admin Insights</h3>
              <BarChart3 className="text-cyan-300" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['Active clients', '128'],
                ['Needs tracked', '64'],
                ['Research logs', '91'],
                ['Milestones', '412']
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-black/25 p-3">
                  <p className="text-xs text-white/50">{label}</p>
                  <p className="text-2xl font-black">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60">
              Tracks client needs, update cycles, research quality, source coverage, feature requests, creator insights, retention quality, and safety flags. Owner: Djibril Julien Bourouno.
            </p>
          </Card>
        </section>

        <section className="py-10">
          <Card>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="mb-2 flex gap-2">
                  <Pill>Research-backed answer</Pill>
                  <Pill>Last checked: {researchAnswer.lastChecked}</Pill>
                  <Pill>Confidence: {researchAnswer.confidence}</Pill>
                </div>
                <h3 className="text-3xl font-black">Online Research & Evidence System</h3>
                <p className="mt-2 text-sm text-white/60">
                  Every current or factual answer should include online research, citations, source quality, confidence, warnings, and next actions.
                </p>
              </div>
              <Compass className="text-cyan-300" />
            </div>

            <div className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <textarea
                  value={researchQuery}
                  onChange={(e) => setResearchQuery(e.target.value)}
                  className="min-h-[130px] w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none"
                />
                <button onClick={runResearchDemo} className="mt-3 rounded-2xl bg-white px-5 py-3 font-bold text-black">
                  Run research demo
                </button>

                <div className="mt-4 rounded-2xl bg-black/25 p-4">
                  <h4 className="font-black">Research workflow</h4>
                  <div className="mt-3 grid gap-2 text-sm text-white/65">
                    {['Query planner', 'Web research checklist', 'Source comparison table', 'Verified answer section', 'Citations section', 'Final recommendation', 'Next actions'].map((x) => (
                      <div key={x} className="flex items-center gap-2"><CheckCircle2 size={16} /> {x}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl bg-black/25 p-4">
                  <h4 className="font-black">Verified answer</h4>
                  <p className="mt-2 text-sm text-white/65">{researchAnswer.verifiedAnswer}</p>
                </div>

                <div className="rounded-2xl bg-black/25 p-4">
                  <h4 className="font-black">Reasoning summary</h4>
                  <ul className="mt-2 space-y-1 text-sm text-white/65">
                    {researchAnswer.reasoningSummary.map((x) => <li key={x}>• {x}</li>)}
                  </ul>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {researchAnswer.sources.map((s) => (
                    <div key={s.url} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <BadgeCheck size={16} />
                        <span className="text-xs uppercase text-white/50">{s.quality}</span>
                      </div>
                      <h5 className="font-black">{s.title}</h5>
                      <p className="mt-1 text-xs text-white/55">{s.summary}</p>
                      <p className="mt-2 text-xs text-white/40">{s.url}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-yellow-500/10 p-4">
                  <div className="mb-2 flex items-center gap-2"><AlertTriangle size={16} /><h4 className="font-black">Warnings</h4></div>
                  <ul className="space-y-1 text-sm text-white/65">
                    {researchAnswer.warnings.map((x) => <li key={x}>• {x}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="py-10">
          <h3 className="mb-5 text-3xl font-black">Specialized Model Modes</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modes.map(([title, desc]) => (
              <Card key={title}>
                <Pill>Mode</Pill>
                <h4 className="mt-4 text-xl font-black">{title}</h4>
                <p className="mt-2 text-sm text-white/60">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-5 py-8 lg:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <Camera />
              <h3 className="text-2xl font-black">Visual AI Coach</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {['Posture', 'Posing', 'Facial expression', 'Runway walk', 'Grooming routines', 'Photo angles', 'Wellness habits', 'Movement demos'].map((x) => (
                <div key={x} className="rounded-2xl bg-white/10 p-3 text-sm">{x}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/55">Includes step-by-step visual guides and health disclaimers.</p>
          </Card>

          <Card>
            <div className="mb-4 flex items-center gap-3">
              <Shirt />
              <h3 className="text-2xl font-black">Style & Skin Quality Advisor</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {['Outfit uploads', 'Clothing advice', 'Color palette guidance', 'Grooming advice', 'Skincare routine guidance', 'Product-category suggestions', 'Photo-ready prep', 'Professional disclaimers'].map((x) => (
                <div key={x} className="rounded-2xl bg-white/10 p-3 text-sm">{x}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/55">Not medical advice. Consult a dermatologist/professional for persistent skin issues. Product suggestions require current source checks.</p>
          </Card>
        </section>

        <section className="py-8">
          <h3 className="mb-5 text-3xl font-black">First 10 Days of Personalized 90-Day Program</h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {program.slice(0, 10).map((d) => (
              <Card key={d.day}>
                <p className="text-sm text-white/50">Day {d.day}</p>
                <h4 className="font-black">{d.phase}</h4>
                <p className="mt-2 text-xs text-white/60">{d.actions.join(' • ')}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h3 className="mb-5 text-3xl font-black">Model Journey Levels</h3>
          <div className="grid gap-4 md:grid-cols-5">
            {journeyLevels.map(([title, desc]) => (
              <Card key={title}>
                <h4 className="font-black">{title}</h4>
                <p className="mt-2 text-xs text-white/60">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-5 py-8 lg:grid-cols-3">
          <Card>
            <ShieldCheck className="mb-3 text-emerald-300" />
            <h3 className="text-xl font-black">Consent & Privacy</h3>
            <p className="mt-2 text-sm text-white/60">
              Consent toggles for analytics, memory, personalization, uploads, reports, research logs, and progress tracking.
            </p>
            <div className="mt-4 flex gap-2">
              <button onClick={downloadData} className="rounded-xl bg-white/10 px-3 py-2 text-sm"><Download className="inline" size={16} /> Export</button>
              <button onClick={deletionNotice} className="rounded-xl bg-white/10 px-3 py-2 text-sm"><Trash2 className="inline" size={16} /> Delete</button>
            </div>
          </Card>

          <Card>
            <Globe2 className="mb-3 text-cyan-300" />
            <h3 className="text-xl font-black">Multilingual Auto-Adaptation</h3>
            <p className="mt-2 text-sm text-white/60">Automatically adapts language and tone across English, French, and other user languages, while preserving citations.</p>
          </Card>

          <Card>
            <Wand2 className="mb-3 text-violet-300" />
            <h3 className="text-xl font-black">Monthly Update System</h3>
            <p className="mt-2 text-sm text-white/60">Product updates, monthly reports, saved goals, reminders, milestones, research-backed recommendations, and next actions.</p>
          </Card>
        </section>

        <section className="py-8">
          <Card>
            <h3 className="text-2xl font-black">Research Rules Across the Whole App</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {evidenceRules.map((rule) => (
                <div key={rule} className="rounded-2xl bg-white/10 p-3 text-sm">{rule}</div>
              ))}
            </div>
          </Card>
        </section>

        <section className="py-8">
          <h3 className="mb-5 text-3xl font-black">Additional Product Ideas Included</h3>
          <div className="flex flex-wrap gap-2">
            {productIdeas.map((idea) => <Pill key={idea}>{idea}</Pill>)}
          </div>
        </section>

        <section className="py-8">
          <h3 className="mb-5 text-3xl font-black">Accessible Pricing</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map(([name, price, desc]) => (
              <Card key={name}>
                <h4 className="text-xl font-black">{name}</h4>
                <p className="mt-2 text-3xl font-black">{price}</p>
                <p className="mt-2 text-sm text-white/60">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8">
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <Users />
              <h3 className="text-2xl font-black">Ethical Engagement System</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                'Progress streaks', 'Weekly challenges', 'Achievement badges', 'Before/after score tracking',
                'Monthly progress reports', 'Personalized next actions', 'Reminders', 'Saved goals',
                'Client milestones', 'Portfolio progress tracker', 'Community challenges', 'Non-manipulative gamification'
              ].map((x) => (
                <div key={x} className="rounded-2xl bg-white/10 p-3 text-sm">{x}</div>
              ))}
            </div>
          </Card>
        </section>

        <section className="py-8">
          <Card>
            <h3 className="text-2xl font-black">Safe Disclaimers</h3>
            <div className="mt-4 space-y-2 text-sm text-white/65">
              {disclaimers.map((d) => <p key={d}>• {d}</p>)}
            </div>
          </Card>
        </section>

        <footer className="py-10 text-center text-sm text-white/45">
          NextFace AI OS Workspace MVP — Created by Djibril Julien Bourouno • @djibriljulienbouroun
        </footer>
      </div>
    </main>
  )
}
