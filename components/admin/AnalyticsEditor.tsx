'use client'

import { useState } from 'react'
import { BarChart3, ExternalLink } from 'lucide-react'

type AnalyticsData = any

export function AnalyticsEditor({
  data,
  onSave,
}: {
  data: AnalyticsData
  onSave: (data: AnalyticsData) => void
}) {
  const [form, setForm] = useState(data)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-accent-light" />
          Аналитика
        </h1>
        <p className="text-gray-400 text-sm">
          Настройка Google Analytics и Яндекс.Метрики
        </p>
      </div>

      <div className="glass rounded-2xl p-8 space-y-6">
        {/* Google Analytics */}
        <div className="p-6 rounded-xl bg-dark-700/50 border border-white/[0.05]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-[#4285F4]" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Google Analytics</h3>
              <p className="text-xs text-gray-500">ID отслеживания</p>
            </div>
          </div>
          <input
            type="text"
            value={form.googleId}
            onChange={(e) => setForm({ ...form, googleId: e.target.value })}
            placeholder="G-XXXXXXXXXX"
            className="w-full bg-dark-900 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4285F4]/50 focus:ring-1 focus:ring-[#4285F4]/20 transition-all"
          />
        </div>

        {/* Yandex Metrika */}
        <div className="p-6 rounded-xl bg-dark-700/50 border border-white/[0.05]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#FFCC00]/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Яндекс.Метрика</h3>
              <p className="text-xs text-gray-500">Номер счётчика</p>
            </div>
          </div>
          <input
            type="text"
            value={form.metrikaId}
            onChange={(e) => setForm({ ...form, metrikaId: e.target.value })}
            placeholder="XXXXXXXX"
            className="w-full bg-dark-900 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFCC00]/50 focus:ring-1 focus:ring-[#FFCC00]/20 transition-all"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button onClick={() => onSave(form)} className="btn-primary">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  )
}