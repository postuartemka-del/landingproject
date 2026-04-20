import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-[#0B0F19] text-white antialiased">

        {/* 🌌 ФОН */}
        <div className="fixed inset-0 -z-10 bg-[#0B0F19]">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-green-500/20 blur-[150px] rounded-full -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        </div>

        {children}
      </body>
    </html>
  )
}