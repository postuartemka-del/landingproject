import Link from "next/link"

type Props = {
  title?: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <section className="pt-28 pb-20 text-center px-4 bg-white">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {title || "Безопасная сделка для Авито"}
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          {subtitle || "Максимальная защита и контроль сделки"}
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">

          {/* СОЗДАТЬ СДЕЛКУ */}
          <Link
            href="/create"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Создать сделку
          </Link>

          {/* ОТЗЫВЫ */}
          <Link
            href="/reviews"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Читать отзывы
          </Link>

        </div>

      </div>
    </section>
  )
}