import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { data } from '@/lib/data'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: data.seo?.title || 'SecureDeal — Безопасные сделки',
  description:
    data.seo?.description || 'Безопасные сделки с комиссией всего 1%',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-black text-white antialiased">
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
    {children}
  </div>
</body>
    </html>
  )
}