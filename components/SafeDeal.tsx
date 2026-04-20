export default function SafeDeal() {
  return (
    <section className="bg-[#F5F7FA] pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10">

          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Безопасная сделка с нами
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                🛡️
              </div>
              <p className="text-sm text-gray-600">
                Гарантируем прозрачность сделки и безопасность средств — ваши данные под защитой
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                👍
              </div>
              <p className="text-sm text-gray-600">
                Храним оплату до выполнения условий. После подтверждения — перевод исполнителю
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                💰
              </div>
              <p className="text-sm text-gray-600">
                Вернем деньги, если условия не выполнены
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}