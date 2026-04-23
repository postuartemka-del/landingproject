'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const PASSWORD = "12345" // 🔐 поменяй на свой

export default function AdminPage() {
  const router = useRouter()

  const [isAuth, setIsAuth] = useState(false)
  const [input, setInput] = useState("")
  const [reviews, setReviews] = useState<any[]>([])

  // 🔐 проверка авторизации
  useEffect(() => {
    const auth = localStorage.getItem("admin_auth")
    if (auth === "true") {
      setIsAuth(true)

      const saved = localStorage.getItem("reviews")
      if (saved) {
        setReviews(JSON.parse(saved))
      }
    }
  }, [])

  const login = () => {
    if (input === PASSWORD) {
      localStorage.setItem("admin_auth", "true")
      setIsAuth(true)
    } else {
      alert("Неверный пароль")
    }
  }

  const logout = () => {
    localStorage.removeItem("admin_auth")
    router.push("/")
  }

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

  // 🔐 ЕСЛИ НЕ ЗАЛОГИНЕН — ФОРМА ВХОДА
  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="p-6 bg-gray-100 rounded-xl text-black w-full max-w-sm">

          <h1 className="text-xl font-bold mb-4 text-center">
            Вход в админку
          </h1>

          <input
            type="password"
            placeholder="Введите пароль"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          />

          <button
            onClick={login}
            className="w-full bg-black text-white p-2 rounded"
          >
            Войти
          </button>

        </div>
      </div>
    )
  }

  // 🔥 САМА АДМИНКА
  return (
    <div className="min-h-screen bg-white text-black p-10">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Админка отзывов</h1>

        <button
          onClick={logout}
          className="text-sm text-red-500"
        >
          Выйти
        </button>
      </div>

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