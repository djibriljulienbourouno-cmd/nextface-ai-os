'use client'

import { useState } from 'react'

const modes = [
  {
    id: 'general',
    name: 'General AI',
    tag: 'Ask anything',
    description:
      'A general AI assistant like ChatGPT or Gemini, but with NextFace style and professional guidance.'
  },
  {
    id: 'model-coach',
    name: 'Model Coach',
    tag: 'Modelling',
    description:
      'Coaching for confidence, casting, posture, routine, presentation, discipline and model growth.'
  },
  {
    id: 'agency-finder',
    name: 'Agency Finder',
    tag: 'Agencies',
    description:
      'Find agencies that match your profile and prepare a stronger submission strategy.'
  },
  {
    id: 'email-writer',
    name: 'Agency Email Writer',
    tag: 'Emails',
    description:
      'Write professional emails, agency messages, Instagram DMs, follow-ups and applications.'
  },
  {
    id: 'online-research',
    name: 'Online Research',
    tag: 'Sources',
    description:
      'Research fashion news, agencies, castings, trends and opportunities with source-based answers.'
  },
  {
    id: 'image-analyzer',
    name: 'Image Analyzer',
    tag: 'Photos',
    description:
      'Analyze photos, portfolio quality, posing, lighting, outfit, expression and model potential.'
  },
  {
    id: 'contract-helper',
    name: 'Contract Helper',
    tag: 'Safety',
    description:
      'Understand model contracts, red flags, exclusivity, image rights, fees and professional risks.'
  },
  {
    id: 'program-90',
    name: '90-Day Program',
    tag: 'Transformation',
    description:
      'Build a 90-day plan to maximize your model potential with weekly goals and updates.'
  }
]

const quickPrompts: Record<string, string[]> = {
  general: [
    'Explain how I can improve my life and modelling career this month.',
    'Give me a clear plan to become more disciplined.',
    'What should I focus on this week?'
  ],
  'model-coach': [
    'Create a model improvement plan for me.',
    'Help me prepare for a casting.',
    'Give me posture, confidence and portfolio advice.'
  ],
  'agency-finder': [
    'Help me find agencies that match my profile.',
    'What information do I need before applying to agencies?',
    'Create an agency submission strategy for me.'
  ],
  'email-writer': [
    'Write a professional email to a modelling agency.',
    'Write a short Instagram DM to a scout.',
    'Write a follow-up message after applying to an agency.'
  ],
  'online-research': [
    'Research current modelling trends and explain what matters.',
    'Find what kind of profiles agencies are looking for now.',
    'Give me a fashion industry update with sources.'
  ],
  'image-analyzer': [
    'Tell me what kind of photos I should upload for analysis.',
    'Create a photo audit checklist for my portfolio.',
    'Explain how to improve my posing, lighting and outfit choices.'
  ],
  'contract-helper': [
    'Explain what I should check before signing a modelling contract.',
    'What are red flags in agency contracts?',
    'Help me understand image rights and exclusivity.'
  ],
  'program-90': [
    'Create my 90-day model improvement program.',
    'Build a 90-day plan for Natural Appeal.',
    'Build a 90-day plan for Masculine Edge.'
  ]
}

export default function AIWorkspace() {
  const [mode, setMode] = useState('general')
  const [direction, setDirection] = useState('Natural Appeal')
  const [message, setMessage] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const activeMode = modes.find((item) => item.id === mode) || modes[0]

  function buildPrompt() {
    let systemContext = ''

    if (mode === 'general') {
      systemContext =
        'You are NextFace AI OS. Answer any question clearly like a general AI assistant, but keep a professional, strategic and practical tone.'
    }

    if (mode === 'model-coach') {
      systemContext =
        'You are a modelling coach. Give practical advice about modelling, confidence, posing, grooming, style, portfolio, castings and professional growth.'
    }

    if (mode === 'agency-finder') {
      systemContext =
        'You are an agency matching assistant. Ask for missing profile details, then suggest the type of agencies that fit the user, explain why, and prepare an agency submission plan.'
    }

    if (mode === 'email-writer') {
      systemContext =
        'You are an agency communication assistant. Write professional emails, letters, DMs and follow-ups for modelling agencies. Keep the writing natural, confident and serious.'
    }

    if (mode === 'online-research') {
      systemContext =
        'You are a fashion and modelling research assistant. When current facts are needed, explain that online research and sources should be used. Give structured research-style answers and mention what sources should be checked.'
    }

    if (mode === 'image-analyzer') {
      systemContext =
        'You are a model image analysis assistant. Analyze portfolio quality, posing, lighting, outfit, expression, grooming and presentation. If no image is uploaded, ask the user to upload photos and explain what kind of photos are needed.'
    }

    if (mode === 'contract-helper') {
      systemContext =
        'You are a contract safety assistant for modelling. Explain contracts in simple language, point out red flags, but always say this is not legal advice and that a qualified adult, lawyer or professional should review important contracts.'
    }

    if (mode === 'program-90') {
      systemContext =
        `You are a 90-day model transformation coach. Before building the plan, ask the user to choose a direction: Natural Appeal or Masculine Edge. The current chosen direction is ${direction}. Natural Appeal means harmony, natural beauty, skin, hair, style, confidence and clean presentation. Masculine Edge means stronger presence, posture, grooming, sharper style, discipline, confidence and more masculine visual energy. Do not promise physical transformation. Focus on safe, realistic, professional improvement.`
    }

    return `${systemContext}

User selected mode: ${activeMode.name}
90-Day direction if relevant: ${direction}

User message:
${message}`
  }

  async function sendMessage() {
    if (!message.trim()) return

    setLoading(true)
    setError('')
    setAnswer('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: buildPrompt(),
          mode,
          direction
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Request failed')
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
          NextFace AI Workspace
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          One AI system for modelling, coaching, research, agencies, contracts
          and personal growth.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          NextFace AI OS is built to be an independent AI workspace. It can
          answer general questions, help with modelling strategy, write agency
          emails, prepare casting plans, guide your 90-day program and help you
          improve your presentation step by step.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <div className="mb-5">
            <h3 className="text-2xl font-black text-white">Choose AI mode</h3>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Each mode gives the AI a different mission. General AI answers
              anything. Specialist modes focus on modelling and career growth.
            </p>
          </div>

          <div className="grid gap-3">
            {modes.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMode(item.id)
                  setAnswer('')
                  setError('')
                }}
                className={`rounded-2xl border p-4 text-left transition ${
                  mode === item.id
                    ? 'border-white bg-white text-black'
                    : 'border-white/10 bg-black/30 text-white hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black">{item.name}</p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      mode === item.id
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    mode === item.id ? 'text-black/65' : 'text-white/50'
                  }`}
                >
                  {item.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-white/40">Active mode</p>
              <h3 className="text-3xl font-black text-white">
                {activeMode.name}
              </h3>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
              Free limited
            </span>
          </div>

          {mode === 'program-90' && (
            <div className="mb-5 rounded-3xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm font-bold text-white">
                Choose your 90-day direction
              </p>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Natural Appeal focuses on harmony, clean presentation, skin,
                hair, style and confidence. Masculine Edge focuses on stronger
                presence, posture, sharper grooming, discipline and masculine
                visual energy.
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

          <div className="mb-4 flex flex-wrap gap-2">
            {(quickPrompts[mode] || []).map((prompt) => (
              <button
                key={prompt}
                onClick={() => setMessage(prompt)}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-bold text-white/60 hover:border-white/30 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask NextFace AI OS anything..."
            className="min-h-[190px] w-full resize-none rounded-3xl border border-white/10 bg-black/50 p-5 text-white outline-none placeholder:text-white/30"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="mt-4 rounded-2xl bg-white px-6 py-4 font-bold text-black disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Send to NextFace AI'}
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

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-white/40">
            Next step: online research with citations, image upload analysis,
            saved progress updates, free usage limits and payment unlock.
          </div>
        </div>
      </div>
    </section>
  )
}
