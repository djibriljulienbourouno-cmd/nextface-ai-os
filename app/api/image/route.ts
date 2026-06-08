import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is missing in Vercel Environment Variables.' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const image = String(body?.image || '')
    const goal = String(body?.goal || 'model portfolio improvement')
    const notes = String(body?.notes || '')

    if (!image.startsWith('data:image/')) {
      return NextResponse.json(
        { error: 'A valid image is required.' },
        { status: 400 }
      )
    }

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.6,
      messages: [
        {
          role: 'system',
          content:
            'You are NextFace AI OS Image Analyzer. Analyze model photos professionally and safely. Focus on photo quality, lighting, pose, expression, outfit, grooming, portfolio value, agency-readiness, and next steps. Do not identify the person. Do not make medical claims. Be honest but respectful. Give practical improvements.'
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Analyze this image for: ${goal}

Extra notes from user:
${notes}

Return:
1. Overall photo score /100
2. Portfolio value
3. Pose and posture analysis
4. Face expression and presence
5. Lighting and background
6. Outfit and grooming
7. Agency-readiness
8. What to improve
9. Exact next photos the user should take
10. Final action plan`
            },
            {
              type: 'image_url',
              image_url: {
                url: image
              }
            }
          ]
        }
      ]
    })

    const answer =
      response.choices?.[0]?.message?.content || 'No image analysis generated.'

    return NextResponse.json({ answer })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Image analysis failed'

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
