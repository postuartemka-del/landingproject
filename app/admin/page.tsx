'use client'

import { useEffect, useState } from "react"
import { getAdminData, saveAdminData } from "@/lib/admin"

export default function AdminPage() {
  const [data, setData] = useState({
    seo: {
      title: "",
      description: "",
      keywords: "",
    },
    favicon: "",
    footerText: "",
  })

  useEffect(() => {
    const saved = getAdminData()
    if (saved) setData(saved)
  }, [])

  const handleSave = () => {
    saveAdminData(data)
    alert("Сохранено")
  }

  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold">Админка</h1>

        {/* SEO */}
        <div>
          <h2 className="font-semibold mb-2">SEO</h2>

          <input
            placeholder="Title"
            value={data.seo.title}
            onChange={(e) =>
              setData({
                ...data,
                seo: { ...data.seo, title: e.target.value },
              })
            }
            className="w-full border p-2 mb-2"
          />

          <input
            placeholder="Description"
            value={data.seo.description}
            onChange={(e) =>
              setData({
                ...data,
                seo: { ...data.seo, description: e.target.value },
              })
            }
            className="w-full border p-2 mb-2"
          />

          <input
            placeholder="Keywords"
            value={data.seo.keywords}
            onChange={(e) =>
              setData({
                ...data,
                seo: { ...data.seo, keywords: e.target.value },
              })
            }
            className="w-full border p-2"
          />
        </div>

        {/* ФАВИКОН */}
        <div>
          <h2 className="font-semibold mb-2">Фавикон</h2>
          <input
            placeholder="URL favicon"
            value={data.favicon}
            onChange={(e) =>
              setData({ ...data, favicon: e.target.value })
            }
            className="w-full border p-2"
          />
        </div>

        {/* ТЕКСТ ВНИЗУ */}
        <div>
          <h2 className="font-semibold mb-2">Описание внизу</h2>
          <textarea
            value={data.footerText}
            onChange={(e) =>
              setData({ ...data, footerText: e.target.value })
            }
            className="w-full border p-2"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Сохранить
        </button>

      </div>
    </main>
  )
}