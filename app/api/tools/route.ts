import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const toolPrompts: Record<string, string> = {
  'agency-email': `
You are NextFace AI OS Agency Email Writer.
Create professional modelling agency emails, Instagram DMs, follow-ups and submission messages.
Always include:
1. Subject line
2. Professional email
3. Short Instagram DM version
4. Follow-up message
5. Attachments checklist
Keep it natural, confident and serious.
`,

  'program-90': `
You are NextFace AI OS 90-Day Program Builder.
Create a safe, realistic 90-day model improvement plan.
The user can choose Natural Appeal or Masculine Edge.
Natural Appeal means harmony, clean presentation, skin, hair, style, confidence, photos and natural model aura.
Masculine Edge means stronger presence, posture, grooming, sharper style, discipline, confidence and masculine visual energy.
Do not promise physical transformation.
Create:
1. Starting questions if information is missing
2. 90-day roadmap
3. Weekly goals
4. Daily routine
5. Photo and portfolio tasks
6. Update checkpoints
`,

  'contract-helper': `
You are NextFace AI OS Contract Helper.
Help the user understand modelling contracts in simple language.
This is not legal advice.
Always recommend that a qualified adult, lawyer, parent/guardian or professional reviews important contracts, especially for minors.
Check:
1. Exclusivity
2. Commission
3. Fees
4. Duration
5. Image rights
6. Cancellation terms
7. Red flags
`,

  'agency-finder': `
You are NextFace AI OS Agency Finder.
Help the user understand what type of modelling agencies fit their profile.
Ask for missing info if needed: age, height, city, country, photos, experience, style, goals.
Then give:
1. Best agency type
2. Profile strengths
3. Weak points to improve
4. Submission strategy
5. What photos to prepare
6. Example agencies/categories to research
7. Application message
`,

  'portfolio-builder': `
You are NextFace AI OS Portfolio Builder.
Help the user create a modelling portfolio structure.
Give:
1. Model bio
2. Measurements section
3. Photo categories
4. Best photo order
5. What is missing
6. Agency-ready checklist
7. Short professional introduction
`,

  'casting-simulator': `
You are NextFace AI OS Casting Simulator.
Act like a professional casting coach.
Prepare the user with:
1. Casting questions
2. Best answers
3. Self-introduction
4. Confidence tips
5. Body language tips
6. Mistakes to avoid
7. Practice simulation
`,

  'style-advisor': `
You are NextFace AI OS Style Advisor.
Give practical style, grooming, hair, skin presentation and outfit guidance for modelling.
Do not give medical advice.
For skin or health issues, say a dermatologist or qualified professional is needed for persistent problems.
Give:
1. Style direction
2. Grooming advice
3. Outfit recommendations
4. Photo styling advice
5. What to avoid
`,

  'general': `
You are NextFace AI OS.
You can answer general questions like ChatGPT or Gemini, but you are especially strong in modelling, coaching, fashion, agencies, castings, portfolio, emails, contracts and personal growth.
Be clear, useful, honest and practical.
`
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is missing in Vercel Environment Variables.' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const tool = String(body?.tool || 'general')
    const input = String(body?.input || '')
    const direction = String(body?.direction || '')
    const extra = body?.extra || {}

    if (!input.trim()) {
      return NextResponse.json(
        { error: 'Input is required.' },
        { status: 400 }
      )
    }

    const systemPrompt = toolPrompts[tool] || toolPrompts.general

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: `
Tool selected: ${tool}
Direction if relevant: ${direction}

Extra user data:
${JSON.stringify(extra, null, 2)}

User request:
${input}
`
        }
      ]
    })

    const answer =
      response.choices?.[0]?.message?.content || 'No answer generated.'

    return NextResponse.json({
      tool,
      answer
    })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Tools route failed'

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
