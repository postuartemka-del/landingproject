"use client"

import { useState } from "react"

const faq = [
  {
    q: "Что такое гарант-сервис?",
    a: "Гарант-сервис — это посредник между покупателем и продавцом, который удерживает деньги до выполнения условий сделки.",
  },
  {
    q: "Как проходит сделка?",
    a: "Покупатель переводит деньги, продавец выполняет работу или передает товар, после подтверждения деньги переводятся исполнителю.",
  },
  {
    q: "Можно ли вернуть деньги?",
    a: "Да, если условия сделки не выполнены, вы можете открыть спор и вернуть средства.",
  },
  {
    q: "Какие сделки можно проводить?",
    a: "Фриланс-услуги, цифровые товары, аккаунты, сайты, приложения и многое другое.",
  },
  {
    q: "Какая комиссия?",
    a: "Комиссия зависит от суммы сделки и начинается от фиксированной ставки для небольших сумм.",
  },
]

export default function SeoText() {
  const [open, setOpen] = useState<number | null>(0)

  // 🔥 SCHEMA ДЛЯ GOOGLE
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  }

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4">

        {/* ✅ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Часто задаваемые вопросы
        </h2>

        {/* FAQ */}
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900">
                  {item.q}
                </span>

                <span
                  className={`text-xl transition ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-5 transition-all duration-300 ${
                  open === i
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}