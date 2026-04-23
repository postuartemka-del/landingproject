"use client"

import { useEffect, useState } from "react"

export default function Deals({ deals = [] }: { deals?: any[] }) {
  const [localDeals, setLocalDeals] = useState<any[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("deals")

    if (saved) {
      setLocalDeals(JSON.parse(saved))
    } else if (Array.isArray(deals) && deals.length > 0) {
      setLocalDeals(deals)
    } else {
      setLocalDeals([
        { title: "Разработка сайта", amount: "$1200" },
        { title: "Покупка аккаунта", amount: "$300" },
        { title: "Дизайн лендинга", amount: "$850" },
      ])
    }
  }, [deals])

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Последние сделки
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {localDeals.map((deal, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-500 mb-2">
                {deal.title || "Сделка"}
              </p>

              <p className="text-xl font-bold text-green-500">
                {deal.amount || "$0"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}