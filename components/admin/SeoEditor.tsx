'use client'

import { useState } from 'react'
import { SeoData } from '@/lib/data'

export function SeoEditor({
  data,
  onSave,
}: {
  data: SeoData
  onSave: (data: SeoData) => void
}) {
  const [form, setForm] = useState(data)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">SEO настройки</h1>
        <p className="text-gray-400 text-sm">Управление мета-тегами страницы</p>
      </div>

      <div className="glass rounded-2xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            placeholder="Title страницы"
          />
          <p className="text-xs text-gray-500 mt-1">{form.title.length}/60</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
            placeholder="Description страницы"
          />
          <p className="text-xs text-gray-500 mt-1">{form.description.length}/160</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Keywords
          </label>
          <input
            type="text"
            value={form.keywords}
            onChange={(e) => setForm({ ...form, keywords: e.target.value })}
            className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            placeholder="Ключевые слова через запятую"
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