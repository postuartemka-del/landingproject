"use client"

interface HeroProps {
  title: string
  subtitle: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  const handleScroll = () => {
    const el = document.getElementById("create")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* ТЕКСТ */}
        <div>
          <p className="text-sm text-gray-500 mb-4">
            Техподдержка @support
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            {subtitle}
          </p>

          <button
            onClick={handleScroll}
            className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
          >
            Оформить сделку
          </button>

          <p className="text-sm text-gray-400 mt-3">
            🔒 Ваши данные под защитой
          </p>
        </div>

        {/* КАРТИНКА */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="secure deal"
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </section>
  )
}