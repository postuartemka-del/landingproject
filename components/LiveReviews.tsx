export default function LiveReviews() {
  const reviews = [
    {
      name: "Feshor123",
      text: "Заказывал лендинг у фрилансера, прошло без лишних волнений. Оплата прошла быстро и без проблем.",
    },
    {
      name: "Xoworimal",
      text: "Все гуд, заказывал настройку таргета. Комиссию оплатили 50/50 — удобно. Рекомендую.",
    },
  ]

  return (
    <section className="bg-[#F5F7FA] py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="flex gap-4">

              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-gray-300" />

              {/* CONTENT */}
              <div>
                {/* NAME + STARS */}
                <div className="flex items-center gap-3 mb-1">
                  <p className="font-medium text-gray-900 text-sm">
                    {r.name}
                  </p>
                  <span className="text-yellow-400 text-xs">
                    ★★★★★
                  </span>
                </div>

                {/* TEXT */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.text}
                </p>

                {/* LINK */}
                <button className="text-blue-500 text-xs mt-2 hover:underline">
                  Все отзывы о сервисе →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}