'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      document.cookie = "admin=true; path=/"
      router.push("/admin")
    } else {
      alert("Неверный пароль")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-white text-black p-6 rounded-xl w-80">
        <h1 className="text-xl mb-4 font-bold">Админка</h1>

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Войти
        </button>
      </div>
    </div>
  )
}