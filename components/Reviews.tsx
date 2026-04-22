'use client'

import Link from "next/link"
import { Review } from "@/lib/types"

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

              <p className="font-medium text-gray-900">
                {r.name || "Пользователь"}
              </p>

              <p className="text-yellow-400">
                {"★".repeat(r.rating || 5)}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                {r.text || "Отзыв без текста"}
              </p>

              <p className="text-xs text-gray-400 mt-3">
                Недавно
              </p>

            </div>
          ))}
        </div>

        {/* КНОПКИ */}
        <div className="flex gap-4 justify-center mt-10 flex-wrap">

          {/* Читать отзывы */}
          <Link
            href="/#reviews/create#form" // 🔥 ВАЖНО: добавили /
            className="px-6 py-3 rounded-xl bg-white border border-gray-400 text-gray-800 hover:bg-gray-100 transition shadow-sm"
          >
            Читать все отзывы
          </Link>

          {/* Оставить отзыв */}
          <Link
            href="/reviews#form" // 🔥 переходим на страницу + якорь
            className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition inline-block"
          >
            Оставить отзыв
          </Link>

        </div>

      </div>
    </section>
  )
}