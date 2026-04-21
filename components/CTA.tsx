'use client'

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-white text-center px-4">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900">
          Готовы провести безопасную сделку?
        </h2>

        <p className="mt-3 text-gray-600">
          Создайте сделку и защитите свои деньги уже сейчас
        </p>

        <div className="mt-6">
          <button
            onClick={() => alert("Открыть форму")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Создать сделку
          </button>
        </div>

      </div>
    </section>
  )
}