export function Hero({ data }: any) {
  return (
    <section className="relative overflow-hidden py-32">

      {/* фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] top-0 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">

        {/* бейдж */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-green-500/30 text-green-400 text-sm">
          Безопасные сделки с гарантией
        </div>

        {/* заголовок */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Безопасные сделки с гарантией<br />
          всего за <span className="text-green-400">1%</span>
        </h1>

        {/* подзаголовок */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Вы не рискуете деньгами. Гарант контролирует сделку от начала до конца.
          Все условия фиксируются заранее и не могут быть изменены.
        </p>

        {/* кнопки */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl transition">
            Начать безопасную сделку
          </button>

          <button className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-xl transition">
            Как это работает
          </button>
        </div>

        {/* триггер доверия */}
        <div className="mt-6 text-sm text-gray-500">
          Уже проведено более <span className="text-green-400">1 000+</span> безопасных сделок
        </div>

        {/* преимущества */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="font-semibold mb-2">1% комиссия</h3>
            <p className="text-gray-400 text-sm">
              Значительно дешевле любых площадок
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="font-semibold mb-2">100% защита</h3>
            <p className="text-gray-400 text-sm">
              Гарант обеспечивает безопасность сделки
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="font-semibold mb-2">Фиксация условий</h3>
            <p className="text-gray-400 text-sm">
              Всё фиксируется заранее и не меняется
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}