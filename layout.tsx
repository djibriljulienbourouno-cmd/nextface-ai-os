import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextFace AI OS by Djibril Julien Bourouno',
  description: 'Independent AI workspace for modelling, style, portfolio growth, research-backed advice, and career readiness. Created by Djibril Julien Bourouno.',
  authors: [{ name: 'Djibril Julien Bourouno' }],
  creator: 'Djibril Julien Bourouno',
  publisher: 'NextFace AI OS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
