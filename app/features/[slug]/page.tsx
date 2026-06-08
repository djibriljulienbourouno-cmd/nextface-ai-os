import Link from 'next/link'

const features: Record<string, {
  title: string
  status: string
  plan: string
  description: string
  items: string[]
}> = {
  'ai-chat': {
    title: 'AI Chat',
    status: 'Free limited access',
    plan: 'Free',
    description: 'Talk with NextFace AI OS for modelling, style, confidence, portfolio and creator strategy advice.',
    items: [
      'Ask modelling questions',
      'Get grooming and style guidance',
      'Receive career direction',
      'Limited free usage before upgrade'
    ]
  },
  'model-journey': {
    title: '90-Day Model Journey',
    status: 'Locked',
    plan: 'Pro',
    description: 'A structured 90-day program to improve your model profile, confidence, routine and casting preparation.',
    items: [
      'Weekly goals',
      'Daily discipline tracker',
      'Progress checkpoints',
      'Personal improvement roadmap'
    ]
  },
  'deep-research': {
    title: 'Deep Research',
    status: 'Locked',
    plan: 'Pro',
    description: 'Research agencies, castings, trends, brands and opportunities with structured reports.',
    items: [
      'Agency research',
      'Casting opportunity analysis',
      'Brand positioning',
      'Source-based research reports'
    ]
  },
  'visual-coach': {
    title: 'Visual AI Coach',
    status: 'Locked',
    plan: 'Pro',
    description: 'Analyze photos, posing, skin quality, outfit balance and portfolio direction.',
    items: [
      'Photo feedback',
      'Pose suggestions',
      'Portfolio improvement',
      'Visual presentation coaching'
    ]
  },
  'style-advisor': {
    title: 'Style Advisor',
    status: 'Locked',
    plan: 'Starter / Pro',
    description: 'Get outfit, grooming, skin quality and model image advice based on your goals.',
    items: [
      'Outfit direction',
      'Skin quality tips',
      'Hair and grooming advice',
      'Model image improvement'
    ]
  },
  'agency-match': {
    title: 'Agency Match',
    status: 'Locked',
    plan: 'Pro',
    description: 'Find agencies that fit your profile, height, look, location and modelling goals.',
    items: [
      'Agency matching',
      'Profile positioning',
      'Submission preparation',
      'Casting readiness'
    ]
  },
  'casting-simulation': {
    title: 'Casting Simulation',
    status: 'Locked',
    plan: 'Pro',
    description: 'Practice casting questions, runway confidence, introduction and professional communication.',
    items: [
      'Casting questions',
      'Self-introduction practice',
      'Confidence training',
      'Professional response coaching'
    ]
  },
  'pdf-reports': {
    title: 'PDF Reports',
    status: 'Locked',
    plan: 'Pro',
    description: 'Generate professional reports for your progress, modelling plan and portfolio improvement.',
    items: [
      'Monthly reports',
      'Portfolio report',
      'Improvement checklist',
      'Downloadable PDF summary'
    ]
  },
  'portfolio-builder': {
    title: 'Portfolio Builder',
    status: 'Locked',
    plan: 'Premium',
    description: 'Build a clean model portfolio structure with photos, measurements, bio and contact details.',
    items: [
      'Model bio',
      'Photo categories',
      'Measurements section',
      'Agency-ready structure'
    ]
  },
  'media-kit': {
    title: 'Media Kit Generator',
    status: 'Locked',
    plan: 'Premium',
    description: 'Create a professional media kit for creator deals, modelling opportunities and brand outreach.',
    items: [
      'Creator profile',
      'Stats section',
      'Brand pitch',
      'Professional presentation'
    ]
  },
  'ai-app-builder': {
    title: 'AI App Builder',
    status: 'Locked',
    plan: 'Premium',
    description: 'Plan and structure AI app ideas with branding, features, pricing and launch strategy.',
    items: [
      'App idea builder',
      'Feature planning',
      'Pricing strategy',
      'Launch roadmap'
    ]
  }
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const feature = features[params.slug] || {
    title: 'Feature',
    status: 'Coming soon',
    plan: 'Locked',
    description: 'This feature page is being prepared inside NextFace AI OS.',
    items: [
      'Feature page created',
      'Access system ready',
      'Payment lock coming soon',
      'Full function coming soon'
    ]
  }

  const isFree = feature.plan === 'Free'

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Back to NextFace AI OS
        </Link>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
              {feature.status}
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              Plan: {feature.plan}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            {feature.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            {feature.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {feature.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">
            {isFree ? (
              <>
                <h2 className="text-xl font-bold">Free access enabled</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  This feature is available in the free version with usage limits. The next step is connecting the real usage counter.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
                >
                  Start using it
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">Upgrade required</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  This feature is prepared, but it will be unlocked only after payment once Stripe is connected.
                </p>
                <Link
                  href="/#pricing"
                  className="mt-4 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-black"
                >
                  View pricing
                </Link>
              </>
            )}
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-white/40">
          Created by Djibril Julien Bourouno · NextFace AI OS
        </p>
      </div>
    </main>
  )
}
