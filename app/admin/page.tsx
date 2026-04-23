'use client'

import { useState, useEffect } from "react"

export default function AdminPage() {
  const [seo, setSeo] = useState({ title: "", description: "" })
  const [footerText, setFooterText] = useState("")
  const [reviews, setReviews] = useState<any[]>([])
  const [deals, setDeals] = useState<any[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("admin")
    if (saved) {
      const data = JSON.parse(saved)
      setSeo(data.seo || {})
      setFooterText(data.footerText || "")
      setReviews(data.reviews || [])
      setDeals(data.deals || [])
    }
  }, [])

  const save = () => {
    localStorage.setItem(
      "admin",
      JSON.stringify({ seo, footerText, reviews, deals })
    )
    alert("Сохранено")
  }

  return (
    <div className="p-10 text-black bg-white min-h-screen space-y-6">

      <h1 className="text-2xl font-bold">Админка</h1>

      {/* SEO */}
      <div>
        <h2 className="font-semibold">SEO</h2>
        <input
          placeholder="Title"
          value={seo.title}
          onChange={(e) => setSeo({ ...seo, title: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          placeholder="Description"
          value={seo.description}
          onChange={(e) => setSeo({ ...seo, description: e.target.value })}
          className="border p-2 w-full mt-2"
        />
      </div>

      {/* FOOTER */}
      <div>
        <h2 className="font-semibold">Текст внизу</h2>
        <textarea
          value={footerText}
          onChange={(e) => setFooterText(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      {/* ОТЗЫВЫ */}
      <div>
        <h2 className="font-semibold">Отзывы</h2>

        <button
          onClick={() =>
            setReviews([...reviews, { name: "", text: "", rating: 5 }])
          }
          className="bg-green-500 text-white px-3 py-1 rounded mb-2"
        >
          + Добавить отзыв
        </button>

        {reviews.map((r, i) => (
          <div key={i} className="border p-3 mb-2">
            <input
              placeholder="Имя"
              value={r.name}
              onChange={(e) => {
                const copy = [...reviews]
                copy[i].name = e.target.value
                setReviews(copy)
              }}
              className="border p-1 w-full"
            />
            <textarea
              placeholder="Текст"
              value={r.text}
              onChange={(e) => {
                const copy = [...reviews]
                copy[i].text = e.target.value
                setReviews(copy)
              }}
              className="border p-1 w-full mt-1"
            />
          </div>
        ))}
      </div>

      {/* СДЕЛКИ */}
      <div>
        <h2 className="font-semibold">Сделки</h2>

        <button
          onClick={() =>
            setDeals([...deals, { title: "", price: "" }])
          }
          className="bg-blue-500 text-white px-3 py-1 rounded mb-2"
        >
          + Добавить сделку
        </button>

        {deals.map((d, i) => (
          <div key={i} className="border p-3 mb-2">
            <input
              placeholder="Название"
              value={d.title}
              onChange={(e) => {
                const copy = [...deals]
                copy[i].title = e.target.value
                setDeals(copy)
              }}
              className="border p-1 w-full"
            />
            <input
              placeholder="Цена"
              value={d.price}
              onChange={(e) => {
                const copy = [...deals]
                copy[i].price = e.target.value
                setDeals(copy)
              }}
              className="border p-1 w-full mt-1"
            />
          </div>
        ))}
      </div>

      <button
        onClick={save}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Сохранить
      </button>

    </div>
  )
}