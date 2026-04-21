import Link from "next/link"

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-white text-center px-4 scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900">
          Готовы провести безопасную сделку?
        </h2>

        <p className="mt-3 text-gray-600">
          Начните прямо сейчас — это займет 1 минуту
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap">

          {/* основное действие */}
          <Link
            href="/create"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition inline-block"
          >
            Создать сделку
          </Link>

          {/* отзывы */}
          <Link
            href="/reviews"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition inline-block"
          >
            Отзывы
          </Link>

        </div>

      </div>
    </section>
  )
}