import Link from "next/link"

export default function Reviews({ reviews = [] }: any) {
  return (
    <section
      id="reviews"
      className="bg-[#F5F7FA] py-20 scroll-mt-24"
    >
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

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {Array.isArray(reviews) &&
            reviews.map((review: any, i: number) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                {/* USER */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    👤
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">
                      {review.name}
                    </p>
                    <div className="text-yellow-400 text-sm">
                      ★★★★★
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {review.text}
                </p>

                {/* DATE */}
                <p className="text-xs text-gray-400">
                  {review.date}
                </p>
              </div>
            ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center mt-10 flex-wrap">

          {/* Читать отзывы */}
          <Link href="#reviews" scroll>
            <button className="px-6 py-3 rounded-xl border border-red-400 text-red-500 hover:bg-red-50 transition">
              Читать все отзывы
            </button>
          </Link>

          {/* Оставить отзыв */}
          <Link href="#cta" scroll>
            <button className="px-6 py-3 rounded-xl border border-green-500 text-green-600 hover:bg-green-50 transition">
              Оставить отзыв
            </button>
          </Link>

        </div>

      </div>
    </section>
  )
}