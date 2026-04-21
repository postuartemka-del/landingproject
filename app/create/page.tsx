'use client'

import { useState } from "react"

type Deal = {
  id: string
  title: string
  amount: string
  description: string
  contact: string
  createdAt: string
}

export default function CreateDealPage() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    description: "",
    contact: "",
  })

  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.title || !form.amount || !form.contact) {
      alert("Заполните обязательные поля")
      return
    }

    const newDeal: Deal = {
      id: Date.now().toString(),
      ...form,
      createdAt: new Date().toLocaleString(),
    }

    // сохраняем в localStorage
    const existing = localStorage.getItem("deals")
    const deals = existing ? JSON.parse(existing) : []

    const updated = [newDeal, ...deals]

    localStorage.setItem("deals", JSON.stringify(updated))

    setSuccess(true)

    setForm({
      title: "",
      amount: "",
      description: "",
      contact: "",
    })
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4 py-20">

      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-md">

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Создать сделку
        </h1>

        <p className="text-gray-500 mb-6">
          Заполните данные — мы зафиксируем условия и защитим обе стороны
        </p>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl">
            ✅ Сделка успешно создана
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Название */}
          <input
            type="text"
            placeholder="Название сделки *"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          {/* Сумма */}
          <input
            type="text"
            placeholder="Сумма (₽) *"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          {/* Описание */}
          <textarea
            placeholder="Описание условий сделки"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
            rows={4}
          />

          {/* Контакт */}
          <input
            type="text"
            placeholder="Контакт (Telegram / телефон) *"
            value={form.contact}
            onChange={(e) =>
              setForm({ ...form, contact: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Создать сделку
          </button>

        </form>

      </div>

    </main>
  )
}