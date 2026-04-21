'use client'

import { useState } from "react"

export default function CreateDealForm() {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [contact, setContact] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4 shadow">

        <h1 className="text-xl font-bold text-black">
          Создать сделку
        </h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название"
          className="w-full border p-2 rounded text-black"
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Сумма"
          className="w-full border p-2 rounded text-black"
        />

        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Контакт"
          className="w-full border p-2 rounded text-black"
        />

        <button
          onClick={() => alert("Работает")}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Проверить
        </button>

      </div>

    </div>
  )
}