'use client'

import { useState } from 'react'
import { Review } from '@/lib/data'
import { Plus, Trash2, Edit2, Star } from 'lucide-react'

export function ReviewsEditor({
  reviews,
  onSave,
  onDelete,
}: {
  reviews: Review[]
  onSave: (review: Omit<Review, 'id'>) => void
  onDelete: (id: string) => void
}) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    role: '',
    avatar: '👤',
    text: '',
    rating: 5,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.text) return
    onSave(form)
    setForm({ name: '', role: '', avatar: '👤', text: '', rating: 5 })
    setEditingId(null)
  }

  const startEdit = (review: Review) => {
    setEditingId(review.id)
    setForm({
      name: review.name,
      role: review.role,
      avatar: review.avatar,
      text: review.text,
      rating: review.rating,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Управление отзывами</h1>
        <p className="text-gray-400 text-sm">CRUD отзывов</p>
      </div>

      {/* Form */}
      <div className="glass rounded-2xl p-8">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          {editingId ? (
            <Edit2 className="w-4 h-4 text-accent-light" />
          ) : (
            <Plus className="w-4 h-4 text-accent-light" />
          )}
          {editingId ? 'Редактировать отзыв' : 'Добавить отзыв'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Имя"
              className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
            <input
              type="text"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              placeholder="Должность"
              className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
            <input
              type="text"
              value={form.avatar}
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
              placeholder="Эмодзи аватар"
              className="bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <textarea
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            placeholder="Текст отзыва"
            rows={3}
            className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 transition-all resize-none"
          />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Рейтинг:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setForm({ ...form, rating: i })}
                  className="p-1"
                >
                  <Star
                    className={`w-5 h-5 ${
                      i <= form.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 justify-end pt-2">
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setForm({ name: '', role: '', avatar: '👤', text: '', rating: 5 })
                }}
                className="btn-secondary text-sm px-6 py-3"
              >
                Отмена
              </button>
            )}
            <button type="submit" className="btn-primary text-sm px-6 py-3">
              {editingId ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </form>
      </div>

      {/* Reviews list */}
      <div className="space-y-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="glass rounded-xl p-6 group hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center text-2xl">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i <= review.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-2 max-w-lg">
                    {review.text}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(review)}
                  className="p-2 text-gray-500 hover:text-accent-light rounded-lg hover:bg-accent/10 transition-all"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(review.id)}
                  className="p-2 text-gray-500 hover:text-neon-pink rounded-lg hover:bg-neon-pink/10 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}