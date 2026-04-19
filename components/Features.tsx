export function Features() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Почему выбирают нас
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              1% комиссия
            </h3>
            <p className="text-gray-400">
              Вы платите меньше, чем на любых площадках
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              100% защита сделки
            </h3>
            <p className="text-gray-400">
              Гарант контролирует каждый этап
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Фиксация условий
            </h3>
            <p className="text-gray-400">
              Никаких изменений после старта сделки
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}