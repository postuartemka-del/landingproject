export default function CTA() {
  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4">

        <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-yellow-100 shadow-sm overflow-hidden">

          {/* ТЕКСТ */}
          <div className="max-w-md z-10 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              До первой сделки
            </h2>

            <p className="text-green-600 font-semibold mt-1">
              один клик!
            </p>

            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition">
              Оформить сделку
            </button>

            <p className="text-sm text-gray-400 mt-3">
              🔒 Ваши данные под защитой
            </p>
          </div>

          {/* ФОН ПЯТНО (как в примере) */}
          <div className="absolute right-0 top-0 w-[320px] h-[320px] bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

          {/* КАРТИНКА */}
          <div className="absolute right-6 -bottom-24 hidden md:block">
            <img
              src="/cta.png"
              alt="cta"
              className="w-[280px] lg:w-[340px] xl:w-[400px] object-contain drop-shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  )
}