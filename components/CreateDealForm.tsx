'use client'

import { useState } from "react"

export default function CreateDealForm() {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4 shadow">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}  // 👈 ОБЯЗАТЕЛЬНО
          placeholder="Название"
          className="w-full border p-2 rounded text-black"
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // 👈 ОБЯЗАТЕЛЬНО
          placeholder="Сумма"
          className="w-full border p-2 rounded text-black"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} // 👈 ОБЯЗАТЕЛЬНО
          placeholder="Описание"
          className="w-full border p-2 rounded text-black"
        />

        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)} // 👈 ОБЯЗАТЕЛЬНО
          placeholder="Контакт"
          className="w-full border p-2 rounded text-black"
        />

      </div>
    </div>
  )
}