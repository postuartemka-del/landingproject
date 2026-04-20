'use client'
import { FooterData } from '@/lib/types'
import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

type FooterData = {
    text?: string
}

export function FooterEditor({
  data,
  onSave,
}: {
  data: FooterData
  onSave: (data: FooterData) => void
}) {
  const [form, setForm] = useState(data)

  const addSocialLink = () => {
    setForm({
      ...form,
      socialLinks: [...form.socialLinks, { name: '', url: '' }],
    })
  }

  const removeSocialLink = (index: number) => {
    setForm({
      ...form,
      socialLinks: form.socialLinks.filter((_, i) => i !== index),
    })
  }

  const updateSocialLink = (index: number, field: 'name' | 'url', value: string) => {
    const links = [...form.socialLinks]
    links[index] = { ...links[index], [field]: value }
    setForm({ ...form, socialLinks: links })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Настройки Footer</h1>
        <p className="text-gray-400 text-sm">Редактирование подвала сайта</p>
      </div>

      <div className="glass rounded-2xl p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Название компании
            </label>
            <input
              type="text"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Описание
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Телефон
            </label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Copyright
            </label>
            <input
              type="text"
              value={form.copyright}
              onChange={(e) => setForm({ ...form, copyright: e.target.value })}
              className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
        </div>

        {/* Social links */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-300">
              Социальные ссылки
            </label>
            <button
              type="button"
              onClick={addSocialLink}
              className="flex items-center gap-1 text-xs text-accent-light hover:text-accent transition-colors"
            >
              <Plus className="w-3 h-3" />
              Добавить
            </button>
          </div>
          <div className="space-y-2">
            {form.socialLinks.map((link, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) => updateSocialLink(i, 'name', e.target.value)}
                  placeholder="Название"
                  className="flex-1 bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
                />
                <input
                  type="text"
                  value={link.url}
                  onChange={(e) => updateSocialLink(i, 'url', e.target.value)}
                  placeholder="URL"
                  className="flex-[2] bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
                />
                <button
                  onClick={() => removeSocialLink(i)}
                  className="p-2 text-gray-500 hover:text-neon-pink rounded-lg hover:bg-neon-pink/10 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
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