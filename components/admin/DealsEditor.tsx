'use client'

import { useState } from 'react'
import { Plus, Trash2, ExternalLink } from 'lucide-react'

type Deal = {
  id: string
  title: string
  amount: string
  status: 'active' | 'pending' | 'completed'
  date: string
}

export function DealsEditor({
  deals,
  onSave,
  onDelete,
}: {
  deals: Deal[]
  onSave: (deal: Omit<Deal, 'id'>) => void
  onDelete: (id: string) => void
}) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    status: 'active' as Deal['status'],
    date: new Date().toISOString().split('T')[0],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title || !form.amount) return
    onSave(form)
    setForm({ title: '', amount: '', status: 'active', date: new Date().toISOString().split('T')[0] })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Управление сделками</h1>
        <p className="text-gray-400 text-sm">Добавление и удаление сделок</p>
      </div>

      {/* Add form */}
      <div className="glass rounded-2xl p-8">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Plus className="w-4 h-4 text-accent-light" />
          Добавить сделку
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Название"
            className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
          />
          <input
            type="text"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            placeholder="Сумма ($10,000)"
            className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as Deal['status'] })}
            className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
          >
            <option value="active">Активна</option>
            <option value="completed">Завершена</option>
            <option value="pending">Ожидание</option>
          </select>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
          />
          <div className="sm:col-span-2 lg:col-span-4 flex justify-end">
            <button type="submit" className="btn-primary text-sm px-6 py-3">
              Добавить
            </button>
          </div>
        </form>
      </div>

      {/* Deals list */}
      <div className="space-y-3">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="glass rounded-xl p-4 flex items-center justify-between group hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-card flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <div className="font-medium text-sm">{deal.title}</div>
                <div className="text-xs text-gray-500">{deal.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold gradient-text">{deal.amount}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  deal.status === 'completed'
                    ? 'bg-accent/10 text-accent-light'
                    : deal.status === 'active'
                    ? 'bg-neon-green/10 text-neon-green'
                    : 'bg-yellow-400/10 text-yellow-400'
                }`}
              >
                {deal.status}
              </span>
              <button
                onClick={() => onDelete(deal.id)}
                className="p-2 text-gray-500 hover:text-neon-pink rounded-lg hover:bg-neon-pink/10 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}