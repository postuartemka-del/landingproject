'use client'

import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()

  const logout = () => {
    document.cookie = "admin=; Max-Age=0; path=/"
    router.push("/")
  }

  return (
    <div className="min-h-screen p-10 bg-white text-black">
      <h1 className="text-2xl font-bold mb-6">Админ панель</h1>

      <div className="space-y-4">
        <button className="block">SEO</button>
        <button className="block">Отзывы</button>
        <button className="block">Сделки</button>
      </div>

      <button
        onClick={logout}
        className="mt-10 bg-red-500 text-white px-4 py-2 rounded"
      >
        Выйти
      </button>
    </div>
  )
}