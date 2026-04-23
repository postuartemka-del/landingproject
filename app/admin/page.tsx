'use client'

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [reviews, setReviews] = useState<any[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("reviews")
    if (saved) {
      setReviews(JSON.parse(saved))
    }
  }, [])

  const save = (data: any[]) => {
    setReviews(data)
    localStorage.setItem("reviews", JSON.stringify(data))
  }

  const removeReview = (index: number) => {
    const updated = reviews.filter((_, i) => i !== index)
    save(updated)
  }

  const updateReview = (index: number, field: string, value: any) => {
    const updated = [...reviews]
    updated[index][field] = value
    save(updated)
  }

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-2xl font-bold mb-6">Админка отзывов</h1>

      {reviews.length === 0 && (
        <p className="text-gray-500">Нет отзывов</p>
      )}

      {reviews.map((r, i) => (
        <div key={i} className="border p-4 mb-4 rounded-xl">

          <input
            value={r.name}
            onChange={(e) => updateReview(i, "name", e.target.value)}
            className="border p-2 w-full mb-2"
            placeholder="Имя"
          />

          <textarea
            value={r.text}
            onChange={(e) => updateReview(i, "text", e.target.value)}
            className="border p-2 w-full mb-2"
            placeholder="Текст"
          />

          <div className="flex justify-between items-center">

            <div className="flex gap-1">
              {[1,2,3,4,5].map((n) => (
                <span
                  key={n}
                  onClick={() => updateReview(i, "rating", n)}
                  className={
                    n <= r.rating
                      ? "text-yellow-400 cursor-pointer text-xl"
                      : "text-gray-300 cursor-pointer text-xl"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            <button
              onClick={() => removeReview(i)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Удалить
            </button>

          </div>

        </div>
      ))}

    </div>
  )
}