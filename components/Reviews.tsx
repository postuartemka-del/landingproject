'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface ReviewsProps {
  reviews: Awaited<ReturnType<typeof getReviews>>
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews({ reviews }: { reviews: any[] }) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Отзывы</h2>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <p className="text-white">{review.text}</p>
              <span className="text-gray-400 text-sm">
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}