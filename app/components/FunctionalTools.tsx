'use client'

import { useState } from 'react'

const tools = [
  {
    id: 'agency-email',
    name: 'Agency Email Writer',
    description: 'Generate agency emails, Instagram DMs, follow-ups and submission checklist.'
  },
  {
    id: 'program-90',
    name: '90-Day Program',
    description: 'Create a 90-day improvement plan with Natural Appeal or Masculine Edge.'
  },
  {
    id: 'agency-finder',
    name: 'Agency Finder',
    description: 'Find the type of agencies that match a user profile and prepare a strategy.'
  },
  {
    id: 'portfolio-builder',
    name: 'Portfolio Builder',
    description: 'Build an agency-ready model portfolio structure.'
  },
  {
    id: 'casting-simulator',
    name: 'Casting Simulator',
    description: 'Practice casting questions, self-introduction and confident answers.'
  },
  {
    id: 'style-advisor',
    name: 'Style Advisor',
    description: 'Get modelling style, grooming, outfit and photo styling advice.'
  },
  {
    id: 'contract-helper',
    name: 'Contract Helper',
    description: 'Understand contract red flags, image rights, exclusivity and fees.'
  }
]

export default function FunctionalTools() {
  const [tool, setTool] = useState('agency-email')
  const [direction, setDirection] = useState('Natural Appeal')
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const activeTool = tools.find((item) => item.id === tool) || tools[0]

  async function runTool() {
    if (!input.trim()) return

    setLoading(true)
    setError('')
    setAnswer('')

    try {
      const res = await fetch('/api/tools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tool,
          direction,
          input,
          extra: {
            app: 'NextFace AI OS',
            creator: 'Djibril Julien Bourouno'
          }
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Tool request failed')
      }

      setAnswer(data.answer)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          Functional AI Tools
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Real tools, not just buttons.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          Choose a tool, enter the client information, and NextFace AI OS
          generates a real result: emails, plans, strategy, portfolio structure,
          casting practice or contract analysis.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <h3 className="mb-5 text-2xl font-black text-white">
            Choose function
          </h3>

          <div className="grid gap-3">
            {tools.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setTool(item.id)
                  setAnswer('')
                  setError('')
                }}
                className={`rounded-2xl border p-4 text-left transition ${
                  tool === item.id
                    ? 'border-white bg-white text-black'
                    : 'border-white/10 bg-black/30 text-white hover:border-white/30'
                }`}
              >
                <p className="font-black">{item.name}</p>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    tool === item.id ? 'text-black/65' : 'text-white/50'
                  }`}
                >
                  {item.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <div className="mb-5">
            <p className="text-sm text-white/40">Selected tool</p>
            <h3 className="text-3xl font-black text-white">
              {activeTool.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/50">
              {activeTool.description}
            </p>
          </div>

          {tool === 'program-90' && (
            <div className="mb-5 rounded-3xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm font-bold text-white">
                90-Day direction
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setDirection('Natural Appeal')}
                  className={`rounded-2xl px-5 py-3 text-sm font-bold ${
                    direction === 'Natural Appeal'
                      ? 'bg-white text-black'
                      : 'border border-white/10 bg-black/30 text-white'
                  }`}
                >
                  Natural Appeal
                </button>

                <button
                  onClick={() => setDirection('Masculine Edge')}
                  className={`rounded-2xl px-5 py-3 text-sm font-bold ${
                    direction === 'Masculine Edge'
                      ? 'bg-white text-black'
                      : 'border border-white/10 bg-black/30 text-white'
                  }`}
                >
                  Masculine Edge
                </button>
              </div>
            </div>
          )}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the client profile, goal, agency name, photo situation, contract text, or request..."
            className="min-h-[220px] w-full resize-none rounded-3xl border border-white/10 bg-black/50 p-5 text-white outline-none placeholder:text-white/30"
          />

          <button
            onClick={runTool}
            disabled={loading}
            className="mt-4 rounded-2xl bg-white px-6 py-4 font-bold text-black disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate result'}
          </button>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-200">
              {error}
            </div>
          )}

          {answer && (
            <div className="mt-5 whitespace-pre-wrap rounded-3xl border border-white/10 bg-black/40 p-5 text-sm leading-7 text-white/80">
              {answer}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
