export function Deals({ deals }: { deals?: any[] }) {
  const safeDeals = deals || []

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Сделки в работе</h2>

        {safeDeals.length === 0 ? (
          <div className="text-gray-400">Нет активных сделок</div>
        ) : (
          <div className="space-y-4">
            {safeDeals.map((deal) => (
              <div
                key={deal.id}
                className="p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                {deal.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}