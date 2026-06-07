import { NextRequest, NextResponse } from 'next/server'
import { createMockResearchAnswer, needsLiveResearch } from '@/lib/research'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const query = String(body?.query || '')

    if (!query.trim()) {
      return NextResponse.json({ error: 'Missing query' }, { status: 400 })
    }

    // MVP behavior:
    // This route returns the complete evidence structure.
    // Production behavior:
    // Connect Tavily, Brave Search, SerpAPI, Bing Search, or another web search provider here.
    // Never expose API keys on the client.
    const answer = createMockResearchAnswer(query)

    return NextResponse.json({
      ...answer,
      requiresLiveResearch: needsLiveResearch(query),
      implementationStatus: 'MVP mock. Add a real web search API key for live internet results.'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Research route failed' }, { status: 500 })
  }
}
