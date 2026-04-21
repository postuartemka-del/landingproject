import React from "react"

type Props = {
  title?: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <section className="pt-28 pb-20 text-center px-4 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {title || "Безопасная сделка для Авито"}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-gray-600 text-lg">
          {subtitle ||
            "Мы специализируемся только на Авито сделках — это значит максимум контроля и безопасности."}
        </p>

        {/* BENEFITS */}
        <ul className="mt-8 space-y-3 text-sm text-gray-700 text-left max-w-md mx-auto">
          <li>• Всего 1% комиссии — дешевле, чем встроенные решения</li>
          <li>• 100% защита средств до выполнения условий</li>
          <li>• Все договоренности фиксируются заранее</li>
          <li>• Объективное решение споров, без шаблонных ответов</li>
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            Создать сделку
          </button>
        </div>

      </div>
    </section>
  )
}