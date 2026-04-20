"use client"

import { useState } from "react"

export default function CreateDeal() {
  const [amount, setAmount] = useState(100)

  return (
    <section id="create" className="bg-[#0B0F19] py-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white text-black rounded-3xl p-10 shadow-xl">

          <h2 className="text-2xl font-semibold mb-6">
            Создать безопасную сделку
          </h2>

          {/* INPUT */}
          <div className="mb-6">
            <label className="text-sm text-gray-500">
              Сумма сделки: ${amount}
            </label>

            <input
              type="range"
              min="50"
              max="5000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          {/* INPUTS */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              placeholder="Ваш Telegram"
              className="p-3 border rounded-xl w-full"
            />
            <input
              placeholder="Описание сделки"
              className="p-3 border rounded-xl w-full"
            />
          </div>

          {/* CTA */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition py-3 rounded-xl font-medium">
            Оформить сделку
          </button>

          {/* TRUST */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            🔒 Ваши данные защищены. Безопасная сделка через гаранта.
          </p>

        </div>
      </div>
    </section>
  )
}