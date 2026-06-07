export type SourceQuality = 'official' | 'trusted_media' | 'commercial' | 'social' | 'low_confidence'

export type EvidenceSource = {
  title: string
  url: string
  publisher?: string
  quality: SourceQuality
  checkedAt: string
  summary: string
}

export type ResearchAnswer = {
  query: string
  requiresLiveResearch: boolean
  lastChecked: string
  confidence: 'high' | 'medium' | 'low'
  reasoningSummary: string[]
  verifiedAnswer: string
  warnings: string[]
  sources: EvidenceSource[]
  nextActions: string[]
}

export function needsLiveResearch(input: string) {
  const volatileKeywords = [
    'agency', 'agencies', 'casting', 'castings', 'price', 'prices', 'cost',
    'near me', 'open', 'today', 'tomorrow', 'current', 'latest', 'trend',
    'store', 'product', 'location', 'address', 'law', 'rules', 'deadline',
    'competition', 'vote', 'model contest', 'skincare product'
  ]
  return volatileKeywords.some((word) => input.toLowerCase().includes(word))
}

export function classifySourceQuality(url: string): SourceQuality {
  const clean = url.toLowerCase()
  if (clean.includes('.gov') || clean.includes('.edu') || clean.includes('official') || clean.includes('vercel.com') || clean.includes('openai.com')) return 'official'
  if (clean.includes('bbc.') || clean.includes('reuters.') || clean.includes('apnews.') || clean.includes('lemonde.') || clean.includes('nytimes.')) return 'trusted_media'
  if (clean.includes('instagram.') || clean.includes('tiktok.') || clean.includes('x.com') || clean.includes('twitter.')) return 'social'
  if (clean.includes('shop') || clean.includes('amazon') || clean.includes('sephora') || clean.includes('zalando')) return 'commercial'
  return 'low_confidence'
}

export function createMockResearchAnswer(query: string): ResearchAnswer {
  const checkedAt = new Date().toISOString().slice(0, 10)
  return {
    query,
    requiresLiveResearch: needsLiveResearch(query),
    lastChecked: checkedAt,
    confidence: needsLiveResearch(query) ? 'medium' : 'high',
    reasoningSummary: [
      'The system first decides whether the answer depends on current information.',
      'If current facts are needed, production should call a web search provider and compare multiple sources.',
      'The final answer should separate verified facts, assumptions, warnings, and next actions.'
    ],
    verifiedAnswer: 'This MVP includes the evidence workflow and UI. In production, connect a web search API such as Tavily, Brave Search, SerpAPI, or another approved provider, then pass summarized sources to the AI response generator.',
    warnings: [
      'Live internet search is a production integration and requires an API key.',
      'Do not claim that agencies, prices, opening hours, castings, skincare products, legal or financial information are verified without sources.',
      'For skincare and wellness concerns, recommend a dermatologist or qualified professional when issues persist.'
    ],
    sources: [
      {
        title: 'Production web search provider placeholder',
        url: 'https://example.com/search-provider',
        publisher: 'NextFace AI OS',
        quality: 'low_confidence',
        checkedAt,
        summary: 'Placeholder source card showing where real citations should appear after a live search integration.'
      }
    ],
    nextActions: [
      'Add server-side API route for web search.',
      'Store research logs with user consent.',
      'Show citations and source quality in every research-backed answer.'
    ]
  }
}

export async function runProductionResearch(query: string): Promise<ResearchAnswer> {
  // Production idea:
  // 1. Detect if query requires live research.
  // 2. Call a web search API from a server route.
  // 3. Extract title, URL, publisher, snippet, and date.
  // 4. Classify source quality.
  // 5. Ask the AI model to answer only using sources.
  // 6. Return citations, confidence, warnings, and next actions.
  return createMockResearchAnswer(query)
}
