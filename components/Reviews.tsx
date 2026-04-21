'use client'

import Link from "next/link"

type Review = {
  name: string
  text: string
  rating?: number
  date?: string
}

export default function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  return (
    <section id="reviews" className="py-20 bg-[#F5F7FA] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Отзывы
          </h2>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm">
            ⭐ <span className="font-semibold">9.5</span>
            <span className="text-gray-500">Средняя оценка</span>
          </div>
        </div>

        {/* СПИСОК */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-medium text-gray-900">{r.name}</p>
              <p className="text-yellow-400">
                {"★".repeat(r.rating || 5)}
              </p>
              <p className="text-sm text-gray-600 mt-2">{r.text}</p>
              <p className="text-xs text-gray-400 mt-3">
                {r.date || "Недавно"}
              </p>
            </div>
          ))}
        </div>

        {/* КНОПКИ */}
        <div className="flex gap-4 justify-center mt-10 flex-wrap">

          {/* Читать отзывы (остаться на странице) */}
          <Link href="#reviews">
            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
              Читать все отзывы
            </button>
          </Link>

          {/* Оставить отзыв (другой лендинг) */}
          <Link href="/reviews">
            <button className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition">
              Оставить отзыв
            </button>
          </Link>

        </div>

      </div>
    </section>
  )
}