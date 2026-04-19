export function HowItWorks() {
  const steps = [
    {
      title: "Создание сделки",
      text: "Вы согласовываете условия с другой стороной и фиксируете их заранее"
    },
    {
      title: "Передача средств",
      text: "Покупатель переводит деньги гаранту, а не напрямую продавцу"
    },
    {
      title: "Проверка",
      text: "Покупатель получает товар или услугу и подтверждает выполнение условий"
    },
    {
      title: "Завершение",
      text: "Гарант переводит деньги продавцу только после успешной проверки"
    }
  ]

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Как проходит сделка
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-left"
            >
              <div className="text-green-400 font-bold text-xl mb-2">
                {index + 1}
              </div>

              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}