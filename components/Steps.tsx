"use client"

import { useEffect, useState } from "react"

export default function Steps() {
  const steps = [
    "Создайте сделку и укажите условия сотрудничества",
    "Вторая сторона подтверждает участие в сделке",
    "Покупатель переводит деньги гаранту",
    "Исполнитель выполняет работу или передаёт товар",
    "После проверки средства переводятся исполнителю",
  ]

  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i])
      }, i * 200)
    })
  }, [])

  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold mb-10 text-gray-900">
              Как это работает?
            </h2>

            <div className="relative">

              {/* VERTICAL LINE */}
              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200" />

              <div className="space-y-8">
                {steps.map((text, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 items-start transition-all duration-500 ${
                      visible.includes(i)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {/* NUMBER + DOT */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0B0F19] text-white text-sm font-semibold shadow-md">
                        {i + 1}
                      </div>
                    </div>

                    {/* TEXT */}
                    <p className="text-gray-600 hover:text-gray-900 transition cursor-default">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/steps.png"
              alt="Как работает сервис"
              className="w-full max-w-md hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  )
}