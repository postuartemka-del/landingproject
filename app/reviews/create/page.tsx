'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateReviewPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 5,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const existing = JSON.parse(localStorage.getItem("reviews") || "[]")

    const newReview = {
      ...form,
      date: new Date().toISOString(),
    }

    localStorage.setItem(
      "reviews",
      JSON.stringify([newReview, ...existing])
    )

    alert("Отзыв отправлен")

    router.push("/")
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-gray-50 p-8 rounded-2xl shadow-md text-black">

        <h1 className="text-2xl font-bold mb-6 text-gray-900">
          Оставить отзыв
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 text-black bg-white placeholder-gray-400"
          />

          <textarea
            placeholder="Ваш отзыв"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 text-black bg-white placeholder-gray-400"
            rows={4}
          />

          <div className="flex gap-1 text-xl">
            {[1,2,3,4,5].map((n) => (
              <span
                key={n}
                onClick={() => setForm({ ...form, rating: n })}
                className={n <= form.rating ? "text-yellow-400 cursor-pointer" : "text-gray-300 cursor-pointer"}
              >
                ★
              </span>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            Отправить отзыв
          </button>

        </form>
      </div>
    </main>
  )
}