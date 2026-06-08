import Link from 'next/link'

const featureLinks = [
  {
    title: 'AI Chat',
    href: '/features/ai-chat',
    plan: 'Free limited'
  },
  {
    title: '90-Day Model Journey',
    href: '/features/model-journey',
    plan: 'Pro'
  },
  {
    title: 'Deep Research',
    href: '/features/deep-research',
    plan: 'Pro'
  },
  {
    title: 'Visual AI Coach',
    href: '/features/visual-coach',
    plan: 'Pro'
  },
  {
    title: 'Style Advisor',
    href: '/features/style-advisor',
    plan: 'Starter / Pro'
  },
  {
    title: 'Agency Match',
    href: '/features/agency-match',
    plan: 'Pro'
  },
  {
    title: 'Casting Simulation',
    href: '/features/casting-simulation',
    plan: 'Pro'
  },
  {
    title: 'PDF Reports',
    href: '/features/pdf-reports',
    plan: 'Pro'
  },
  {
    title: 'Portfolio Builder',
    href: '/features/portfolio-builder',
    plan: 'Premium'
  },
  {
    title: 'Media Kit Generator',
    href: '/features/media-kit',
    plan: 'Premium'
  },
  {
    title: 'AI App Builder',
    href: '/features/ai-app-builder',
    plan: 'Premium'
  }
]

export default function FeatureLinks() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
          Open every NextFace AI OS tool
        </h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Free users can access the AI chat with limits. Advanced tools are prepared and will be unlocked after payment.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureLinks.map((feature) => (
          <Link
            key={feature.href}
            href={feature.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-black text-white">
                {feature.title}
              </h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                {feature.plan}
              </span>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Open tool →
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
