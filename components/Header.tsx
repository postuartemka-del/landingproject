"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ЛОГО */}
        <div className="text-xl font-bold text-gray-900">
          Garant<span className="text-green-500">Deal</span>
        </div>

        {/* МЕНЮ */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#deals" className="hover:text-black transition">
            Сделки
          </a>
          <a href="#reviews" className="hover:text-black transition">
            Отзывы
          </a>
          <a href="#steps" className="hover:text-black transition">
            Как это работает
          </a>
        </nav>

        {/* КНОПКА */}
        <a
          href="#create"
          onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("create")
              if (el) el.scrollIntoView({ behavior: "smooth"})
          }}
          className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-lg text-sm font-medium"
        >
          Создать сделку
        </a>

      </div>
    </header>
  )
}