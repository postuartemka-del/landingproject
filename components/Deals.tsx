"use client"

import { useEffect, useState } from "react"

const baseDeals = [
  { title: "Ютуб-канал", amount: 255, icon: "▶️" },
  { title: "Крипто-сделки", amount: 430, icon: "₿" },
  { title: "Instagram паблик", amount: 110, icon: "📸" },
  { title: "Домены", amount: 590, icon: "🌍" },
  { title: "Онлайн-бизнес", amount: 340, icon: "💼" },
]

export default function Deals() {
  const [deals, setDeals] = useState<any[]>([])

  useEffect(() => {
    // стартовые
    setDeals(
      Array.from({ length: 6 }).map(() => randomDeal())
    )

    // каждые 3 сек новая сделка
    const interval = setInterval(() => {
      setDeals((prev) => {
        const updated = [randomDeal(), ...prev]
        return updated.slice(0, 9)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  function randomDeal() {
    const item = baseDeals[Math.floor(Math.random() * baseDeals.length)]
    return {
      ...item,
      amount: `$${Math.floor(Math.random() * 1000 + 50)}`,
      id: Math.random(),
    }
  }

  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-10 text-gray-900">
          Последние сделки
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm animate-fadeIn"
            >
              <div className="flex justify-between mb-3">
                <span>{deal.icon}</span>
                <span className="text-xs text-gray-400">только что</span>
              </div>

              <p className="text-gray-900 font-medium">{deal.title}</p>
              <p className="text-gray-400 text-xs">Сумма сделки</p>

              <p className="text-lg font-semibold">{deal.amount}</p>

              <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                ● Успешно
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}