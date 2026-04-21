'use client'

import { useState } from "react"
import CreateDealForm from "@/components/CreateDealForm"

export default function Page() {
  return <CreateDealForm />
}

export default function CreateDealPage() {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !amount || !contact) {
      alert("Заполни обязательные поля")
      return
    }

    const deal = {
      id: Date.now(),
      title,
      amount,
      description,
      contact,
    }

    const existing = localStorage.getItem("deals")
    const deals = existing ? JSON.parse(existing) : []

    localStorage.setItem("deals", JSON.stringify([deal, ...deals]))

    setSuccess(true)

    setTitle("")
    setAmount("")
    setDescription("")
    setContact("")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-full max-w-md space-y-4 shadow"
      >

        <h1 className="text-xl font-bold">Создать сделку</h1>

        {success && (
          <div className="text-green-600 text-sm">
            Сделка создана
          </div>
        )}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название"
          className="w-full border p-2 rounded"
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Сумма"
          className="w-full border p-2 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
          className="w-full border p-2 rounded"
        />

        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Контакт"
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Создать
        </button>

      </form>

    </main>
  )
}