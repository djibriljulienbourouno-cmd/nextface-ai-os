import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const message = String(body?.message || '')

    if (!message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is missing in Vercel Environment Variables.' },
        { status: 500 }
      )
    }

    const response = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: [
        {
          role: 'system',
          content:
            'You are NextFace AI OS, an ethical AI assistant for models and creators. Give practical, safe, professional advice. For skincare or health topics, say it is not medical advice and recommend a professional for persistent issues. If current facts are needed, tell the user that live research should be used.'
        },
        {
          role: 'user',
          content: message
        }
      ]
    })

    return NextResponse.json({
      answer: response.output_text || 'No answer generated.'
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Chat route failed' },
      { status: 500 }
    )
  }
}
