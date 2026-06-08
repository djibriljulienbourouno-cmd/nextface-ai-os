'use client'

import { useState } from 'react'

export default function ImageAnalyzer() {
  const [image, setImage] = useState('')
  const [preview, setPreview] = useState('')
  const [goal, setGoal] = useState('model portfolio improvement')
  const [notes, setNotes] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image.')
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const result = String(reader.result || '')
      setImage(result)
      setPreview(result)
      setError('')
      setAnswer('')
    }

    reader.readAsDataURL(file)
  }

  async function analyzeImage() {
    if (!image) {
      setError('Upload an image first.')
      return
    }

    setLoading(true)
    setError('')
    setAnswer('')

    try {
      const res = await fetch('/api/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image,
          goal,
          notes
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Image analysis failed')
      }

      setAnswer(data.answer)
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong'

      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
          Image Upload Analyzer
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Upload a photo and get real portfolio feedback.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          NextFace AI OS can analyze a model photo for pose, lighting,
          expression, outfit, grooming, portfolio value and agency-readiness.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <h3 className="text-2xl font-black text-white">Upload photo</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-5 w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white"
          />

          {preview && (
            <img
              src={preview}
              alt="Uploaded preview"
              className="mt-5 max-h-[420px] w-full rounded-3xl border border-white/10 object-cover"
            />
          )}

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-white/40">
            Best uploads: clear face photo, full-body photo, natural light,
            simple outfit, no heavy filters, clean background.
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <h3 className="text-2xl font-black text-white">
            Analysis settings
          </h3>

          <label className="mt-5 block text-sm font-bold text-white/70">
            Goal
          </label>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 p-4 text-white outline-none"
          >
            <option value="model portfolio improvement">
              Model portfolio improvement
            </option>
            <option value="agency submission photo">
              Agency submission photo
            </option>
            <option value="casting preparation">
              Casting preparation
            </option>
            <option value="style and grooming feedback">
              Style and grooming feedback
            </option>
            <option value="social media / creator image">
              Social media / creator image
            </option>
          </select>

          <label className="mt-5 block text-sm font-bold text-white/70">
            Notes
          </label>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Example: I want to know if this photo is good for agencies, what to improve, and what photos I should take next."
            className="mt-2 min-h-[150px] w-full resize-none rounded-3xl border border-white/10 bg-black/50 p-5 text-white outline-none placeholder:text-white/30"
          />

          <button
            onClick={analyzeImage}
            disabled={loading}
            className="mt-4 rounded-2xl bg-white px-6 py-4 font-bold text-black disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze image'}
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
        </div>
      </div>
    </section>
  )
}
