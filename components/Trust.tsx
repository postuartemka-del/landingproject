"use client"

export default function Trust() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ЗАГОЛОВОК */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-14">
          Почему стоит доверять нам
        </h2>

        {/* КАРТОЧКА */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* ЛЁГКИЙ ГРАДИЕНТ ФОН */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-50/40 via-transparent to-green-50/40 pointer-events-none" />

          {/* ITEM */}
          <div className="flex items-center gap-4 text-left group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                С 2014 года на рынке
              </p>
              <p className="text-sm text-gray-500">
                Репутация, подтвержденная годами
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px h-10 bg-gray-200" />

          {/* ITEM */}
          <div className="flex items-center gap-4 text-left group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                Нас знают оффлайн
              </p>
              <p className="text-sm text-gray-500">
                Конференции и мероприятия
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px h-10 bg-gray-200" />

          {/* ITEM */}
          <div className="flex items-center gap-4 text-left group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                Безопасные сделки
              </p>
              <p className="text-sm text-gray-500">
                Защита продавца и покупателя
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}