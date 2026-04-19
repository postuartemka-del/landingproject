import { Review } from '@/lib/data'

interface ReviewsProps {
  reviews: Review[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? '⭐' : '☆'}</span>
      ))}
    </div>
  )
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Отзывы клиентов
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded-xl border border-white/10 bg-white/5"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{review.text}</p>

            <StarRating rating={review.rating} />
          </div>
        ))}
      </div>
    </section>
  )
}