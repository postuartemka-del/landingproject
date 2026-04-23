import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* ЛОГО */}
        <Link href="/" className="font-bold text-lg text-gray-900">
          SafeDeal
        </Link>

        {/* НАВИГАЦИЯ */}
        <div className="flex items-center gap-4">

          <Link
            href="/reviews"
            className="text-gray-600 hover:text-black transition"
          >
            Отзывы
          </Link>

          {/* АДМИНКА */}
          <Link
            href="/admin"
            className="text-gray-600 hover:text-black transition"
          >
            Админка
          </Link>

          {/* СОЗДАТЬ СДЕЛКУ */}
          <Link
            href="/create"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Начать
          </Link>

        </div>

      </div>
    </header>
  )
}