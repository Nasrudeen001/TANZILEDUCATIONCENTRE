import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Tanzil Education Centre',
  description: 'An integrated institution providing quality education through Competence Based Education, Tahfidh (Quran Memorization), Talim (Religious Education), and Computer Classes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Tanzil Logo.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-900 text-white antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
