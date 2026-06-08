import Link from 'next/link'
import AIWorkspace from '../../components/AIWorkspace'
import FunctionalTools from '../../components/FunctionalTools'
import ImageAnalyzer from '../../components/ImageAnalyzer'

const featureInfo: Record<string, {
  title: string
  description: string
  type: 'chat' | 'tools' | 'image'
}> = {
  'ai-chat': {
    title: 'AI Chat',
    description: 'Ask anything like ChatGPT or Gemini, with NextFace modelling intelligence.',
    type: 'chat'
  },
  'model-journey': {
    title: '90-Day Model Journey',
    description: 'Build a real 90-day model improvement program with Natural Appeal or Masculine Edge.',
    type: 'tools'
  },
  'deep-research': {
    title: 'Deep Research',
    description: 'Use NextFace AI to prepare research, agency strategy, trends and action plans.',
    type: 'tools'
  },
  'visual-coach': {
    title: 'Visual AI Coach',
    description: 'Upload photos and get practical visual feedback for modelling and portfolio improvement.',
    type: 'image'
  },
  'style-advisor': {
    title: 'Style Advisor',
    description: 'Generate real style, grooming, outfit and model image advice.',
    type: 'tools'
  },
  'agency-match': {
    title: 'Agency Match',
    description: 'Use the agency finder to match a profile with the right type of agencies.',
    type: 'tools'
  },
  'casting-simulation': {
    title: 'Casting Simulation',
    description: 'Practice casting questions, self-introduction and professional answers.',
    type: 'tools'
  },
  'pdf-reports': {
    title: 'PDF Reports',
    description: 'Prepare structured AI reports and portfolio summaries. PDF download comes later.',
    type: 'tools'
  },
  'portfolio-builder': {
    title: 'Portfolio Builder',
    description: 'Build a model portfolio structure, bio, photo order and agency checklist.',
    type: 'tools'
  },
  'media-kit': {
    title: 'Media Kit Generator',
    description: 'Create creator profile text, brand pitch, and media kit structure.',
    type: 'tools'
  },
  'ai-app-builder': {
    title: 'AI App Builder',
    description: 'Plan AI app ideas, features, pricing, branding and launch roadmap.',
    type: 'tools'
  }
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const feature = featureInfo[params.slug] || {
    title: 'NextFace AI Tool',
    description: 'Use a real NextFace AI function below.',
    type: 'tools' as const
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link href="/" className="text-sm text-white/50 hover:text-white">
          ← Back to NextFace AI OS
        </Link>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
              Functional page
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
              NextFace AI OS
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-none tracking-tight md:text-7xl">
            {feature.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            {feature.description}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/40">
            This page is connected to a real AI action. It is not only a locked
            preview. If the AI returns a quota error, the function exists but
            the OpenAI API billing/quota must be fixed.
          </p>
        </div>
      </section>

      {feature.type === 'chat' && <AIWorkspace />}

      {feature.type === 'image' && <ImageAnalyzer />}

      {feature.type === 'tools' && <FunctionalTools />}

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs leading-6 text-white/40">
        Created by Djibril Julien Bourouno · NextFace AI OS · @djibriljulienbouroun
      </footer>
    </main>
  )
}
