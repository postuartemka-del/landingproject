'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Reviews() {
  const [reviews, setReviews] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section id="reviews" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          Отзывы
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">

              <p className="font-medium text-gray-900">
                {r.name}
              </p>

              <p className="text-yellow-400">
                {"★".repeat(r.rating)}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                {r.text}
              </p>

              <p className="text-xs text-gray-400 mt-3">
                {new Date(r.date).toLocaleDateString()}
              </p>

            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/reviews/create"
            className="bg-green-500 text-white px-6 py-3 rounded-xl"
          >
            Оставить отзыв
          </Link>
        </div>

      </div>
    </section>
  )
}