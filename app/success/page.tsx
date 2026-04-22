'use client'

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl text-center shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2 text-black">
          Сделка создана
        </h1>

        <p className="text-gray-600 mb-6">
          Мы свяжемся с вами в ближайшее время
        </p>

        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition"
        >
          Вернуться на главную
        </a>
      </div>
    </main>
  )
}