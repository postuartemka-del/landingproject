'use client'

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [reviews, setReviews] = useState<any[]>([])
  const [deals, setDeals] = useState<any[]>([])
  const [seo, setSeo] = useState({
    title: "",
    description: "",
  })

  // загрузка данных
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews") || "[]")
    const savedDeals = JSON.parse(localStorage.getItem("deals") || "[]")
    const savedSeo = JSON.parse(localStorage.getItem("seo") || "{}")

    setReviews(savedReviews)
    setDeals(savedDeals)
    setSeo(savedSeo)
  }, [])

  // сохранить SEO
  const saveSeo = () => {
    localStorage.setItem("seo", JSON.stringify(seo))
    alert("SEO сохранено")
  }

  // удалить отзыв
  const deleteReview = (index: number) => {
    const updated = reviews.filter((_, i) => i !== index)
    setReviews(updated)
    localStorage.setItem("reviews", JSON.stringify(updated))
  }

  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">Админка</h1>

      {/* SEO */}
      <div className="mb-10">
        <h2 className="font-semibold mb-2">SEO</h2>

        <input
          placeholder="Title"
          value={seo.title}
          onChange={(e) => setSeo({ ...seo, title: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Description"
          value={seo.description}
          onChange={(e) => setSeo({ ...seo, description: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={saveSeo}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Сохранить SEO
        </button>
      </div>

      {/* Отзывы */}
      <div>
        <h2 className="font-semibold mb-4">Отзывы</h2>

        {reviews.map((r, i) => (
          <div key={i} className="border p-3 mb-2 rounded">
            <p className="font-bold">{r.name}</p>
            <p>{r.text}</p>

            <button
              onClick={() => deleteReview(i)}
              className="text-red-500 mt-2"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}