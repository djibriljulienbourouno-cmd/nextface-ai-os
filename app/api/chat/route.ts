import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const message = String(body?.message || '')

    if (!message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is missing in Vercel Environment Variables.' },
        { status: 500 }
      )
    }

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are NextFace AI OS, an ethical AI assistant for models and creators. Give practical, safe, professional advice. Help with modeling, portfolio, casting preparation, style, grooming, confidence, and career decisions. For skincare, health, or medical topics, clearly say it is not medical advice and recommend a dermatologist or qualified professional for persistent issues. Do not promise guaranteed results.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7
    })

    const answer =
      response.choices?.[0]?.message?.content || 'No answer generated.'

    return NextResponse.json({ answer })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Chat route failed'

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
